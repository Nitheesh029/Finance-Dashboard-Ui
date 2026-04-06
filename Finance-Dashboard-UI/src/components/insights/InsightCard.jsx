const toneStyles = {
  neutral:
    "border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800",
  success:
    "border-green-200 bg-green-50/70 dark:border-green-900 dark:bg-green-950/30",
  danger:
    "border-red-200 bg-red-50/70 dark:border-red-900 dark:bg-red-950/30",
  accent:
    "border-blue-200 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/30",
};

const InsightCard = ({
  eyebrow,
  title,
  value,
  description,
  tone = "neutral",
}) => {
  return (
    <article
      className={`rounded-2xl border p-5 shadow-sm ${toneStyles[tone] || toneStyles.neutral}`}
    >
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
        {eyebrow}
      </div>
      <div className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        {title}
      </div>
      <div className="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        {value}
      </div>
      <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
        {description}
      </p>
    </article>
  );
};

export default InsightCard;
