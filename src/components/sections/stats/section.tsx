"use client"

import { useState, useEffect } from "react"
import NumberFlow from "@number-flow/react"

type StatItem = {
    value: number
    prefix?: string
    suffix?: string
    label: string
    description: string
}

const stats: StatItem[] = [
    { value: 50, suffix: "K+", label: "Active Users", description: "Trusted by thousands" },
    { value: 2.5, prefix: "$", suffix: "B+", label: "Tracked Assets", description: "Total finances managed" },
    { value: 4.9, suffix: "/5", label: "User Rating", description: "Based on 10K+ reviews" },
    { value: 99.9, suffix: "%", label: "Uptime", description: "Reliable & secure" },
    { value: 500, prefix: "$", suffix: "M+", label: "Money Saved", description: "By our users annually" },
    { value: 24, suffix: "/7", label: "Support", description: "Always here to help" },
]

function AnimatedStat({ stat }: { stat: StatItem }) {
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        setDisplayValue(stat.value)
    }, [stat.value])

    return (
        <NumberFlow
            value={displayValue}
            prefix={stat.prefix}
            suffix={stat.suffix}
            format={{ maximumFractionDigits: 1, minimumFractionDigits: stat.value % 1 !== 0 ? 1 : 0 }}
            transformTiming={{ duration: 1500, easing: "cubic-bezier(0.4, 0, 0.2, 1)" }}
            spinTiming={{ duration: 1500, easing: "ease-out" }}
            opacityTiming={{ duration: 1000, easing: "ease-out" }}
            className="text-3xl font-bold text-blue-600 sm:text-4xl"
        />
    )
}

export default function StatsSection() {
    return (
        <section id="stats" className="scroll-mt-24 h-[20vh] bg-gradient-to-b from-gray-50 to-white py-16">
            <div className="container mx-auto flex h-full items-center justify-center px-4">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="mb-2">
                                <AnimatedStat stat={stat} />
                            </div>
                            <div className="mb-1 text-sm font-semibold text-gray-900">{stat.label}</div>
                            <div className="text-xs text-gray-500">{stat.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
