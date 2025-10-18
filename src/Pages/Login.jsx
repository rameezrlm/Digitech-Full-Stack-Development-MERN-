import React, { useState } from 'react';
import '../Styles/Login.css';
import loginSide from '../assets/loginSide.png';
import { admins } from "../data/data";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validateUser = () => {
    const user = admins.find(
      (item) => item.username.toLowerCase() === username.toLowerCase()
    );
    if (user && user.password === password) {
      return true;
    }
    return false;
  };

  const handleLogin = () => {
    if (validateUser()) {
      alert('Login successful!');
      navigate('');
    } else {
      alert('Invalid username or password!');
    }
  };

  return (
    <div className="login-page">
      <div className="container-login">
        <h4>Login</h4>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Enter Username..."
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter Password..."
        />
        <a href="#">Forgot Password?</a>
        <button onClick={handleLogin}>Login</button>
        <span>
          Don't have an account?{' '}
          <a href="#" className="signup">
            Sign Up
          </a>
        </span>
      </div>

      <div className="right-container">
        <img src={loginSide} alt="Login Illustration" />
      </div>
    </div>
  );
};

export default Login;
