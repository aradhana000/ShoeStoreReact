import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import './CartIcon.css';

const CartIcon = () => {
  const { state } = useContext(StoreContext);
  const totalItems = state.cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="CartIcon">
      <i className="fas fa-shopping-cart"></i>
      <span className="CartIcon-count">{totalItems}</span>
    </div>
  );
};

export default CartIcon;

