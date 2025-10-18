import React, { useState } from 'react';
import '../Styles/Login.css';
import loginSide from '../assets/loginSide.png';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!username || !email || !password || !confirmPassword) {
      alert('Please fill out all fields!');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('User Registered:', { username, email, password });
    alert('Account created successfully!');
    navigate('/home');
  };

  return (
    <div className="login-page">
      <div className="container-login">
        <h4>Sign Up</h4>
        <input
          type="text"
          placeholder="Enter Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password..."
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Create Account</button>
        <span>
          Already have an account?{' '}
          <a href="/" className="signup">
            Login
          </a>
        </span>
      </div>

      <div className="right-container">
        <img src={loginSide} alt="Signup Illustration" />
      </div>
    </div>
  );
};

export default Signup;
