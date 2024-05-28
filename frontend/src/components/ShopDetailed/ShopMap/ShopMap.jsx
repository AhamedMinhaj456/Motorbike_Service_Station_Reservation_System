import React from 'react';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './ShopMap.css';

function ShopMap({ name, address, contact }) {
  return (
    <div className="shop-location-container">
      <div className="shop-info">
        <div className="shop-heading">
          <h2><FaMapMarkerAlt /> Shop Location</h2>
        </div>
        <div className="shop-details">
          <p><strong>{name}</strong></p>
          <p><FaMapMarkerAlt /> {address}</p>
          <p><FaPhone /> {contact}</p>
        </div>
      </div>
      <div className="google-map">
        <iframe
          title="shop-location"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={`https://maps.google.com/maps?q=${encodeURI(address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
        ></iframe>
      </div>
    </div>
  );
}

export default ShopMap;
