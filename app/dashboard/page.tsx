"use client";
import { useState } from "react";
import StatsCard from "./components/StatsCard";

interface RecentActivity {
  id: number;
  type: "order" | "user" | "product";
  message: string;
  time: string;
  user?: string;
}

const page = () => {
  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>([
    {
      id: 1,
      type: "order",
      message: "New order placed",
      time: "2 min ago",
      user: "John Doe",
    },
    {
      id: 2,
      type: "user",
      message: "New customer registered",
      time: "5 min ago",
      user: "Sarah Wilson",
    },
    {
      id: 3,
      type: "product",
      message: "Salt lamps restocked",
      time: "1 hour ago",
    },
    {
      id: 4,
      type: "order",
      message: "Order shipped",
      time: "2 hours ago",
      user: "Mike Johnson",
    },
  ]);

  const stats = [
    {
      title: "Total Revenue",
      value: "$12,426",
      change: 12.5,
      icon: "💰",
      description: "From all salt products",
    },
    {
      title: "Orders",
      value: "284",
      change: 8.2,
      icon: "📦",
      description: "This month",
    },
    {
      title: "Customers",
      value: "1,243",
      change: 15.3,
      icon: "👥",
      description: "Active users",
    },
    {
      title: "Products",
      value: "42",
      change: 3.1,
      icon: "🛍️",
      description: "In stock items",
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "order":
        return "📦";
      case "user":
        return "👤";
      case "product":
        return "🛍️";
      default:
        return "📝";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border border-border-light">
        <h1 className="text-2xl sm:text-3xl font-serif text-text-dark mb-2">
          Dashboard Overview
        </h1>
        <p className="text-sm sm:text-base text-text-medium">
          Welcome back! Here's what's happening with your Himalayan salt
          business today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border border-border-light">
          <h2 className="text-lg sm:text-xl font-serif text-text-dark mb-4 sm:mb-6">
            Recent Activity
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 p-3 rounded-lg bg-pink-light/30 hover:bg-pink-light/50 transition-colors"
              >
                <span className="text-lg flex-shrink-0 mt-0.5">
                  {getActivityIcon(activity.type)}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text-dark">
                    {activity.message}
                    {activity.user && (
                      <span className="text-text-medium">
                        {" "}
                        • {activity.user}
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-text-light mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border border-border-light">
          <h2 className="text-lg sm:text-xl font-serif text-text-dark mb-4 sm:mb-6">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <button className="bg-terracotta hover:bg-terracotta-dark text-white p-4 rounded-lg transition-colors duration-200 flex flex-col items-center justify-center gap-2 cursor-pointer">
              <span className="text-2xl">➕</span>
              <span className="text-sm font-medium">Add Product</span>
            </button>

            <button className="bg-pink-light hover:bg-pink-medium text-terracotta p-4 rounded-lg transition-colors duration-200 flex flex-col items-center justify-center gap-2 cursor-pointer">
              <span className="text-2xl">📊</span>
              <span className="text-sm font-medium">View Reports</span>
            </button>

            <button className="bg-pink-light hover:bg-pink-medium text-terracotta p-4 rounded-lg transition-colors duration-200 flex flex-col items-center justify-center gap-2 cursor-pointer">
              <span className="text-2xl">📦</span>
              <span className="text-sm font-medium">Manage Orders</span>
            </button>

            <button className="bg-pink-light hover:bg-pink-medium text-terracotta p-4 rounded-lg transition-colors duration-200 flex flex-col items-center justify-center gap-2 cursor-pointer">
              <span className="text-2xl">👥</span>
              <span className="text-sm font-medium">Customers</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
