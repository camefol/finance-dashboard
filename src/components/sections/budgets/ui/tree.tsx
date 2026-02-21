
export type FeatureNode = {
    title: string
    description: string
    children?: [FeatureNode, FeatureNode]
}

export const featuresTree: FeatureNode = {
    title: "Custom Budgets",
    description: "Set limits by category, month or goal",
    children: [
        {
            title: "Category Budgets",
            description: "Set limits per spending category (food, transport, shopping)",
            children: [
                {
                    title: "Essential vs Discretionary",
                    description: "Split between needs and wants for clearer priorities",
                    children: [
                        { title: "Needs Cap", description: "Hard limit for bills and essentials" },
                        { title: "Wants Allowance", description: "Separate pot for non-essential spending" },
                    ],
                },
                {
                    title: "Rollover Rules",
                    description: "Carry over unused amounts or reset each period",
                    children: [
                        { title: "Carry Forward", description: "Unused budget rolls to next period" },
                        { title: "Use It or Reset", description: "Optional reset so leftover does not accumulate" },
                    ],
                },
            ],
        },
        {
            title: "Time-Based Budgets",
            description: "Monthly, weekly, or custom period limits",
            children: [
                {
                    title: "Recurring Schedules",
                    description: "Auto-apply the same budget on your chosen cycle",
                    children: [
                        { title: "Payday Sync", description: "Budget periods aligned to your payday" },
                        { title: "Custom Cycles", description: "Any cycle (e.g. 2 weeks, 6 weeks)" },
                    ],
                },
                {
                    title: "Seasonal Adjustments",
                    description: "Different limits for holidays or high-spend months",
                    children: [
                        { title: "Holiday Mode", description: "One-off or seasonal higher limits" },
                        { title: "Savings Boost", description: "Automatically free up more in low-spend months" },
                    ],
                },
            ],
        },
    ],
}
