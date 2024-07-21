import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice'; // Import action creators
import './CartItem.css';
import { updateQuantity } from './CartSlice'; // Import updateQuantity action creator



const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items); // Access cart items from state
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach(item => total += item.quantity * item.cost);
    return total.toFixed(2); // Format to two decimal places
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e); // Call function passed from parent component
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ plantName: item.name, newQuantity: item.quantity + 1 }));
  };
  
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ plantName: item.name, newQuantity: item.quantity - 1 }));
    }
  };
  

  const handleRemove = (item) => {
    dispatch(removeItem({ plantName: item.name }));
  };
  

  const calculateTotalCost = (item) => {
    return (item.quantity * item.cost).toFixed(2); // Format to two decimal places
  };

  // Total quantity variable (assuming a separate state is managed elsewhere)
  // let totalQuantity = 0; // Update based on cart changes

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      {/* Display total quantity elsewhere based on your state management */}
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={handleContinueShopping}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;
