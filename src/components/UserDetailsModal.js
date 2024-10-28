import React from 'react';
import '../styles/UserDetailsModal.css';

function UserDetailsModal({ user, onClose }) {
  if (!user) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">X</button>
        <h2>User ID #{user.id}</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Gender: {user.gender}</p>
        <p>Status: {user.status}</p>
        <p>Subscription Date: {user.date}</p>
        <button onClick={onClose} className="delete-button">Delete</button>
      </div>
    </div>
  );
}

export default UserDetailsModal;
