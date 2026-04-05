import { useContext } from "react";
import { AppContext } from "../../context/AppContext.jsx";
import Button from "../ui/Button.jsx";

const Sidebar = () => {
  const { currentSection, setCurrentSection, theme, handleTheme } =
    useContext(AppContext);

  const navItems = [
    { label: "Dashboard", key: "dashboard" },
    { label: "Transactions", key: "transactions" },
    { label: "Insights", key: "insights" },
  ];

  return (
    <div className="w-full h-screen flex flex-col gap-y-2 p-5 bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-700">
      <h1 className="text-xl font-bold text-zinc-800 dark:text-white mb-4">
        FinanceApp
      </h1>

      <div className="flex flex-col gap-y-2 flex-1">
        {navItems.map((item) => (
          <Button
            key={item.key}
            children={item.label}
            onClick={() => setCurrentSection(item.key)}
            active={currentSection === item.key}
          />
        ))}
      </div>

      <button
        onClick={handleTheme}
        className="w-full p-2 rounded-lg text-sm font-medium border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      >
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
};

export default Sidebar;
