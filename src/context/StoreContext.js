import React, { createContext, useReducer } from 'react';

const initialState = {
  products: [],
  cart: []
};

const StoreContext = createContext(initialState);

const storeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case 'ADD_TO_CART':
      const updatedProducts = state.products.map(product => {
        if (product.name === action.payload.name) {
          return {
            ...product,
            quantity: {
              ...product.quantity,
              [action.payload.size]: product.quantity[action.payload.size] - 1
            }
          };
        }
        return product;
      });

      const existingCartItem = state.cart.find(item => item.name === action.payload.name && item.size === action.payload.size);

      const updatedCart = existingCartItem
        ? state.cart.map(item =>
            item.name === action.payload.name && item.size === action.payload.size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.cart, { ...action.payload, quantity: 1 }];

      return {
        ...state,
        products: updatedProducts,
        cart: updatedCart
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      };
    case 'CANCEL_ORDER':
      const restoredProducts = state.products.map(product => {
        const cartItems = state.cart.filter(cartItem => cartItem.name === product.name);
        const restoredQuantities = cartItems.reduce((acc, item) => {
          acc[item.size] += item.quantity;
          return acc;
        }, { small: 0, medium: 0, large: 0 });

        return {
          ...product,
          quantity: {
            small: product.quantity.small + restoredQuantities.small,
            medium: product.quantity.medium + restoredQuantities.medium,
            large: product.quantity.large + restoredQuantities.large
          }
        };
      });

      return {
        ...state,
        products: restoredProducts,
        cart: []
      };
    default:
      return state;
  }
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };

