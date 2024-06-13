import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfileSettings.css';
import { useSelector } from 'react-redux';

function ProfileSettings() {
  const customerId = useSelector((state) => state.customers);

  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState('');
  const [customerUsername, setCustomerUsername] = useState('');
  const [oldPasswordInput, setOldPasswordInput] = useState('');
  const [newCustomerPassword, setNewCustomerPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEditable, setIsEditable] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [oldPasswordCorrect, setOldPasswordCorrect] = useState(true);
  const [customerPassword, setCustomerPassword] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8095/customer/${customerId}`);
      const data = response.data;
      setCustomerName(data.customerName);
      setCustomerEmail(data.customerEmail);
      setCustomerPhoneNumber(data.customerPhoneNumber);
      setCustomerUsername(data.customerUsername);
      setCustomerPassword(data.customerPassword);
    } catch (error) {
      console.error('Error fetching customer data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [customerId]);

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleSaveClick = () => {
    if (oldPasswordInput !== customerPassword) {
      setOldPasswordCorrect(false);
      return;
    }
    setOldPasswordCorrect(true);
    
    if (newCustomerPassword !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }
    setPasswordMatch(true);
    setIsEditable(false);

    // Add logic to save data here, for example:
    axios.post(`http://localhost:8095/customer/update/{customerId}`, {
      customerName,
      customerEmail,
      customerPhoneNumber,
      customerUsername,
      newCustomerPassword,
    });
  };

  return (
    <div className="profile-settings-container">
      <div className="profile-picture-settings">
        <img src="" alt="Profile" />
        <button>Upload</button>
      </div>
      <div className="personal-details-settings">
        <label>Full Name</label>
        <input 
          type="text" 
          value={customerName} 
          onChange={(e) => setCustomerName(e.target.value)} 
          disabled={!isEditable}
        />
        <label>Email</label>
        <input 
          type="email" 
          value={customerEmail} 
          onChange={(e) => setCustomerEmail(e.target.value)} 
          disabled={!isEditable}
        />
        <label>Phone Number</label>
        <input 
          type="text" 
          value={customerPhoneNumber} 
          onChange={(e) => setCustomerPhoneNumber(e.target.value)} 
          disabled={!isEditable}
        />
        <label>Username</label>
        <input 
          type="text" 
          value={customerUsername} 
          onChange={(e) => setCustomerUsername(e.target.value)} 
          disabled={!isEditable}
        />
        <button onClick={handleEditClick}>Edit</button>
      </div>
      <div className="security-settings">
        <label>Old Password</label>
        <input 
          type="password" 
          value={oldPasswordInput} 
          onChange={(e) => setOldPasswordInput(e.target.value)} 
          disabled={!isEditable}
        />
        {!oldPasswordCorrect && <p style={{ color: 'red' }}>Your old password is wrong</p>}
        <label>New Password</label>
        <input 
          type="password" 
          value={newCustomerPassword} 
          onChange={(e) => setNewCustomerPassword(e.target.value)} 
          disabled={!isEditable}
        />
        <label>Confirm New Password</label>
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          disabled={!isEditable}
        />
        {!passwordMatch && <p style={{ color: 'red' }}>Passwords do not match</p>}
        <button onClick={handleSaveClick}>Change Password</button>
        <button>Delete Account</button>
      </div>
      <button className="profile-settings-save" onClick={handleSaveClick}>Save</button>
    </div>
  );
}

export default ProfileSettings;
