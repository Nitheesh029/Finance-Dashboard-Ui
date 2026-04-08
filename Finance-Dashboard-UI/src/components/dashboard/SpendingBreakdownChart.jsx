import { useContext } from "react";
import { AppContext } from "../../context/AppContextInstance.js";
import { getSpendingByCategory } from "../../utils/calculations";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const COLORS = [
  "#22c55e",
  "#ef4444",
  "#3b82f6",
  "#f59e0b",
  "#8b5cf6",
  "#ec4899",
  "#14b8a6",
  "#f97316",
  "#6366f1",
];

const SpendingBreakdownChart = () => {
  const { transactions, theme } = useContext(AppContext);
  const categoryData = getSpendingByCategory(transactions);

  const data = {
    labels: categoryData.map((c) => c.category),
    datasets: [
      {
        data: categoryData.map((c) => c.total),
        backgroundColor: COLORS,
        borderColor: theme === "dark" ? "#27272a" : "#ffffff",
        borderWidth: 2,
        hoverOffset: 6,
      },
    ],
  };

  const legendColor = theme === "dark" ? "#f4f4f5" : "#3f3f46";

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    cutout: "60%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: legendColor,
          font: { size: 12 },
          boxWidth: 12,
          padding: 12,
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
          label: (context) => {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((context.parsed / total) * 100).toFixed(1);
            return ` ₹${context.parsed.toLocaleString("en-IN")} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-5 flex flex-col gap-y-4">
      <div className="text-base font-semibold text-zinc-700 dark:text-zinc-200">
        Spending by Category
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-sm">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default SpendingBreakdownChart;
