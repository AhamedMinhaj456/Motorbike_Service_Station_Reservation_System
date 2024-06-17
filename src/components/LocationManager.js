// src/components/LocationManager.js
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { saveLocation, getAllLocations } from '../Services/LocationService';
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

// Default center for Sri Lanka
const defaultCenter = {
    lat: 7.8731,
    lng: 80.7718
};

const LocationManager = () => {
    const [locations, setLocations] = useState([]);
    const [location, setLocation] = useState({ name: '', latitude: defaultCenter.lat, longitude: defaultCenter.lng });
    const [searchBox, setSearchBox] = useState(null);
    const mapRef = useRef(null);

    useEffect(() => {
        fetchLocations();
    }, []);

    const fetchLocations = async () => {
        const data = await getAllLocations();
        setLocations(data);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLocation({ ...location, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await saveLocation(location);
        fetchLocations();
    };

    const handleMapClick = useCallback((event) => {
        setLocation({
            ...location,
            latitude: event.latLng.lat(),
            longitude: event.latLng.lng()
        });
    }, [location]);

    const onLoadSearchBox = ref => {
        setSearchBox(ref);
    };

    const onPlacesChanged = () => {
        const places = searchBox.getPlaces();
        if (places.length === 0) return;
        const place = places[0];
        const newLocation = {
            name: place.formatted_address,
            latitude: place.geometry.location.lat(),
            longitude: place.geometry.location.lng(),
        };
        setLocation(newLocation);
        mapRef.current.panTo(newLocation);
    };

    return (
        <div>
            <h1>Location Manager</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={location.name} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Latitude:</label>
                    <input type="text" name="latitude" value={location.latitude} onChange={handleInputChange} readOnly />
                </div>
                <div>
                    <label>Longitude:</label>
                    <input type="text" name="longitude" value={location.longitude} onChange={handleInputChange} readOnly />
                </div>
                <button type="submit">Save Location</button>
            </form>
            <h2>Pick Location on Map</h2>
            <LoadScript googleMapsApiKey="YAIzaSyDF-G7660tVzFKgg7-dB5CEgq7RQkkU6Z4" libraries={['places']}>
                <StandaloneSearchBox onLoad={onLoadSearchBox} onPlacesChanged={onPlacesChanged}>
                    <input
                        type="text"
                        placeholder="Search for a location"
                        style={{
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `240px`,
                            height: `32px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                            position: "absolute",
                            left: "50%",
                            marginLeft: "-120px"
                        }}
                    />
                </StandaloneSearchBox>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={defaultCenter}
                    zoom={7}
                    onClick={handleMapClick}
                    onLoad={map => mapRef.current = map}
                >
                    <Marker position={{ lat: location.latitude, lng: location.longitude }} />
                </GoogleMap>
            </LoadScript>
            <h2>All Locations</h2>
            <LoadScript googleMapsApiKey="AIzaSyDF-G7660tVzFKgg7-dB5CEgq7RQkkU6Z4">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={defaultCenter}
                    zoom={7}
                >
                    {locations.map((loc) => (
                        <Marker key={loc.id} position={{ lat: loc.latitude, lng: loc.longitude }} />
                    ))}
                </GoogleMap>
            </LoadScript>
            <ul>
                {locations.map((loc) => (
                    <li key={loc.id}>{loc.name} - {loc.latitude}, {loc.longitude}</li>
                ))}
            </ul>
        </div>
    );
};

export default LocationManager;
