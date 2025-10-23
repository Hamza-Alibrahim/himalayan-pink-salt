"use client";
import DashTable from "@/app/dashboard/components/DashTable";
import { useState } from "react";

const OrdersPage = () => {
  const [userOrders, setUserOrders] = useState([
    {
      id: 1001,
      date: "2024-01-15",
      total: 37.98,
      status: "completed",
      items: [
        { name: "Fine Grain Pink Salt", quantity: 1, price: 12.99 },
        { name: "Salt Grinder Set", quantity: 1, price: 24.99 },
      ],
      shippingAddress: "123 Main St, New York, NY 10001",
    },
    {
      id: 1002,
      date: "2024-01-10",
      total: 24.99,
      status: "completed",
      items: [
        { name: "Coarse Grain Salt", quantity: 1, price: 14.99 },
        { name: "Fine Grain Pink Salt", quantity: 1, price: 9.99 },
      ],
      shippingAddress: "123 Main St, New York, NY 10001",
    },
    {
      id: 1003,
      date: "2024-01-18",
      total: 18.99,
      status: "processing",
      items: [{ name: "Bath Salt Crystals", quantity: 1, price: 18.99 }],
      shippingAddress: "123 Main St, New York, NY 10001",
    },
    {
      id: 1004,
      date: "2024-01-20",
      total: 49.98,
      status: "shipped",
      items: [{ name: "Salt Grinder Set", quantity: 2, price: 49.98 }],
      shippingAddress: "123 Main St, New York, NY 10001",
    },
  ]);

  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const orderActions = (row: any) => (
    <div className="flex items-center gap-1 sm:gap-2">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setSelectedOrder(row);
          setIsModalOpen(true);
        }}
        className="p-1 sm:p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        title="View Details"
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
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      </button>

      {row.status === "processing" && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (confirm("Are you sure you want to cancel this order?")) {
              setUserOrders((prev) =>
                prev.map((order) =>
                  order.id === row.id
                    ? { ...order, status: "cancelled" }
                    : order
                )
              );
            }
          }}
          className="p-1 sm:p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          title="Cancel Order"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}

      {(row.status === "completed" || row.status === "shipped") && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            console.log("Reorder:", row.id);
          }}
          className="p-1 sm:p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
          title="Reorder"
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
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      )}
    </div>
  );

  const renderStatus = (value: string) => {
    const statusConfig = {
      completed: { color: "bg-green-100 text-green-800", label: "Completed" },
      processing: { color: "bg-blue-100 text-blue-800", label: "Processing" },
      shipped: { color: "bg-purple-100 text-purple-800", label: "Shipped" },
      cancelled: { color: "bg-red-100 text-red-800", label: "Cancelled" },
    };

    const config =
      statusConfig[value as keyof typeof statusConfig] ||
      statusConfig.processing;

    return (
      <span
        className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium ${config.color}`}
      >
        {config.label}
      </span>
    );
  };

  const renderDate = (value: string) => {
    return new Date(value).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const renderTotal = (value: number) => (
    <span className="font-semibold text-text-dark text-sm sm:text-base">
      ${value.toFixed(2)}
    </span>
  );

  const renderItems = (value: any, row: any) => {
    const itemCount = Array.isArray(value) ? value.length : 0;
    const itemNames = Array.isArray(value)
      ? value.map((item) => item.name).join(", ")
      : "";

    return (
      <div className="sm:text-center group relative">
        <span
          className="font-medium text-text-dark cursor-help text-sm sm:text-base"
          title={itemNames}
        >
          {itemCount} {itemCount === 1 ? "item" : "items"}
        </span>
        {/* Optional: Tooltip on hover */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 sm:px-3 sm:py-2 bg-text-dark text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 whitespace-nowrap hidden sm:block">
          {itemNames}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-text-dark"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-off-white py-6 sm:py-8">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-text-dark mb-3 sm:mb-4">
            My Orders
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-text-medium max-w-2xl mx-auto">
            Track your Himalayan salt orders and view your order history
          </p>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-xl shadow-sm border border-border-light overflow-hidden">
          <DashTable
            title="Order History"
            columns={[
              { key: "id", label: "Order ID", sortable: true },
              {
                key: "date",
                label: "Order Date",
                sortable: true,
                render: renderDate,
              },
              {
                key: "total",
                label: "Total Amount",
                sortable: true,
                render: renderTotal,
              },
              {
                key: "items",
                label: "Items",
                sortable: true,
                render: renderItems,
              },
              {
                key: "status",
                label: "Status",
                sortable: true,
                render: renderStatus,
              },
            ]}
            data={userOrders}
            actions={orderActions}
            onAdd={undefined}
            searchable={true}
          />
        </div>

        {/* Order Details Modal */}
        {isModalOpen && selectedOrder && (
          <div className="fixed inset-0 bg-black-light bg-opacity-50 flex items-center justify-center p-3 sm:p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-4 sm:p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl font-serif text-text-dark">
                    Order #{selectedOrder.id}
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-text-light hover:text-text-dark transition-colors"
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

                {/* Order Info */}
                <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <h3 className="font-semibold text-text-dark mb-2 text-sm sm:text-base">
                      Order Details
                    </h3>
                    <p className="text-text-medium text-sm sm:text-base">
                      <strong>Date:</strong> {renderDate(selectedOrder.date)}
                    </p>
                    <p className="text-text-medium text-sm sm:text-base">
                      <strong>Status:</strong>{" "}
                      {renderStatus(selectedOrder.status)}
                    </p>
                    <p className="text-text-medium text-sm sm:text-base">
                      <strong>Total:</strong> ${selectedOrder.total.toFixed(2)}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-text-dark mb-2 text-sm sm:text-base">
                      Shipping Address
                    </h3>
                    <p className="text-text-medium text-sm sm:text-base leading-relaxed">
                      {selectedOrder.shippingAddress}
                    </p>
                  </div>
                </div>

                {/* Order Items */}
                <div className="border-t border-border-light pt-4 sm:pt-6">
                  <h3 className="font-semibold text-text-dark mb-3 sm:mb-4 text-sm sm:text-base">
                    Order Items
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    {selectedOrder.items.map((item: any, index: number) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-border-light last:border-b-0"
                      >
                        <div className="flex-grow">
                          <p className="font-medium text-text-dark text-sm sm:text-base">
                            {item.name}
                          </p>
                          <p className="text-xs sm:text-sm text-text-light">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                        <p className="font-semibold text-text-dark text-sm sm:text-base ml-2">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="flex justify-between items-center pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-border-light">
                    <span className="text-base sm:text-lg font-semibold text-text-dark">
                      Total
                    </span>
                    <span className="text-lg sm:text-xl font-serif text-terracotta font-semibold">
                      ${selectedOrder.total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border-light">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-4 py-2 border border-border-light text-text-medium rounded-lg hover:bg-pink-light transition-colors text-sm sm:text-base order-2 sm:order-1"
                  >
                    Close
                  </button>
                  {selectedOrder.status === "processing" && (
                    <button
                      onClick={() => {
                        if (
                          confirm("Are you sure you want to cancel this order?")
                        ) {
                          setUserOrders((prev) =>
                            prev.map((order) =>
                              order.id === selectedOrder.id
                                ? { ...order, status: "cancelled" }
                                : order
                            )
                          );
                          setIsModalOpen(false);
                        }
                      }}
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm sm:text-base order-1 sm:order-2"
                    >
                      Cancel Order
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State Illustration */}
        {userOrders.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-pink-light rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-terracotta"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-text-dark mb-2">
              No Orders Yet
            </h3>
            <p className="text-text-medium mb-4 sm:mb-6 text-sm sm:text-base">
              Start shopping to see your orders here!
            </p>
            <a
              href="/home#products"
              className="bg-terracotta hover:bg-terracotta-dark text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors inline-block text-sm sm:text-base"
            >
              Shop Products
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
