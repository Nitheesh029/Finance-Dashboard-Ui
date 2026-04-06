import React from "react";

const Badge = ({ type, children }) => {
  return (
    <span
      className={`px-3 py-1 rounded-full ${type === "income" ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 text-sm" : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 text-sm"}`}
    >
      {children}
    </span>
  );
};

export default Badge;
