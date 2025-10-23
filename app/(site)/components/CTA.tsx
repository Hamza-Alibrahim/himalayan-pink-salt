const CTA = () => {
  return (
    <section
      id="final-cta"
      className="py-12 sm:py-16 md:py-24 bg-terracotta relative overflow-hidden"
    >
      {/* Background Pattern - Lighter for better contrast */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 sm:mb-6">
            Ready to Transform Your Health & Cooking?
          </h2>

          {/* Subheading - IMPROVED CONTRAST */}
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 leading-relaxed opacity-95">
            Join <span className="font-semibold">2,500+</span> satisfied
            customers who've discovered the life-changing benefits of pure
            Himalayan salt.
          </p>

          {/* Urgency Elements */}
          <div className="bg-white bg-opacity-20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 w-full backdrop-blur-sm">
            <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-pink-dark">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                  🚚 FREE
                </div>
                <div className="text-xs sm:text-sm font-medium">Shipping</div>
              </div>
              <div className="hidden xs:block w-px h-8 sm:h-12 bg-white opacity-40"></div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                  ⭐ 4.9/5
                </div>
                <div className="text-xs sm:text-sm font-medium">Rated</div>
              </div>
              <div className="hidden xs:block w-px h-8 sm:h-12 bg-white opacity-40"></div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                  💎 100%
                </div>
                <div className="text-xs sm:text-sm font-medium">Natural</div>
              </div>
            </div>
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
            <button className="bg-white cursor-pointer hover:bg-off-white text-terracotta px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21"
                />
              </svg>
              Shop Now - Get Free Shipping
            </button>

            <button className="border-2 cursor-pointer border-white hover:bg-white text-white hover:text-terracotta px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              See All Benefits
            </button>
          </div>

          {/* Risk Reversal - IMPROVED CONTRAST */}
          <div className="bg-white bg-opacity-15 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm border border-white border-opacity-30">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-pink-dark">
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-light bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-1 sm:mb-2 text-pink-dark text-sm sm:text-base">
                  30-Day Guarantee
                </h4>
                <p className="text-xs sm:text-sm text-pink-dark opacity-90 font-medium">
                  Love it or your money back
                </p>
              </div>

              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-light bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
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
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-1 sm:mb-2 text-pink-dark text-sm sm:text-base">
                  Free Shipping
                </h4>
                <p className="text-xs sm:text-sm text-pink-dark opacity-90 font-medium">
                  On all orders over $50
                </p>
              </div>

              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-light bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-1 sm:mb-2 text-pink-dark text-sm sm:text-base">
                  Secure Checkout
                </h4>
                <p className="text-xs sm:text-sm text-pink-dark opacity-90 font-medium">
                  Your data is protected
                </p>
              </div>
            </div>
          </div>

          {/* Social Proof Footer - IMPROVED CONTRAST */}
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-white text-xs sm:text-sm mb-3 sm:mb-4 font-medium">
              ⭐️⭐️⭐️⭐️⭐️ Join 2,500+ customers who love our salt
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-white text-xs sm:text-sm font-medium">
              <span className="flex items-center gap-1">
                <span>🔒</span>
                <span className="hidden xs:inline">SSL Secure</span>
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                <span>💳</span>
                <span className="hidden xs:inline">Multiple Payments</span>
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                <span>📦</span>
                <span className="hidden xs:inline">Fast Delivery</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
