const router = require('express').Router();
const User = require('../models/User');
const CryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');

// register
router.post('/register', async (req, res) => {
  const { username, email, password, isAdmin } = req.body;
  const newUser = new User({
    username,
    email,
    password: CryptoJs.AES.encrypt(password, process.env.PASS_SEC).toString(),
    isAdmin,
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
    console.log(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json('wrong credentials or user does not exist');
    const hashedPassword = CryptoJs.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const Originalpassword = hashedPassword.toString(CryptoJs.enc.Utf8);
    Originalpassword !== req.body.password &&
      res.status(401).json('wrong password');

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: '3d' }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ others, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
