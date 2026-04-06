import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext.jsx";

const defaultForm = {
  title: "",
  amount: "",
  category: "Food",
  type: "expense",
  date: "",
};

const TransactionModal = ({ isOpen, onClose, transaction }) => {
  const { addTransaction, updateTransaction, transactions } = useContext(AppContext);
  const [formData, setFormData] = useState(defaultForm);

  const categories = [...new Set(transactions.map((item) => item.category))];

  useEffect(() => {
    if (transaction) {
      setFormData({
        title: transaction.title,
        amount: transaction.amount,
        category: transaction.category,
        type: transaction.type,
        date: transaction.date,
      });
      return;
    }

    setFormData({
      ...defaultForm,
      category: categories[0] || defaultForm.category,
      date: new Date().toISOString().split("T")[0],
    });
  }, [transaction, isOpen]);

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      ...transaction,
      ...formData,
      amount: Number(formData.amount),
    };

    if (transaction) {
      updateTransaction(payload);
    } else {
      addTransaction(payload);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-zinc-950/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl dark:border-zinc-700 dark:bg-zinc-900">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              {transaction ? "Edit Transaction" : "Add Transaction"}
            </h2>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Save changes to keep your records up to date.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-zinc-300 px-3 py-1.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Close
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(event) => handleChange("title", event.target.value)}
              className="rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-800 outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              Amount
            </label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={formData.amount}
              onChange={(event) => handleChange("amount", event.target.value)}
              className="rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-800 outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(event) => handleChange("category", event.target.value)}
                className="rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-800 outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                Type
              </label>
              <select
                value={formData.type}
                onChange={(event) => handleChange("type", event.target.value)}
                className="rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-800 outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              Date
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(event) => handleChange("date", event.target.value)}
              className="rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-800 outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
              required
            />
          </div>

          <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              {transaction ? "Save Changes" : "Save Transaction"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionModal;
