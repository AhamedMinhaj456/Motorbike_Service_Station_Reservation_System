

/*import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logoImage from '../../src/assets/bike2.png'
import { Link } from "react-router-dom";




function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow" style={{ backgroundColor: '#007BFF' }}>
    <a className="navbar-brand" style={{ fontFamily: 'Poppins', fontWeight: 'SemiBold', fontSize: '30px' }} >
          <img src={logoImage} alt="Logo" width="87" height="69" className="d-inline-block align-top me-2" />
            BikePulse
          </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/aboutus" className="nav-link">
          
            Aboutus
          </Link>
          <Link to="/shops" className="nav-link">
            Shops
          </Link>
          <Link to="/login" className="nav-link">
            Login
            <i className="fa fa-user-plus me-2"></i>
          </Link>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;*/

/*import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logoImage from '../../src/assets/bike2.png'
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return(
        <div className="nav-bar">
        <div className="overlap">
          <i className="bi bi-person-circle profile-icon" color="#03045E" />
        </div>
        <div className="login-button">
        <i className="bi bi-person-circle profile-icon" color="#03045E" />
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="text-wrapper">LOG IN</div>
          </div>
        </div>
        <div className="nav-bar-details">
          <Link to="/" className="div">Home</Link>
          <Link to="/aboutus" className="text-wrapper-2">About us</Link>
          <p className="shops">
            <span className="span">&nbsp;</span>
            <Link to="/shops"className="text-wrapper-3">Shops</Link>
          </p>
        </div>
        <img src={logoImage} alt="Logo"  />
      </div>
    )

}

export default Navbar;*/

// frontend\src\components\Navbar.jsx

// frontend\src\components\Navbar.jsx

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logoImage from '../../src/assets/bike2.png'
import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo">
        <img src={logoImage} alt="Logo" width="87" height="69" className="logo img" />
        <span className="brand-text brand-text-gradient">BikePulse</span>
      </div>
      
        <div className="profile-icon">
          <i className="bi bi-person-circle" color="#03045E" />
        </div>
        <div className="login-button ">
          <div className="button-group">
            <div className="rectangle" />
            <Link to="/login" className="text">LOG IN</Link>
          </div>
        </div>
        <div className="navbar-details">
        <Link to="/" className="nav-link ">Home</Link>
        <Link to="/aboutus" className="nav-link ">About us</Link>
        <Link to="/shops" className="nav-link ">Shops</Link>
       
        
      </div>
    </div>
  );
}

export default Navbar;

