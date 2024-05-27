import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';
import { FaBars } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Tooltip, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
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

  const [schedules, setSchedules] = useState([
    { date: new Date(), text: 'Meeting with team', completed: false },
    { date: new Date(new Date().setDate(new Date().getDate() + 1)), text: 'Client call', completed: false },
    { date: new Date(new Date().setDate(new Date().getDate() + 2)), text: 'Project deadline', completed: false },
  ]);
  const [newSchedule, setNewSchedule] = useState('');

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

  const handleAddSchedule = () => {
    if (newSchedule.trim()) {
      setSchedules([...schedules, { date: date, text: newSchedule, completed: false }]);
      setNewSchedule('');
    }
  };

  const handleToggleSchedule = (index) => {
    const updatedSchedules = schedules.map((schedule, i) =>
      i === index ? { ...schedule, completed: !schedule.completed } : schedule
    );
    setSchedules(updatedSchedules);
  };

  const handleDeleteSchedule = (index) => {
    const updatedSchedules = schedules.filter((_, i) => i !== index);
    setSchedules(updatedSchedules);
  };

  const renderSchedulesForDate = (date) => {
    const schedulesForDate = schedules.filter(schedule =>
      schedule.date.toDateString() === date.toDateString()
    );

    return (
      <ul className="schedules">
        {schedulesForDate.map((schedule, index) => (
          <li key={index} className={schedule.completed ? 'completed' : ''}>
            <span onClick={() => handleToggleSchedule(index)}>{schedule.text}</span>
            <button onClick={() => handleDeleteSchedule(index)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };

  const renderTodaySchedules = () => {
    const today = new Date();
    const todaySchedules = schedules.filter(schedule =>
      schedule.date.toDateString() === today.toDateString()
    );

    return (
      <div className="overview">
        <h2>Today's Schedule</h2>
        {todaySchedules.length > 0 ? (
          <ul className="schedules">
            {todaySchedules.map((schedule, index) => (
              <li key={index} className={schedule.completed ? 'completed' : ''}>
                <span onClick={() => handleToggleSchedule(index)}>{schedule.text}</span>
                <button onClick={() => handleDeleteSchedule(index)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No schedules for today.</p>
        )}
      </div>
    );
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

        <div className="calendar-overview">
          <div className="calendar">
            <h2>Calendar Schedule</h2>
            <Calendar
              onChange={setDate}
              value={date}
              minDate={new Date(1970, 0, 1)}
              maxDate={new Date()}
              locale="en-US"
            />
            <div className="schedule">
              <h2>Schedule for {date.toDateString()}</h2>
              <div className="schedule-input">
                <input
                  type="text"
                  value={newSchedule}
                  onChange={(e) => setNewSchedule(e.target.value)}
                  placeholder="Add a new schedule..."
                />
                <button onClick={handleAddSchedule}>Add</button>
              </div>
              {renderSchedulesForDate(date)}
            </div>
          </div>
          {renderTodaySchedules()}
        </div>
      </div>

      <RightSidebar />
    </div>
  );
};

export default AdminDashboard;
