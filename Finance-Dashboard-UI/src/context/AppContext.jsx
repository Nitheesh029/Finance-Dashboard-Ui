import { createContext, useState } from "react";
import mockTransactions from "../data/mockTransactions";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [role, setRole] = useState("viewer");
  const [transactions, setTransactions] = useState(mockTransactions);
  const [currentSection, setCurrentSection] = useState("dashboard");
  const [theme, setTheme] = useState("light");
  const [filters, setFilters] = useState({
    category: "all",
    type: "all",
  });
  const [sort, setSort] = useState("newest");
  const [search, setSearch] = useState("");

  const handleRole = (userRole) => setRole(userRole);

  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleSort = (sortOption) => setSort(sortOption);

  const handleSearch = (value) => setSearch(value);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [
      {
        ...transaction,
        id: Date.now(),
      },
      ...prev,
    ]);
  };

  const updateTransaction = (updatedTransaction) => {
    setTransactions((prev) =>
      prev.map((transaction) =>
        transaction.id === updatedTransaction.id
          ? updatedTransaction
          : transaction,
      ),
    );
  };

  const deleteTransaction = (transactionId) => {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== transactionId),
    );
  };

  return (
    <AppContext.Provider
      value={{
        role,
        transactions,
        theme,
        filters,
        sort,
        search,
        currentSection,
        setCurrentSection,
        handleRole,
        handleTheme,
        handleSort,
        handleSearch,
        setTransactions,
        setFilters,
        addTransaction,
        updateTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
