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
import ShopSearch from "./admin/views/ShopSearch";
import ShopSearchs from "./admin/views/ShopSearchs";
import UpdateUserStatus from "./admin/views/UpdateUserStatus";


import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/Footer";
import Login from "./components/login";
import ShopOwnerFlow from "./components/shopOwnerFlow";
import ShopOwnerFlowHorizontalbar from "./components/shopOwnerFlowHorizontalbar";
import DetailsSection from "./components/detailsSection";
import DetailsSection2 from "./components/detailsSection2";
import ShopHome from "./components/shopHome";
import ShopLogin from "./components/ShopLogin";
import SetPassword from "./components/SetPassword";
import RegistrationComplete from "./components/RegistrationComplete";
import Congratulations from "./components/Congratulations";
import RegistrationPending from "./components/RegistrationPending";
import Congratz2 from "./components/Congratz2";
import ForgetPassword from "./components/ForgetPassword";
import SecurePayment from "./components/SecurePayment";
import Verification from "./components/Verification";
import Subscription from "./components/Subscription";
import DateTimePicker from "./components/DateTimePicker";
import AdminTable from "./components/AdminTable";

const App = () =>{
  return(
   <Router>
      <Routes>
        {/* <Route path="/" element={<AdminHomePage />} /> */}
        
        {/* <Route path="/" element={<LeftSidebar />} /> */}
        <Route path="/ShopMainWindow" element={<ShopMainWindow  />} />
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
        
        <Route path="/ShopSearch" element={<ShopSearch/>}/>
        <Route path="/ShopSearchs" element={<ShopSearchs/>}/>
        <Route path="/UpdateUserStatus" element={<UpdateUserStatus/>}/>


        <Route path="/" element={<ShopHome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ShopLogin" element={<ShopLogin />} />
          <Route path="/DateTimePicker" element={<DateTimePicker />} />
          <Route path="/AdminTable" element={<AdminTable />} />
          <Route path="/SetPassword" element={<SetPassword />} />
          <Route path="/RegistrationComplete" element={<RegistrationComplete />} />
          <Route path="/Congratulations" element={<Congratulations />} />
          <Route path="/RegistrationPending" element={<RegistrationPending />} />
          <Route path="/Congratz2" element={<Congratz2 />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/SecurePayment" element={<SecurePayment />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/Subscription" element={<Subscription />} />
          <Route path="/shopOwnerFlow" element={<ShopOwnerFlow />} />
      </Routes>
    </Router>

  );
}

export default App;