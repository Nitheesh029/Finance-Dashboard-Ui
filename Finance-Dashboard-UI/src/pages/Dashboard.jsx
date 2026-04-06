import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import SummaryCard from "../components/dashboard/SummaryCard";
import BalanceTrendChart from "../components/dashboard/BalanceTrendChart";
import SpendingBreakdownChart from "../components/dashboard/SpendingBreakdownChart";
import {
  getTotalIncome,
  getTotalExpense,
  getBalance,
} from "../utils/calculations";
import { Wallet, TrendingUp, TrendingDown } from "lucide-react";

const Dashboard = () => {
  const { transactions } = useContext(AppContext);

  const totalIncome = getTotalIncome(transactions);
  const totalExpense = getTotalExpense(transactions);
  const balance = getBalance(transactions);

  const formatCurrency = (amount) =>
    `₹${amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;

  return (
    <div className="flex flex-col gap-y-6 p-4 md:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <SummaryCard
          title="Total Balance"
          value={formatCurrency(balance)}
          type="balance"
          icon={Wallet}
        />
        <SummaryCard
          title="Total Income"
          value={formatCurrency(totalIncome)}
          type="income"
          icon={TrendingUp}
        />
        <SummaryCard
          title="Total Expenses"
          value={formatCurrency(totalExpense)}
          type="expense"
          icon={TrendingDown}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <BalanceTrendChart />
        <SpendingBreakdownChart />
      </div>
    </div>
  );
};

export default Dashboard;
