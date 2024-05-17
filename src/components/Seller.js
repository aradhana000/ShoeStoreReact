
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
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={product.name} onChange={handleChange} placeholder="Name" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input id="description" name="description" value={product.description} onChange={handleChange} placeholder="Description" />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input id="price" name="price" type="number" value={product.price} onChange={handleChange} placeholder="Price" />
      </div>
      <div className="form-group">
        <label htmlFor="small">Small Quantity</label>
        <input id="small" name="small" type="number" value={product.quantity.small} onChange={(e) => handleQuantityChange('small', e.target.value)} placeholder="Small Quantity" />
      </div>
      <div className="form-group">
        <label htmlFor="medium">Medium Quantity</label>
        <input id="medium" name="medium" type="number" value={product.quantity.medium} onChange={(e) => handleQuantityChange('medium', e.target.value)} placeholder="Medium Quantity" />
      </div>
      <div className="form-group">
        <label htmlFor="large">Large Quantity</label>
        <input id="large" name="large" type="number" value={product.quantity.large} onChange={(e) => handleQuantityChange('large', e.target.value)} placeholder="Large Quantity" />
      </div>
      <button onClick={handleSubmit}>Add Product</button>
    </div>
  );
};

export default Seller;
