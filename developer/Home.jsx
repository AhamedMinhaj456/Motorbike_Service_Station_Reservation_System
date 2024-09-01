import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import "./Home.css"
import mission from "../assets/Mission.png"
import vision from "../assets/Vision.png"
import srilanka from "../assets/SriLanka.png"
import bike3 from "../assets/bike3.png"
import bike5 from "../assets/bike5.jpg"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Carousel } from "react-bootstrap";
import { FaBox } from 'react-icons/fa';



const Home = () => {

      const [locationClicked, setLocationClicked] = useState(false);

      const handleLocateNowClick = () => {
    
        setLocationClicked(!locationClicked);
    
    
        console.log('Locate Now button clicked!');
      };
    
   

    return (
        <div className="home-website">
        
            <div className="div">
            <div className="home-page-body-carousel">
              <Carousel>
                <Carousel.Item>
                <img src={bike5}  className="d-block w-100" alt="First slide" />
                  <Carousel.Caption>
                    <h1>BEST BOOKING SOFTWARE FOR MOTOR BIKE REPAIR SERVICES</h1>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={bike5} className="d-block w-100" alt="Second slide" />
    
                  <Carousel.Caption>
                    <h1>REVITIALIZE YOUR BIKE WITH US</h1>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                 
                <img src={bike5} className="d-block w-100" alt="Third slide" />
                  <Carousel.Caption>
                    <h1>TRUSTED BIKE REPAIRS, READY RIDE!"</h1>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
                <div className="overlap-3">
                    <div className="mission">
                        <div className="text-wrapper-8">Our Mission</div>
                        <p className="empowering-journeys">
                            <span className="span">
                                Empowering Journeys, Connecting Riders.
                                <br />
                            </span>
                            <span className="text-wrapper-9">
                                <br />
                                Through innovative technology and a commitment to excellence, we aim to create a community where riders
                                feel confident and inspired to explore their passion for two-wheel adventures
                            </span>
                        </p>
                        <div className="mission-image">
                            <div className="overlap-group-3">
                            
                                <img className="removal" alt="Removal" src={mission} />
                            </div>
                        </div>
                    </div>
                  
                    <div className="vision">
                        <div className="text-wrapper-10">Our Vision</div>
                        <p className="revolutionizing">
                            <span className="span">
                                Revolutionizing Riding Experiences, One Reservation at a Time.
                                <br />
                            </span>
                            <span className="text-wrapper-9">
                                <br />
                                We envision a future where every motorbike owner experiences the thrill of the road without any concerns
                                about maintenance or service.
                            </span>
                        </p>
                        <img className="img" alt="Removal" src={vision} />
                    </div>
                   
                </div>
                <div className="shops">
                    <img className="sri-laka-pins" alt="Sri laka pins" src={srilanka} />
                    <div className="vroom-ville">
                        <div className="overlap-4">
                            <div className="overlap-5">
                                <div className="open-details">
                                    <div className="overlap-group-4">
                                        <p className="opens-daily-AM">
                                            <span className="text-wrapper-11">
                                                Opens daily 8.00 AM - 5.00 PM
                                                <br />
                                                <br />
                                            </span>
                                            <span className="text-wrapper-12">
                                                <br />
                                            </span>
                                        </p>
                                        <div className="group-10">
                                            <p className="full-services">
                                                Full Services
                                                <br />
                                                Company Services
                                                <br />
                                                Repair &amp; Maintenance
                                            </p>
                                            <div>
                                                <i className="bi bi-check2-circle check-perspective" aria-hidden="true" />
                                                <i className="bi bi-check2-circle-perspective" aria-hidden="true" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="div-2">
                                    <div className="overlap-group-wrapper">
                                        <div className="overlap-group-5">
                                            <button className="text-wrapper-13" onClick={handleLocateNowClick}>Locate Now</button>
                                        </div>
                                    </div>
                                    <div className="overlap-wrapper">
                                        <div className="overlap-6">
                                            <button className="text-wrapper-13">Make a Reservation</button>
                                        </div>
                                    </div>
                                </div>
                                
                                    <span className="text-wrapper-14">
                                        No 24 Main Street,
                                        <br />
                                        Piyagama
                                        <br />
                                        +94 26 555 4623
                                        <br />
                                    </span>
                                    <span className="text-wrapper-15">&nbsp;&nbsp;&nbsp;&nbsp; </span>
                                    <a  href="your_destination_url" className="text-wrapper-16">
                                        Get directions
                                        <br />
                                    </a>
                              
                                <i
                                    className="bi bi-geo location-perspective"
                                    alt="Location perspective"></i>

                            </div>
                            <div className="text-wrapper-17">VroomVille</div>
                        </div>
                    </div>
                    <div className="asphalt-motors">
                        <div className="overlap-4">
                       
                            <div className="overlap-7">
                           
                                <div className="open-details-2">
                                    <div className="overlap-group-6">
                                     
                                            <span className="text-wrapper-11">
                                                Opens daily 8.30 AM - 7.00 PM
                                                <br />
                                                <br />
                                            </span>
                                            <span className="text-wrapper-12">
                                                <br />
                                            </span>
                                    
                                        <div className="group-11">
                                            <p className="company-services">
                                                Company services only
                                                <br />
                                                No Repair Services
                                            </p>
                                        
                                                <i
                                                    className="bi bi-check2-circle check-perspective-4"
                                                    />
                                                <i
                                                    className="bi bi-check2-circle check-perspective-4"
                                                    
                                                />
                                               
                                          

                                        </div>
                                    </div>
                                </div>
                                <div className="div-2">
                                    <div className="overlap-group-wrapper">
                                        <div className="overlap-group-5">
                                            <button className="text-wrapper-13" onClick={handleLocateNowClick}>Locate Now</button>
                                        </div>
                                    </div>
                                    <div className="overlap-wrapper">
                                        <div className="overlap-6">
                                            <button className="text-wrapper-13" onClick={handleLocateNowClick}>Make a Reservation</button>
                                        </div>
                                    </div>
                                </div>
                                <i
                                    className="bi bi-geo location-perspective"
                                    alt="Location perspective"></i>
                             
                                    <span className="text-wrapper-14">
                                        Homagama villa Street,
                                        <br />
                                        Ambalangode-06
                                        <br />
                                        +94 11 455 4665
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                    </span>
                                    <a href="your_destination_url" className="text-wrapper-16">
                                        Get directions
                                        <br />
                                    </a>
                               
                            </div>
                            <div className="text-wrapper-18">Asphalt Motors</div>
                        </div>
                    </div>
                    <div className="velocare">
                        <div className="overlap-4">
                            <div className="overlap-7">
                                <div className="open-details-3">
                                    <div className="overlap-group-6">
                                        <div className="overlap-group-7">
                                            <div className="full-services-repair">
                                                Full services
                                                <br />
                                                Repair &amp; Maintenance
                                            </div>
                                            <p className="opens-daily-AM">
                                                <span className="text-wrapper-11">
                                                    Opens daily 8.00 AM - 6.00 PM
                                                    <br />
                                                    <br />
                                                </span>
                                                <span className="text-wrapper-12">
                                                    <br />
                                                </span>
                                            </p>
                                        </div>
                                        <div>

                                            <i
                                                className="bi bi-check2-circle check-perspective-6"
                                                 />


                                            <i
                                                className="bi bi-check2-circle check-perspective-5"
                                               

                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="div-2">
                                    <div className="overlap-group-wrapper">
                                        <div className="overlap-group-5">
                                            <button className="text-wrapper-13" onClick={handleLocateNowClick}>
                                                Locate Now
                                            </button>
                                        </div>
                                    </div>
                                    <div className="overlap-wrapper">
                                        <div className="overlap-6">
                                            <button className="text-wrapper-13 " onClick={handleLocateNowClick}>Make a Reservation</button>
                                        </div>
                                    </div>
                                </div>
                                <i
                                    className="bi bi-geo location-perspective"
                                    alt="Location perspective"

                                />
                                
                                    <span className="text-wrapper-14">
                                        No 64, Galle Street,
                                        <br />
                                        Colombo-06
                                        <br />
                                        +94 11 455 4665
                                        <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                    </span>
                                    <a href="your_destination_url" className="text-wrapper-16">
                                        Get directions
                                        <br />
                                    </a>
                                  
                               
                            </div>
                            <div className="text-wrapper-19">Volecare</div>
                        </div>
                    </div>
                   
                    <div className="text-wrapper-20">1000+ Service Stations</div>
                  

                      
                            <button className="bi bi-search search-btn">
                                
                            </button>
                           

                            <input
                                type="text"
                                className="text-wrapper-21"
                                placeholder="Search by city, District or Zip code"
                            />
                      
                   

                </div>
                <div className="promotions">
                    <p className="we-re-resetting-bike">We&#39;re resetting bike care standards.</p>
                    <p className="text-wrapper-22">One Service at a time.</p>
                    <img className="side-img"  src={bike3} />
                    <div className="overlap-9">
                        <div className="group-12">
                         
                                <img className="ellipse" alt="Ellipse" src="ellipse-5.svg" />
                                <img className="ellipse-2" alt="Ellipse" src="ellipse-6.svg" />
                                <span className="text-wrapper-common-23 text-wrapper-23">10M+</span>
                           
                            <span className="text-wrapper-common-23 text-wrapper-24">50M+</span>
                        </div>
                        <div className="group-13">
                            <div className="overlap-10">
                                <img className="ellipse-3" alt="Ellipse" src="image.svg" />
                                <img className="ellipse-4" alt="Ellipse" src="ellipse-6-2.svg" />
                            </div>
                        </div>
                    </div>
                    <span className="text-wrapper-25">Customers</span>
                    <span className="text-wrapper-26">Services</span>
              
               
                </div>
                <div className="frame">
                    <div className="action-button vector-wrapper">
                        <i className=" bi bi-card-checklist img-2 custom-icon" alt="Vector" />
                    </div>
                    <div className="action-button reserve-wrapper">
                        <i className="bi bi-pencil-square img-2 custom-icon" alt="Reserve" />
                    </div>
                    <div className="action-button place-marker-wrapper">
                        <i className=" bi bi-geo-alt img-2 custom-icon" alt="Place marker" />
                    </div>
                    <div className="action-button payment-history-wrapper">
                        <i className="bi bi-hourglass-split payment-history custom-icon" alt="Payment history" />
                    </div>
                    <div className="action-button earth-planet-wrapper">
                        <i className=" bi bi-globe-americas img-2 custom-icon" alt="Earth planet" />
                    </div>
                    <div className="text-wrapper-common text-wrapper-32">Island Reach</div>
                    <div className="text-wrapper-common text-wrapper-33">Real Time Update</div>
                    <div className="text-wrapper-common text-wrapper-34">Reservation Management</div>
                    <div className=" text-wrapper-common text-wrapper-35">Multiple Shops Locations</div>
                    <div className="text-wrapper-common text-wrapper-36">Reservation History</div>
                </div>
            </div>
        </div>
    )
}

export default Home