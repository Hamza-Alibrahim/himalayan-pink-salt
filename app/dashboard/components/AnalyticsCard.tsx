interface AnalyticsCardProps {
  title: string;
  value: string;
  subtitle: string;
  trend: number;
  icon: string;
}

const AnalyticsCard = ({
  title,
  value,
  subtitle,
  trend,
  icon,
}: AnalyticsCardProps) => {
  const isPositive = trend >= 0;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 sm:p-6 border border-border-light hover:border-pink-light">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-text-medium">{title}</h3>
        <span className="text-xl">{icon}</span>
      </div>

      <p className="text-2xl sm:text-3xl font-serif text-text-dark font-semibold mb-1">
        {value}
      </p>

      <div className="flex items-center justify-between">
        <p className="text-xs text-text-light">{subtitle}</p>
        <div
          className={`flex items-center gap-1 ${
            isPositive ? "text-success" : "text-red-500"
          }`}
        >
          <svg
            className={`w-3 h-3 ${!isPositive ? "rotate-180" : ""}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-xs font-medium">
            {isPositive ? "+" : ""}
            {trend}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
