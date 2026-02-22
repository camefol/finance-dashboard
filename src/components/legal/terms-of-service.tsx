export function TermsOfServiceContent() {
  return (
    <>
      <p className="mb-3 text-sm text-gray-600">
        Last updated: {new Date().toLocaleDateString()}
      </p>
      <div className="prose prose-sm max-h-[60vh] overflow-y-auto text-gray-600">
        <p className="mb-3">
          By using FinSaver (&quot;the Service&quot;), you agree to these terms. If you do not agree, please do not use the Service.
        </p>
        <h3 className="mb-2 mt-4 font-medium text-gray-900">Use of the Service</h3>
        <p className="mb-3">
          You must use the Service in compliance with applicable laws. You are responsible for keeping your account credentials secure and for all activity under your account.
        </p>
        <h3 className="mb-2 mt-4 font-medium text-gray-900">Data and accuracy</h3>
        <p className="mb-3">
          We strive to provide accurate financial tools, but we do not guarantee the accuracy of calculations or third-party data. Always verify important figures independently.
        </p>
        <h3 className="mb-2 mt-4 font-medium text-gray-900">Changes</h3>
        <p className="mb-3">
          We may update these terms from time to time. Continued use of the Service after changes constitutes acceptance of the updated terms.
        </p>
      </div>
    </>
  )
}
