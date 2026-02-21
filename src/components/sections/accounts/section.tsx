import {
  accountsSectionDescription,
  accountsSectionTitle,
  accountFeatures,
} from "./data"
import { AccountCard } from "./account-card"
import { AccountsVisual } from "./accounts-visual"

function AccountsSection() {
  const primaryFeature = accountFeatures.find((f) => f.variant === "primary")
  const defaultFeatures = accountFeatures.filter((f) => f.variant !== "primary")

  return (
    <section
      id="accounts"
      className="relative scroll-mt-24 overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* Repeating SVG background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url(/accounts-bg.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "167px 167px",
        }}
        aria-hidden
      />

      <div
        className="absolute right-0 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-indigo-100/50 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute bottom-1/4 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-slate-100/80 blur-3xl"
        aria-hidden
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-[2.5rem]">
            {accountsSectionTitle}
          </h2>
          <p className="mt-4 text-lg text-black sm:text-xl">
            {accountsSectionDescription}
          </p>
        </header>

        {/* Bento grid: primary card + visual + default cards */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {primaryFeature && (
            <AccountCard
              key={primaryFeature.id}
              icon={primaryFeature.icon}
              title={primaryFeature.title}
              description={primaryFeature.description}
              variant="primary"
            />
          )}

          {/* Decorative visual in grid */}
          <div className="hidden lg:flex lg:col-span-2 lg:row-span-2 lg:items-center lg:justify-center">
            <AccountsVisual />
          </div>

          {defaultFeatures.map((feature) => (
            <AccountCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              variant="default"
            />
          ))}
        </div>

        {/* Mobile: show visual below grid */}
        <div className="mt-8 flex justify-center lg:hidden">
          <AccountsVisual />
        </div>
      </div>
    </section>
  )
}

export default AccountsSection
