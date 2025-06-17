import React from 'react'
import instance from './axios'// adjust path if needed

export const addToCart = async (productId) => {
    try {
      const res = await instance.post("/cart", { productId });
      return res.data;
    } catch (err) {
      console.error("Add to cart failed", err);
    }
  };
export const getCartItems = async () =>{
    const res = await instance.get("/cart");
    return res.data;
}


export const updateCartItem = (productId, quantity) => {
  return instance.put('/cart', { productId, quantity });
};

export const deleteCartItem = (productId) => {
  return instance.delete(`/cart/${productId}`);
};
