"use client"
import Image from "next/image"
import chart from "./assets/chart-nobg.jpg"
import graph from "./assets/graph.jpg"
import AnimateOnView from "@/animations/motion-section"
import { scaleUp } from "@/animations/variants"

function ReportsSection() {
    const featured = { icon: "📑", title: "Spending reports", description: "Breakdowns by category, merchant and time. The report you’ll actually use." }
    const items = [
        { icon: "📥", title: "Export anywhere", description: "With FinSaver you can export your reports to CSV, PDF, Excel and more. You can also share your reports with your friends and family." },
        { icon: "📅", title: "Custom date ranges", description: "With FinSaver you can create custom date ranges to compare your spending and income. You can also compare your spending and income with your friends and family." },

    ]

    return (
        <AnimateOnView variants={scaleUp()}>
            <section id="reports" className="scroll-mt-24">

                {/* Medium height, bento-style asymmetric grid */}
                <div className="relative min-h-[55vh] py-14 lg:py-20 bg-gradient-to-b from-gray-100 via-gray-200 via-10% to-gray-100">

                    {/* Right image: vertically centered, closer to content */}
                    <div className="absolute right-1/7 top-1/2 z-0 hidden w-[500px] h-[400px] -translate-y-1/2 lg:block ">
                        <Image src={graph} alt="" width={220} height={300} sizes="(max-width: 1024px) 0, 220px" className="object-contain" aria-hidden />
                    </div>
                    <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-3">
                            Reports that make sense
                        </h2>
                        <p className="text-base text-gray-600 text-center max-w-xl mx-auto mb-10">
                            Understand your money with clear reports and one-click exports.
                        </p>
                        <div className="grid grid-cols-3 md:grid-cols-3 md:grid-rows-1 gap-4 lg:gap-6">
                            <div className="md:col-span-1 md:row-span-1 p-8 rounded-2xl bg-gradient-to-b from-blue-200 to-blue-400 border border-gray-100 shadow-md flex flex-col justify-center min-h-[300px]">
                                <span className="text-4xl mb-4">{featured.icon}</span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{featured.title}</h3>
                                <p className="text-gray-600">{featured.description}</p>
                            </div>
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-xl bg-gradient-to-b from-blue-100 to-blue-200 border border-gray-100 shadow-sm hover:shadow-xl flex items-center gap-4 hover:scale-110 transition-all duration-500"
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
        </AnimateOnView>
    )
}

export default ReportsSection
