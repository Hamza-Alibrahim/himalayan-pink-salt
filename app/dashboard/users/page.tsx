"use client";
import { useState } from "react";
import PopupForm, { FormField } from "../components/PopupForm";
import DashTable from "../components/DashTable";

const page = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "0987654321",
      role: "user",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "0987654321",
      role: "admin",
    },
  ]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);

  const userFields: FormField[] = [
    {
      key: "name",
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Enter full name",
    },
    {
      key: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "Enter email address",
    },
    {
      key: "phone",
      label: "Phone",
      type: "number",
      required: true,
      placeholder: "Enter phone number",
    },
    {
      key: "role",
      label: "Role",
      type: "select",
      required: true,
      options: [
        { value: "user", label: "User" },
        { value: "admin", label: "Administrator" },
      ],
    },
  ];

  const handleAddUser = (userData: any) => {
    const newUser = {
      ...userData,
      id: Math.max(...users.map((u) => u.id)) + 1,
    };
    setUsers((prev) => [...prev, newUser]);
    setIsPopupOpen(false);
  };

  const handleEditUser = (userData: any) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === editingUser.id ? { ...user, ...userData } : user
      )
    );
    setEditingUser(null);
    setIsPopupOpen(false);
  };

  const handleDeleteUser = (userData: any) => {
    setUsers((prev) => prev.filter((user) => user.id !== userData.id));
  };

  const userActions = (row: any) => (
    <div className="flex items-center gap-2">
      {/* Edit Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setEditingUser(row);
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
          handleDeleteUser(row);
          console.log("Delete:", row);
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

      {/* View Button (optional) */}
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

  return (
    <div className="p-5">
      <DashTable
        title="Users"
        columns={[
          { key: "id", label: "ID", sortable: true },
          { key: "name", label: "Name", sortable: true },
          { key: "email", label: "Email", sortable: true },
          { key: "phone", label: "Phone", sortable: true },
          { key: "role", label: "Role", sortable: true },
        ]}
        data={users}
        onAdd={() => {
          setEditingUser(null);
          setIsPopupOpen(true);
        }}
        actions={userActions}
      />

      <PopupForm
        isOpen={isPopupOpen}
        onClose={() => {
          setIsPopupOpen(false);
          setEditingUser(null);
        }}
        onSubmit={editingUser ? handleEditUser : handleAddUser}
        title={editingUser ? "Edit User" : "Add New User"}
        fields={userFields}
        initialData={editingUser}
        submitText={editingUser ? "Update User" : "Add User"}
      />
    </div>
  );
};

export default page;
