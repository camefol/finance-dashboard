"use client"
import '@xyflow/react/dist/style.css';
import FlowNodes from "./flow/nodes"
import AnimateOnView from "@/animations/motion-section"
import { fadeIn } from "@/animations/variants"

function BudgetsSection() {
    return (
        <AnimateOnView variants={fadeIn()}>
            <section id="budgets" className="scroll-mt-24 min-h-[75vh] flex flex-col bg-gradient-to-b from-gray-100 via-gray-200 via-10% to-gray-100">
                <header className="shrink-0 px-6 pt-8 pb-4 text-center lg:pt-12 lg:pb-6">
                    <h2 className="text-3xl sm:text-4xl lg:text-[2.25rem] font-bold text-gray-900 leading-tight">
                        Budgets that work for you
                    </h2>
                    <p className="mt-3 text-base text-gray-600 max-w-xl mx-auto">
                        Set limits, track spending and hit your goals without the guesswork.
                    </p>
                </header>
                <div className="h-[65vh] w-full min-h-[400px]">
                    <FlowNodes />
                </div>
            </section>
        </AnimateOnView>
    )
}

export default BudgetsSection
