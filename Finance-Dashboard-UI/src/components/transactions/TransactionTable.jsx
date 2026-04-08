import { useContext } from "react";
import { AppContext } from "../../context/AppContextInstance.js";
import { useTransactions } from "../../hooks/useTransactions.js";
import EmptyState from "../ui/EmptyState.jsx";
import TransactionRow from "./TransactionRow.jsx";

const TransactionTable = ({ onEdit }) => {
  const { role } = useContext(AppContext);
  const filteredTransactions = useTransactions();

  if (filteredTransactions.length === 0) {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
        <EmptyState
          title="No transactions found"
          message="Try adjusting your filters to see more results."
        />
      </div>
    );
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-zinc-50 dark:bg-zinc-900/60">
            <tr className="text-left text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              <th className="px-4 py-4">Date</th>
              <th className="px-4 py-4">Title</th>
              <th className="px-4 py-4">Category</th>
              <th className="px-4 py-4">Type</th>
              <th className="px-4 py-4">Amount</th>
              {role === "admin" ? <th className="px-4 py-4">Actions</th> : null}
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction) => (
              <TransactionRow
                key={transaction.id}
                transaction={transaction}
                onEdit={onEdit}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TransactionTable;
