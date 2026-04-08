import { useContext } from "react";
import { AppContext } from "../../context/AppContextInstance.js";
import { getMonthlyTotals } from "../../utils/calculations";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BalanceTrendChart = () => {
  const { transactions, theme } = useContext(AppContext);
  const monthly = getMonthlyTotals(transactions);

  const labels = monthly.map((m) => m.month);

  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: monthly.map((m) => m.income),
        backgroundColor: "#22c55e",
        borderRadius: 6,
        borderSkipped: false,
      },
      {
        label: "Expenses",
        data: monthly.map((m) => m.expense),
        backgroundColor: "#ef4444",
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  };

  const gridColor = theme === "dark" ? "#3f3f46" : "#e4e4e7";
  const tickColor = theme === "dark" ? "#a1a1aa" : "#71717a";
  const legendColor = theme === "dark" ? "#f4f4f5" : "#3f3f46";

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: legendColor,
          font: { size: 12 },
          boxWidth: 12,
          padding: 16,
        },
      },
      tooltip: {
        backgroundColor: theme === "dark" ? "#18181b" : "#ffffff",
        titleColor: theme === "dark" ? "#f4f4f5" : "#18181b",
        bodyColor: theme === "dark" ? "#a1a1aa" : "#71717a",
        borderColor: theme === "dark" ? "#3f3f46" : "#e4e4e7",
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        callbacks: {
          label: (context) =>
            ` ${context.dataset.label}: ₹${context.parsed.y.toLocaleString("en-IN")}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: tickColor, font: { size: 12 } },
        border: { display: false },
      },
      y: {
        grid: { color: gridColor },
        ticks: {
          color: tickColor,
          font: { size: 12 },
          callback: (value) => `₹${value}`,
        },
        border: { display: false },
      },
    },
  };

  return (
    <div className="w-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-5 flex flex-col gap-y-4">
      <div className="text-base font-semibold text-zinc-700 dark:text-zinc-200">
        Monthly Income vs Expenses
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BalanceTrendChart;
