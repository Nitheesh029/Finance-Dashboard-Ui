import { useContext } from "react";
import { AppContext } from "./context/AppContext.jsx";
import Layout from "./components/layout/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Insights from "./pages/Insights.jsx";
import Transactions from "./pages/Transactions.jsx";
const App = () => {
  const { theme, currentSection } = useContext(AppContext);

  const renderPage = () => {
    if (currentSection === "dashboard")
      return (
        <div>
          <Dashboard />
        </div>
      );
    if (currentSection === "transactions")
      return (
        <div>
          <Transactions />
        </div>
      );
    if (currentSection === "insights")
      return (
        <div>
          <Insights />
        </div>
      );
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Layout>{renderPage()}</Layout>
    </div>
  );
};

export default App;
