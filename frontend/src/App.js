import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './admin/views/AdminDashboard';
import LeftSidebar from "./admin/common/LeftSidebar";
import FaultManagementWindow from "./admin/views/FaultManagementWindow";
import UserManagementWindow from "./admin/views/UserManagementWindow";
import ShopManagementWindow from "./admin/views/ShopManagementWindow";
import SubscriptionPlansManagementWindow from "./admin/views/SubscriptionPlansManagamentWindow";
import AdminHomePage from "./admin/views/AdminHomePage";
import AdminProfileWindow from "./admin/views/AdminprofileWindow";
import AccountSettingWindow from "./admin/views/AccountSettingWindow";
import ChatSettingWindow from "./admin/views/ChatSettingWindow";
import ShopViewDetailsWindow from "./admin/views/ShopViewDetailsWindow";
import AddFault from "./admin/views/AddFault";



const App = () =>{
  return(
   <Router>
      <Routes>
        <Route path="/" element={<AdminHomePage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard  />} />
        <Route path="/" element={<LeftSidebar />} />
        <Route path="/fault-management" element={<FaultManagementWindow />} />
        <Route path="/user-management" element={<UserManagementWindow />} />
        <Route path="/shop-management" element={<ShopManagementWindow />} />
        <Route path="/subscription-plans" element={<SubscriptionPlansManagementWindow />} />
        <Route path="/addfault" element={<AddFault />} />
        <Route path="/profile" element={<AdminProfileWindow />} />
        <Route path="/account-setting" element={<AccountSettingWindow />} />
        <Route path="/chat-setting" element={<ChatSettingWindow />} />
        <Route path="/shop-1" element={<ShopViewDetailsWindow />} />
      </Routes>
    </Router>

  );
}

export default App;