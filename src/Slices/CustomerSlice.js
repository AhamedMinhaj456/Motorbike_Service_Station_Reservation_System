import { createSlice } from "@reduxjs/toolkit";

// Load initial state from local storage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('customers');
        if (serializedState === null) {
            return "";
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return "";
    }
};

// Customer slice
const initialState = loadState() || "";

const customerSlice = createSlice({
    name: 'customerId',
    initialState,
    reducers: {
        addCustomerId(state, action) {
            return action.payload;
        },
        deleteCustomerId(state, action) {
            return "";
        },
        clearStorage(state) {
            return "";
        }
    }
});

const customerStatusSlice = createSlice({
    name: 'customerStatus',
    initialState,
    reducers: {
        addCustomerStatus(state, action) {
            return action.payload;
        },
        deleteCustomerStatus(state, action) {
            return "";
        },
        clearStorageStatus(state) {
            return "";
        }
    }
});

export const { addCustomerId, deleteCustomerId, clearStorage } = customerSlice.actions;
export const { addCustomerStatus, deleteCustomerStatus, clearStorageStatus } = customerStatusSlice.actions;
export default customerSlice.reducer;
