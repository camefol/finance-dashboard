type ContactUsContentProps = {
  contactEmail: string
}

export function ContactUsContent({ contactEmail }: ContactUsContentProps) {
  return (
    <div className="max-h-[60vh] overflow-y-auto text-gray-600">
      <p className="mb-4 text-sm">
        Have a question or feedback? Reach out and we&apos;ll get back to you as soon as we can.
      </p>
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-500">Email</p>
        <a
          href={`mailto:${contactEmail}`}
          className="text-base font-medium text-gray-900 underline decoration-gray-300 underline-offset-2 hover:decoration-gray-500"
        >
          {contactEmail}
        </a>
      </div>
      <p className="mt-4 text-xs text-gray-500">
        We typically respond within 1–2 business days.
      </p>
    </div>
  )
}
