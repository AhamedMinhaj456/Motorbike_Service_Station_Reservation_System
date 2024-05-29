import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper, Grid } from '@mui/material';
import Header from '../../components/Header';
import './ReservationDetails.css';

const ReservationDetails = () => {
  const { reservationId } = useParams();
  const [reservation, setReservation] = useState({
    customerName: "John Doe",
    motorbikeNumber: "MB1234",
    serviceType: "Regular Maintenance",
    reservationDate: "2024-06-15",
    reservationTime: "10:00 AM",
    reservationAddress: "123 Main Street, Springfield",
  });

  useEffect(() => {
    // Simulating an API call
    // const fetchReservationDetails = async () => {
    //   try {
    //     const response = await fetch(`http://localhost:8095/reservation/ReservationDetails/${reservationId}`);
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok ' + response.statusText);
    //     }
    //     const data = await response.json();
    //     setReservation(data);
    //   } catch (error) {
    //     console.error('There has been a problem with your fetch operation:', error);
    //   }
    // };
    // fetchReservationDetails();
  }, [reservationId]);

  if (!reservation) {
    return <div>Loading...</div>;
  }

  return (
    <Box m="20px">
      <Header title="Reservation Details" subtitle={`Details of reservation ID ${reservationId}`} />
      <Paper className="reservation-details-container">
        <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{"& > div": { gridColumn: "span 4" }}}>
          <Box sx={{ gridColumn: "span 4" }}>
            <Typography variant="h6" className="detail-title">Customer Name:</Typography>
            <Typography variant="body1" className="detail-value">{reservation.customerName}</Typography>
          </Box>
          <Box sx={{ gridColumn: "span 2" }}>
            <Typography variant="h6" className="detail-title">Motorbike Number:</Typography>
            <Typography variant="body1" className="detail-value">{reservation.motorbikeNumber}</Typography>
          </Box>
          <Box sx={{ gridColumn: "span 2" }}>
            <Typography variant="h6" className="detail-title">Service Type:</Typography>
            <Typography variant="body1" className="detail-value">{reservation.serviceType}</Typography>
          </Box>
          <Box sx={{ gridColumn: "span 2" }}>
            <Typography variant="h6" className="detail-title">Reservation Date:</Typography>
            <Typography variant="body1" className="detail-value">{reservation.reservationDate}</Typography>
          </Box>
          <Box sx={{ gridColumn: "span 2" }}>
            <Typography variant="h6" className="detail-title">Reservation Time:</Typography>
            <Typography variant="body1" className="detail-value">{reservation.reservationTime}</Typography>
          </Box>
          <Box sx={{ gridColumn: "span 4" }}>
            <Typography variant="h6" className="detail-title">Reservation Address:</Typography>
            <Typography variant="body1" className="detail-value">{reservation.reservationAddress}</Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ReservationDetails;
