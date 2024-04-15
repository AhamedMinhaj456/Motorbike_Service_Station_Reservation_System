import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './AdminHomePage.css';
import axios from "axios";

const AdminHomePage = () => {

  const navigate = useNavigate();

  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminRole, setAdminRole] = useState("");

  async function saveAdmin(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8095/admin/save", {
        adminName: adminName,
        adminEmail: adminEmail,
        adminPassword: adminPassword,
        adminRole: adminRole,
      });
      alert("Admin Registration Successful");
      navigate('/admin/dashboard'); 
    } catch (err) {
      alert(err);
    }
  }

  async function loginAdmin(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8095/admin/login", {
        adminEmail: adminEmail,
        adminPassword: adminPassword,
      });
      alert("Admin Login Successful");
      navigate('/admin/dashboard'); 
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="admin-home-page">
      <div className="background-image"></div>
      <div className="content">
        <h1 className="admin-title">Admin Portal</h1>
        <div className="forms-container">
          <form className="login-form" onSubmit={loginAdmin}>
            <h2>Login</h2>
            <label>Email:</label>
            <input
              type="text"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
            />
            
            <label>Password:</label>
            <input
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
            />
            <button type="submit" className="home-button">Login</button>
          </form>

          <form className="signup-form" onSubmit={saveAdmin}>
            <h2>Sign Up</h2>
            <label>Admin Name:</label>
            <input
              type="text"
              value={adminName}
              onChange={(e) => setAdminName(e.target.value)}
            />
            <label>Email:</label>
            <input
              type="email"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
            />
           <label>Password:</label>
            <input
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
            />
             <label>Admin Role</label>
            <input
              type="text"
              value={adminRole}
              onChange={(e) => setAdminRole(e.target.value)}
            />
            <button type="submit" className="home-button">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
