import { useContext } from "react";
import { AppContext } from "../../context/AppContext.jsx";
import Badge from "../ui/Badge.jsx";

const TransactionRow = ({ transaction, onEdit }) => {
  const { role, deleteTransaction } = useContext(AppContext);

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

  const formatCurrency = (amount) =>
    `Rs ${amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;

  return (
    <tr className="border-b border-zinc-200 text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-200">
      <td className="whitespace-nowrap px-4 py-4">{formatDate(transaction.date)}</td>
      <td className="min-w-[220px] px-4 py-4 font-medium text-zinc-900 dark:text-zinc-100">
        {transaction.title}
      </td>
      <td className="whitespace-nowrap px-4 py-4">{transaction.category}</td>
      <td className="whitespace-nowrap px-4 py-4">
        <Badge type={transaction.type}>{transaction.type}</Badge>
      </td>
      <td
        className={`whitespace-nowrap px-4 py-4 font-semibold ${
          transaction.type === "income"
            ? "text-green-600 dark:text-green-400"
            : "text-red-600 dark:text-red-400"
        }`}
      >
        {formatCurrency(transaction.amount)}
      </td>
      {role === "admin" ? (
        <td className="whitespace-nowrap px-4 py-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onEdit(transaction)}
              className="rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-700"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => deleteTransaction(transaction.id)}
              className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950/40"
            >
              Delete
            </button>
          </div>
        </td>
      ) : null}
    </tr>
  );
};

export default TransactionRow;
