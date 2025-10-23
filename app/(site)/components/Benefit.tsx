import React from "react";

interface props {
  benefit: {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
    cta?: string;
    ctaLink?: string;
  };
}

const Benefit = ({ benefit }: props) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 sm:p-6 md:p-8 text-center group border border-border-light hover:border-pink-light h-full flex flex-col">
      {/* Icon/Image Container */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 md:mb-6 bg-pink-light rounded-full flex items-center justify-center group-hover:bg-pink-medium transition-colors duration-300 flex-shrink-0">
        {benefit.icon}
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-text-dark mb-2 sm:mb-3 md:mb-4">
        {benefit.title}
      </h3>

      {/* Description */}
      <p className="text-text-medium leading-relaxed mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base flex-grow">
        {benefit.description}
      </p>

      {/* Features List */}
      <ul className="text-left space-y-1 sm:space-y-2 mb-3 sm:mb-4 md:mb-6">
        {benefit.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-text-medium"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-terracotta flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="leading-tight sm:leading-normal">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Optional CTA */}
      {benefit.cta && (
        <div className="mt-auto pt-2">
          <button className="text-terracotta hover:text-terracotta-dark font-medium text-xs sm:text-sm md:text-base flex items-center cursor-pointer justify-center gap-1 sm:gap-2 mx-auto transition-colors group/cta">
            {benefit.cta}
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover/cta:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Benefit;
