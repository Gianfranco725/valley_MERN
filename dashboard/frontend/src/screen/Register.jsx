import '../App.css';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { login } from '../redux/Actions/userActions';

const Register = () => {
  const [credentials, setCredentials] = useState({});

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      <Navigate to="/" />;
    }
  }, [userInfo]);

  const inputHandler = (e) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password } = credentials;
    dispatch(login(email, password));
  };

  return (
    <div className="register">
      <div className="register-info">
        <form
          className="register-form"
          autoComplete="off"
          onSubmit={submitHandler}
        >
          <div className="form-inputs">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="juancho@example.com"
              onChange={(e) => inputHandler(e)}
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="Password">Password</label>
            <input
              type="text"
              id="password"
              placeholder="*******"
              onChange={(e) => inputHandler(e)}
            />
          </div>
          <button className="primary-color register-button">Register</button>
        </form>
        <Link to="/login">Do you already have an account?</Link>
      </div>
      <div className="register-img">imagen</div>
    </div>
  );
};

export default Register;
