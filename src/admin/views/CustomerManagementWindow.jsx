import React, { useState, useEffect } from 'react';
import './CustomerManagementWindow.css';
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';

const CustomerManagementWindow = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'customer1', signupDate: '2024-02-25' },
    { id: 2, username: 'customer2', signupDate: '2024-02-26' },
    { id: 3, username: 'customer3', signupDate: '2024-02-27' },
    { id: 4, username: 'customer4', signupDate: '2024-02-28' },
    { id: 5, username: 'customer5', signupDate: '2024-02-29' },
  ]);

  useEffect(() => {
    // Simulating fetching user data (replace with actual API call)
    const fetchData = async () => {
      // Replace the following line with your actual API call or data fetching logic
      // const data = await fetch('https://api.example.com/users').then((response) => response.json());
      // setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <div className="customer-management">
      <LeftSidebar />

      <div className="customer-management-content">
        <h2>Customer Management</h2>

        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <div className="customer-list">
            {users.map((user) => (
              <div key={user.id} className="customer-item">
                <p>
                  <strong>Customername:</strong> {user.username}
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

export default CustomerManagementWindow;
