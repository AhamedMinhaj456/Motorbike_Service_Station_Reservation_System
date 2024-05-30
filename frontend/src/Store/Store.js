import { configureStore } from "@reduxjs/toolkit";
import customerReducer from '../Slices/CustomerSlice.js';
import shopReducer from '../Slices/ShopSlice.js'; // Import shopReducer from the appropriate file

// Save state to local storage
const saveState = (state) => {
    try {
        const serializedCustomersState = JSON.stringify(state.customers);
        localStorage.setItem('customerId', serializedCustomersState);

        const serializedShopsState = JSON.stringify(state.shops.shopId);
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
// const clearLocalStorageMiddleware = store => next => action => {
//     if (action.type === 'customerId/clearStorage' || action.type === 'shopId/clearStorage') {
//         localStorage.removeItem('customerId'); // Clear the correct key
//         localStorage.removeItem('shops'); // Clear the shops as well
//     }
//     return next(action);
// };

// Middleware to clear local storage
const clearLocalStorageMiddleware = store => next => action => {
    if (action.type === 'logout') {
        localStorage.removeItem('customerId'); // Clear the correct key
        localStorage.removeItem('shops'); // Clear the shops as well
    }
    return next(action);
};

const store = configureStore({
    devTools: true,
    reducer: {
        customers: customerReducer,
        shops: shopReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware, clearLocalStorageMiddleware)
});

export default store;

