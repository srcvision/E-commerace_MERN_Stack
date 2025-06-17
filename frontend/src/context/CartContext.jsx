// context/CartContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { getCartItems } from "../api/cartAPI"; // make sure this exists

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [] }); // default to empty cart

  const fetchCart = async () => {
    try {
      const res = await getCartItems();
      setCart(res);
    } catch (err) {
      console.error("Failed to fetch cart", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
