import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
 const store = configureStore({
    reducer: {
          // 'cart' is the name of the slice in the store, and it's managed by cartReducer
        cart: cartReducer,
    },
});
export default store
