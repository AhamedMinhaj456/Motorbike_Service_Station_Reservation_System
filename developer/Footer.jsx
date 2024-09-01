/*import React from "react";
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer =() =>{
    return (
        <div>
        <div class="footer-clean">
          <hr />
          <footer>
            <div class="container">
              <div class="row justify-content-center">
                
                <div class="col-sm-4 col-md-3 item">
                  <h3>History</h3>
                  <ul>
                    <li>
                      <Link>Company</Link>
                    </li>
                    <li>
                      <Link>Team</Link>
                    </li>
                    <li>
                      <Link>Legacy</Link>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-4 col-md-3 item">
                  <h3>Careers</h3>
                  <ul>
                    <li>
                      <Link>Job openings</Link>
                    </li>
                    <li>
                      <Link>Employee success</Link>
                    </li>
                    <li>
                      <Link>Benefits</Link>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 item social">
                <li><Link to="/news" className="nav_link">News</Link></li>
                <li><Link to="/about" className="nav_link">About</Link></li>
                <li><Link to="/services" className="nav_link">Services</Link></li>
                <li><Link to="/contact" className='nav_link'>Contact</Link></li>
                <li><Link to="/home" className='nav_link'>Home</Link></li>
                </div>
                <div class="col-lg-3 item social">
                  <a href ='https://www.bing.com/search?q=facebook+login+link&qs=n&form=QBRE&sp=-1&ghc=1&lq=0&pq=facebook+login+link&sc=10-19&sk=&cvid=59C6DE079CF24E0B81C5B79A48E1FC0C&ghsh=0&ghacc=0&ghpl=#'>
                  <Link>
                      <i class="bi bi-facebook"></i>
                    </Link>
                  </a>
                    
    <a href ='https://www.bing.com/ck/a?!&&p=73a0f67b65806e59JmltdHM9MTY5NzU4NzIwMCZpZ3VpZD0wZDQ1ZTcxZC1lNzdjLTZjYjEtMDRhMS1mNzFlZTM3YzZlNmQmaW5zaWQ9NTE4OA&ptn=3&hsh=3&fclid=0d45e71d-e77c-6cb1-04a1-f71ee37c6e6d&psq=twitter+login&u=a1aHR0cHM6Ly9tLnR3aXR0ZXIuY29tL2xvZ2lu&ntb=1'>
    
                     <Link>
                      <i class="bi bi-twitter"></i>
                    </Link>
    </a>
    
    <a href='https://www.bing.com/ck/a?!&&p=3bced5a98758f0aaJmltdHM9MTY5NzU4NzIwMCZpZ3VpZD0wZDQ1ZTcxZC1lNzdjLTZjYjEtMDRhMS1mNzFlZTM3YzZlNmQmaW5zaWQ9NTE3OA&ptn=3&hsh=3&fclid=0d45e71d-e77c-6cb1-04a1-f71ee37c6e6d&psq=whatsapp+login+link&u=a1aHR0cHM6Ly93ZWIud2hhdHNhcHAuY29tLyVGMCU5RiU4QyU5MC9lbg&ntb=1'>
                     <Link>
                      <i class="bi bi-whatsapp"></i>
                    </Link>
    </a>
                   
    <a href='https://www.bing.com/ck/a?!&&p=a04aa8ef3074e152JmltdHM9MTY5NzU4NzIwMCZpZ3VpZD0wZDQ1ZTcxZC1lNzdjLTZjYjEtMDRhMS1mNzFlZTM3YzZlNmQmaW5zaWQ9NTE4OA&ptn=3&hsh=3&fclid=0d45e71d-e77c-6cb1-04a1-f71ee37c6e6d&psq=instagram+login&u=a1aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS8_aGw9ZW4&ntb=1'>
                     <Link>
                      <i class="bi bi-instagram"></i>
                    </Link>
    
    </a>
                   
                    <p class="copyright">MORAIS MNS 4077</p>
                  </div>
    
                 
               
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
}


export default Footer*/

