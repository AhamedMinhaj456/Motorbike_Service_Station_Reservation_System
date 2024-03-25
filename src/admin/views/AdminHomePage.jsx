import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AdminHomePage.css';
import axios from "axios";

const AdminHomePage = () => {

  const navigate = useNavigate(); // Initialize useNavigate

   //const [loginData, setLoginData] = useState({ });
  // const [signupData, setSignupData] = useState({ email: '', password: '' });
  const [adminName, setAdminName] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

 
  // Use the following code to handle form submissions 

  async function saveAdmin(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8095/admin/save", {
      adminName: adminName,
      adminPassword: adminPassword,
      });
      alert("Admin Registation Successfully");
      navigate('/admin/dashboard');
    } catch (err) {
      alert(err);
    }
  }

  async function loginAdmin(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8095/admin/login", {
      adminName: adminName,
      adminPassword: adminPassword,
      });
      alert("Admin Login Successfully");
      navigate('/admin/dashboard');
    } catch (err) {
      alert(err);
    }
  }

  // const handleSignupSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your signup logic here
  //   console.log('Signup submitted:', signupData);
  // };



  // const handleLoginSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your login logic here
  //   console.log('Login submitted:', loginData);

    // Assuming successful login, navigate to the admin dashboard
     
  // };

 

  return (
    <div className="admin-home-page">
      <div className="background-image"></div>
      <div className="content">
        <h1 className="admin-title">Admin Portal</h1>
        
        <div className="forms-container">
          <form className="login-form" >
          
            <h2>Login</h2>
            <label>Email:</label>
            <input
              type="text"
              value={adminName}
              onChange={(e) => setAdminName(e.target.value)}
            />
            <label>Password:</label>
            <input
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
            />
            <button type="submit" onClick={loginAdmin}>Login</button>
          </form>

          <form className="signup-form" >
            <h2>Sign Up</h2>
            <label>Admin Name:</label>
            <input
              // type="email"
              // value={signupData.email}
              // onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
            
            type="text"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
            />

            <label>Password:</label>
            <input
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
            />
            <button type="submit" onClick={saveAdmin}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
