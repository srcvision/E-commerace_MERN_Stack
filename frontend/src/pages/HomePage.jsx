import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import debounce from "lodash.debounce";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    minPrice: "",
    maxPrice: "",
  });

  const fetchProducts = async () => {
    const params = {};
    if (filters.search) params.search = filters.search;
    if (filters.category) params.category = filters.category;
    if (filters.minPrice) params.minPrice = filters.minPrice;
    if (filters.maxPrice) params.maxPrice = filters.maxPrice;

    try {
      const res = await axios.get("/products", { params });
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products", err);
      setProducts([]);
    }
  };

  const debouncedFetch = debounce(fetchProducts, 500);

  useEffect(() => {
    debouncedFetch();
    return debouncedFetch.cancel;
  }, [filters]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product.name);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800 tracking-tight">
          Browse Our Products
        </h1>

        {/* Filter Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            <input
              type="text"
              name="search"
              placeholder="🔍 Search products..."
              onChange={handleChange}
              className="border border-blue-200 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="text"
              name="category"
              placeholder="📁 Category"
              onChange={handleChange}
              className="border border-blue-200 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="number"
              name="minPrice"
              placeholder="💸 Min Price"
              onChange={handleChange}
              className="border border-blue-200 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="number"
              name="maxPrice"
              placeholder="💰 Max Price"
              onChange={handleChange}
              className="border border-blue-200 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.length ? (
            products.map((product) => (
              <div
                key={product._id}
                className="animate-fadeIn"
              >
                <ProductCard
                  product={product}
                  onAddToCart={() => handleAddToCart(product)}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
