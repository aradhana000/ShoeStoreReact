import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import ProductRow from './ProductRow';

const ProductTable = () => {
    const { products } = useContext(ProductContext);

    return (
        <table>
            <thead>
                <tr>
                    <th>ShoeName</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity Available</th>
                    <th>Cart</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <ProductRow key={product.id} product={product} />
                ))}
            </tbody>
        </table>
    );
};

export default ProductTable;
