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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
