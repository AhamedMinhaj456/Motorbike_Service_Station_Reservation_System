import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';
import { Bar } from 'react-chartjs-2'; 
import 'chart.js/auto'; 

const AdminDashboard = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [graphData, setGraphData] = useState(null); // State to store graph data

  useEffect(() => {
    // Code to fetch default graphs or perform any initial actions
    // For now, I'm just setting the default option to 'option1'
    setSelectedOption('option1');

    // Fetch initial graph data from backend
    fetchData('option1'); // Assuming 'option1' as default for initial data
  }, []); // Empty dependency array to ensure this effect runs only once when component mounts

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    // Fetch data from backend when option is clicked
    fetchData(option);
  };

  // Function to fetch data from backend based on selected option
  const fetchData = async (option) => {
    try {
      // Make API request to fetch data based on option
      // Replace this with your actual API endpoint
      const response = await fetch(`/api/${option}`);
      const data = await response.json();
      
      // Set graph data state with the fetched data
      setGraphData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Sample data for the default graph
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
