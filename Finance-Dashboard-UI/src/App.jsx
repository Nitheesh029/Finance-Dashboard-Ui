import { useContext } from "react";
import { AppContext } from "./context/AppContext.jsx";
import Layout from "./components/layout/Layout.jsx";

const App = () => {
  const { theme, currentSection } = useContext(AppContext);

  const renderPage = () => {
    if (currentSection === "dashboard") return <div>Dashboard Page</div>;
    if (currentSection === "transactions") return <div>Transactions Page</div>;
    if (currentSection === "insights") return <div>Insights Page</div>;
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Layout>{renderPage()}</Layout>
    </div>
  );
};

export default App;
