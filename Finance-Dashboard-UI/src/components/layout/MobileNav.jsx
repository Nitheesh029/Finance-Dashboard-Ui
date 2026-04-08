import { useContext } from "react";
import { AppContext } from "../../context/AppContextInstance.js";
import { ChartColumn, Lightbulb, ReceiptText } from "lucide-react";

const MobileNav = () => {
  const { currentSection, setCurrentSection } = useContext(AppContext);

  const items = [
    { key: "dashboard", label: "Dashboard", icon: ChartColumn },
    { key: "transactions", label: "Transactions", icon: ReceiptText },
    { key: "insights", label: "Insights", icon: Lightbulb },
  ];

  return (
    <nav className="md:hidden fixed inset-x-0 bottom-0 z-30 border-t border-zinc-200 bg-white/95 px-3 py-3 backdrop-blur dark:border-zinc-700 dark:bg-zinc-950/95">
      <div className="grid grid-cols-3 gap-2">
        {items.map(({ key, label, icon }) => {
          const active = currentSection === key;
          const IconComponent = icon;

          return (
            <button
              key={key}
              onClick={() => setCurrentSection(key)}
              className={`flex flex-col items-center justify-center gap-1 rounded-xl px-3 py-2 text-xs font-medium transition-colors ${
                active
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }`}
            >
              <IconComponent size={18} />
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
