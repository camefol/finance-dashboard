type AccountCardProps = {
  icon: string
  title: string
  description: string
  variant?: "primary" | "default"
}

export function AccountCard({
  icon,
  title,
  description,
  variant = "default",
}: AccountCardProps) {
  const isPrimary = variant === "primary"

  return (
    <article
      className={`
        group relative overflow-hidden rounded-2xl border bg-white/90 shadow-sm
        transition-all duration-300 hover:shadow-lg hover:border-slate-200
        ${isPrimary ? "p-6 sm:p-8 lg:col-span-2 lg:row-span-2 lg:flex lg:flex-col lg:justify-center" : "p-5 sm:p-6"}
      `}
    >
      {isPrimary && (
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-indigo-100/80 blur-2xl transition-opacity group-hover:opacity-60"
          aria-hidden
        />
      )}
      <div className="relative flex gap-4 sm:gap-5">
        <div
          className={`
            flex shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700
            transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-700
            ${isPrimary ? "h-14 w-14 text-2xl sm:h-16 sm:w-16 sm:text-3xl" : "h-12 w-12 text-xl sm:h-11 sm:w-11"}
          `}
        >
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <h3
            className={`
              font-semibold text-slate-900
              ${isPrimary ? "text-xl sm:text-2xl" : "text-base sm:text-lg"}
            `}
          >
            {title}
          </h3>
          <p
            className={`
              mt-1 text-slate-600
              ${isPrimary ? "text-base sm:text-lg max-w-md" : "text-sm sm:text-base"}
            `}
          >
            {description}
          </p>
        </div>
      </div>
    </article>
  )
}
