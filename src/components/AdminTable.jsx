import React, { useState, useEffect } from 'react';
import './AdminTable.css'; // Import custom CSS for styling

const AdminTable = () => {
  const [adminData, setAdminData] = useState([]);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await fetch('http://localhost:8095/admin/getAdmin');
        const data = await response.json();
        setAdminData(data);
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };

    fetchAdminData();
  }, []);

  return (
    <div className="admin-table-container">
      <h2 className="admin-table-header">Admin Table</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {adminData.map((admin, index) => (
            <tr key={admin.adminId} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td>{admin.adminId}</td>
              <td>{admin.adminName}</td>
              <td>{admin.adminEmail}</td>
              {/* <td>{admin.adminPassword}</td> */}
              <td>{admin.adminRole}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
