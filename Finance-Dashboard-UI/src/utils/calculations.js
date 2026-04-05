export const getTotalIncome = (transactions) => {
  const incomeTransactions = transactions.filter((t) => t.type === "income");
  return incomeTransactions.reduce((total, t) => total + t.amount, 0);
};

export const getTotalExpense = (transactions) => {
  const expenseTransactions = transactions.filter((t) => t.type === "expense");
  return expenseTransactions.reduce((total, t) => total + t.amount, 0);
};

export const getBalance = (transactions) => {
  const income = getTotalIncome(transactions);
  const expense = getTotalExpense(transactions);
  return income - expense;
};

export const getSpendingByCategory = (transactions) => {
  const expenses = transactions.filter((t) => t.type === "expense");

  const grouped = expenses.reduce((a, t) => {
    if (!a[t.category]) {
      a[t.category] = 0;
    }
    a[t.category] += t.amount;
    return a;
  }, {});

  return Object.entries(grouped).map(([category, total]) => ({
    category,
    total: parseFloat(total.toFixed(2)),
  }));
};

export const getMonthlyTotals = (transactions) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const grouped = transactions.reduce((a, t) => {
    const date = new Date(t.date);
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const key = `${year}-${String(monthIndex + 1).padStart(2, "0")}`;

    if (!a[key]) {
      a[key] = { month: monthNames[monthIndex], income: 0, expenses: 0 };
    }

    if (t.type === "income") {
      a[key].income += t.amount;
    } else {
      a[key].expenses += t.amount;
    }
    return a;
  }, {});

  return Object.entries(grouped)
    .sort()
    .map(([key, value]) => ({
      month: value.month,
      income: parseFloat(value.income.toFixed(2)),
      expense: parseFloat(value.expenses.toFixed(2)),
    }));
};

export const getHighestSpending = (transactions) => {
  const byCategory = getSpendingByCategory(transactions);

  if (byCategory.length === 0) return null;

  return byCategory.reduce((max, current) =>
    current.total > max.total ? current : max,
  );
};

export const getMonthlyComparison = (transactions) => {
  const monthly = getMonthlyTotals(transactions);

  if (monthly.length < 2) return null;

  const current = monthly[monthly.length - 1];
  const previous = monthly[monthly.length - 2];

  const difference = parseFloat(
    (current.expense - previous.expense).toFixed(2),
  );

  const percentageChange = parseFloat(
    ((current.expense - previous.expense) / previous.expense) * 100,
  ).toFixed(1);

  return {
    currentMonth: current.month,
    previousMonth: previous.month,
    currentExpense: current.expense,
    previousExpense: previous.expense,
    difference,
    percentageChange,
    increased: difference > 0,
  };
};

export const getAverageMonthlyExpense = (transactions) => {
  const monthly = getMonthlyTotals(transactions);

  if (monthly.length === 0) return 0;

  const totalExpense = monthly.reduce((sum, m) => sum + m.expense, 0);

  return parseFloat((totalExpense / monthly.length).toFixed(2));
};

export const getLargestTransaction = (transactions) => {
  const expense = transactions.filter((t) => t.type === "expense");

  if (expense.length === 0) return null;

  return expense.reduce((max, t) => (max.amount > t.amount ? max : t));
};
