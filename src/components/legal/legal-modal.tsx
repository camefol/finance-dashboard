"use client"

type LegalModalProps = {
  isOpen: boolean
  onClose: () => void
  titleId: string
  title: string
  children: React.ReactNode
}

export function LegalModal({ isOpen, onClose, titleId, title, children }: LegalModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        aria-label="Close modal"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
        <h2 id={titleId} className="mb-4 text-xl font-semibold text-gray-900">
          {title}
        </h2>
        {children}
        <button
          type="button"
          className="mt-4 w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}
