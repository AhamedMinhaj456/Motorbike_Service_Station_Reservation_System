import React from 'react';
import './ShopMainWindow.css'; 
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';

const ShopMainWindow = () => {
  return (
    <div className="shop-main-container">
      <Navbar/>
      <div className="shop-main">
        <LeftSidebar />
        <h1>Welcome to Shop Dashboard</h1>
        <RightSidebar />
      </div>
      <Footer/>
    </div>
  );
};

export default ShopMainWindow;
