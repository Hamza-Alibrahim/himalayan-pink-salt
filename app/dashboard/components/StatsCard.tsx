interface StatsCardProps {
  title: string;
  value: string;
  change: number;
  icon: string;
  description: string;
}

const StatsCard = ({
  title,
  value,
  change,
  icon,
  description,
}: StatsCardProps) => {
  const isPositive = change >= 0;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 sm:p-6 border border-border-light hover:border-pink-light">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h3 className="text-sm sm:text-base font-medium text-text-medium">
          {title}
        </h3>
        <span className="text-xl sm:text-2xl">{icon}</span>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl sm:text-3xl font-serif text-text-dark font-semibold mb-1">
            {value}
          </p>
          <div
            className={`flex items-center gap-1 ${
              isPositive ? "text-success" : "text-red-500"
            }`}
          >
            <svg
              className={`w-3 h-3 sm:w-4 sm:h-4 ${
                !isPositive ? "rotate-180" : ""
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs sm:text-sm font-medium">
              {isPositive ? "+" : ""}
              {change}%
            </span>
          </div>
        </div>
        <p className="text-xs text-text-light text-right max-w-[100px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
