interface SettingSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const SettingSection = ({
  title,
  description,
  children,
}: SettingSectionProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 border border-border-light">
      <div className="mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-serif text-text-dark mb-2">
          {title}
        </h2>
        <p className="text-sm text-text-medium">{description}</p>
      </div>
      {children}
    </div>
  );
};

export default SettingSection;
