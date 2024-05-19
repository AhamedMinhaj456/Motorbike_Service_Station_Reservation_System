import React, { useState, useEffect } from "react";
import "./ShopDetailsWindow.css";
import { Link } from "react-router-dom";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";

const ShopDetailsWindow = ({ shopId }) => {

  
  const [shopDetails, setShopDetails] = useState({
    shopId: 5,
    shopName: "John Doe",
    shopAddress: "MB 1234",
    contactNumber: "123-456-7890",
    email: "shop@abc.com",
    taxId: "TAX-1234",
    subscriptionPlan: "Month Plan",
  });

  useEffect(() => {
    // Fetch reservation details here
    // Retrieve Shops from local storage
    const storedShops = localStorage.getItem(
      "shops"
    );
    if (storedShops) {
      const parsedShops = JSON.parse(storedShops);
      const foundShop = parsedShops.find(
        (shop) => shop.shopId === shopId
      );
      if (foundShop) {
        setShopDetails(foundShop);
      }
    }
  }, [shopId]);

  return (
    
    <div className="Reservation-details-management">
      <LeftSidebar />

      <div className="Reservation-details-management-content">
        <h3>{shopDetails.shopName} Shop Details</h3>

        <div className="Reservation-details-list">
          <div className="Reservation-details-item">
            <p>
              <strong>Shop ID:</strong>
              <span>{shopDetails.shopId}</span>
            </p>
            <p>
              <strong>Shop Name:</strong>
              <span>{shopDetails.shopName}</span>
            </p>
           
            <p>
              <strong>Shop Address:</strong>
              <span>{shopDetails.shopAddress}</span>
            </p>
           
            <p>
              <strong>Phone Number:</strong>
              <span>{shopDetails.contactNumber}</span>
            </p>
            <p>
              <strong>Email:</strong>
              <span>{shopDetails.email}</span>
            </p>
            {/* <p>
              <strong>Total Cost:</strong>
              <span>{shopDetails.totalCost}</span>
            </p>
            <p>
              <strong>Payment Method:</strong>
              <span>{shopDetails.paymentMethod}</span>
            </p> */}
            {/* <p>
              <strong>Advance Payment:</strong>
              <span>{shopDetails.advancePayment}</span>
            </p> */}
            <p>
              <strong>Tax Id:</strong>
              <span>{shopDetails.taxId}</span>
            </p>
            <p>
              <strong>Subscription Plan:</strong>
              <span>{shopDetails.subscriptionPlan}</span>
            </p>
          </div>

          <Link to={"/shop-management"}>
            <button
              className="back-button"
              onClick={() => window.location.reload()}
            >
              Back
            </button>
          </Link>
        </div>
      </div>

      <RightSidebar />
    </div>
  );
};

export default ShopDetailsWindow;
