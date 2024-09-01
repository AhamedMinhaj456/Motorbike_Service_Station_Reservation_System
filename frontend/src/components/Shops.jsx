import React,{useState,useEffect} from "react";
import './RightBar';
import './shops.css';
import shopImg from "../assets/shops_img.png"
import velocare from "../assets/velocare.png"
import location from "../assets/location.png";
import star2 from "../assets/star2.png";
import tickmark from "../assets/tickmark.png";
import { useNavigate } from "react-router-dom";
import Rightbar from "./RightBar";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addShopId } from '../Slices/ShopSlice.js';


function Shops() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [shops, setShops] = useState([
        { shopId: 1, shopName: 'Shop 1', shopAddress: 'Location 1',contactNumber:'+94 11 455 4665', openingHours: 'Opens daily 8.00 AM - 6.00 PM',services: ['Company Services only', 'Repair & Maintenance'],},
        { shopId: 2, shopName: 'Shop 2', shopAddress: 'Location 2',contactNumber: '+94 11 455 6650', openingHours: 'Opens daily 8.00 AM - 6.00 PM', services: ['Full services', 'Repair & Maintenance'], },
        { shopId: 3, shopName: 'Shop 3', shopAddress: 'Location 3',contactNumber: '+94 26 555 4623', openingHours: 'Opens daily 8.00 AM - 6.00 PM', services: ['Full services', 'Company Services', 'Repair & Maintenance'], },
        { shopId: 4,shopName: 'Shop 4', shopAddress: 'Location 4',contactNumber: '+94 77 123 4567', openingHours: 'Opens daily 9.00 AM - 7.00 PM', services: ['Full services', 'Repair & Maintenance'],},
        { shopId: 5, shopName: 'Shop 5', shopAddress: 'Location 5', contactNumber: '+94 71 987 6543', openingHours: 'Opens daily 9.00 AM - 7.00 PM', services: ['Company Services only'],}
      ]);
      
      useEffect(() => {
        fetchData();
      }, []);
      
      
      const fetchData = async () => {
        try {
          // Example using axios:
          const response = await axios.get('http://localhost:8095/shop/getShop');
          setShops(response.data);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };

      const handleReserveClick = (shopId) => {
        dispatch(addShopId(shopId));
        //navigate(`/shop/${shopId}`);
        navigate('/reservation');
        //alert(shopId)
      };
    
    
    useEffect(() => {
        // Your logic to check if user is logged in (e.g., checking session, local storage, etc.)
        const userIsLoggedIn = checkIfUserIsLoggedIn(); // Implement this function
    
        // Update state based on whether user is logged in
        setIsLoggedIn(userIsLoggedIn);
      }, []);
    
      // Function to check if user is logged in (replace this with your actual authentication logic)
      const checkIfUserIsLoggedIn = () => {
        // Your authentication logic here (e.g., checking session, local storage, etc.)
        // Return true if user is logged in, false otherwise
        // Example:
        return localStorage.getItem("token") ? true : false;
      };

      // search 
        const [searchTerm, setSearchTerm] = useState('');
        
    
        const handleSearch = async (e) => {
            e.preventDefault();
            const response = await axios.get('http://localhost:8095/shop/search', {
                params: { q: searchTerm }
            });
            setShops(response.data);
        };

    return (
        <div className="shops-container">
       
       
       {isLoggedIn && <Rightbar />}
            <div className="image-section">
                <img src={shopImg} className="full-width-image" />

            </div>
            
            <div className="main-cards-container">
                <div className="main-cards">
                    <h2>Professional Services</h2>
                    <p>Explore a range of professional bike services from certified technicians. Our skilled professionals are equipped to handle everything from routine maintenance to complex repairs, ensuring your bike is in top-notch condition.</p>
                </div>
                <div className="main-cards">
                    <h2>Quality Parts</h2>
                    <p>Discover genuine and high-quality bike parts at our shops. We offer a diverse selection of parts from trusted manufacturers, ensuring durability and performance. Upgrade your ride with top-tier components available at competitive prices.</p>

                </div>
                <div className="main-cards">
                    <h2>Emergency Assistance</h2>
                    <p>For urgent matters, our emergency assistance feature is at your service. Access real-time chat support for immediate help with any bike-related concerns. Our dedicated team is available 24/7 to provide quick and reliable assistance.</p>
                </div>
            </div>
            <div className="line"></div>
            <div className="search-box">
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    placeholder="Search by Shop Name, Address, or Email" 
                />
                <button type="submit">Search</button>
            </form>
            </div>
            
            <div className="see-all-container">
                
            <div className="cards-container-grid">
             {shops.map((shop) => (
                    <div key={shop.shopId} className="card">
                    <div className="img-box">

                        <img src={require('../assets/bike9.jpg')} alt="Card1" />
                    </div>
                    <h1 className="card-heading">{shop.shopName}</h1>
                    <p>
                        <i className="fa fa-location-arrow" aria-hidden="true" /> {shop.shopAddress}
                    </p>
                    <p>
                        <i className="fa fa-phone" aria-hidden="true" /> {shop.contactNumber}
                    </p>
                    <p>
                        <img src={require('../assets/location.png')} alt="Location Image" />
                        <a href="#" className="direction-link">
                        Get Direction
                        </a>
                    </p>
                    <div className="details-content">
                        {/* <p>{shop.openingHours}</p>
                        {shop.services.map((service, index) => (
                        <p key={index}>
                            <img src={require('../assets/tickmark.png')} alt="Tick Mark" /> {service}
                        </p>
                        ))} */}
                        <div className="details-button">
                        
                            <button className="button-view" onClick={() => handleReserveClick(shop.shopId)}
                            >Reserve Now</button>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
                
                <div className="show-more-button-container">
                    <button className="show-more-button">Show More</button>
                </div>
                <div className="shop-bottom-text">
                    Discover the best bike service shops near you! Explore a curated list of trusted and reliable service providers on the BikePulse<br></br> platform. From quick repairs to top-notch maintenance, our featured shops are here to keep your ride in peak condition. <br></br>Scroll through and find the perfect match for your biking needs!
                </div>

            </div>
        </div>
    );
}

export default Shops;