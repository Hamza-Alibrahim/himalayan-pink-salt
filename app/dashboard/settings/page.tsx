"use client";
import { useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";
import SettingSection from "../components/SettingSection";

const page = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    orders: true,
    promotions: false,
  });

  const [storeInfo, setStoreInfo] = useState({
    storeName: "Himalayan Salt Co.",
    email: "contact@himalayansalt.co",
    phone: "+1 (555) 123-4567",
    address: "123 Salt Mountain Rd, Himalayan Valley",
  });

  const handleSaveSettings = () => {
    console.log("Settings saved:", { notifications, storeInfo });
    alert("Settings saved successfully!");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border border-border-light">
        <h1 className="text-2xl sm:text-3xl font-serif text-text-dark mb-2">
          Store Settings
        </h1>
        <p className="text-sm sm:text-base text-text-medium">
          Manage your Himalayan salt store preferences and configuration.
        </p>
      </div>

      {/* Store Information */}
      <SettingSection
        title="Store Information"
        description="Update your store details and contact information"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-dark mb-2">
              Store Name
            </label>
            <input
              type="text"
              value={storeInfo.storeName}
              onChange={(e) =>
                setStoreInfo({ ...storeInfo, storeName: e.target.value })
              }
              className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={storeInfo.email}
                onChange={(e) =>
                  setStoreInfo({ ...storeInfo, email: e.target.value })
                }
                className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={storeInfo.phone}
                onChange={(e) =>
                  setStoreInfo({ ...storeInfo, phone: e.target.value })
                }
                className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-dark mb-2">
              Store Address
            </label>
            <textarea
              value={storeInfo.address}
              onChange={(e) =>
                setStoreInfo({ ...storeInfo, address: e.target.value })
              }
              rows={3}
              className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent resize-none"
            />
          </div>
        </div>
      </SettingSection>

      {/* Notifications */}
      <SettingSection
        title="Notifications"
        description="Configure how you receive updates and alerts"
      >
        <div className="divide-y divide-border-light">
          <ToggleSwitch
            enabled={notifications.email}
            setEnabled={(enabled) =>
              setNotifications({ ...notifications, email: enabled })
            }
            label="Email Notifications"
            description="Receive order updates and reports via email"
          />
          <ToggleSwitch
            enabled={notifications.push}
            setEnabled={(enabled) =>
              setNotifications({ ...notifications, push: enabled })
            }
            label="Push Notifications"
            description="Get real-time alerts in your browser"
          />
          <ToggleSwitch
            enabled={notifications.orders}
            setEnabled={(enabled) =>
              setNotifications({ ...notifications, orders: enabled })
            }
            label="Order Alerts"
            description="Notify me when new orders are placed"
          />
          <ToggleSwitch
            enabled={notifications.promotions}
            setEnabled={(enabled) =>
              setNotifications({ ...notifications, promotions: enabled })
            }
            label="Promotional Emails"
            description="Receive tips and promotional content"
          />
        </div>
      </SettingSection>

      {/* Preferences */}
      <SettingSection
        title="Preferences"
        description="Customize your store management experience"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-dark mb-2">
              Currency
            </label>
            <select className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent bg-white">
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>GBP (£)</option>
              <option>INR (₹)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-dark mb-2">
              Time Zone
            </label>
            <select className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent bg-white">
              <option>Eastern Time (ET)</option>
              <option>Central Time (CT)</option>
              <option>Pacific Time (PT)</option>
              <option>GMT</option>
            </select>
          </div>
        </div>
      </SettingSection>

      {/* Actions */}
      <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border border-border-light">
        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <button className="px-6 py-2 border border-border-light text-text-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
            Reset to Defaults
          </button>
          <button
            onClick={handleSaveSettings}
            className="px-6 py-2 bg-terracotta text-white rounded-lg hover:bg-terracotta-dark transition-colors duration-200 cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
