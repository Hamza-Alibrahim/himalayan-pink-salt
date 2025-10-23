"use client";
import { useState } from "react";

interface ProductProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviews: number;
    inStock: boolean;
  };
  showCartControls?: boolean;
}

const Product = ({ product, showCartControls = false }: ProductProps) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(1);
    console.log("Added to cart:", product.title);
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
    console.log("Increased quantity:", product.title, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      console.log("Decreased quantity:", product.title, quantity - 1);
    } else {
      setQuantity(0);
      console.log("Removed from cart:", product.title);
    }
  };

  const handleRemove = () => {
    setQuantity(0);
    console.log("Removed from cart:", product.title);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden border border-border-light hover:border-pink-light w-full">
      {/* Image Container */}
      <div className="p-3 sm:p-4 bg-off-white relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 sm:h-48 md:h-56 object-contain transition-transform duration-300 hover:scale-105"
        />
        {!product.inStock && (
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-text-light text-white px-2 py-1 rounded text-xs font-medium">
            Out of Stock
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-base sm:text-lg md:text-xl font-serif text-text-dark mb-2 line-clamp-2 leading-tight">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm md:text-base text-text-medium mb-3 sm:mb-4 leading-relaxed line-clamp-3 flex-grow">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <span className="text-xl sm:text-2xl md:text-3xl font-serif text-terracotta font-semibold">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-xs sm:text-sm text-text-light line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <div className="flex text-amber-400 text-sm sm:text-base">
            {"★".repeat(Math.floor(product.rating))}
            <span className="text-gray-300">
              {"★".repeat(5 - Math.floor(product.rating))}
            </span>
          </div>
          <span className="text-xs sm:text-sm text-text-light">
            ({product.reviews})
          </span>
        </div>

        {/* Cart Controls */}
        {quantity > 0 ? (
          <div className="flex items-center justify-between gap-2 sm:gap-3 mb-2">
            {/* Decrease Button */}
            <button
              onClick={handleDecrease}
              className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer bg-pink-light hover:bg-pink-medium text-terracotta rounded-lg flex items-center justify-center transition-colors"
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            </button>

            {/* Quantity Display */}
            <span className="text-lg sm:text-xl font-semibold text-text-dark min-w-6 sm:min-w-8 text-center">
              {quantity}
            </span>

            {/* Increase Button */}
            <button
              onClick={handleIncrease}
              disabled={!product.inStock}
              className={`w-8 h-8 sm:w-10 sm:h-10 ${
                product.inStock
                  ? "bg-terracotta cursor-pointer hover:bg-terracotta-dark text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              } rounded-lg flex items-center justify-center transition-colors`}
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>

            {/* Remove Button */}
            <button
              onClick={handleRemove}
              className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer bg-red-50 hover:bg-red-100 text-red-600 rounded-lg flex items-center justify-center transition-colors"
              title="Remove from cart"
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        ) : (
          product.inStock && (
            <button
              onClick={handleAddToCart}
              className="w-full bg-terracotta hover:bg-terracotta-dark text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21"
                />
              </svg>
              Add to Cart
            </button>
          )
        )}

        {/* Out of Stock Message */}
        {!product.inStock && (
          <div className="w-full bg-gray-100 text-gray-500 py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-medium text-center cursor-no-drop text-sm sm:text-base">
            Out of Stock
          </div>
        )}

        {/* Quick Info */}
        <div className="flex items-center justify-between mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-border-light">
          <span
            className={`text-xs flex items-center gap-1 ${
              product.inStock ? "text-success" : "text-red-500"
            }`}
          >
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
          <span className="text-xs text-text-light">Free Shipping</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
