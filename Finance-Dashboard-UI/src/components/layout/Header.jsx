import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
const Header = () => {
  const { currentSection, handleRole, role } = useContext(AppContext);
  return (
    <div className="w-full flex flex-row justify-around p-4 dark:bg-zinc-950 dark:text-zinc-200 border-b-2 border-zinc-200">
      <div className="text-xl capitalize font-semibold">{currentSection}</div>
      <div>
        <select
          value={role}
          onChange={(e) => handleRole(e.target.value)}
          className="text-sm border border-zinc-300 dark:border-zinc-600 rounded-md px-3 py-1.5 bg-white dark:bg-zinc-800 dark:text-zinc-200 cursor-pointer"
        >
          <option value="admin">Admin</option>
          <option value="viewer">Viewer</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
