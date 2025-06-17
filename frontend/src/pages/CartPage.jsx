import React from "react";
import { useCart } from "../context/CartContext";
import { deleteCartItem, updateCartItem } from "../api/cartAPI";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, fetchCart } = useCart();

  const handleDelete = async (id) => {
    await deleteCartItem(id);
    fetchCart();
  };

  const handleUpdate = async (id, newQty) => {
    if (newQty < 1) {
      await deleteCartItem(id);
    } else {
      await updateCartItem(id, newQty);
    }
    fetchCart();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800 tracking-tight">
          🛒 Your Shopping Cart
        </h2>

        {cart?.items?.length > 0 ? (
          <>
            <div className="space-y-4">
              {cart.items.map((item, index) => {
                if (!item.productId) return null;

                const key = item._id || item.productId?._id || index;

                return (
                  <div
                    key={key}
                    className="bg-white p-4 rounded-xl shadow flex flex-col sm:flex-row justify-between items-start sm:items-center transition-all"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.productId.name}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">
                        ₹{item.productId.price} x {item.quantity} ={" "}
                        <span className="text-green-600 font-semibold">
                          ₹{item.productId.price * item.quantity}
                        </span>
                      </p>
                    </div>

                    <div className="mt-4 sm:mt-0 flex items-center space-x-2">
                      <button
                        onClick={() =>
                          handleUpdate(item.productId._id, item.quantity + 1)
                        }
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition"
                      >
                        +
                      </button>
                      <span className="text-gray-700 font-medium px-2">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => {
                          if (item.quantity <= 1) {
                            handleDelete(item.productId._id);
                          } else {
                            handleUpdate(item.productId._id, item.quantity - 1);
                          }
                        }}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md transition"
                      >
                        -
                      </button>
                      <button
                        onClick={() => handleDelete(item.productId._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Total + Actions */}
            <div className="mt-8 p-6 rounded-xl bg-white shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Total:
              </h3>
              <p className="text-3xl font-bold text-green-600 mb-6">
                ₹
                {cart.items.reduce(
                  (total, item) =>
                    total + (item.productId?.price || 0) * item.quantity,
                  0
                )}
              </p>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link
                  to="/"
                  className="w-full sm:w-auto text-center px-6 py-3 rounded-md bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold transition"
                >
                  Continue Shopping
                </Link>
                <button
                  onClick={() => alert("Proceed to payment")}
                  className="w-full sm:w-auto text-center px-6 py-3 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold transition"
                >
                  Make a Payment
                </button>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500 text-lg">
            Your cart is empty.
          </p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
