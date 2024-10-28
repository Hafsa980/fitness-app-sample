import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../styles/Settings.css';

function Settings() {
  const [userInfo, setUserInfo] = useState({
    fullname: "Jhon Doe",
    phone: "+123 456 7890",
    email: "jhon.doe@example.com"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save user information logic
    console.log("Updated Info:", userInfo);
  };

  return (
    <div className="settings-container">
      <Sidebar />
      <div className="settings-content">
        <h2>Basic Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullname"
              value={userInfo.fullname}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={userInfo.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Settings;
