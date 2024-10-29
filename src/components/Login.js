import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import Logo from '../images/logo.png'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Track error messages
  const navigate = useNavigate(); // For navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace this with real authentication logic
      const isAdmin = email === "admin@example.com" && password === "admin123";
      if (isAdmin) {
        console.log("Login Successful");
        navigate("/verification"); // Redirect to Verification page
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("An error occurred during login.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={Logo} alt="Logo" className="Logo" />
        <h1>Login</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
