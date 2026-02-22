export function PrivacyPolicyContent() {
  return (
    <>
      <p className="mb-3 text-sm text-gray-600">
        Last updated: {new Date().toLocaleDateString()}
      </p>
      <div className="prose prose-sm max-h-[60vh] overflow-y-auto text-gray-600">
        <p className="mb-3">
          FinSaver (&quot;we&quot;, &quot;our&quot;) respects your privacy. This policy describes how we collect, use, and protect your information when you use our services.
        </p>
        <h3 className="mb-2 mt-4 font-medium text-gray-900">Information we collect</h3>
        <p className="mb-3">
          We may collect your email address when you subscribe to updates, and usage data when you use our app. We do not sell your personal information.
        </p>
        <h3 className="mb-2 mt-4 font-medium text-gray-900">How we use it</h3>
        <p className="mb-3">
          We use your information to provide and improve our services, send product updates if you opted in, and comply with legal obligations.
        </p>
        <h3 className="mb-2 mt-4 font-medium text-gray-900">Contact</h3>
        <p className="mb-3">
          For privacy-related questions, contact us at the email address in the footer.
        </p>
      </div>
    </>
  )
}
