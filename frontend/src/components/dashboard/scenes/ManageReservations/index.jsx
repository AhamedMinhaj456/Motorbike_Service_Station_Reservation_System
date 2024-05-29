import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ManageReservations = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [reservationDetails, setReservationDetails] = useState([]);

  // Function to fetch contacts data from the API
  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:8095/reservation/ReservationDetails');
      
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      setReservationDetails(data);
      console.log(data);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  // Fetch contacts data when the component mounts
  useEffect(() => {
    fetchContacts();
  }, []);

  const columns = [
    { field: "reservationId", headerName: "reservationId", flex: 0.5 },
    {
      field: "customerName",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "motorbikeNumber",
      headerName: "Motorbike Number",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "serviceType",
      headerName: "Service Type",
      flex: 1,
    },
    {
      field: "reservationDate",
      headerName: "Reservation Date",
      flex: 1,
    },
    {
      field: "reservationTime",
      headerName: "Reservation Time",
      flex: 1,
    },
    {
      field: "reservationAddress",
      headerName: "Reservation Address",
      flex: 1,
    },
    {
      
      headerName: "Status",
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpenChildWindow(params.row)}
        >
        {params.row.approvedStatus === 'approved' ? params.row.processStatus : params.row.processStatus}
        </Button>
      ),
      flex: 1,
    },
  ];

  const handleOpenChildWindow = (rowData) => {
    navigate(`/child-window/${rowData.reservationId}`);
  };

  return (
    <Box m="20px">
      <Header title="Manage Reservations" subtitle="List of Reservations" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={reservationDetails}
          columns={columns}
          getRowId={(row) => row.reservationId}
          // checkboxSelection
        />
      </Box>
    </Box>
  );
};

export default ManageReservations;
