import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Verification from './components/Verification';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import ChangePassword from './components/ChangePassword';
import AddWorkout from './components/AddWorkout';
import UserList from './components/UserList';
import Workouts from './components/Workouts';
import UserDetailsModal from './components/UserDetailsModal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/add-workout" element={<AddWorkout />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/subscriptions" element={<UserDetailsModal />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </Router>
  );
}

export default App;
