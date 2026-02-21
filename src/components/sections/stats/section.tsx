function StatsSection() {
    const stats = [
        {
            value: "50K+",
            label: "Active Users",
            description: "Trusted by thousands"
        },
        {
            value: "$2.5B+",
            label: "Tracked Assets",
            description: "Total finances managed"
        },
        {
            value: "4.9/5",
            label: "User Rating",
            description: "Based on 10K+ reviews"
        },
        {
            value: "99.9%",
            label: "Uptime",
            description: "Reliable & secure"
        },
        {
            value: "$500M+",
            label: "Money Saved",
            description: "By our users annually"
        },
        {
            value: "24/7",
            label: "Support",
            description: "Always here to help"
        }
    ]

    return (
        <section id="stats" className="py-16 bg-gradient-to-b from-gray-50 to-white h-[20vh] scroll-mt-24">
            <div className="container mx-auto px-4 flex items-center justify-center h-full">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 ">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm font-semibold text-gray-900 mb-1">
                                {stat.label}
                            </div>
                            <div className="text-xs text-gray-500">
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StatsSection
