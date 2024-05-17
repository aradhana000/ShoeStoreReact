import React from 'react';
import { StoreProvider } from './context/StoreContext';
import Seller from './components/Seller';
import Buyer from './components/Buyer';
import Cart from './components/Cart';
import CartIcon from './components/CartIcon';
import './App.css';

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <h1>Shoe Store</h1>
          <CartIcon />
        </header>
        <main>
          <Seller />
          <Buyer />
          <Cart />
        </main>
      </div>
    </StoreProvider>
  );
}

export default App;



