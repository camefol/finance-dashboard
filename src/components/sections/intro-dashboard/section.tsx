import Image from "next/image"
import transactionsImage from "../transactions/assets/transactions-image.jpg"

export default function IntroDashboardSection() {
    return (
        <section id="dashboard" className="pt-0 mx-auto scroll-mt-24">
            <div className="group relative h-[70vh] w-full overflow-hidden cursor-default">
                <Image
                    src={transactionsImage}
                    alt="Intro Dashboard"
                    width={2400}
                    height={1600}
                    sizes="100vw"
                    quality={90}
                    className="w-full object-[0_50%] object-cover transition-[filter] duration-800 group-hover:blur-sm"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
                    <div className="backdrop-blur-sm bg-white/20 rounded-4xl px-8 py-10 border border-white/30 text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] tracking-tight max-w-2xl">
                            Your money, in one place
                        </h1>
                        <p className="mt-4 text-lg sm:text-xl text-black/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] max-w-xl mx-auto">
                            Track spending, stick to budgets, and reach your goals—without the guesswork.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}