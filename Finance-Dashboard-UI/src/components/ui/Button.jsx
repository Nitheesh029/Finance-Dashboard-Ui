const Button = ({ children, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full h-11 cursor-pointer rounded-xl border text-sm font-semibold transition-colors
        ${
          active
            ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
            : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800"
        }`}
    >
      {children}
    </button>
  );
};

export default Button;
