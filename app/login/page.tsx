"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
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
    console.log("Login attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-off-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-white font-serif text-lg sm:text-xl">
                HS
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif text-text-dark mb-2">
              Welcome Back
            </h1>
            <p className="text-text-medium text-sm sm:text-base">
              Sign in to your Himalayan Salt account
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-xl shadow-sm border border-border-light p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
                  placeholder="Enter your password"
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-terracotta border-border-light rounded focus:ring-terracotta"
                  />
                  <span className="ml-2 text-sm text-text-medium">
                    Remember me
                  </span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-terracotta hover:text-terracotta-dark"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full cursor-pointer bg-terracotta hover:bg-terracotta-dark text-white py-2 sm:py-3 px-4 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base"
              >
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border-light">
              <p className="text-center text-text-medium text-xs sm:text-sm">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="text-terracotta hover:text-terracotta-dark font-medium"
                >
                  Create one here
                </Link>
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-6 sm:mt-8 text-center">
            <div className="flex flex-col xs:flex-row justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-text-light">
              <span className="flex items-center justify-center gap-1">
                <span>🔒</span>
                <span>Secure Login</span>
              </span>
              <span className="hidden xs:inline">•</span>
              <span className="flex items-center justify-center gap-1">
                <span>💎</span>
                <span>Trusted Brand</span>
              </span>
              <span className="hidden xs:inline">•</span>
              <span className="flex items-center justify-center gap-1">
                <span>🚚</span>
                <span>Free Shipping</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
