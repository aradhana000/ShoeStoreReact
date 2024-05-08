import React from 'react';
import { ProductProvider } from './ProductContext';
import ProductTable from '../../components/ProductTable';
import Cart from './components/Cart';
const App = () => {
  return (
    <ProductProvider>
      <div className="App">
        <h1>Shoe Store</h1>
        <ProductTable />
        <Cart />
      </div>
    </ProductProvider>
  );
};

export default App;
