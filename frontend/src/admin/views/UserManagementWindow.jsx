import React, { useState, useEffect } from 'react';
import './UserManagementWindow.css';
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';
import axios from 'axios'; // Import axios for making HTTP requests

const UserManagementWindow = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'user1', signupDate: '2024-02-25' },
    { id: 2, username: 'user2', signupDate: '2024-02-26' },
    { id: 3, username: 'user3', signupDate: '2024-02-27' },
    { id: 4, username: 'user4', signupDate: '2024-02-28' },
    { id: 5, username: 'user5', signupDate: '2024-02-29' },
  ]);

  useEffect(() => {
    // Backend developer: Fetch user data from the backend and update state
    // Example:
    // fetchData();
  }, []);

  // Backend connection: Function to fetch user data from the backend
  // const fetchData = async () => {
  //   try {
  //     // Example using axios:
  //     // const response = await axios.get('http://localhost:8095/users');
  //     // setUsers(response.data);
  //   } catch (error) {
  //     console.error('Error fetching users:', error);
  //   }
  // };

  return (
    <div className="user-management">
      <LeftSidebar />

      <div className="user-management-content">
        <h2 username="user-management-heading" >User Management</h2>

        {users.length === 0 ? (
          <p className='user-management-no-users'>No users found.</p>
        ) : (
          <div className="user-list">
            {users.map((user) => (
              <div key={user.id} className="user-item">
                <p>
                  <strong>Username:</strong> {user.username}
                </p>
                <p>
                  <strong>SignUp Date:</strong> {user.signupDate}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <RightSidebar />
    </div>
  );
};

export default UserManagementWindow;
