import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ShopViewDetailsWindow.css';
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';
import axios from 'axios'; 

const ShopViewDetailsWindow = () => {
  const [shops, setShops] = useState([
    { id: 1, shopName: 'Shop 1', status: 'pending', accepted: false },
  ]);

  const defaultPaymentData = {
    paymentReceived: false,
    paymentAmount: 0,
    paymentDate: '',
    paymentMethod: 'Credit Card',
    // Add more payment data fields as needed
  };

  useEffect(() => {
    // Backend developer: Fetch shop data from the backend and update state
    // Example:
    // fetchData();
  }, []);

  const handleDelete = (id) => {
    // Handle shop deletion here
    // Example:
    // setShops(shops.filter(shop => shop.id !== id));
  };

  const handleAccept = (id) => {
    // Handle shop acceptance here
    // Example:
    // const updatedShops = shops.map(shop => shop.id === id ? { ...shop, status: 'approved' } : shop);
    // setShops(updatedShops);
    const updatedShops = shops.map(shop => shop.id === id ? { ...shop, status: 'approved', accepted: true } : shop);
    setShops(updatedShops);
  };

  return (
    <div className="shop-approval-management">
      <LeftSidebar />

      <div className="shop-approval-management-content">
        <h2 className="shop-approval-management-heading">Shop Approval Management</h2>

        {shops.length === 0 ? (
          <p className="shop-approval-management-no-shops">No shops found.</p>
        ) : (
          <div className="shop-list">
            {shops.map((shop) => (
              <div key={shop.id} className="shop-item">
                <p>
                  <strong>Shop Name:</strong> {shop.shopName}
                </p>
                <div className="button-group">
                  {shop.status === 'pending' && (
                    <button onClick={() => handleAccept(shop.id)}>Accept</button>
                  )}
                  <button onClick={() => handleDelete(shop.id)}>Delete</button>
                </div>
                {shop.accepted && (
                  <div className="payment-checking-form">
                    <h3>Payment Checking Form</h3>
                    <p>Payment Received: {defaultPaymentData.paymentReceived ? 'Yes' : 'No'}</p>
                    <p>Payment Amount: {defaultPaymentData.paymentAmount}</p>
                    <p>Payment Date: {defaultPaymentData.paymentDate}</p>
                    <p>Payment Method: {defaultPaymentData.paymentMethod}</p>
                    {/* Add more payment data fields as needed */}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <RightSidebar />
    </div>
  );
};

export default ShopViewDetailsWindow;
