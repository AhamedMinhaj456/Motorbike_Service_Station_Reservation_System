import React, { useState, useEffect } from "react";
import "./ReservationDetailsWindow.css";
import { Link } from "react-router-dom";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";

const ReservationDetailsWindow = ({ reservationId }) => {

  
  const [reservationDetails, setReservationDetails] = useState({
    reservationId: 5,
    customerName: "John Doe",
    motorbikeNumber: "MB 1234",
    serviceType: "Type A",
    phoneNumber: "123-456-7890",
    reservationDate: "2024-03-22",
    reservationTime: "10:00 AM",
  });

  useEffect(() => {
    // Fetch reservation details here
    // Retrieve reservationRequests from local storage
    const storedReservationRequests = localStorage.getItem(
      "reservationRequests"
    );
    if (storedReservationRequests) {
      const parsedReservationRequests = JSON.parse(storedReservationRequests);
      const foundReservation = parsedReservationRequests.find(
        (reservation) => reservation.reservationId === reservationId
      );
      if (foundReservation) {
        setReservationDetails(foundReservation);
      }
    }
  }, [reservationId]);

  return (
    <div className="Reservation-details-management">
      <LeftSidebar />

      <div className="Reservation-details-management-content">
        <h3>{reservationDetails.reservationId} Reservation Details</h3>

        <div className="Reservation-details-list">
          <div className="Reservation-details-item">
            <p>
              <strong>Reservation ID:</strong>
              <span>{reservationDetails.reservationId}</span>
            </p>
            <p>
              <strong>Service Type:</strong>
              <span>{reservationDetails.serviceType}</span>
            </p>
            <p>
              <strong>Motorbike Number:</strong>
              <span>{reservationDetails.motorbikeNumber}</span>
            </p>
            <p>
              <strong>Name:</strong>
              <span>{reservationDetails.customerName}</span>
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
              <strong>reservationDate:</strong>
              <span>{reservationDetails.reservationDate}</span>
            </p>
            <p>
              <strong>reservationTime:</strong>
              <span>{reservationDetails.reservationTime}</span>
            </p>
          </div>

          <Link to={"/reservation-management"}>
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

export default ReservationDetailsWindow;
