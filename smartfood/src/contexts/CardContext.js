// src/contexts/CartContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const CartContext = createContext();

// Create the provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    if (!item || !item.menuid) return; // Check if the item or item.menuid is undefined

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.menuid === item.menuid);
      if (existingItem) {
        // If the item already exists in the cart, increment its quantity
        return prevItems.map((i) =>
          i.menuid === item.menuid ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // If the item doesn't exist in the cart, add it with a quantity of 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (menuid) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.menuid !== menuid)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};


