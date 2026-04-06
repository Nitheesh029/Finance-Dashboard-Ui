import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Search } from "lucide-react";

const TransactionFilters = () => {
  const { search, handleSearch, filters, setFilters, sort, handleSort } =
    useContext(AppContext);

  const categories = [
    "Food",
    "Housing",
    "Transport",
    "Shopping",
    "Health",
    "Travel",
    "Subscriptions",
    "Education",
    "Income",
  ];

  return (
    <div className="w-full px-4 py-3 text-zinc-900 dark:text-zinc-200 flex flex-col border dark:bg-zinc-800 rounded-md gap-y-3 border-zinc-200 dark:border-zinc-700 shadow-md">
      <div className="text-base font-semibold">Filters</div>

      <div className="flex flex-row gap-x-3 w-full md:w-[60%] border border-zinc-300 dark:border-zinc-600 px-3 py-1.5 items-center rounded-xl bg-white dark:bg-zinc-700">
        <Search size={16} className="text-zinc-400 shrink-0" />
        <input
          type="text"
          placeholder="Search transactions..."
          className="outline-none border-none bg-transparent w-full text-sm text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="flex flex-col gap-y-1">
          <label className="text-xs text-zinc-500 dark:text-zinc-400">
            Type
          </label>
          <select
            className="border border-zinc-300 dark:border-zinc-600 rounded-lg px-3 py-1.5 bg-white dark:bg-zinc-700 dark:text-zinc-200 text-sm"
            value={filters.type}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, type: e.target.value }))
            }
          >
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div className="flex flex-col gap-y-1">
          <label className="text-xs text-zinc-500 dark:text-zinc-400">
            Category
          </label>
          <select
            className="border border-zinc-300 dark:border-zinc-600 rounded-lg px-3 py-1.5 bg-white dark:bg-zinc-700 dark:text-zinc-200 text-sm"
            value={filters.category}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, category: e.target.value }))
            }
          >
            <option value="all">All Categories</option>
            {categories.map((c) => (
              <option value={c} key={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-y-1">
          <label className="text-xs text-zinc-500 dark:text-zinc-400">
            Sort
          </label>
          <select
            className="border border-zinc-300 dark:border-zinc-600 rounded-lg px-3 py-1.5 bg-white dark:bg-zinc-700 dark:text-zinc-200 text-sm"
            value={sort}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="highest">Highest Amount</option>
            <option value="lowest">Lowest Amount</option>
          </select>
        </div>

        <div className="flex flex-col gap-y-1">
          <label className="text-xs text-zinc-500 dark:text-zinc-400 invisible">
            Reset
          </label>
          <button
            className="border border-zinc-300 dark:border-zinc-600 rounded-lg px-3 py-1.5 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
            onClick={() => {
              handleSearch("");
              setFilters({ category: "all", type: "all" });
              handleSort("newest");
            }}
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionFilters;
