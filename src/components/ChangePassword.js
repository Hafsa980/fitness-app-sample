import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../styles/ChangePassword.css';

function ChangePassword() {
  const [password, setPassword] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.newPassword === password.confirmPassword) {
      console.log('Password updated successfully');
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="settings-container">
      <Sidebar />
      <div className="settings-content">
        <h2>Change your Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              name="newPassword"
              value={password.newPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={password.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
