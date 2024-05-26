import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';
import { FaBars } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [totalUsers, setTotalUsers] = useState(150);
  const [totalShops, setTotalShops] = useState(200);
  const [pendingShops, setPendingShops] = useState(30);
  const [incomeData, setIncomeData] = useState([
    { month: 'Jan', income: 0 },
    { month: 'Feb', income: 0 },
    { month: 'Mar', income: 0 },
    { month: 'Apr', income: 0 },
    { month: 'May', income: 0 },
    { month: 'Jun', income: 0 },
    { month: 'Jul', income: 0 },
    { month: 'Aug', income: 0 },
    { month: 'Sep', income: 0 },
    { month: 'Oct', income: 0 },
    { month: 'Nov', income: 0 },
    { month: 'Dec', income: 0 }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Simulate fetching financial data from backend
    fetchFinancialData();

    return () => clearInterval(timer);
  }, []);

  const fetchFinancialData = () => {
    // Simulate fetching financial data from backend
    // Replace this with actual API calls to retrieve financial data
    const totalUsers = 150; // Example total users
    const totalShops = 200; // Example total shops
    const pendingShops = 30; // Example pending shops
    const incomeData = [
      { month: 'Jan', income: 10000 },
      { month: 'Feb', income: 15000 },
      // Add more data points for each month
    ];

    setTotalUsers(totalUsers);
    setTotalShops(totalShops);
    setPendingShops(pendingShops);
    setIncomeData(incomeData);
  };

  const calculateTotalIncome = () => {
    // Calculate total income from the income data
    return incomeData.reduce((total, data) => total + data.income, 0);
  };

  const calculateNetProfit = () => {
    // Calculate net profit based on total income and expenses
    // For now, let's assume expenses are 25% of the total income
    const totalIncome = calculateTotalIncome();
    const expenses = totalIncome * 0.25; // 25% expenses
    return totalIncome - expenses;
  };

  const renderIncomeChart = () => {
    return (
      <div className="chart-card">
        <h3>Income Over Time</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={incomeData}>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="income" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        <p>View Full Report</p>
      </div>
    );
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="admin-dashboard">
      <div className="hamburger-icon" onClick={toggleSidebar}>
        <FaBars />
      </div>

      <div className={`left-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <LeftSidebar />
      </div>

      <div className="admin-content">
        <h1>Welcome to Admin Dashboard</h1>
        <div className="real-time">
          {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
        </div>

        <div className="stats-overview">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p>{totalUsers}</p>
          </div>
          <div className="stat-card">
            <h3>Total Shops</h3>
            <p>{totalShops}</p>
          </div>
          <div className="stat-card">
            <h3>Pending Shops</h3>
            <p>{pendingShops}</p>
          </div>
          <div className="stat-card">
            <h3>Total Income</h3>
            <p>${calculateTotalIncome()}</p>
            <span>Saved 25%</span>
          </div>
          <div className="stat-card">
          <h3>Net Profit Margin</h3>
          <p>${calculateNetProfit()}</p>
          <span>Saved 65%</span>
        </div>
      </div>

      <div className="charts-overview">
        {renderIncomeChart()}
      </div>

      <div className="to-do-list">
        <h2>To-Do List</h2>
        <div className="task-input">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
          />
          <button onClick={handleAddTask}>Add</button>
        </div>
        <ul className="tasks">
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? 'completed' : ''}>
              <span onClick={() => handleToggleTask(index)}>{task.text}</span>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="calendar">
        <Calendar
          onChange={setDate}
          value={date}
          minDate={new Date(1970, 0, 1)} 
          maxDate={new Date()} 
          locale="en-US" 
        />
      </div>
    </div>

    <RightSidebar />
  </div>
);
};

export default AdminDashboard;
         
