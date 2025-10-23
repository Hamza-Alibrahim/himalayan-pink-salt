interface props {
  testimonial: {
    id: number;
    name: string;
    role: string;
    location: string;
    rating: number;
    text: string;
    image: string;
    verified: boolean;
  };
}

const Testimonial = ({ testimonial }: props) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-6 md:p-8 border border-border-light hover:border-pink-light h-full flex flex-col">
      {/* Rating */}
      <div className="flex text-amber-400 mb-3 sm:mb-4 text-sm sm:text-base">
        {"★".repeat(testimonial.rating)}
        {"☆".repeat(5 - testimonial.rating)}
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-text-medium leading-relaxed mb-4 sm:mb-6 italic text-sm sm:text-base flex-grow">
        "{testimonial.text}"
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-light rounded-full flex items-center justify-center flex-shrink-0">
          {testimonial.image ? (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
          ) : (
            <span className="text-terracotta font-serif text-base sm:text-lg">
              {testimonial.name.charAt(0)}
            </span>
          )}
        </div>

        <div className="flex-grow min-w-0">
          <div className="flex items-center gap-1 sm:gap-2 mb-0.5">
            <h4 className="font-semibold text-text-dark text-sm sm:text-base truncate">
              {testimonial.name}
            </h4>
            {testimonial.verified && (
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <p className="text-xs sm:text-sm text-text-medium truncate">
            {testimonial.role}
          </p>
          <p className="text-xs text-text-light truncate">
            {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
