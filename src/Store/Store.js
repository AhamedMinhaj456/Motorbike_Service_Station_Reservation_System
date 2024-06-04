import { configureStore } from "@reduxjs/toolkit";
import customerReducer from '../Slices/CustomerSlice.js';
import shopReducer from '../Slices/ShopSlice.js'; // Import shopReducer from the appropriate file

// Save state to local storage
const saveState = (state) => {
    try {
        const serializedCustomersState = JSON.stringify(state.customers);
        localStorage.setItem('customers', serializedCustomersState);

        const serializedShopsState = JSON.stringify(state.shops);
        localStorage.setItem('shops', serializedShopsState);
    } catch {
        // Ignore write errors
    }
};


// Middleware to persist state to local storage
const localStorageMiddleware = store => next => action => {
    const result = next(action);
    saveState(store.getState());
    return result;
};

// Middleware to clear local storage
const clearLocalStorageMiddleware = store => next => action => {
    if (action.type === 'customerId/clearStorage' || action.type === 'shopId/clearStorage') { // Update the action type to clear both customers and shops
        localStorage.removeItem('state'); // Change the storage key to 'state' to remove both customers and shops
    }
    return next(action);
};

const store = configureStore({
    devTools: true,
    reducer: {
        customers: customerReducer,
        shops: shopReducer // Add shopReducer to the reducers object
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware, clearLocalStorageMiddleware)
});

export default store;
