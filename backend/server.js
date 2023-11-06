const express = require('express');
const dotenv = require('dotenv');
const connectToDb = require('./config/connectToDb.js');
const authRoute = require('./routes/auth.js');
const userRoute = require('./routes/user.js');
const productRoute = require('./routes/product.js');
const cartRoute = require('./routes/cart.js');
const orderRoute = require('./routes/order.js');
const cors = require('cors');

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);

connectToDb();

app.get('/', (req, res) => {
  res.json({ note: 'hello' });
});

app.listen(process.env.PORT || 5000, () => {
  console.log('server connected');
});
