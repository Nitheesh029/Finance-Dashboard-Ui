import { useContext, useState } from "react";
import TransactionFilters from "../components/transactions/TransactionFilters.jsx";
import TransactionModal from "../components/transactions/TransactionModal.jsx";
import TransactionTable from "../components/transactions/TransactionTable.jsx";
import { AppContext } from "../context/AppContextInstance.js";

const Transactions = () => {
  const { role } = useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);

  const handleCreate = () => {
    setEditingTransaction(null);
    setIsModalOpen(true);
  };

  const handleEdit = (transaction) => {
    setEditingTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditingTransaction(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Transactions
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Review, filter, and manage all recorded activity.
          </p>
        </div>

        {role === "admin" ? (
          <button
            type="button"
            onClick={handleCreate}
            className="rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            + Add Transaction
          </button>
        ) : null}
      </div>

      <TransactionFilters />
      <TransactionTable onEdit={handleEdit} />
      {isModalOpen ? (
        <TransactionModal
          key={editingTransaction?.id ?? "new"}
          onClose={handleCloseModal}
          transaction={editingTransaction}
        />
      ) : null}
    </div>
  );
};

export default Transactions;
