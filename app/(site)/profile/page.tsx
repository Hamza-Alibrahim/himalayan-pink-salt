"use client";
import { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, New York, NY 10001",
    joinDate: "January 15, 2024",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({ ...user });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-off-white py-6 sm:py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-xl shadow-sm border border-border-light p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-white text-xl sm:text-2xl font-serif">
                {user.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif text-text-dark mb-2">
              My Profile
            </h1>
            <p className="text-text-light text-sm sm:text-base">
              Member since {user.joinDate}
            </p>
          </div>

          {/* Profile Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:border-terracotta text-sm sm:text-base"
                  />
                ) : (
                  <p className="text-text-dark font-medium text-sm sm:text-base">
                    {user.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Email Address
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:border-terracotta text-sm sm:text-base"
                  />
                ) : (
                  <p className="text-text-dark font-medium text-sm sm:text-base break-all">
                    {user.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Phone Number
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:border-terracotta text-sm sm:text-base"
                />
              ) : (
                <p className="text-text-dark font-medium text-sm sm:text-base">
                  {user.phone}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Shipping Address
              </label>
              {isEditing ? (
                <textarea
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  rows={3}
                  className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:border-terracotta resize-vertical text-sm sm:text-base"
                />
              ) : (
                <p className="text-text-dark font-medium text-sm sm:text-base leading-relaxed">
                  {user.address}
                </p>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border-light">
            {isEditing ? (
              <>
                <button
                  onClick={handleCancel}
                  className="flex-1 px-4 py-2 border border-border-light text-text-medium rounded-lg hover:bg-pink-light transition-colors text-sm sm:text-base order-2 sm:order-1"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="flex-1 bg-terracotta hover:bg-terracotta-dark text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm sm:text-base order-1 sm:order-2"
                >
                  Save Changes
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="w-full bg-terracotta hover:bg-terracotta-dark text-white py-2 sm:py-3 px-4 rounded-lg font-medium transition-colors text-sm sm:text-base"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
