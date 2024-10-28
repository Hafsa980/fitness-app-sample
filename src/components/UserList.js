import React, { useState } from 'react';
import Sidebar from './Sidebar';
import UserDetailsModal from './UserDetailsModal';
import '../styles/UserList.css';

function UserList() {
  const [users] = useState([
    { id: 1, date: 'July 21, 2023', name: 'John Doe', gender: 'Male', email: 'johndoe@gmail.com', status: 'Active' },
    { id: 2, date: 'Aug 1, 2023', name: 'Jane Doe', gender: 'Female', email: 'janedoe@gmail.com', status: 'Inactive' }
  ]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setModalOpen(false);
  };

  return (
    <div className="user-list-container">
      <Sidebar />
      <div className="user-list-content">
        <h2>User List</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.date}</td>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <td>
                  <button onClick={() => openModal(user)}>View</button>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <UserDetailsModal user={selectedUser} onClose={closeModal} />
      )}
    </div>
  );
}

export default UserList;
