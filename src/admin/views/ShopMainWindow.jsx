import React, { useState } from 'react';
import './ShopMainWindow.css'; 
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';

const ShopMainWindow = () => {

  return (
    <div className="shop-main">
      <LeftSidebar />
      <RightSidebar />
    </div>
  );
};

export default ShopMainWindow;