/*mport React from "react";
import {Link} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import ChatCircleText from "../components/ChatCircleText";
import EnvelopeSimple from "../components/EnvelopSimple";
import WeightRegular from "../components/WeightRegular";
import WeightRegularWrapper from "../components/WeightRegularWrapper";
import logo from "../assets/Logo.png"
import "./Footer.css"

const Footer =() =>{
    return (
        <div className="footer">
          <div className="overlap">
            <div className="group">
              <div className="text-wrapper">Company</div>
              <div className="div">Resources</div>
              <div className="overlap-group">
                <div className="text-wrapper-2">Contact us</div>
                <p className="p">© Developed by BikePulse Group IT 2023.</p>
                <div className="group-2">
                  <div className="text-wrapper-3">Business Address</div>
                  <p className="element-bike-lane">
                    123 Bike Lane,
                    <br />
                    Cityville, State 56789,
                    <br />
                    Sri Lanka
                  </p>
                  <div className="group-3">
                    <p className="element">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +94 11 556 8080
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +94 11 528 9612
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bikepulse@gmail.com
                    </p>
                    <WeightRegularWrapper weight="regular" />
                  </div>
                </div>
                <div className="group-4">
                  <div className="overlap-group-2">
                    <div className="group-5">
                      <div className="text-wrapper-4">Corporative Office</div>
                      <p className="bikepulse">
                        BikePulse Headquarters,
                        <br />
                        456 Gear Street,
                        <br />
                        Metropolis, State 67890,
                        <br />
                        Sri Lanka
                      </p>
                      <p className="element-2">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+94 11 677 8080
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +94 11 598 9612
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; head@gmail.com
                      </p>
                    </div>
                    <div className="group-6">
                      <ChatCircleText className="phosphor-icons" />
                      <EnvelopeSimple className="envelope-simple" color="white" />
                      <div className="group-7" />
                    </div>
                  </div>
                  <div className="group-8">
                    <ChatCircleText className="chat-circle-text" />
                    <EnvelopeSimple className="envelope-simple-instance" color="white" />
                    <div className="group-9" />
                  </div>
                </div>
              </div>
              <div className="home-shops">
              <ul>
                <li>
                    <Link>Home</Link>
                </li>
              </ul>
                <li>
                    <Link>Shops</Link>
                </li>
                <li>
                    <Link>Promotions</Link>
                </li>
                <li>
                    <Link>Contact Us</Link>
                </li>
                <li>
                    <Link>
                        About Us
                    </Link>
                </li>
              </div>
              <p className="auto-repair-near-me">
              <ul>
              <li>
              <Link> Auto Repair near me</Link>

              </li>
              <li>
                <Link> Top Cities</Link>
              </li>
              <li>
                <Link>
                All Cities
                </Link>
              </li>
              <li>
                <Link>  Shop Instructions</Link>
              </li>
               
              </ul>
              </p>
              <div className="overlap-2">
                <img className="logo" alt="Logo" src={logo}
                 />
                <p className="text-wrapper-5">
                  BikePulse is a dynamic software development team with a global presence through offices in Canada and the
                  UAE. Since 2012, we have been at the forefront of delivering cutting-edge web and mobile solutions,
                  providing customized software to clients worldwide. Our commitment to innovation and quality positions
                  BikePulse Techware Lab as a trusted partner, seamlessly merging technology with the excitement of biking.
                </p>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-6">Follow Us</div>
              </div>
            </div>
            <div className="social-media">
              <i className="bi bi-facebook" alt="Icon circle facebook"  />
              <i className="bi bi-instagram" alt="Icon circle" src="icon-circle-instagram.svg" />
              <i className="bi bi-youtube" alt="Icon circle youtube" src="icon-circle-youtube.svg" />
            </div>
          </div>
        </div>
      );
}

export default Footer;*/

import React from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/Logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-overlap">
 
        <div className="footer-text footer-common">Company</div>
<div className="footer-div footer-common">Resources</div>
          <div className="footer-overlap-group">
            <div className="footer-contact footer-common">Contact us</div>
            <p className="footer-p footer-text-common">© Developed by BikePulse Group IT 2023.</p>
            
              <div className="footer-business footer-common">Business Addres</div>
              <div className="footer-cooperate footer-common">Cooperative Office</div>
              <p className="footer-element-address footer-common">
                123 Bike Lane,
                <br />
                Cityville, State 56789,
                <br />
                Sri Lanka
              </p>
              <div className="footer-group-3">
                <p className="footer-element footer-common">
                  +94 11 556 8080
                  <br />
                 +94 11 528 9612
                  <br />
                  Bikepulse@gmail.com
                </p>
               
              </div>
           

              <div className="footer-overlap-group-2">
              
                  <div className="footer-text-corporate">Corporative Office</div>
                  <p className=" footer-bikepulse footer-common">
                    BikePulse Headquarters,
                    <br />
                    456 Gear Street,
                    <br />
                    Metropolis, State 67890,
                    <br />
                    Sri Lanka
                  </p>
                  <p className="footer-element-2 footer-element-common">
                    +94 11 677 8080
                    <br />
                    +94 11 598 9612
                    <br />
              head@gmail.com
                  </p>
               
                
              </div>
              
            
          </div>
          <div className="footer-navlink">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shops">Shops</Link>
              </li>
              <li>
                <Link to="/promotions">Promotions</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-navlink-2">
            <ul>
              <li>
                <Link to="/auto-repair">Auto Repair near me</Link>
              </li>
              <li>
                <Link to="/top-cities">Top Cities</Link>
              </li>
              <li>
                <Link to="/all-cities">All Cities</Link>
              </li>
              <li>
                <Link to="/shop-instructions">Shop Instructions</Link>
              </li>
            </ul>
          </div>
          
            <img className="footer-logo" alt="Logo" src={logo} />
            <p className="footer-text-wrapper-5 footer-common">
              BikePulse is a dynamic software development team with a global presence through offices in Canada and the
              UAE. Since 2012, we have been at the forefront of delivering cutting-edge web and mobile solutions,
              providing customized software to clients worldwide. Our commitment to innovation and quality positions
              BikePulse Techware Lab as a trusted partner, seamlessly merging technology with the excitement of biking.
            </p>
          
          
            <div className="footer-text-wrapper-6 footer-common">Follow Us</div>
         
       
        <div className="footer-social-media">
          <i className="bi bi-facebook"  />
          <i className="bi bi-instagram"  />
          <i className="bi bi-youtube" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
