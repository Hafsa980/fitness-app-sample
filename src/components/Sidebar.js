import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>ANDREW'S</h2>
      </div>
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/workouts">Workouts</Link></li>
        </ul>
      </nav>
      <button className="logout-btn">Go Live</button>
    </div>
  );
}

export default Sidebar;
