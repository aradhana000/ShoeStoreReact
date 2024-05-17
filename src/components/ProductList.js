import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import Product from './Product';
import './ProductList.css';

const ProductList = () => {
  const { state } = useContext(StoreContext);

  return (
    <div className="ProductList">
      <h2>Product List</h2>
      {state.products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;


