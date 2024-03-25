/*import React from "react";

const Navbar = () =>{
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

        </>
    )
}

export default Navbar*/

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logoImage from '../../src/assets/bike2.png'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbaar-light shadow" style={{ backgroundColor: '#C0E9FF' }} >
        <div className="container-fluid">
          <a className="navbar-brand" style={{ fontFamily: 'Poppins', fontWeight: 'SemiBold', fontSize: '30px' }} >
          <img src={logoImage} alt="Logo" width="87" height="69" className="d-inline-block align-top me-2" />
            BikePulse
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
            
              <li className="nav-item mr-3">
                <a className="nav-link" href="#">
             
                  Shops
                </a>
              </li>
              <li className="nav-item mr-3" >
              <a className="btn btn-outline-primary ms-2 px-4 rounded-pill">
              
              
                <i className="fa fa-user-plus me-2"></i>
                  LOG IN
                </a>
              </li>
             
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

