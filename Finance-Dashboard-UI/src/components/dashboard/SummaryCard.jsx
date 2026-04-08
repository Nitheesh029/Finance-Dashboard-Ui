const SummaryCard = ({ title, value, type, icon }) => {
  const IconComponent = icon;

  const getTypeStyles = () => {
    if (type === "income")
      return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
    if (type === "expense")
      return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";
    return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300";
  };
  const getIconStyles = () => {
    if (type === "income") return "text-green-500";
    if (type === "expense") return "text-red-500";
    return "text-blue-500";
  };

  return (
    <div className="w-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-5 flex flex-col gap-y-3">
      <div className="flex flex-row items-center justify-between">
        <div>
          <IconComponent size={24} className={getIconStyles()} />
        </div>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeStyles()}`}
        >
          {type}
        </span>
      </div>

      <div className="flex flex-col gap-y-1">
        <div className="text-2xl font-bold text-zinc-800 dark:text-white">
          {value}
        </div>
        <div className="text-sm text-zinc-500 dark:text-zinc-400">{title}</div>
      </div>
    </div>
  );
};

export default SummaryCard;
