import { useContext } from "react";
import { AppContext } from "../context/AppContextInstance.js";

export const useTransactions = () => {
  const { transactions, filters, sort, search } = useContext(AppContext);

  const filtered = transactions.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase()),
  );

  const filteredByType =
    filters.type === "all"
      ? filtered
      : filtered.filter((t) => t.type === filters.type);

  const filteredByCategory =
    filters.category === "all"
      ? filteredByType
      : filteredByType.filter((t) => t.category === filters.category);

  const sorted = [...filteredByCategory].sort((a, b) => {
    if (sort === "newest") return new Date(b.date) - new Date(a.date);
    if (sort === "oldest") return new Date(a.date) - new Date(b.date);
    if (sort === "highest") return b.amount - a.amount;
    if (sort === "lowest") return a.amount - b.amount;
    return 0;
  });

  return sorted;
};
