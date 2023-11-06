import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { login } from '../redux/Actions/userActions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) navigate('/');
  }, [userInfo]);

  const inputHandler = (e) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { username, password } = credentials;
    dispatch(login(username, password));
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
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="juancho@example.com"
              onChange={(e) => inputHandler(e)}
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="*******"
              onChange={(e) => inputHandler(e)}
            />
          </div>
          <button className="primary-color register-button">Login</button>
        </form>
      </div>
      <img
        className="img-login"
        src="https://images.unsplash.com/photo-1522049706244-89c107bbc968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        alt="bg"
      />
    </div>
  );
};

export default Login;
