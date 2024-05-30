// ShopSlice.js

import { createSlice } from "@reduxjs/toolkit";

const loadState = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return null; 
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error("Error loading state from local storage:", err);
        return null; 
    }
};

const initialShopState = loadState('shops') || "";

const shopSlice = createSlice({
    name: 'shopId',
    initialState: initialShopState,
    reducers: {
        addShopId(state, action) {
            if (action.payload) { // Check if payload is not empty
                return action.payload;
            }
            return state; // If payload is empty, return current state
        },
        deleteShopId(state) {
            return {};
        },
        clearStorage(state) {
            return {};
        }
    }
});

export const { addShopId, deleteShopId, clearStorage } = shopSlice.actions;

export default shopSlice.reducer;
