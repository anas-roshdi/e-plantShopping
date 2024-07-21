import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { plant } = action.payload; // Destructure plant object from payload
      const existingItem = state.cartItems.find((item) => item.name === plant.name);

      if (existingItem) {
        // Item already exists, update quantity
        existingItem.quantity = existingItem.quantity + 1; // Update quantity
      } else {
        // New item, add it to the cart with quantity 1
        state.cartItems.push({ ...plant, quantity: 1 }); // Add plant with quantity
      }
    },
    removeItem: (state, action) => {
      const { plantName } = action.payload; // Destructure plant name
      state.cartItems = state.cartItems.filter((item) => item.name !== plantName);
    },
    updateQuantity: (state, action) => {
      const { plantName, newQuantity } = action.payload; // Destructure plant details
      const itemToUpdate = state.cartItems.find((item) => item.name === plantName);
      if (itemToUpdate) {
        itemToUpdate.quantity = newQuantity; // Update quantity
      }
    },
  },
});

// Export action creators
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
