import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ShopManagementWindow.css';
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';
import axios from 'axios'; 

const ShopManagementWindow = () => {
  const [shops, setShops] = useState([
    { id: 1, shopName: 'Shop 1', location: 'Location 1' },
    { id: 2, shopName: 'Shop 2', location: 'Location 2' },
    { id: 3, shopName: 'Shop 3', location: 'Location 3' },
    { id: 4, shopName: 'Shop 4', location: 'Location 4' },
    { id: 5, shopName: 'Shop 5', location: 'Location 5' },
    { id: 6, shopName: 'Shop 6', location: 'Location 6' },
    { id: 7, shopName: 'Shop 7', location: 'Location 7' },
    { id: 8, shopName: 'Shop 8', location: 'Location 8' },
    { id: 9, shopName: 'Shop 9', location: 'Location 9' },
    { id: 10, shopName: 'Shop 10', location: 'Location 10' },
  ]);

  useEffect(() => {
    // Backend developer: Fetch shop data from the backend and update state
    // Example:
    // fetchData();
  }, []);

  // Backend connection: Function to fetch shop data from the backend
  // const fetchData = async () => {
  //   try {
  //     // Example using axios:
  //     // const response = await axios.get('http://localhost:8095/shops');
  //     // setShops(response.data);
  //   } catch (error) {
  //     console.error('Error fetching shops:', error);
  //   }
  // };

  return (
    <div className="shop-management">
      <LeftSidebar />

      <div className="shop-management-content">
        <h2 className="shop-management-heading">Shop Management</h2>

        {shops.length === 0 ? (
          <p className="shop-management-no-shops">No shops found.</p>
        ) : (
          <div className="shop-list">
            {shops.map((shop) => (
              <div key={shop.id} className="shop-item">
                <p>
                  <strong>Shop Name:</strong> {shop.shopName}
                </p>
                <p>
                  <strong>Location:</strong> {shop.location}
                </p>
                <p>
                  <strong>View Details:</strong>
                  <Link to={`/shop/${shop.id}`}>View Details</Link>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <RightSidebar />
    </div>
  );
};

export default ShopManagementWindow;
