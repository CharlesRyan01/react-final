import React, { useState } from 'react';
import './login.css'; // Import your CSS file for styling
import { login } from './auth'; // Assuming you have an auth.js file exporting a login function
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(username, password); // Call your login function from auth.js
      if (data && data.access_token) {
        setToken(data.access_token); // Assuming 'access_token' is the token key from your backend
        localStorage.setItem('token', data.access_token); // Store token in localStorage
        navigate('/event'); // Redirect to '/event' after successful login
      } else {
        setError('Invalid credentials'); // Set error state for display
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed'); // Set error state for display
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
