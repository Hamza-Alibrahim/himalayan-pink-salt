"use client";
import { useState } from "react";
import AnalyticsCard from "../components/AnalyticsCard";

const page = () => {
  const [timeRange, setTimeRange] = useState<"week" | "month" | "year">(
    "month"
  );

  const analyticsData = {
    week: [
      {
        title: "Sales Volume",
        value: "2,845",
        subtitle: "Salt products sold",
        trend: 12.4,
        icon: "📈",
      },
      {
        title: "Revenue",
        value: "$8,426",
        subtitle: "Total income",
        trend: 8.7,
        icon: "💰",
      },
      {
        title: "New Customers",
        value: "142",
        subtitle: "This period",
        trend: 15.2,
        icon: "👥",
      },
      {
        title: "Conversion Rate",
        value: "4.2%",
        subtitle: "Website visitors",
        trend: 2.1,
        icon: "🎯",
      },
    ],
    month: [
      {
        title: "Sales Volume",
        value: "12,845",
        subtitle: "Salt products sold",
        trend: 15.4,
        icon: "📈",
      },
      {
        title: "Revenue",
        value: "$42,156",
        subtitle: "Total income",
        trend: 12.7,
        icon: "💰",
      },
      {
        title: "New Customers",
        value: "642",
        subtitle: "This period",
        trend: 18.2,
        icon: "👥",
      },
      {
        title: "Conversion Rate",
        value: "4.8%",
        subtitle: "Website visitors",
        trend: 3.1,
        icon: "🎯",
      },
    ],
    year: [
      {
        title: "Sales Volume",
        value: "148,245",
        subtitle: "Salt products sold",
        trend: 22.4,
        icon: "📈",
      },
      {
        title: "Revenue",
        value: "$486,752",
        subtitle: "Total income",
        trend: 18.7,
        icon: "💰",
      },
      {
        title: "New Customers",
        value: "8,142",
        subtitle: "This period",
        trend: 25.2,
        icon: "👥",
      },
      {
        title: "Conversion Rate",
        value: "5.2%",
        subtitle: "Website visitors",
        trend: 4.1,
        icon: "🎯",
      },
    ],
  };

  const topProducts = [
    { name: "Fine Pink Salt", sales: 2842, revenue: "$18,245" },
    { name: "Salt Lamps", sales: 1956, revenue: "$42,156" },
    { name: "Bath Salt", sales: 1428, revenue: "$12,845" },
    { name: "Cooking Blocks", sales: 956, revenue: "$8,426" },
    { name: "Salt Grinders", sales: 742, revenue: "$6,128" },
  ];

  const currentData = analyticsData[timeRange];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border border-border-light">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-serif text-text-dark mb-2">
              Business Analytics
            </h1>
            <p className="text-sm sm:text-base text-text-medium">
              Track your Himalayan salt business performance and growth metrics.
            </p>
          </div>

          <div className="flex gap-2">
            {(["week", "month", "year"] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200 cursor-pointer ${
                  timeRange === range
                    ? "bg-terracotta text-white"
                    : "bg-pink-light text-terracotta hover:bg-pink-medium"
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {currentData.map((data, index) => (
          <AnalyticsCard key={index} {...data} />
        ))}
      </div>

      {/* Top Products & Sales Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border border-border-light">
          <h2 className="text-lg sm:text-xl font-serif text-text-dark mb-4 sm:mb-6">
            Top Selling Products
          </h2>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div
                key={product.name}
                className="flex items-center justify-between p-3 rounded-lg bg-pink-light/30 hover:bg-pink-light/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-dark">
                      {product.name}
                    </p>
                    <p className="text-xs text-text-light">
                      {product.sales} units
                    </p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-terracotta">
                  {product.revenue}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sales Chart Placeholder */}
        <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border border-border-light">
          <h2 className="text-lg sm:text-xl font-serif text-text-dark mb-4 sm:mb-6">
            Sales Overview
          </h2>
          <div className="bg-pink-light/20 rounded-lg p-8 flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl mb-3 block">📊</span>
              <p className="text-text-medium font-medium">
                Sales Chart Visualization
              </p>
              <p className="text-sm text-text-light mt-1">
                Connect your analytics service to display charts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
