import React from "react";
import { addToCart } from "../api/cartAPI";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { fetchCart } = useCart();

  const handleAdd = async () => {
    try {
      await addToCart(product._id);
      fetchCart();
    } catch (error) {
      console.error("Add to Cart Error:", error);
    }
  };

  return (
    <div className="w-full sm:w-[280px] bg-gradient-to-b from-white via-blue-100 to-white border border-blue-200 rounded-3xl shadow-md p-4 m-3 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Product Image */}
      <div className="h-48 w-full mb-4 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
        {product.imageurl ? (
          <img
            src={product.imageurl}
            alt={product.name}
            className="h-full object-contain transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <span className="text-gray-400">No Image</span>
        )}
      </div>

      {/* Product Info */}
      <div className="mb-2">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h2>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>
        {product.category && (
          <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-600 rounded-full">
            {product.category}
          </span>
        )}
      </div>

      {/* Price + Add to Cart */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-bold text-emerald-600">
          ₹{product.price || "N/A"}
        </p>
        <button
          onClick={handleAdd}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-400 text-white hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 ease-in-out shadow-md text-sm font-medium"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
