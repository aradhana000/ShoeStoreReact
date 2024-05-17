import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import './Product.css';

const Product = ({ product }) => {
  const { dispatch } = useContext(StoreContext);

  const addToCart = (size) => {
    if (product.quantity[size] > 0) {
      dispatch({ type: 'ADD_TO_CART', payload: { ...product, size } });
    }
  };

  return (
    <div className="Product">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <div>
        <button onClick={() => addToCart('small')} disabled={product.quantity.small <= 0}>
          Small ({product.quantity.small})
        </button>
        <button onClick={() => addToCart('medium')} disabled={product.quantity.medium <= 0}>
          Medium ({product.quantity.medium})
        </button>
        <button onClick={() => addToCart('large')} disabled={product.quantity.large <= 0}>
          Large ({product.quantity.large})
        </button>
      </div>
    </div>
  );
};

export default Product;



