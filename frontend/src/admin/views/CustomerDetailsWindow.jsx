import React, { useState, useEffect } from "react";
import "./CustomerDetailsWindow.css";
import { Link } from "react-router-dom";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";

const CustomerDetailsWindow = ({ customerId }) => {

  
  const [customerDetails, setCustomerDetails] = useState({
    customerId: 5,
    customerName: "John Doe",
    customerUsername: "TAX-1234",
    customerPhoneNumber: "123-456-7890",
    customerEmail: "customer@abc.com",
    
    
  });

  useEffect(() => {
    // Fetch reservation details here
    // Retrieve Customers from local storage
    const storedCustomers = localStorage.getItem(
      "customers"
    );
    if (storedCustomers) {
      const parsedCustomers = JSON.parse(storedCustomers);
      const foundCustomer = parsedCustomers.find(
        (customer) => customer.customerId === customerId
      );
      if (foundCustomer) {
        setCustomerDetails(foundCustomer);
      }
    }
  }, [customerId]);

  return (
    
    <div className="Reservation-details-management">
      <LeftSidebar />

      <div className="Reservation-details-management-content">
        <h3>{customerDetails.customerName} Customer Details</h3>

        <div className="Reservation-details-list">
          <div className="Reservation-details-item">
            <p>
              <strong>Customer ID:</strong>
              <span>{customerDetails.customerId}</span>
            </p>
            <p>
              <strong>Customer Name:</strong>
              <span>{customerDetails.customerName}</span>
            </p>
            <p>
              <strong>Customer Username:</strong>
              <span>{customerDetails.customerUsername}</span>
            </p>
                       
            <p>
              <strong>Phone Number:</strong>
              <span>{customerDetails.customerPhoneNumber}</span>
            </p>
            <p>
              <strong>customerEmail:</strong>
              <span>{customerDetails.customerEmail}</span>
            </p>
            
          </div>

          <Link to={"/user-management"}>
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

export default CustomerDetailsWindow;
