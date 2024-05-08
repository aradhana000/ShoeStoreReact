import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';

const Cart = () => {
    const { products } = useContext(ProductContext);

    return (
        <div>
            <h2>Cart</h2>
            {/* Display cart items here */}
            <p>Total: {/* Logic to calculate total price */}</p>
        </div>
    );
};

export default Cart;
