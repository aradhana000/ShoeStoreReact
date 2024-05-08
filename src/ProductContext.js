import React, { createContext, useState } from 'react';

const ProductContext = createContext({
    products: [],
    addToCart: () => {},
});

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const addToCart = (product) => {
        // Add product to cart logic here
        setProducts([...products, product]);
    };

    return (
        <ProductContext.Provider value={{ products, addToCart }}>
            {children}
        </ProductContext.Provider>
    );
};

export { ProductContext, ProductProvider };
