import React from 'react';
import Sidebar from './Sidebar';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <div className="welcome-box">
          <h2>Welcome, JHON</h2>
          <div className="plans">
            <div className="plan basic">Basic Gym Plan</div>
            <div className="plan standard">Standard Gym Plan</div>
            <div className="plan premium">Premium Gym Plan</div>
          </div>
        </div>
        <div className="stats-box">
          <h3>Today's Subscriptions</h3>
          <div className="stats">
            <div className="stat">24,000</div>
            <div className="chart">233 Active Subscriptions</div>
          </div>
        </div>
        {/* <div className="workouts-box">
          <h3>Most Viewed Workouts</h3>
          <div className="workouts">
            {// Add workout images and titles }
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
