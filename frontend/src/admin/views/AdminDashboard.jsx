import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';
import { Bar } from 'react-chartjs-2'; 
import 'chart.js/auto'; 
import { FaBars } from 'react-icons/fa';

const AdminDashboard = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [graphData, setGraphData] = useState(null); 
  const [sidebarOpen, setSidebarOpen] = useState(false); 

  useEffect(() => {
    setSelectedOption('option1');
    fetchData('option1');
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    fetchData(option);
  };

  const fetchData = async (option) => {
    try {
      const response = await fetch(`/api/${option}`);
      const data = await response.json();
      setGraphData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); 
  };

  const defaultGraphData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sample Data',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  return (
    <div className="admin-dashboard">
      <div className="hamburger-icon" onClick={toggleSidebar}>
        <FaBars />
      </div>

      <div className={`left-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <h1>error</h1>
        <LeftSidebar />
      </div>

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
              <Bar data={graphData || defaultGraphData} />
              <p>{graphData ? 'This graph displays the shop registration history.' : 'Loading shop registration history...'}</p>
            </>
          )}
          {selectedOption === 'option2' && (
            <>
              <h2>Customer Registration History</h2>
              <Bar data={graphData || defaultGraphData} />
              <p>{graphData ? 'This graph displays the customer registration history.' : 'Loading customer registration history...'}</p>
            </>
          )}
          {selectedOption === 'option3' && (
            <>
              <h2>POS History</h2>
              <Bar data={graphData || defaultGraphData} />
              <p>{graphData ? 'This graph displays the point of sale (POS) history.' : 'Loading point of sale (POS) history...'}</p>
            </>
          )}
        </div>
      </div>

      <RightSidebar />
    </div>
  );
};

export default AdminDashboard;
