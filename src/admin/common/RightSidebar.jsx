import React from 'react';
import { Link } from 'react-router-dom';
import './RightSidebar.css';
import notificationIcon from '../../assets/notifications.svg';
import chatIcon from '../../assets/chat.svg';
import userIcon from '../../assets/User.svg';
import settingIcon from '../../assets/Settings.svg';
import logoutIcon from '../../assets/logout.svg';
import { useDispatch } from 'react-redux';
import { deleteShopStatus } from '../../Slices/ShopSlice';

const RightSidebar = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(deleteShopStatus(false));
    window.location.href = "http://localhost:3000/"; // Redirect after dispatching the action
  };

  return (
    <div className="right-sidebar">
      <Link to="/profile" className="icon-link">
        <img className="icon" src={userIcon} alt="User" />
      </Link>
      <Link to="/notifications" className="icon-link">
        <img className="icon" src={notificationIcon} alt="Notification" />
      </Link>
      <Link to="/chat-setting" className="icon-link">
        <img className="icon" src={chatIcon} alt="Chat" />
      </Link>
      <Link to="/account-setting" className="icon-link">
        <img className="icon" src={settingIcon} alt="Setting" />
      </Link>
      <a onClick={logoutHandler} className="icon-link" href="#">
        <img className="icon" src={logoutIcon} alt="Logout" />
      </a>
    </div>
  );
};

export default RightSidebar;
