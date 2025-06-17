import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useCart();
  const cartCount = cart?.items?.length || 0;

  return (
    <nav className="bg-gradient-to-r from-indigo-100 to-blue-200 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <Link
        to="/"
        className="text-2xl text-black font-extrabold tracking-tight hover:text-gray-500 transition duration-200"
      >
        🛍️ EDelivry
      </Link>

      <Link
        to="/cart"
        className="relative text-black text-base font-semibold hover:text-gray-500 transition duration-200"
      >
        🛒 Cart
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-4 bg-red-500 animate-pulse text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md">
            {cartCount}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
