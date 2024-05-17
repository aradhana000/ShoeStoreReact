import React, { useState, useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import './Seller.css';

const Seller = () => {
  const { dispatch } = useContext(StoreContext);
  const [product, setProduct] = useState({ name: '', description: '', price: '', quantity: { small: 0, medium: 0, large: 0 } });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleQuantityChange = (size, value) => {
    setProduct({ ...product, quantity: { ...product.quantity, [size]: parseInt(value) } });
  };

  const handleSubmit = () => {
    dispatch({ type: 'ADD_PRODUCT', payload: product });
    setProduct({ name: '', description: '', price: '', quantity: { small: 0, medium: 0, large: 0 } });
  };

  return (
    <div className="Seller">
      <h2>Seller</h2>
      <input name="name" value={product.name} onChange={handleChange} placeholder="Name" />
      <input name="description" value={product.description} onChange={handleChange} placeholder="Description" />
      <input name="price" value={product.price} onChange={handleChange} placeholder="Price" />
      <input name="small" value={product.quantity.small} onChange={(e) => handleQuantityChange('small', e.target.value)} placeholder="Small Quantity" />
      <input name="medium" value={product.quantity.medium} onChange={(e) => handleQuantityChange('medium', e.target.value)} placeholder="Medium Quantity" />
      <input name="large" value={product.quantity.large} onChange={(e) => handleQuantityChange('large', e.target.value)} placeholder="Large Quantity" />
      <button onClick={handleSubmit}>Add Product</button>
    </div>
  );
};

export default Seller;


