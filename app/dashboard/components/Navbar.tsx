"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useSidebar } from "../contexts/sidebar-context";

interface User {
  name: string;
  email: string;
  role: "user" | "admin";
}

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user] = useState<User>({
    name: "John Doe",
    email: "john@example.com",
    role: "admin", // Change to 'user' to test non-admin view
  });
  const { toggleSidebar } = useSidebar();

  const [cartItemsCount] = useState(2);

  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    console.log("Logging out...");
    setIsProfileOpen(false);
  };

  const handleSwitchAccount = () => {
    console.log("Switching account...");
    setIsProfileOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 shadow-sm bg-white border-b border-border-light backdrop-blur-sm h-[65px]">
      <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Back to Home */}
          <Link
            href="/home"
            className="flex items-center gap-2 p-2 text-text-medium hover:text-terracotta hover:bg-pink-light rounded-lg transition-all duration-200"
            title="Back to Home"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="hidden sm:block text-sm font-medium">Home</span>
          </Link>

          {/* Right Side - Cart, Profile & Dashboard */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Cart Icon */}
            <Link
              href="/cart"
              className="relative p-2 text-text-medium hover:text-terracotta hover:bg-pink-light rounded-lg transition-all duration-200"
              title="Shopping Cart"
            >
              <svg
                className="w-5 h-5"
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

              {/* Small Notification Dot */}
              {cartItemsCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-terracotta border-2 border-white rounded-full w-3 h-3"></span>
              )}
            </Link>

            {/* Profile Section */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-pink-light transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="hidden xl:block text-text-medium font-medium">
                  {user.name}
                </span>
                <svg
                  className={`w-4 h-4 text-text-medium transition-transform duration-200 ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Profile Dropdown - Centered on mobile */}
              {isProfileOpen && (
                <div className="absolute right-1.5 lg:right-0 top-12 w-64 bg-white rounded-xl shadow-lg border border-border-light py-2 z-50">
                  {/* User Info */}
                  <div className="px-4 py-3 border-b border-border-light">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-terracotta rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">
                          {user.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-text-dark">
                          {user.name}
                        </p>
                        <p className="text-sm text-text-light">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.role === "admin"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {user.role === "admin" ? "Administrator" : "User"}
                      </span>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-2">
                    <Link
                      href="/profile"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-text-medium hover:bg-pink-light hover:text-terracotta transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      My Profile
                    </Link>

                    <Link
                      href="/orders"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-text-medium hover:bg-pink-light hover:text-terracotta transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                      My Orders
                    </Link>
                  </div>

                  {/* Actions */}
                  <div className="border-t border-border-light py-2">
                    <Link
                      href={"/login"}
                      onClick={() => {
                        handleSwitchAccount();
                        setIsProfileOpen(false);
                      }}
                      className="flex items-center gap-3 cursor-pointer px-4 py-2 text-text-medium hover:bg-pink-light hover:text-terracotta transition-colors w-full text-left"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                        />
                      </svg>
                      Switch Account
                    </Link>

                    <Link
                      href={"/login"}
                      onClick={() => {
                        handleLogout();
                        setIsProfileOpen(false);
                      }}
                      className="flex items-center gap-3 cursor-pointer px-4 py-2 text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Log Out
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={toggleSidebar}
              className="lg:hidden cursor-pointer p-2 text-text-medium hover:text-terracotta hover:bg-pink-light rounded-lg transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
