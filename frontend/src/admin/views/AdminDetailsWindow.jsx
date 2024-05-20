import React, { useState, useEffect } from "react";
import "./AdminDetailsWindow.css";
import { Link } from "react-router-dom";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";
import axios from 'axios'; 
import Switch from 'react-switch';

const AdminDetailsWindow = ({ adminId }) => {

  
  const [adminDetails, setAdminDetails] = useState({
    adminId: 5,
    adminName: "John Doe",
    adminRole: "Role 1",
    adminEmail: "admin@abc.com",
    
    
  });

  useEffect(() => {
    // Fetch reservation details here
    // Retrieve Admins from local storage
    const storedAdmins = localStorage.getItem(
      "admins"
    );
    if (storedAdmins) {
      const parsedAdmins = JSON.parse(storedAdmins);
      const foundAdmin = parsedAdmins.find(
        (admin) => admin.adminId === adminId
      );
      if (foundAdmin) {
        setAdminDetails(foundAdmin);
      }
    }
  }, [adminId]);


  // active status

    const [activeStatus, setActiveStatus] = useState(false); // false means "deactive", true means "active"
    const [currentStatus, setCurrentStatus] = useState({ activeStatus: ''});

    useEffect(() => {
        if (adminId) {
            fetchUserStatus();
        }
    }, [adminId]);

    useEffect(() => {
        if (adminId && currentStatus.activeStatus !== '') {
            const status = activeStatus ? 'active' : 'deactive';
            axios.put(`http://localhost:8095/admin/${adminId}/active-status`, null, {
                params: { activeStatus: status }
            }).then(() => {
               // alert(`Active status updated to ${status}`);
            });
        }
    }, [activeStatus]);

  
    const fetchUserStatus = async () => {
        const response = await axios.get(`http://localhost:8095/admin/${adminId}`);
        setCurrentStatus({
            activeStatus: response.data.activeStatus,
            
        });
        setActiveStatus(response.data.activeStatus);
        
    };

  return (
    
    <div className="Reservation-details-management">
      <LeftSidebar />

      <div className="Reservation-details-management-content">
        <h3>{adminDetails.adminName} Admin Details</h3>

        <div className="Reservation-details-list">
          <div className="Reservation-details-item">
            <p>
              <strong>Admin ID:</strong>
              <span>{adminDetails.adminId}</span>
            </p>
            <p>
              <strong>Admin Name:</strong>
              <span>{adminDetails.adminName}</span>
            </p>
            <p>
              <strong>Admin Username:</strong>
              <span>{adminDetails.adminRole}</span>
            </p>
                       
            <p>
              <strong>adminEmail:</strong>
              <span>{adminDetails.adminEmail}</span>
            </p>
            
          </div>

          <div>
                        
            <div>
                <h2>Update Active Status</h2>
                <label>
                    <span>Deactive</span>
                    <Switch
                        checked={activeStatus}
                        onChange={setActiveStatus}
                        onColor="#86d3ff"
                        onHandleColor="#2693e6"
                        handleDiameter={30}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        height={20}
                        width={48}
                    />
                    <span>Active</span>
                </label>
            </div>
            
        </div>

          <Link to={"/admin-management"}>
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

export default AdminDetailsWindow;
