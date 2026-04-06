import { useContext } from "react";
import { AppContext } from "../../context/AppContext.jsx";
import { Search } from "lucide-react";

const TransactionFilters = () => {
  const { search, handleSearch, filters, setFilters, sort, handleSort, transactions } =
    useContext(AppContext);

  const categories = [...new Set(transactions.map((transaction) => transaction.category))];

  return (
    <section className="w-full rounded-2xl border border-zinc-200 bg-white p-4 text-zinc-900 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
      <div className="mb-4 text-base font-semibold">Filters</div>

      <div className="mb-4 flex w-full items-center gap-x-3 rounded-xl border border-zinc-300 bg-white px-3 py-2 dark:border-zinc-600 dark:bg-zinc-700">
        <Search size={16} className="text-zinc-400 shrink-0" />
        <input
          type="text"
          placeholder="Search transactions..."
          className="outline-none border-none bg-transparent w-full text-sm text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-4">
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
            className="rounded-lg border border-zinc-300 px-3 py-1.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-700"
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
    </section>
  );
};

export default TransactionFilters;
