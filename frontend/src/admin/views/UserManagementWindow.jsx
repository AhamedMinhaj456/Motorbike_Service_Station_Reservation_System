import React, { useState, useEffect } from 'react';
import './UserManagementWindow.css';
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';
import axios from 'axios'; // Import axios for making HTTP requests

const UserManagementWindow = () => {
  const [customers, setCustomers] = useState([
    { customerId: 1, customerName: 'user1', customerUsername: '2024-02-25' },
    { customerId: 2, customerName: 'user2', customerUsername: '2024-02-26' },
    { customerId: 3, customerName: 'user3', customerUsername: '2024-02-27' },
    { customerId: 4, customerName: 'user4', customerUsername: '2024-02-28' },
    { customerId: 5, customerName: 'user5', customerUsername: '2024-02-29' },
  ]);

  useEffect(() => {
    // Backend developer: Fetch user data from the backend and update state
    // Example:
    fetchData();
  }, []);

  // Backend connection: Function to fetch user data from the backend
  const fetchData = async () => {
    try {
      // Example using axios:
      const response = await axios.get('http://localhost:8095/customer/getCustomer');
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className="user-management">
      <LeftSidebar />

      <div className="user-management-content">
        <h2 className="user-management-heading">User Management</h2>

        {customers.length === 0 ? (
          <p className='user-management-no-users'>No users found.</p>
        ) : (
          <div className="user-list">
            {customers.map((customer) => (
              <div key={customer.customerId} className="user-item">
                <p>
                  <strong>Customer Name:</strong> {customer.customerName}
                </p>
                <p>
                  <strong>Customer Username:</strong> {customer.customerUsername}
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
