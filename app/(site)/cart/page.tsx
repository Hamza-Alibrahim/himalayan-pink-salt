"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  inStock: boolean;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      title: "Fine Grain Pink Salt",
      price: 12.99,
      image: "/pink-salt.png",
      quantity: 2,
      inStock: true,
    },
    {
      id: 2,
      title: "Salt Grinder Set",
      price: 24.99,
      image: "/pink-salt.png",
      quantity: 1,
      inStock: true,
    },
  ]);

  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [orderData, setOrderData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const getSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const shippingCost = getSubtotal() > 50 ? 0 : 5.99;
  const tax = getSubtotal() * 0.08;
  const total = getSubtotal() + shippingCost + tax;

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Please add at least one item to your cart before ordering.");
      return;
    }
    setShowCheckoutForm(true);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order submitted:", { orderData, cartItems, total });
    alert("Order placed successfully!");
    setCartItems([]);
    setShowCheckoutForm(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value,
    });
  };

  if (cartItems.length === 0 && !showCheckoutForm) {
    return (
      <div className="min-h-screen bg-off-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-pink-light rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-terracotta"
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
            </div>
            <h1 className="text-3xl md:text-4xl font-serif text-text-dark mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-text-medium mb-8">
              Add some delicious Himalayan salt products to get started!
            </p>
            <Link
              href="/home#products"
              className="bg-terracotta hover:bg-terracotta-dark text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Shop Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-off-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-border-light p-4 sm:p-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-text-dark mb-6">
                Shopping Cart
              </h1>
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-serif text-text-dark">
                  Your Items ({getTotalItems()})
                </h2>
                <span className="text-text-medium hidden sm:block">Price</span>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex sm:items-center gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-border-light last:border-b-0"
                  >
                    {/* Product Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-contain rounded-lg bg-off-white mx-auto sm:mx-0"
                    />

                    {/* Product Info and Controls */}
                    <div className="flex-grow flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      {/* Title and Price - Stacked on mobile */}
                      <div className="flex-grow text-center sm:text-left">
                        <h3 className="font-semibold text-text-dark mb-1 text-sm sm:text-base">
                          {item.title}
                        </h3>
                        <p className="text-terracotta font-semibold text-sm sm:text-base">
                          ${item.price}
                        </p>
                        {/* Mobile Price Total */}
                        <p className="sm:hidden text-text-dark font-semibold text-sm mt-1">
                          Total: ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-7 h-7 sm:w-8 sm:h-8 bg-pink-light hover:bg-pink-medium text-terracotta rounded flex items-center justify-center transition-colors cursor-pointer"
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

                        <span className="font-semibold text-text-dark min-w-6 sm:min-w-8 text-center text-sm sm:text-base">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          disabled={!item.inStock}
                          className={`w-7 h-7 sm:w-8 sm:h-8 ${
                            item.inStock
                              ? "bg-terracotta cursor-pointer hover:bg-terracotta-dark text-white"
                              : "bg-gray-300 text-gray-500 cursor-not-allowed"
                          } rounded flex items-center justify-center transition-colors`}
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

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-7 h-7 sm:w-8 sm:h-8 bg-pink-light hover:bg-pink-medium text-terracotta rounded flex items-center justify-center transition-colors cursor-pointer"
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
                    </div>

                    {/* Desktop Price Total - Hidden on mobile */}
                    <div className="hidden sm:block text-right min-w-20">
                      <p className="font-semibold text-text-dark">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-border-light p-4 sm:p-6 sticky top-4 sm:top-8">
              <h2 className="text-lg sm:text-xl font-serif text-text-dark mb-4">
                Order Summary
              </h2>

              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex justify-between text-text-medium text-sm sm:text-base">
                  <span>Subtotal ({getTotalItems()} items)</span>
                  <span>${getSubtotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-text-medium text-sm sm:text-base">
                  <span>Shipping</span>
                  <span>
                    {shippingCost === 0 ? "FREE" : `$${shippingCost}`}
                  </span>
                </div>
                <div className="flex justify-between text-text-medium text-sm sm:text-base">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-border-light pt-2 sm:pt-3">
                  <div className="flex justify-between font-semibold text-text-dark text-base sm:text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {shippingCost > 0 && (
                <div className="bg-pink-light rounded-lg p-2 sm:p-3 mb-3 sm:mb-4 text-center">
                  <p className="text-xs sm:text-sm text-text-dark">
                    Add ${(50 - getSubtotal()).toFixed(2)} more for{" "}
                    <strong>FREE shipping</strong>
                  </p>
                </div>
              )}

              <button
                onClick={handleCheckout}
                className="cursor-pointer w-full bg-terracotta hover:bg-terracotta-dark text-white py-2 sm:py-3 px-4 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base"
              >
                Proceed to Checkout
              </button>

              <div className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-text-light">
                <p>🔒 Secure checkout</p>
                <p>🚚 Free shipping over $50</p>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Form Modal */}
        {showCheckoutForm && (
          <div className="fixed inset-0 bg-black-light flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl font-serif text-text-dark">
                    Complete Your Order
                  </h2>
                  <button
                    onClick={() => setShowCheckoutForm(false)}
                    className="cursor-pointer text-text-light hover:text-text-dark"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <form
                  onSubmit={handleOrderSubmit}
                  className="space-y-3 sm:space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={orderData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:border-terracotta text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={orderData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:border-terracotta text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={orderData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:border-terracotta text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-1">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={orderData.address}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:border-terracotta text-sm sm:text-base"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    <div className="sm:col-span-2 lg:col-span-1">
                      <label className="block text-sm font-medium text-text-dark mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={orderData.city}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:border-terracotta text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-1">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        required
                        value={orderData.zipCode}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:border-terracotta text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-1">
                        Country *
                      </label>
                      <input
                        type="text"
                        name="country"
                        required
                        value={orderData.country}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:border-terracotta text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="border-t border-border-light pt-3 sm:pt-4">
                    <div className="flex justify-between items-center mb-3 sm:mb-4">
                      <span className="font-semibold text-text-dark text-sm sm:text-base">
                        Order Total
                      </span>
                      <span className="text-lg sm:text-xl font-serif text-terracotta">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                    <button
                      type="submit"
                      className="w-full cursor-pointer bg-terracotta hover:bg-terracotta-dark text-white py-2 sm:py-3 px-4 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base"
                    >
                      Place Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
