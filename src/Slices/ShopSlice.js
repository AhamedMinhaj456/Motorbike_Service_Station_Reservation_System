import { createSlice } from "@reduxjs/toolkit";

// Load initial state from local storage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('shops');
        if (serializedState === null) {
            return ""; // Assuming empty string as initial state if nothing found in local storage
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return ""; // Assuming empty string as initial state if there's an error
    }
};

// Shop slice
const initialState = loadState() || "";

const shopSlice = createSlice({
    name: 'shopId',
    initialState,
    reducers: {
        addShopId(state, action) {
            return action.payload; // Set the state to the provided shopId
        },
        deleteShopId(state, action) {
            return ""; // Clear the state (assuming you want to delete the selected shopId)
        },
        clearStorage(state) {
            return ""; // Clear the state (assuming you want to clear the stored shopId)
        }
    }
});

export const { addShopId, deleteShopId, clearStorage } = shopSlice.actions;
export default shopSlice.reducer;
