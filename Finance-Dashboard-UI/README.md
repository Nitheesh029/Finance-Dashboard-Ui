# Finance Dashboard UI

This project is a simple finance dashboard UI.

It helps users view income, expenses, balance, spending charts, transaction records, and basic financial insights in one place. The app has multiple sections like Dashboard, Transactions, and Insights, and it also supports light and dark theme styles.

The goal of this project is to present financial data in a clean and easy-to-understand interface using reusable React components.

## What The Project Does

- Shows summary cards for balance, income, and expenses
- Displays charts for monthly trends and category spending
- Lets users search, sort, filter, add, edit, and delete transactions
- Includes an insights page for quick spending analysis
- Supports desktop sidebar navigation and mobile bottom navigation

## Build Notes

The UI in this project is a mix of my own work and AI-assisted scaffolding.

- I built and guided the main app structure, feature direction, and the project-specific logic.
- AI was mainly used to help generate generic UI components and repeated interface patterns.
- Core calculations, feature decisions, and the overall finance dashboard behavior were built by me.
- Some common UI patterns, such as parts of the table layout and similar reusable interface templates, were adapted from standard UI template ideas and then adjusted for this project.
- The sample `mockTransactions` data is placeholder content, and a small portion of that mock data was generated with AI assistance for demo purposes.

## Stack

- React
- Vite
- Tailwind CSS
- Chart.js / react-chartjs-2
- Lucide React

## Folder Structure

```text
Finance-Dashboard-UI/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── dashboard/
│   │   ├── insights/
│   │   ├── layout/
│   │   ├── transactions/
│   │   └── ui/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Important Files

- `src/App.jsx`:
  Controls which page is shown inside the main layout.
- `src/main.jsx`:
  Entry point of the React app.
- `src/context/AppContext.jsx`:
  Stores shared app state like theme, role, section, filters, and transactions.
- `src/pages/Dashboard.jsx`:
  Dashboard screen with summary cards and charts.
- `src/pages/Transactions.jsx`:
  Transactions screen with filters, table, and modal.
- `src/pages/Insights.jsx`:
  Insights screen with financial summary cards.
- `src/data/mockTransactions.js`:
  Sample transaction data for demo use.
- `src/utils/calculations.js`:
  Helper functions for totals, comparisons, and analytics.

## Component Groups

- `src/components/layout/`:
  Shared app shell like header, sidebar, layout, and mobile nav.
- `src/components/dashboard/`:
  Dashboard-specific UI like summary cards and charts.
- `src/components/transactions/`:
  Filters, rows, table, and modal for transaction management.
- `src/components/insights/`:
  Reusable insight card UI.
- `src/components/ui/`:
  Small shared UI elements like badges, buttons, and empty states.
