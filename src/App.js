import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './admin/views/AdminDashboard';
import LeftSidebar from "./admin/common/LeftSidebar";
import CustomerManagementWindow from "./admin/views/CustomerManagementWindow";
import ReservationRequestListWindow from "./admin/views/ReservationRequestListWindow";
import AdminHomePage from "./admin/views/AdminHomePage";
import AdminProfileWindow from "./admin/views/AdminprofileWindow";
import AccountSettingWindow from "./admin/views/AccountSettingWindow";
import ChatSettingWindow from "./admin/views/ChatSettingWindow";
import ShopMainWindow from "./admin/views/ShopMainWindow";
import ReservationDetailsWindow from "./admin/views/ReservationDetailsWindow";
import PartsCategoryManagementWindow from "./admin/views/PartsCategoryManagementWindow";
import PaymentSubscriptionPlanWindow from "./admin/views/PaymentSubscriptionPlanWindow";
import PaymentCustomerCharges from "./admin/views/PaymentCustomerCharges";
import ProgressUpdateWindow from "./admin/views/ProgressUpdateWindow";

const App = () =>{
  return(
   <Router>
      <Routes>
        {/* <Route path="/" element={<AdminHomePage />} /> */}
        <Route path="/" element={<ShopMainWindow  />} />
        {/* <Route path="/" element={<LeftSidebar />} /> */}
        
        <Route path="/customer-management" element={<CustomerManagementWindow />} />
        <Route path="/reservation-management" element={<ReservationRequestListWindow />} />
        <Route path="/profile" element={<AdminProfileWindow />} />
        <Route path="/account-setting" element={<AccountSettingWindow />} />
        <Route path="/chat-setting" element={<ChatSettingWindow />} />
        <Route path="/shop-main" element={<ShopMainWindow />} />
        <Route path="/Reservation-details-management" element={<ReservationDetailsWindow/>} />
        <Route path="/parts-Category-main" element={<PartsCategoryManagementWindow/>} />
        <Route path="/payment-subscription-main" element={<PaymentSubscriptionPlanWindow/>} />
        <Route path="/payment-charge-main" element={<PaymentCustomerCharges/>} />
        <Route path="/progress-update-main" element={<ProgressUpdateWindow/>} />
      </Routes>
    </Router>

  );
}

export default App;