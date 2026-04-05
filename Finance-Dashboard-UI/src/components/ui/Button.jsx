const Button = ({ children, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full h-11 cursor-pointer text-sm font-semibold rounded-md text-white transition-all
        ${
          active
            ? "bg-gradient-to-r from-slate-600 to-slate-950 h-15"
            : "bg-gradient-to-r from-slate-600 to-slate-950 hover:from-slate-950 hover:to-slate-600"
        }`}
    >
      {children}
    </button>
  );
};

export default Button;
