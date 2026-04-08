import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContextInstance.js";
const Header = () => {
  const { currentSection, handleRole, role } = useContext(AppContext);
  return (
    <div className="w-full border-b border-zinc-200 bg-white px-4 py-4 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 md:px-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col">
          <div className="text-xl capitalize font-semibold text-zinc-900 dark:text-zinc-100">
            {currentSection}
          </div>
          <div className="text-sm text-zinc-500 dark:text-zinc-400">
            Track your financial activity in one place
          </div>
        </div>

        <select
          value={role}
          onChange={(e) => handleRole(e.target.value)}
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 cursor-pointer dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 sm:w-auto"
        >
          <option value="admin">Admin</option>
          <option value="viewer">Viewer</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
