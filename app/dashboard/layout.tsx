"use client";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { SidebarProvider } from "./contexts/sidebar-context";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarItems = [
    { name: "Overview", href: "/dashboard", icon: "📊", badge: 7 },
    { name: "Users", href: "/dashboard/users", icon: "👥", badge: 12 },
    { name: "Products", href: "/dashboard/products", icon: "💎", badge: 5 },
    { name: "Orders", href: "/dashboard/orders", icon: "📦", badge: 23 },
    { name: "Analytics", href: "/dashboard/analytics", icon: "📈", badge: 9 },
    { name: "Settings", href: "/dashboard/settings", icon: "⚙️", badge: 1 },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-off-white">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <Sidebar items={sidebarItems} />

          {/* Main Content */}
          <div className="flex-1 lg:ml-0 w-[calc(100%-97px) overflow-hidden">
            {/* Top Header */}
            <Navbar />

            {/* Page Content */}
            <main className="p-4 sm:p-6 lg:p-8">
              <div className="max-w-7xl mx-auto">{children}</div>
            </main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
