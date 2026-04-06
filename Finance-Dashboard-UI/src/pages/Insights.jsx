import { useContext } from "react";
import InsightCard from "../components/insights/InsightCard.jsx";
import EmptyState from "../components/ui/EmptyState.jsx";
import { AppContext } from "../context/AppContext.jsx";
import {
  getAverageMonthlyExpense,
  getHighestSpending,
  getLargestTransaction,
  getMonthlyComparison,
  getMonthlyTotals,
} from "../utils/calculations.js";

const Insights = () => {
  const { transactions } = useContext(AppContext);

  if (transactions.length === 0) {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
        <EmptyState
          title="No insights available"
          message="Add a few transactions to unlock insights and spending patterns."
        />
      </div>
    );
  }

  const highestSpending = getHighestSpending(transactions);
  const averageMonthlyExpense = getAverageMonthlyExpense(transactions);
  const largestTransaction = getLargestTransaction(transactions);
  const monthlyComparison = getMonthlyComparison(transactions);
  const monthlyTotals = getMonthlyTotals(transactions);
  const latestMonth = monthlyTotals[monthlyTotals.length - 1];

  const formatCurrency = (amount) =>
    `Rs ${amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;

  const netStatus =
    latestMonth && latestMonth.income >= latestMonth.expense
      ? {
          value: formatCurrency(latestMonth.income - latestMonth.expense),
          text: `You stayed ahead in ${latestMonth.month} with income above expenses.`,
          tone: "success",
        }
      : latestMonth
        ? {
            value: formatCurrency(latestMonth.expense - latestMonth.income),
            text: `Expenses were higher than income in ${latestMonth.month}. Keep an eye on this trend.`,
            tone: "danger",
          }
        : {
            value: "Rs 0.00",
            text: "More data is needed to evaluate your latest month.",
            tone: "neutral",
          };

  const comparisonCard = monthlyComparison
    ? {
        value: `${monthlyComparison.increased ? "+" : ""}${formatCurrency(Math.abs(monthlyComparison.difference))}`,
        description: monthlyComparison.increased
          ? `Expenses increased by ${monthlyComparison.percentageChange}% from ${monthlyComparison.previousMonth} to ${monthlyComparison.currentMonth}.`
          : `Expenses dropped by ${Math.abs(Number(monthlyComparison.percentageChange))}% from ${monthlyComparison.previousMonth} to ${monthlyComparison.currentMonth}.`,
        tone: monthlyComparison.increased ? "danger" : "success",
      }
    : {
        value: "Not enough data",
        description:
          "Add transactions across at least two months to compare monthly spending trends.",
        tone: "neutral",
      };

  return (
    <div className="flex flex-col gap-6">
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Insights
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Quick overview of your spending.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <InsightCard
          eyebrow="Top Category"
          title={highestSpending ? highestSpending.category : "Unavailable"}
          value={highestSpending ? formatCurrency(highestSpending.total) : "Rs 0.00"}
          description={
            highestSpending
              ? "Highest expense category"
              : "No category data yet"
          }
          tone="accent"
        />
        <InsightCard
          eyebrow="Average Monthly Expense"
          title="Monthly Spend"
          value={formatCurrency(averageMonthlyExpense)}
          description="Average expense"
          tone="neutral"
        />
        <InsightCard
          eyebrow="Largest Expense"
          title={largestTransaction ? largestTransaction.title : "Unavailable"}
          value={
            largestTransaction
              ? formatCurrency(largestTransaction.amount)
              : "Rs 0.00"
          }
          description={
            largestTransaction
              ? largestTransaction.category
              : "No large expense yet"
          }
          tone="danger"
        />
        <InsightCard
          eyebrow="Latest Month Status"
          title={latestMonth ? latestMonth.month : "Overview"}
          value={netStatus.value}
          description={netStatus.text}
          tone={netStatus.tone}
        />
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <InsightCard
          eyebrow="Monthly Change"
          title="Expense Comparison"
          value={comparisonCard.value}
          description={comparisonCard.description}
          tone={comparisonCard.tone}
        />
        <InsightCard
          eyebrow="Spending Focus"
          title="Focus Area"
          value={
            highestSpending
              ? `${highestSpending.category} leads`
              : "Waiting for more data"
          }
          description={
            highestSpending
              ? "Biggest impact on spending"
              : "No focus area yet"
          }
          tone="accent"
        />
        <InsightCard
          eyebrow="Large Purchase Watch"
          title="Single Purchase"
          value={
            largestTransaction
              ? formatCurrency(largestTransaction.amount)
              : "Rs 0.00"
          }
          description={
            largestTransaction
              ? largestTransaction.title
              : "No purchase data yet"
          }
          tone="danger"
        />
        <InsightCard
          eyebrow="Monthly Health"
          title="Income vs Expense"
          value={
            latestMonth
              ? `${formatCurrency(latestMonth.income)} / ${formatCurrency(latestMonth.expense)}`
              : "Not enough data"
          }
          description={
            latestMonth
              ? `${latestMonth.month} overview`
              : "Not enough data"
          }
          tone={netStatus.tone}
        />
      </section>

    </div>
  );
};

export default Insights;
