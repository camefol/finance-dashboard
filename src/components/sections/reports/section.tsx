function ReportsSection() {
    const featured = { icon: "📑", title: "Spending reports", description: "Breakdowns by category, merchant and time. The report you’ll actually use." }
    const items = [
        { icon: "📥", title: "Export anywhere", description: "CSV, PDF, Excel" },
        { icon: "📅", title: "Custom date ranges", description: "Compare any period" },
        { icon: "🖨️", title: "Shareable summaries", description: "Send to advisor or family" },
    ]

    return (
        <section id="reports" className="scroll-mt-24">
            {/* Medium height, bento-style asymmetric grid */}
            <div className="min-h-[55vh] py-14 lg:py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-3">
                        Reports that make sense
                    </h2>
                    <p className="text-base text-gray-600 text-center max-w-xl mx-auto mb-10">
                        Understand your money with clear reports and one-click exports.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 lg:gap-6">
                        <div className="md:col-span-2 md:row-span-2 p-8 rounded-2xl bg-white border border-gray-100 shadow-md flex flex-col justify-center min-h-[200px]">
                            <span className="text-4xl mb-4">{featured.icon}</span>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{featured.title}</h3>
                            <p className="text-gray-600">{featured.description}</p>
                        </div>
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
                            >
                                <span className="text-2xl shrink-0">{item.icon}</span>
                                <div className="min-w-0">
                                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReportsSection
