import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import './Cart.css';

const Cart = () => {
  const { state, dispatch } = useContext(StoreContext);

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    dispatch({ type: 'CLEAR_CART' });
  };

  const handleCancelOrder = () => {
    dispatch({ type: 'CANCEL_ORDER' });
  };

  const totalPrice = state.cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);

  return (
    <div className="Cart">
      <h2>Cart</h2>
      {state.cart.map((item, index) => (
        <div key={index} className="Cart-item">
          <p>{item.name} ({item.size}) - ${item.price} x {item.quantity}</p>
          <p>Description: {item.description}</p>
        </div>
      ))}
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <button onClick={handlePlaceOrder}>Place Order</button>
      <button onClick={handleCancelOrder}>Cancel Order</button>
    </div>
  );
};

export default Cart;



