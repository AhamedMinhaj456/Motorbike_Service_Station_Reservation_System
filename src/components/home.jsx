import React from "react";
import bike5 from "../assets/bike5.jpg"
import reservenow from "../assets/reserve_now.png"
import registershop from "../assets/register_shop.png"
import bike3 from "../assets/bike3.png"
import bike6 from "../assets/bike6.jpg"
import srilanka from "../assets/SriLanka.png"
import tickmark from "../assets/tickmark.png";
import location from "../assets/location.png";
import mobileapp from "../assets/mobile_app.png"
import livechat from "../assets/live_chat.png"
import filter from "../assets/filtering_feature.png"
import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
import './home.css';
import CircularProgressBar from './CircularProgressBar';



function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="home-carousel">
      <Carousel>
        <Carousel.Item>
          <img src={bike5} className="d-block w-100" alt="First slide" />
          <Carousel.Caption>
            <h1>BEST BOOKING SOFTWARE FOR MOTOR BIKE REPAIR SERVICES</h1>
            <div className="button-container">
              <button className="carousel-button">Reserve Now
                <img src={reservenow} alt="Reserve Now Icon" className="reserve-now-icon" />
              </button>
              <button className="carousel-button">Register Shop
                <img src={registershop} alt="Reserve Now Icon" className="reserve-now-icon" />
              </button>
            </div>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
          <img src={bike6} className="d-block w-100" alt="Second slide" />

          <Carousel.Caption>
            <h1>REVITIALIZE YOUR BIKE WITH US</h1>
            <div className="button-container">
              <button className="carousel-button">Reserve Now
                <img src={reservenow} alt="Reserve Now Icon" className="reserve-now-icon" />
              </button>
              <button className="carousel-button">Register Shop
                <img src={registershop} alt="Reserve Now Icon" className="reserve-now-icon" />
              </button>
            </div>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>

          <img src={bike5} className="d-block w-100" alt="Third slide" />
          <Carousel.Caption>
            <h1>TRUSTED BIKE REPAIRS, READY RIDE!</h1>
            <div className="button-container">
              <button className="carousel-button">Reserve Now
                <img src={reservenow} alt="Reserve Now Icon" className="reserve-now-icon" />
              </button>
              <button className="carousel-button">Register Shop
                <img src={registershop} alt="Reserve Now Icon" className="reserve-now-icon" />
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={bike5} className="d-block w-100" alt="First slide" />
          <Carousel.Caption>
            <h1>BEST BOOKING SOFTWARE FOR MOTOR BIKE REPAIR SERVICES</h1>
            <div className="button-container">
              <button className="carousel-button">Reserve Now
                <img src={reservenow} alt="Reserve Now Icon" className="reserve-now-icon" />
              </button>
              <button className="carousel-button">Register Shop
                <img src={registershop} alt="Reserve Now Icon" className="reserve-now-icon" />
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      <div className="home-body">
        <img src={bike3} alt="Home body" className="home-body-image" />
        <div className="home-body-text">
          <p className="resetting-text">We&#39;re resetting bike care standards.</p>
          <p>One service at a time.</p>
          <div className="circles-container">
            <CircularProgressBar label="10M+" animate={animate} />
            <CircularProgressBar label="50M+" animate={animate} />

          </div>

        </div>
        <div className="home-customer-text">
          <p>Customers</p>
          <p>Services</p>

        </div>
      </div>
      <div class="search-container">
        <input type="text" class="search-bar" placeholder="Search by City, District, or Zip Code" />
        <button type="submit" class="search-button"><i class="fa fa-search"></i></button>

        <div className="service-station-container">
          <p className="service-station-text">1000+ Service Stations</p>
        </div>
        <div class="container">
          <div class="card-container">
            <div class="card">
              <div class="details">
                <div class="column">
                  <p className="text-heading">Velocare</p>
                  <p>No.64, Galle Street, Colombo-06</p>
                  <p>+94114554665</p>
                  <p>
                    <img src={location} alt="Location Image" />
                    <a href="#" className="direction-link">Get Direction</a>
                  </p>
                </div>
                <div class="details-content">
                  <p>Opens daily 8.00 AM - 6.00 PM</p>
                  <p><img src={tickmark} alt="Tick Mark" />Full services</p>
                  <p><img src={tickmark} alt="Tick Mark" />Repair & Maintenance</p>
                </div>

                <div class="buttons">
                  <button className="button-locate">Locate Now</button>
                  <button className="button-reservation">Make a Reservation</button>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="details">
                <div class="column">
                  <p className="text-heading">VroomVille</p>
                  <p>No 24 Main Street,
                    Piyagama</p>
                  <p>+94 26 555 4623</p>
                  <p>
                    <img src={location} alt="Location Image" />
                    <a href="#" className="direction-link">Get Direction</a>
                  </p>

                </div>
                <div class="details-content">
                  <p>Opens daily 8.00 AM - 6.00 PM</p>
                  <p><img src={tickmark} alt="Tick Mark" />Full services</p>
                  <p><img src={tickmark} alt="Tick Mark" />Company Services</p>
                  <p><img src={tickmark} alt="Tick Mark" />Repair & Maintenance</p>
                </div>

                <div class="buttons">
                  <button className="button-locate">Locate Now</button>
                  <button className="button-reservation">Make a Reservation</button>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="details">
                <div class="column">
                  <p className="text-heading">Asphalt Motors</p>
                  <p>Homagama villa Street,
                    Ambalangode-06</p>
                  <p>+94 11 455 4665</p>
                  <p>
                    <img src={location} alt="Location Image" />
                    <a href="#" className="direction-link">Get Direction</a>
                  </p>
                </div>
                <div class="details-content">
                  <p>Opens daily 8.00 AM - 6.00 PM</p>
                  <p><img src={tickmark} alt="Tick Mark" /> Company Services only</p>
                  <p><img src={tickmark} alt="Tick Mark" />Repair & Maintenance</p>
                </div>

                <div class="buttons">
                  <button className="button-locate">Locate Now</button>
                  <button className="button-reservation">Make a Reservation</button>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div class="srilanka-image-container">
          <img src={srilanka} alt="Image" class="srilanka-image" />
        </div>


      </div>
      <div className="services-container">
        <p className="services-heading">Services We Offer</p>
        <div className="horizontal-scroll-container">
          <div className="card-horizontal">
          <img src={mobileapp} alt="Payment Options" />
            <h3 className="card-title">Flexible Payment Options</h3>
            <p className="card-text">Enjoy the freedom of flexible payment options. Pay online in advance during reservation or conveniently settle the bill after your bike is back in top-notch condition. Your choice, your convenience.</p>
          </div>
          <div className="card-horizontal">
          <img src={mobileapp} alt="Mobile App" />
            <h3 className="card-title">Mobile App Development</h3>
            <p className="card-text">A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
          </div>
          <div className="card-horizontal">
          <img src={livechat} alt="Live Chat" />
            <h3 className="card-title">Live Chat Box</h3>
            <p className="card-text">A live chat box on your website acts as a friendly guide in the digital realm, instantly connecting visitors with assistance. It's a modern tool that transforms your site into a responsive and approachable space, catering to the expectations of today's online audience.</p>
          </div>
          <div className="card-horizontal">
          <img src={filter} alt="Filtering Feature" />
            <h3 className="card-title">Filtering Feature</h3>
            <p className="card-text">Filtering parts of the bike is like crafting a tailored experience for your vehicle's needs. It's about personalizing your bike service, ensuring it aligns seamlessly with the digital age's demand for precision and efficiency.</p>
          </div>
          <div className="card-horizontal">
          <img src={livechat} alt="Service Progress" />
            <h3 className="card-title">Service Progress System</h3>
            <p className="card-text">Stay in the loop with real-time service progress updates. Our system keeps you informed every step of the way, ensuring transparency and peace of mind throughout the bike service jo</p>
          </div>

        </div>
      </div>

    </div>

  );
}

export default Home;