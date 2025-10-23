import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-text-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-serif text-white mb-2 sm:mb-3">
                Himalayan Salt Co.
              </h3>
              <p className="text-pink-light text-xs sm:text-sm leading-relaxed">
                Bringing you the purest Himalayan pink salt directly from
                ancient mountain deposits. Experience nature's perfection in
                every crystal.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Link
                href="/home#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-10 text-terracotta hover:text-white hover:bg-terracotta rounded-full flex items-center justify-center transition-colors flex-shrink-0"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link
                href="/home#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-10 text-terracotta hover:text-white hover:bg-terracotta rounded-full flex items-center justify-center transition-colors flex-shrink-0"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </Link>
              <Link
                href="/home#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-10 text-terracotta hover:text-white hover:bg-terracotta rounded-full flex items-center justify-center transition-colors flex-shrink-0"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                </svg>
              </Link>
              <Link
                href="/home#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-10 text-terracotta hover:text-white hover:bg-terracotta rounded-full flex items-center justify-center transition-colors flex-shrink-0"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex gap-2 sm:gap-3">
              <div className="text-center p-1 sm:p-2 bg-white text-terracotta bg-opacity-10 rounded-lg text-xs">
                <div>🔒 Secure</div>
                <div>Checkout</div>
              </div>
              <div className="text-center p-1 sm:p-2 bg-white text-terracotta bg-opacity-10 rounded-lg text-xs">
                <div>🚚 Free</div>
                <div>Shipping</div>
              </div>
              <div className="text-center p-1 sm:p-2 bg-white text-terracotta bg-opacity-10 rounded-lg text-xs">
                <div>💎 100%</div>
                <div>Natural</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link
                  href="/home#"
                  className="text-pink-light hover:text-white transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/home#products"
                  className="text-pink-light hover:text-white transition-colors text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/home#benefits"
                  className="text-pink-light hover:text-white transition-colors text-sm"
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link
                  href="/home#story"
                  className="text-pink-light hover:text-white transition-colors text-sm"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/home#testimonials"
                  className="text-pink-light hover:text-white transition-colors text-sm"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
              Our Products
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link
                  href="/home#"
                  className="text-pink-light hover:text-white transition-colors text-sm"
                >
                  Fine Grain Salt
                </Link>
              </li>
              <li>
                <Link
                  href="/home#"
                  className="text-pink-light hover:text-white transition-colors text-sm"
                >
                  Coarse Grain Salt
                </Link>
              </li>
              <li>
                <Link
                  href="/home#"
                  className="text-pink-light hover:text-white transition-colors text-sm"
                >
                  Salt Grinder Sets
                </Link>
              </li>
              <li>
                <Link
                  href="/home#"
                  className="text-pink-light hover:text-white transition-colors text-sm"
                >
                  Bath Salt Crystals
                </Link>
              </li>
              <li>
                <Link
                  href="/home#"
                  className="text-pink-light hover:text-white transition-colors text-sm"
                >
                  Salt Lamps
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
              Support
            </h4>
            <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
              <li>
                <Link
                  href="/home#"
                  className="text-pink-light hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/home#"
                  className="text-pink-light hover:text-white transition-colors text-sm"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/home#"
                  className="text-pink-light hover:text-white transition-colors text-sm"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  href="/home#"
                  className="text-pink-light hover:text-white transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/home#"
                  className="text-pink-light hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/home#"
                  className="text-pink-light hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div className="bg-white bg-opacity-10 rounded-lg p-3 sm:p-4">
              <h5 className="text-terracotta font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                Stay Updated
              </h5>
              <p className="text-terracotta text-xs sm:text-sm mb-2 sm:mb-3">
                Get tips, recipes, and exclusive offers
              </p>
              <div className="flex gap-1 sm:gap-2 flex-wrap">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-2 sm:px-3 py-1 sm:py-2 rounded text-xs sm:text-sm bg-white bg-opacity-20 border border-terracotta text-terracotta placeholder-terracotta focus:outline-none"
                />
                <button className="bg-terracotta hover:bg-terracotta-dark cursor-pointer text-white px-2 sm:px-3 py-1 sm:py-2 rounded text-xs sm:text-sm font-medium transition-colors whitespace-nowrap">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white border-opacity-20">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-pink-light">
            <div className="text-center sm:text-left order-2 sm:order-1">
              © 2024 Himalayan Salt Co. All rights reserved.
            </div>
            <div className="flex gap-3 sm:gap-4 order-1 sm:order-2 mb-2 sm:mb-0">
              <span className="text-xs">💎 Pure & Natural</span>
              <span className="hidden xs:inline">🌍 Ethically Sourced</span>
              <span className="hidden sm:inline">❤️ Family Owned</span>
            </div>
            <div className="flex gap-3 sm:gap-4 text-xs order-3">
              <Link
                href="/home#"
                className="hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/home#"
                className="hover:text-white transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/home#"
                className="hover:text-white transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
