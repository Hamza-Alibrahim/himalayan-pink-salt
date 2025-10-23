"use client";
import { useState } from "react";
import PopupForm, { FormField } from "../components/PopupForm";
import DashTable from "../components/DashTable";

const page = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Fine Grain Pink Salt",
      description: "Perfect for everyday cooking and seasoning",
      price: 12.99,
      originalPrice: 16.99,
      stock: 50,
      status: "active",
      category: "cooking",
    },
    {
      id: 2,
      name: "Coarse Grain Salt",
      description: "Ideal for salt grinders and meat rubs",
      price: 14.99,
      originalPrice: 19.99,
      stock: 25,
      status: "active",
      category: "cooking",
    },
    {
      id: 3,
      name: "Salt Grinder Set",
      description: "Complete set with adjustable grinder",
      price: 24.99,
      originalPrice: 29.99,
      stock: 0,
      status: "out-of-stock",
      category: "accessories",
    },
    {
      id: 4,
      name: "Bath Salt Crystals",
      description: "Large crystals for spa treatments",
      price: 18.99,
      originalPrice: 22.99,
      stock: 15,
      status: "active",
      category: "wellness",
    },
  ]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);

  const productFields: FormField[] = [
    {
      key: "name",
      label: "Product Name",
      type: "text",
      required: true,
      placeholder: "Enter product name",
    },
    {
      key: "description",
      label: "Description",
      type: "textarea",
      required: true,
      placeholder: "Enter product description",
    },
    {
      key: "price",
      label: "Price ($)",
      type: "number",
      required: true,
      placeholder: "Enter price",
    },
    {
      key: "originalPrice",
      label: "Original Price ($)",
      type: "number",
      required: false,
      placeholder: "Enter original price (optional)",
    },
    {
      key: "stock",
      label: "Stock Quantity",
      type: "number",
      required: true,
      placeholder: "Enter stock quantity",
    },
    {
      key: "category",
      label: "Category",
      type: "select",
      required: true,
      options: [
        { value: "cooking", label: "Cooking Salt" },
        { value: "wellness", label: "Bath & Wellness" },
        { value: "accessories", label: "Accessories" },
        { value: "home", label: "Home Decor" },
      ],
    },
    {
      key: "status",
      label: "Status",
      type: "select",
      required: true,
      options: [
        { value: "active", label: "Active" },
        { value: "out-of-stock", label: "Out of Stock" },
        { value: "draft", label: "Draft" },
        { value: "discontinued", label: "Discontinued" },
      ],
    },
  ];

  const handleAddProduct = (productData: any) => {
    const newProduct = {
      ...productData,
      id: Math.max(...products.map((p) => p.id)) + 1,
      price: parseFloat(productData.price),
      originalPrice: productData.originalPrice
        ? parseFloat(productData.originalPrice)
        : null,
      stock: parseInt(productData.stock),
    };
    setProducts((prev) => [...prev, newProduct]);
    setIsPopupOpen(false);
  };

  const handleEditProduct = (productData: any) => {
    const updatedProduct = {
      ...productData,
      price: parseFloat(productData.price),
      originalPrice: productData.originalPrice
        ? parseFloat(productData.originalPrice)
        : null,
      stock: parseInt(productData.stock),
    };
    setProducts((prev) =>
      prev.map((product) =>
        product.id === editingProduct.id
          ? { ...product, ...updatedProduct }
          : product
      )
    );
    setEditingProduct(null);
    setIsPopupOpen(false);
  };

  const productActions = (row: any) => (
    <div className="flex items-center gap-2">
      {/* Edit Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setEditingProduct(row);
          setIsPopupOpen(true);
        }}
        className="p-2 text-terracotta hover:bg-pink-light rounded-lg transition-colors"
        title="Edit"
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
          setProducts((prev) =>
            prev.filter((product) => product.id !== row.id)
          );
        }}
        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        title="Delete"
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

      {/* View Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          console.log("View:", row);
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
    </div>
  );

  // Custom render functions for better display
  const renderPrice = (value: number) => `$${value}`;

  const renderStock = (value: number, row: any) => (
    <span
      className={
        value > 0 ? "text-success font-medium" : "text-red-600 font-medium"
      }
    >
      {value > 0 ? `${value} in stock` : "Out of stock"}
    </span>
  );

  const renderStatus = (value: string) => (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${
        value === "active"
          ? "bg-green-100 text-green-800"
          : value === "out-of-stock"
          ? "bg-red-100 text-red-800"
          : value === "draft"
          ? "bg-yellow-100 text-yellow-800"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      {value.replace("-", " ").toUpperCase()}
    </span>
  );

  const renderCategory = (value: string) => (
    <span className="capitalize text-text-dark font-medium">
      {value.replace("-", " ")}
    </span>
  );

  return (
    <div className="p-5">
      <DashTable
        title="Products"
        columns={[
          { key: "id", label: "ID", sortable: true },
          { key: "name", label: "Product Name", sortable: true },
          { key: "description", label: "Description", sortable: true },
          {
            key: "price",
            label: "Price",
            sortable: true,
            render: renderPrice,
          },
          {
            key: "originalPrice",
            label: "Original Price",
            sortable: true,
            render: (value: number) => (value ? `$${value}` : "-"),
          },
          {
            key: "stock",
            label: "Stock",
            sortable: true,
            render: renderStock,
          },
          {
            key: "category",
            label: "Category",
            sortable: true,
            render: renderCategory,
          },
          {
            key: "status",
            label: "Status",
            sortable: true,
            render: renderStatus,
          },
        ]}
        data={products}
        onAdd={() => {
          setEditingProduct(null);
          setIsPopupOpen(true);
        }}
        addButtonText="Add Product"
        actions={productActions}
      />

      <PopupForm
        isOpen={isPopupOpen}
        onClose={() => {
          setIsPopupOpen(false);
          setEditingProduct(null);
        }}
        onSubmit={editingProduct ? handleEditProduct : handleAddProduct}
        title={editingProduct ? "Edit Product" : "Add New Product"}
        fields={productFields}
        initialData={editingProduct}
        submitText={editingProduct ? "Update Product" : "Add Product"}
      />
    </div>
  );
};

export default page;
