"use client";
import { useState, useEffect } from "react";

export interface FormField {
  key: string;
  label: string;
  type: "text" | "email" | "number" | "select" | "textarea" | "password";
  required?: boolean;
  options?: { value: string; label: string }[]; // For select fields
  placeholder?: string;
}

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  title: string;
  fields: FormField[];
  initialData?: any; // For edit mode
  submitText?: string;
}

const PopupForm = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  fields,
  initialData = {},
  submitText = "Submit",
}: PopupFormProps) => {
  const [formData, setFormData] = useState<any>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      const initialFormData: any = {};
      fields.forEach((field) => {
        initialFormData[field.key] = initialData
          ? initialData[field.key] || ""
          : "";
      });
      setFormData(initialFormData);
      setErrors({});
    }
  }, [isOpen, initialData, fields]);

  const handleChange = (key: string, value: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [key]: value,
    }));

    if (errors[key]) {
      setErrors((prev) => ({
        ...prev,
        [key]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    fields.forEach((field) => {
      if (field.required && !formData[field.key]) {
        newErrors[field.key] = `${field.label} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black-light bg-opacity-50 flex items-center justify-center p-3 sm:p-4 z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto mx-2 sm:mx-0">
        <div className="p-4 sm:p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-serif text-text-dark">
              {title}
            </h2>
            <button
              onClick={onClose}
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

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            {fields.map((field) => (
              <div key={field.key}>
                <label className="block text-sm font-medium text-text-dark mb-1 sm:mb-2">
                  {field.label}
                  {field.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </label>

                {field.type === "select" ? (
                  <select
                    value={formData[field.key] || ""}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                    className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:border-terracotta text-sm sm:text-base"
                  >
                    <option value="">Select {field.label}</option>
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : field.type === "textarea" ? (
                  <textarea
                    value={formData[field.key] || ""}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    rows={4}
                    className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:border-terracotta resize-vertical text-sm sm:text-base"
                  />
                ) : (
                  <input
                    type={field.type}
                    value={formData[field.key] || ""}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2 border border-border-light rounded-lg focus:outline-none focus:border-terracotta text-sm sm:text-base"
                  />
                )}

                {errors[field.key] && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors[field.key]}
                  </p>
                )}
              </div>
            ))}

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-border-light text-text-medium rounded-lg hover:bg-pink-light transition-colors text-sm sm:text-base order-2 sm:order-1"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-terracotta hover:bg-terracotta-dark text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm sm:text-base order-1 sm:order-2"
              >
                {submitText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
