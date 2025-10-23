"use client";
import { useState } from "react";
import PopupForm, { FormField } from "../components/PopupForm";
import DashTable from "../components/DashTable";

const OrdersPage = () => {
  const [orders, setOrders] = useState([
    {
      id: 1001,
      customerName: "John Doe",
      customerEmail: "john@example.com",
      total: 37.98,
      status: "completed",
      orderDate: "2024-01-15",
      items: 2,
      shippingAddress: "123 Main St, New York, NY",
    },
    {
      id: 1002,
      customerName: "Jane Smith",
      customerEmail: "jane@example.com",
      total: 24.99,
      status: "processing",
      orderDate: "2024-01-16",
      items: 1,
      shippingAddress: "456 Oak Ave, Los Angeles, CA",
    },
    {
      id: 1003,
      customerName: "Mike Johnson",
      customerEmail: "mike@example.com",
      total: 62.97,
      status: "shipped",
      orderDate: "2024-01-14",
      items: 3,
      shippingAddress: "789 Pine Rd, Chicago, IL",
    },
    {
      id: 1004,
      customerName: "Sarah Wilson",
      customerEmail: "sarah@example.com",
      total: 14.99,
      status: "pending",
      orderDate: "2024-01-17",
      items: 1,
      shippingAddress: "321 Elm St, Miami, FL",
    },
    {
      id: 1005,
      customerName: "David Brown",
      customerEmail: "david@example.com",
      total: 49.98,
      status: "cancelled",
      orderDate: "2024-01-13",
      items: 2,
      shippingAddress: "654 Maple Dr, Seattle, WA",
    },
  ]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [editingOrder, setEditingOrder] = useState<any>(null);

  const orderFields: FormField[] = [
    {
      key: "customerName",
      label: "Customer Name",
      type: "text",
      required: true,
      placeholder: "Enter customer name",
    },
    {
      key: "customerEmail",
      label: "Customer Email",
      type: "email",
      required: true,
      placeholder: "Enter customer email",
    },
    {
      key: "total",
      label: "Total Amount ($)",
      type: "number",
      required: true,
      placeholder: "Enter total amount",
    },
    {
      key: "status",
      label: "Order Status",
      type: "select",
      required: true,
      options: [
        { value: "pending", label: "Pending" },
        { value: "processing", label: "Processing" },
        { value: "shipped", label: "Shipped" },
        { value: "completed", label: "Completed" },
        { value: "cancelled", label: "Cancelled" },
        { value: "refunded", label: "Refunded" },
      ],
    },
    {
      key: "orderDate",
      label: "Order Date",
      type: "text",
      required: true,
      placeholder: "YYYY-MM-DD",
    },
    {
      key: "items",
      label: "Items Count",
      type: "number",
      required: true,
      placeholder: "Enter number of items",
    },
    {
      key: "shippingAddress",
      label: "Shipping Address",
      type: "textarea",
      required: true,
      placeholder: "Enter shipping address",
    },
  ];

  const handleAddOrder = (orderData: any) => {
    const newOrder = {
      ...orderData,
      id: Math.max(...orders.map((o) => o.id)) + 1,
      total: parseFloat(orderData.total),
      items: parseInt(orderData.items),
    };
    setOrders((prev) => [...prev, newOrder]);
    setIsPopupOpen(false);
  };

  const handleEditOrder = (orderData: any) => {
    const updatedOrder = {
      ...orderData,
      total: parseFloat(orderData.total),
      items: parseInt(orderData.items),
    };
    setOrders((prev) =>
      prev.map((order) =>
        order.id === editingOrder.id ? { ...order, ...updatedOrder } : order
      )
    );
    setEditingOrder(null);
    setIsPopupOpen(false);
  };

  const orderActions = (row: any) => (
    <div className="flex items-center gap-2">
      {/* Edit Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setEditingOrder(row);
          setIsPopupOpen(true);
        }}
        className="p-2 text-terracotta hover:bg-pink-light rounded-lg transition-colors"
        title="Edit Order"
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
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </button>

      {/* Delete Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOrders((prev) => prev.filter((order) => order.id !== row.id));
        }}
        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        title="Delete Order"
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
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>

      {/* View Details Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          console.log("View Order Details:", row);
        }}
        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
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

      {/* Quick Actions - Status Update */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          // Quick status update logic
          if (row.status === "pending") {
            setOrders((prev) =>
              prev.map((order) =>
                order.id === row.id ? { ...order, status: "processing" } : order
              )
            );
          } else if (row.status === "processing") {
            setOrders((prev) =>
              prev.map((order) =>
                order.id === row.id ? { ...order, status: "shipped" } : order
              )
            );
          }
        }}
        className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
        title="Update Status"
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
            d="M5 13l4 4L19 7"
          />
        </svg>
      </button>
    </div>
  );

  // Custom render functions for better display
  const renderPrice = (value: number) => `$${value.toFixed(2)}`;

  const renderStatus = (value: string) => {
    const statusConfig = {
      pending: { color: "bg-yellow-100 text-yellow-800", label: "Pending" },
      processing: { color: "bg-blue-100 text-blue-800", label: "Processing" },
      shipped: { color: "bg-purple-100 text-purple-800", label: "Shipped" },
      completed: { color: "bg-green-100 text-green-800", label: "Completed" },
      cancelled: { color: "bg-red-100 text-red-800", label: "Cancelled" },
      refunded: { color: "bg-gray-100 text-gray-800", label: "Refunded" },
    };

    const config =
      statusConfig[value as keyof typeof statusConfig] || statusConfig.pending;

    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}
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

  const renderItems = (value: number) => (
    <span className="font-medium text-text-dark">
      {value} {value === 1 ? "item" : "items"}
    </span>
  );

  const renderCustomer = (value: string, row: any) => (
    <div className="sm:text-center">
      <div className="font-medium text-text-dark">{value}</div>
      <div className="text-xs text-text-light">{row.customerEmail}</div>
    </div>
  );

  return (
    <div>
      <DashTable
        title="Orders"
        columns={[
          { key: "id", label: "Order ID", sortable: true },
          {
            key: "customerName",
            label: "Customer",
            sortable: true,
            render: renderCustomer,
          },
          {
            key: "total",
            label: "Total",
            sortable: true,
            render: renderPrice,
          },
          {
            key: "status",
            label: "Status",
            sortable: true,
            render: renderStatus,
          },
          {
            key: "orderDate",
            label: "Order Date",
            sortable: true,
            render: renderDate,
          },
          {
            key: "items",
            label: "Items",
            sortable: true,
            render: renderItems,
          },
          {
            key: "shippingAddress",
            label: "Shipping Address",
            sortable: true,
            render: (value: string) => (
              <div className="max-w-[200px] truncate" title={value}>
                {value}
              </div>
            ),
          },
        ]}
        data={orders}
        onAdd={() => {
          setEditingOrder(null);
          setIsPopupOpen(true);
        }}
        addButtonText="Add Order"
        actions={orderActions}
      />

      <PopupForm
        isOpen={isPopupOpen}
        onClose={() => {
          setIsPopupOpen(false);
          setEditingOrder(null);
        }}
        onSubmit={editingOrder ? handleEditOrder : handleAddOrder}
        title={editingOrder ? "Edit Order" : "Add New Order"}
        fields={orderFields}
        initialData={editingOrder}
        submitText={editingOrder ? "Update Order" : "Add Order"}
      />
    </div>
  );
};

export default OrdersPage;
