

/*import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Shops from "./components/Shops";
import Login from "./components/Login";
import Footer from "./components/Footer";
import {BrowserRouter as Route,Router,Routes } from "react-router-dom";


function App  () {
  return(
    <Router>
   <div>
   <Navbar/>
   <Routes>
   
   
    <Route path="/" element={<Home/>}/>
    <Route path="/aboutus" element={<Aboutus/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/shops" element={<Shops/>}/>
   
   
    </Routes>
    <Footer/>
   </div>
   </Router>

  );
}

export default App;*/

import React from "react";
import { useState } from "react";
import Navbar from "./components/navbar";
import Aboutus from "./components/aboutus";
import Shops from "./components/Shops";
import Footer from "./components/Footer";


import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import ForgotPw from "./components/ForgotPw";
import FaultSuggest from "./components/FaultSuggest";
import ShopsNavbar from "./components/ShopsNavbar";
import Reservation from "./components/Reservation";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Payment from "./components/Payment";
import Fault from "./components/Fault";
import Cart from "./components/Cart";



import Topbar from "./components/dashboard/scenes/global/Topbar"
import Sidebar from "./components/dashboard/scenes/global/Sidebar";
import Dashboard from "./components/dashboard/scenes/dashboard";
import Team from "./components/dashboard/scenes/team";
import PaymentReservations from "./components/dashboard/scenes/payments";
import ReservationHistory from "./components/dashboard/scenes/history";
import Bar from "./components/dashboard/scenes/bar";
import Form from "./components/dashboard/scenes/form";
import Line from "./components/dashboard/scenes/line";
import Pie from "./components/dashboard/scenes/pie";
import FAQ from "./components/dashboard/scenes/faq";
import Geography from "./components/dashboard/scenes/geography";
import Calendar from "./components/dashboard/scenes/calender/calender";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./components/theme";
import './App.css';



//import { Navbar } from "react-bootstrap";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faultsuggest" element={<FaultSuggest />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/account-setting" element={<Settings />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpw" element={<ForgotPw />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/fault" element={<Fault />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/dash" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/history" element={<ReservationHistory />} />
              <Route path="/payment-reservations" element={<PaymentReservations />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
      <Footer />
    </Router>
  );
}


export default App;
