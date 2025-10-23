"use client";
import { useState } from "react";
import Product from "./Product";

const Products = () => {
  const [filter, setFilter] = useState<string>("");
  const products = [
    {
      id: 1,
      title: "Fine Grain Pink Salt",
      description:
        "Perfect for everyday cooking, seasoning, and baking. Dissolves easily in all your favorite recipes.",
      price: 12.99,
      originalPrice: 16.99,
      image: "/pink-salt.png",
      rating: 4.8,
      reviews: 142,
      inStock: true,
      type: "cooking",
    },
    {
      id: 2,
      title: "Coarse Grain Salt",
      description:
        "Ideal for salt grinders, meat rubs, and as a finishing salt. Large crystals for texture.",
      price: 14.99,
      originalPrice: 19.99,
      image: "/pink-salt.png",
      rating: 4.9,
      reviews: 89,
      inStock: true,
      type: "cooking",
    },
    {
      id: 3,
      title: "Salt Grinder Set",
      description:
        "Complete set with grinder filled with coarse pink salt. Adjustable grind settings.",
      price: 24.99,
      originalPrice: 29.99,
      image: "/pink-salt.png",
      rating: 4.7,
      reviews: 203,
      inStock: true,
      type: "cooking",
    },
    {
      id: 4,
      title: "Bath Salt Crystals",
      description:
        "Large crystals perfect for spa treatments, bath soaks, and therapeutic uses.",
      price: 18.99,
      originalPrice: 22.99,
      image: "/pink-salt.png",
      rating: 4.6,
      reviews: 67,
      inStock: false,
      type: "bath",
    },
    {
      id: 5,
      title: "Salt Blocks & Slabs",
      description:
        "Natural salt blocks for cooking, serving, and chilling. Reusable and durable.",
      price: 39.99,
      originalPrice: 49.99,
      image: "/pink-salt.png",
      rating: 4.9,
      reviews: 54,
      inStock: true,
      type: "decor",
    },
    {
      id: 6,
      title: "Salt Lamps",
      description:
        "Hand-carved Himalayan salt lamps that purify air and create warm ambiance.",
      price: 34.99,
      originalPrice: 42.99,
      image: "/pink-salt.png",
      rating: 4.8,
      reviews: 178,
      inStock: true,
      type: "decor",
    },
  ];

  const filteredProducts = filter
    ? products.filter((product) => product.type === filter)
    : products;

  return (
    <section id="products" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-text-dark mb-3 sm:mb-4">
            Our Premium Salt Collection
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-medium max-w-2xl mx-auto leading-relaxed">
            Discover our range of authentic Himalayan pink salt products, each
            crafted to bring nature's purity to your home and health.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12">
          <button
            onClick={() => setFilter("")}
            className={`${
              filter === ""
                ? "bg-terracotta text-white"
                : "bg-pink-light hover:bg-pink-medium text-text-dark"
            } cursor-pointer px-3 sm:px-4 md:px-6 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-colors whitespace-nowrap`}
          >
            All Products
          </button>
          <button
            onClick={() => setFilter("cooking")}
            className={`${
              filter === "cooking"
                ? "bg-terracotta text-white"
                : "bg-pink-light hover:bg-pink-medium text-text-dark"
            } cursor-pointer px-3 sm:px-4 md:px-6 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-colors whitespace-nowrap`}
          >
            Cooking Salt
          </button>
          <button
            onClick={() => setFilter("bath")}
            className={`${
              filter === "bath"
                ? "bg-terracotta text-white"
                : "bg-pink-light hover:bg-pink-medium text-text-dark"
            } cursor-pointer px-3 sm:px-4 md:px-6 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-colors whitespace-nowrap`}
          >
            Bath & Spa
          </button>
          <button
            onClick={() => setFilter("decor")}
            className={`${
              filter === "decor"
                ? "bg-terracotta text-white"
                : "bg-pink-light hover:bg-pink-medium text-text-dark"
            } cursor-pointer px-3 sm:px-4 md:px-6 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-colors whitespace-nowrap`}
          >
            Home Decor
          </button>
        </div>

        {/* Products Count (Optional) */}
        {filter && (
          <div className="text-center mb-4 sm:mb-6">
            <p className="text-sm sm:text-base text-text-medium">
              Showing {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""} in{" "}
              {filter === "cooking"
                ? "Cooking Salt"
                : filter === "bath"
                ? "Bath & Spa"
                : "Home Decor"}
            </p>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex">
              <Product product={product} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-pink-light rounded-2xl p-6 sm:p-8 max-w-md mx-auto">
              <h3 className="text-xl sm:text-2xl font-serif text-text-dark mb-3">
                No Products Found
              </h3>
              <p className="text-text-medium mb-4">
                We don't have any products in this category at the moment.
              </p>
              <button
                onClick={() => setFilter("")}
                className="cursor-pointer bg-terracotta hover:bg-terracotta-dark text-white px-6 py-2 rounded-full font-medium transition-colors text-sm sm:text-base"
              >
                View All Products
              </button>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <div className="bg-pink-light rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-text-dark mb-3 sm:mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-text-medium mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              We offer custom orders and bulk purchasing options. Contact us for
              special requests.
            </p>
            <button className="cursor-pointer bg-terracotta hover:bg-terracotta-dark text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-colors text-sm sm:text-base">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
