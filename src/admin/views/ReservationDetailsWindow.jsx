import React, { useState, useEffect } from 'react';
import './ReservationDetailsWindow.css';
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';

const ReservationDetailsWindow = () => {
  const [reservationDetails, setReservationDetails] = useState({
    reservationID: 1,
    serviceType: 'Type A',
    serviceLocation: 'Location X',
    name: 'John Doe',
    phoneNumber: '123-456-7890',
    totalCost: '$100',
    paymentMethod: 'Credit Card',
    advancePayment: '$50',
    date: '2024-03-22',
    time: '10:00 AM',
  });

  useEffect(() => {
    // Fetch reservation details here
  }, []);

  return (
    <div className="Reservation-details-management">
      <LeftSidebar />

      <div className="Reservation-details-management-content">
        <h2>Reservation Details</h2>

        <div className="Reservation-details-list">
        <div  className="Reservation-details-item">
       
  <p>
    <strong>Reservation ID:</strong>
    <span>{reservationDetails.reservationID}</span>
  </p>
  <p>
    <strong>Service Type:</strong>
    <span>{reservationDetails.serviceType}</span>
  </p>
  <p>
    <strong>Service Location:</strong>
    <span>{reservationDetails.serviceLocation}</span>
  </p>
  <p>
    <strong>Name:</strong>
    <span>{reservationDetails.name}</span>
  </p>
  <p>
    <strong>Phone Number:</strong>
    <span>{reservationDetails.phoneNumber}</span>
  </p>
  <p>
    <strong>Total Cost:</strong>
    <span>{reservationDetails.totalCost}</span>
  </p>
  <p>
    <strong>Payment Method:</strong>
    <span>{reservationDetails.paymentMethod}</span>
  </p>
  <p>
    <strong>Advance Payment:</strong>
    <span>{reservationDetails.advancePayment}</span>
  </p>
  <p>
    <strong>Date:</strong>
    <span>{reservationDetails.date}</span>
  </p>
  <p>
    <strong>Time:</strong>
    <span>{reservationDetails.time}</span>
  </p>


        </div>
       
        <button className="back-button">Back</button>
      </div>
      </div>

      <RightSidebar />
    </div>
  );
};

export default ReservationDetailsWindow;



