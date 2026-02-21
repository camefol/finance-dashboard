/**
 * Decorative “unified accounts” visual: multiple nodes connecting to a central hub.
 */
export function AccountsVisual() {
  return (
    <div className="flex items-center justify-center p-6" aria-hidden>
      <svg
        viewBox="0 0 200 120"
        className="h-full max-h-[200px] w-full max-w-[280px] text-slate-300"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        {/* Central hub */}
        <circle cx="100" cy="60" r="18" className="fill-indigo-500/20 stroke-indigo-400" />
        <circle cx="100" cy="60" r="12" className="fill-indigo-500 stroke-indigo-600" />

        {/* Satellite nodes */}
        <circle cx="40" cy="30" r="10" className="fill-white stroke-slate-400 shadow-sm" />
        <circle cx="160" cy="30" r="10" className="fill-white stroke-slate-400 shadow-sm" />
        <circle cx="40" cy="90" r="10" className="fill-white stroke-slate-400 shadow-sm" />
        <circle cx="160" cy="90" r="10" className="fill-white stroke-slate-400 shadow-sm" />

        {/* Connection lines to hub */}
        <line x1="52" y1="38" x2="85" y2="52" className="stroke-slate-300" />
        <line x1="148" y1="38" x2="115" y2="52" className="stroke-slate-300" />
        <line x1="52" y1="82" x2="85" y2="68" className="stroke-slate-300" />
        <line x1="148" y1="82" x2="115" y2="68" className="stroke-slate-300" />
      </svg>
    </div>
  )
}
