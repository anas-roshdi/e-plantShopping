import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Import reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, // Associate reducer with 'cart' state slice
  },
});

export default store;
