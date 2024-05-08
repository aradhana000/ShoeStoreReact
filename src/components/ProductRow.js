import React from 'react';

const ProductRow = ({ product }) => {
    return (
        <tr>
            <td>{product.ShoeName}</td>
            <td>{product.Description}</td>
            <td>{product.price}</td>
            <td>{product.QuantityAvaillable}</td>
            <td>{/* Add to cart button logic here */}</td>
        </tr>
    );
};

export default ProductRow;
