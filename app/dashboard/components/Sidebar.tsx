"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "../contexts/sidebar-context";
import { useEffect, useRef } from "react";

interface SidebarItem {
  name: string;
  href: string;
  icon: string;
  badge?: number;
}

interface SidebarProps {
  items: SidebarItem[];
}

const Sidebar = ({ items }: SidebarProps) => {
  const pathname = usePathname();
  const { isOpen, closeSidebar } = useSidebar();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.screenX < 1024) {
        closeSidebar();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle swipe to close
  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isOpen) return;

      const touchX = e.touches[0].clientX;
      const diff = touchStartX.current - touchX;

      // Swipe left to close
      if (diff > 50) {
        closeSidebar();
      }
    };

    sidebar.addEventListener("touchstart", handleTouchStart);
    sidebar.addEventListener("touchmove", handleTouchMove);

    return () => {
      sidebar.removeEventListener("touchstart", handleTouchStart);
      sidebar.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isOpen, closeSidebar]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black-light bg-opacity-50 z-40 transition-opacity"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-100
        w-64 bg-white border-r border-border-light
        transform transition-transform duration-300 ease-in-out
        flex flex-col
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Header */}
        <div className="flex items-center justify-between min-h-[65px] max-h-[65px] px-4 lg:shadow-sm bg-white border-b border-border-light backdrop-blur-sm">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 bg-terracotta rounded-full flex items-center justify-center">
              <span className="text-white font-serif text-xs sm:text-sm">
                HS
              </span>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-serif text-text-dark hidden sm:block">
                Dashboard
              </h1>
              <h1 className="text-base font-serif text-text-dark sm:hidden">
                Menu
              </h1>
            </div>
          </div>

          {/* Close button for mobile */}
          <button
            onClick={closeSidebar}
            className="lg:hidden cursor-pointer p-2 text-text-medium hover:text-terracotta hover:bg-pink-light rounded-lg transition-all duration-200"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
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

        {/* Navigation */}
        <nav className="flex-1 px-3 sm:px-4 py-4 sm:py-6">
          <ul className="space-y-1 sm:space-y-2">
            {items.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      // Close sidebar on mobile when item is clicked
                      if (window.innerWidth < 1024) {
                        closeSidebar();
                      }
                    }}
                    className={`
                      group flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg sm:rounded-xl
                      text-xs sm:text-sm font-medium transition-all duration-200
                      ${
                        isActive
                          ? "bg-terracotta text-white shadow-sm"
                          : "text-text-medium hover:text-terracotta hover:bg-pink-light"
                      }
                    `}
                  >
                    {/* Icon */}
                    <span
                      className={`
                      text-base sm:text-lg transition-transform duration-200
                      ${isActive ? "scale-110" : "group-hover:scale-105"}
                    `}
                    >
                      {item.icon}
                    </span>

                    {/* Text */}
                    <span className="flex-1">{item.name}</span>

                    {/* Badge */}
                    {item.badge && item.badge > 0 && (
                      <span
                        className={`
                        px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs font-semibold rounded-full min-w-5 sm:min-w-6 text-center
                        ${
                          isActive
                            ? "bg-white text-terracotta"
                            : "bg-terracotta text-white"
                        }
                      `}
                      >
                        {item.badge > 99 ? "99+" : item.badge}
                      </span>
                    )}

                    {/* Active indicator dot - Hidden on mobile */}
                    {isActive && (
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full ml-auto hidden sm:block" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-border-light">
          <div className="bg-pink-light rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
              <span className="text-white text-base sm:text-lg">💎</span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-text-dark mb-0.5 sm:mb-1">
              Himalayan Salt
            </p>
            <p className="text-xs text-text-light">Premium Quality</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
