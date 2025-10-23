"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

interface RegisterForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const [formData, setFormData] = useState<RegisterForm>({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    redirect("/home");
    console.log("Registration attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-off-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-white font-serif text-lg sm:text-xl">
                HS
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif text-text-dark mb-2">
              Create Account
            </h1>
            <p className="text-text-medium text-sm sm:text-base">
              Join the Himalayan Salt family today
            </p>
          </div>

          {/* Register Form */}
          <div className="bg-white rounded-xl shadow-sm border border-border-light p-4 sm:p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-dark mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border-light rounded-lg focus:outline-none focus:border-terracotta transition-colors text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-dark mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border-light rounded-lg focus:outline-none focus:border-terracotta transition-colors text-sm sm:text-base"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-text-dark mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border-light rounded-lg focus:outline-none focus:border-terracotta transition-colors text-sm sm:text-base"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-text-dark mb-2"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border-light rounded-lg focus:outline-none focus:border-terracotta transition-colors text-sm sm:text-base"
                  placeholder="123 Main St, City, State, ZIP"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-text-dark mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border-light rounded-lg focus:outline-none focus:border-terracotta transition-colors text-sm sm:text-base"
                  placeholder="Create a strong password"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-text-dark mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border-light rounded-lg focus:outline-none focus:border-terracotta transition-colors text-sm sm:text-base"
                  placeholder="Confirm your password"
                />
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="w-4 h-4 text-terracotta border-border-light rounded focus:ring-terracotta mt-1 flex-shrink-0"
                />
                <label
                  htmlFor="terms"
                  className="text-xs sm:text-sm text-text-medium leading-relaxed"
                >
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-terracotta hover:text-terracotta-dark"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-terracotta hover:text-terracotta-dark"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Newsletter */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="w-4 h-4 text-terracotta border-border-light rounded focus:ring-terracotta mt-1 flex-shrink-0"
                />
                <label
                  htmlFor="newsletter"
                  className="text-xs sm:text-sm text-text-medium leading-relaxed"
                >
                  Send me recipes, health tips, and exclusive offers from
                  Himalayan Salt
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full cursor-pointer bg-terracotta hover:bg-terracotta-dark text-white py-2 sm:py-3 px-4 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border-light">
              <p className="text-center text-text-medium text-xs sm:text-sm">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-terracotta hover:text-terracotta-dark font-medium"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
            <div className="bg-pink-light rounded-lg p-3 sm:p-4">
              <div className="text-terracotta text-base sm:text-lg mb-1 sm:mb-2">
                🚚
              </div>
              <p className="text-xs sm:text-sm text-text-dark font-medium">
                Free Shipping
              </p>
              <p className="text-xs text-text-medium">On orders over $50</p>
            </div>
            <div className="bg-pink-light rounded-lg p-3 sm:p-4">
              <div className="text-terracotta text-base sm:text-lg mb-1 sm:mb-2">
                💎
              </div>
              <p className="text-xs sm:text-sm text-text-dark font-medium">
                Premium Quality
              </p>
              <p className="text-xs text-text-medium">
                100% Natural Himalayan Salt
              </p>
            </div>
            <div className="bg-pink-light rounded-lg p-3 sm:p-4">
              <div className="text-terracotta text-base sm:text-lg mb-1 sm:mb-2">
                ⭐
              </div>
              <p className="text-xs sm:text-sm text-text-dark font-medium">
                Exclusive Offers
              </p>
              <p className="text-xs text-text-medium">Member-only discounts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
