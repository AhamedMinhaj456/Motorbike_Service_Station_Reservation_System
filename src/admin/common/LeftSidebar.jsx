import React from 'react';
import { Link } from 'react-router-dom';
import './LeftSidebar.css';
import bikePulseLogo from '../../assets/Logo.png';
import ShopManagementIcon from '../../assets/Shop.svg';
import UserManagementIcon from '../../assets/UserManagement.svg';
import SubscriptionIcon from '../../assets/Subscription.svg';
import FaultIcon from '../../assets/Category.svg';
import Account_Setting_Icon from '../../assets/account_setting.svg';
import DropdownIcon from '../../assets/dropdown.svg';
import CardPaymentIcon from '../../assets/CardPayment.png';


const LeftSidebar = ({ acceptedReservations, profileImage  }) => {
  return (
    <div className="left-sidebar">
      <div className="logo-container">
      <img src={profileImage || bikePulseLogo} alt="Logo" className="logo" />
      </div>

      <div className="leftsidebar-search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="divider"></div>
      <div className="white-box">
        <Link to={{ pathname: "/reservation-management", state: { acceptedReservations } }} className="list-item">
          <img src={ShopManagementIcon} alt="Shop" />
          <span>Reservation Request List</span>
        </Link>

        <Link to="/ServiceProcessManagement" className="list-item">
          <img src={UserManagementIcon} alt="UserManagement" />
          <span>Service Process Management</span>
        </Link>

        <Link to="/progress-update-main" className="list-item">
          <img src={SubscriptionIcon} alt="Subscription" />
          <span>Progress Update</span>
        </Link>

        <Link to="/parts-Category-main" className="list-item">
          <img src={FaultIcon} alt="FaultCategory" />
          <span>Parts Category Management</span>
        </Link>

        <div className="list-item dropdown">
          <img src={Account_Setting_Icon} alt="Acount & Setting" />
          <span>Account & Setting</span>
          <img src={DropdownIcon} alt="Dropdown" className="dropdown-icon" />
          <div className="leftsidebar-dropdown-content">
            <Link to="/profile">
              <span>Profile</span>
            </Link>
            {/* <Link to="/account-setting">
              <span>Account Setting</span>
            </Link>
            <Link to="/chat-setting">
              <span>Chat Setting</span>
            </Link> */}
          </div>
        </div>    


        {/* <div className="list-item dropdown">
          <img src={CardPaymentIcon} alt="CardPayment"/>
          <span>Payment</span>
          <img src={DropdownIcon} alt="Dropdown" className="dropdown-icon" />
          <div className="dropdown-content">
            <Link to="/payment-subscription-main">
              <span>Subscription Plan</span>
            </Link>
            <Link to="/payment-charge-main">
              <span>Customer charges</span>
            </Link>
          </div>
        </div> */}



      </div>
    </div>
  );
};

export default LeftSidebar;
