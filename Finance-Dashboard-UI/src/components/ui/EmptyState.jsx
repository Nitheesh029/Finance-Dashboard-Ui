import React from "react";
import { Search } from "lucide-react";
const EmptyState = ({ title, message }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center gap-y-2 py-16">
      <div className="text-4xl mb-2 text-zinc-900 dark:text-zinc-200">
        <Search />
      </div>
      <div className="text-xl font-semibold text-zinc-700 dark:text-zinc-200">
        {title}
      </div>
      <div className="text-sm font-semibold text-zinc-400 dark:text-zinc-500">
        {message}
      </div>
    </div>
  );
};

export default EmptyState;
