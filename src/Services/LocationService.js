// src/services/locationService.js
import axios from 'axios';

const API_URL = 'http://localhost:8096/locations';

export const saveLocation = async (location) => {
    const response = await axios.post(API_URL, location);
    return response.data;
};

export const getAllLocations = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getLocationById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};
