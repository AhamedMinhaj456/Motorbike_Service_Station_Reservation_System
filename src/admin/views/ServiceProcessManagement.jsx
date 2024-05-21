import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";
import "./ServiceProcessManagement.css";
import axios from 'axios';
import ServiceProcessManagementDetails from "./ServiceProcessManagementDetails";

const ServiceProcessManagement = () => {
  const [reservationRequests, setReservationRequests] = useState([
    {
        reservationId: 1,
        customerName: "John Doe",
        motorbikeNumber: "MB1234",
        phoneNumber: "123-456-7890",
        reservationDate: "2024-05-01",
        reservationTime: "10:00 AM",
        approvedStatus: "approved",
        processStatus: "pending"
      },
      {
        reservationId: 2,
        customerName: "Jane Smith",
        motorbikeNumber: "MB5678",
        phoneNumber: "234-567-8901",
        reservationDate: "2024-05-02",
        reservationTime: "11:00 AM",
        approvedStatus: "approved",
        processStatus: "pending"
      },
      {
        reservationId: 3,
        customerName: "Michael Johnson",
        motorbikeNumber: "MB9101",
        phoneNumber: "345-678-9012",
        reservationDate: "2024-05-03",
        reservationTime: "12:00 PM",
        approvedStatus: "approved",
        processStatus: "pending"
      },
      {
        reservationId: 4,
        customerName: "Emily Brown",
        motorbikeNumber: "MB1121",
        phoneNumber: "456-789-0123",
        reservationDate: "2024-05-04",
        reservationTime: "01:00 PM",
        approvedStatus: "approved",
        processStatus: "pending"
      },
      {
        reservationId: 5,
        customerName: "David Lee",
        motorbikeNumber: "MB3141",
        phoneNumber: "567-890-1234",
        reservationDate: "2024-05-05",
        reservationTime: "02:00 PM",
        approvedStatus: "approved",
        processStatus: "pending"
      }
  ]);
  const [selectedReservationId, setSelectedReservationId] = useState(null);
  const [filterByApprovedStatus, setFilterByApprovedStatus] = useState("view_all");
  const [filterByProcessStatus, setFilterByProcessStatus] = useState("view_all");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('http://localhost:8095/reservation/ReservationDetails');
      setReservationRequests(data);
    };
    fetchData();
  }, []);

  const handleReservationClick = (reservationId) => {
    setSelectedReservationId(reservationId);
  };

  return (
    <div className="reservation-management">
      <LeftSidebar />

      <div className="reservation-management-content">
        <h2>
          <b>Service Process List</b>
        </h2>

        <div className="filter-container">
          <label htmlFor="statusFilter">Filter by approved status:</label>
          <select id="statusFilter" onChange={(e) => setFilterByApprovedStatus(e.target.value)} value={filterByApprovedStatus}>
            <option value="view_all">View All</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div className="filter-container">
          <label htmlFor="processStatusFilter">Filter by process status:</label>
          <select id="processStatusFilter" onChange={(e) => setFilterByProcessStatus(e.target.value)} value={filterByProcessStatus}>
            <option value="view_all">View All</option>
            <option value="pending">Pending</option>
            <option value="on_hold">On Hold</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
            <option value="delayed">Delayed</option>
          </select>
        </div>

        {reservationRequests.length === 0 ? (
          <p>No pending reservations found.</p>
        ) : (
          <div className="reservation-list">
            {reservationRequests
              .filter((reservation) => (filterByApprovedStatus === "view_all" || reservation.approvedStatus === filterByApprovedStatus) && 
                                        (filterByProcessStatus === "view_all" || reservation.processStatus === filterByProcessStatus))
              .map((reservation) => (
                <div key={reservation.reservationId} className="reservation-item">
                  <p>
                    <br />
                    <b>Customer Name:</b> {reservation.customerName}
                    <br />
                    <b>Reservation Date:</b> {reservation.reservationDate}
                    <br />
                    <b>Reservation Time:</b> {reservation.reservationTime}
                    <br />
                    <b>Service Status:</b> {reservation.processStatus}
                  </p>
                  <div>
                    <button
                      className="accept-btn"
                      onClick={() => handleReservationClick(reservation.reservationId)}
                    >
                      Check -{'>'} {reservation.reservationId}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}

        <div className="component-div">
          {/* Render ServiceProcessManagementDetails if a reservation is selected */}
          {selectedReservationId && (
            <ServiceProcessManagementDetails reservationId={selectedReservationId} />
          )}
        </div>
      </div>

      <RightSidebar />
    </div>
  );
};

export default ServiceProcessManagement;
