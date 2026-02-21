import Image from "next/image"
import transactionsImage from "./assets/transactions-image.jpg"

function TransactionsSection() {
    const features = [
        {
            icon: "🔍",
            title: "Smart Search",
            description: "Find any transaction instantly with powerful search and filters"
        },
        {
            icon: "🏷️",
            title: "Auto-Categorization",
            description: "Transactions automatically sorted into categories for easy tracking"
        },
        {
            icon: "📊",
            title: "Visual Insights",
            description: "See spending patterns with charts and visual breakdowns"
        },
        {
            icon: "💾",
            title: "Export & Reports",
            description: "Download your data anytime in CSV, PDF, or Excel formats"
        }
    ];

    return (
        <section id="transactions" className="mx-auto scroll-mt-24">
            <div className="group relative h-[58vh] w-full overflow-hidden">
                <Image
                    src={transactionsImage}
                    alt="Transactions"
                    width={2400}
                    height={1600}
                    sizes="100vw"
                    quality={90}
                    className="w-full h-full object-cover [object-position:50%_100%]"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
                {/* Hover overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content overlay */}
                <div className="absolute inset-0 z-10 flex flex-col lg:flex-row items-center justify-evenly gap-8 lg:gap-12 px-4 lg:px-12 py-8 lg:py-16">
                    {/* Left side - Headline */}
                    <div className="flex flex-col justify-center text-white mb-8 lg:mb-0 max-w-lg">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
                            Track every transaction
                        </h2>
                        <p className="text-lg sm:text-xl text-white/90 drop-shadow-md">
                            See where your money goes with automatic categorization and smart insights that help you make better financial decisions.
                        </p>
                    </div>

                    {/* Right side - Features grid */}
                    <div className="grid grid-cols-2 gap-4 lg:gap-6 max-w-2xl">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white/95 backdrop-blur-sm rounded-xl p-4 lg:p-6 shadow-lg hover:bg-white transition-colors"
                            >
                                <div className="text-3xl mb-3">{feature.icon}</div>
                                <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-1">
                                    {feature.title}
                                </h4>
                                <p className="text-xs lg:text-sm text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TransactionsSection