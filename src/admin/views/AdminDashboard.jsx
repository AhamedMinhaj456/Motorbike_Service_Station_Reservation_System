import React, { useState } from 'react';
import './AdminDashboard.css';
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';

const AdminDashboard = () => {
  const [selectedOption, setSelectedOption] = useState('default');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="admin-dashboard">
      <LeftSidebar />

      <div className="admin-content">
        <h1>Welcome to Admin Dashboard</h1>
        <div className="dashboard-options">
          <div
            className={`dashboard-option ${selectedOption === 'option1' && 'selected'}`}
            onClick={() => handleOptionClick('option1')}
          >
            Graph 01
          </div>
          <div
            className={`dashboard-option ${selectedOption === 'option2' && 'selected'}`}
            onClick={() => handleOptionClick('option2')}
          >
            Graph 02
          </div>
          <div
            className={`dashboard-option ${selectedOption === 'option3' && 'selected'}`}
            onClick={() => handleOptionClick('option3')}
          >
            Graph 03
          </div>
        </div>

        <div className="dashboard-content">
          {selectedOption === 'option1' && (
            <>
              <h2>Shop Registration History</h2>
              <p>This is where your Option 1 content goes. Customize it to fit your needs.</p>
            </>
          )}
          {selectedOption === 'option2' && (
            <>
              <h2>Customer Registration History</h2>
              <p>This is where your Option 2 content goes. Customize it to fit your needs.</p>
            </>
          )}
          {selectedOption === 'option3' && (
            <>
              <h2>POS History</h2>
              <p>This is where your Option 3 content goes. Customize it to fit your needs.</p>
            </>
          )}
        </div>
      </div>

      <RightSidebar />
    </div>
  );
};

export default AdminDashboard;
