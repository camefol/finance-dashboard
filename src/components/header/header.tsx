"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLenis } from "@studio-freight/react-lenis"
import Logo from "@/components/icons/logo"
import { twMerge } from "tailwind-merge"

const TOP_THRESHOLD = 80

const menuItems = [
    { label: "Dashboard", href: "#dashboard" },
    { label: "Transactions", href: "#transactions" },
    { label: "Accounts", href: "#accounts" },
    { label: "Budgets", href: "#budgets" },
    { label: "Reports", href: "#reports" },
]

type HeaderProps = { className?: string }

export default function Header({ className }: HeaderProps) {
    const lenis = useLenis()
    const [isHovered, setIsHovered] = useState(false)
    const [isAtTop, setIsAtTop] = useState(true)

    const isExpanded = isAtTop || isHovered

    useEffect(() => {
        const checkTop = () => {
            const y = typeof window !== "undefined" ? window.scrollY : 0
            setIsAtTop(y < TOP_THRESHOLD)
        }
        checkTop()
        window.addEventListener("scroll", checkTop, { passive: true })
        return () => window.removeEventListener("scroll", checkTop)
    }, [])

    useEffect(() => {
        if (!lenis) return
        const onScroll = () => setIsAtTop(lenis.scroll < TOP_THRESHOLD)
        lenis.on("scroll", onScroll)
        return () => lenis.off("scroll", onScroll)
    }, [lenis])

    const scrollTo = (href: string) => {
        if (lenis) {
            lenis.scrollTo(href, { offset: -100 })
        } else {
            const el = document.querySelector(href)
            el?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    return (
        <div
            className={twMerge(
                "fixed left-0 right-0 top-0 z-50 flex flex-col overflow-hidden transition-[height] duration-300 ease-out",
                "lg:top-4 lg:left-4 lg:right-4 lg:mx-auto",
                isExpanded ? "h-[5.5rem] xl:h-[4.5rem]" : "h-0.5",
                className
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Header - hover to expand"
        >
            {/* Thin strip only when collapsed; gone when expanded */}
            {!isExpanded && (
                <div className="h-3 w-full shrink-0 bg-gray-500 xl:rounded-t-2xl" aria-hidden />
            )}
            <header className="z-50 flex w-full shrink-0 justify-center bg-white px-4 pb-2 pt-1 xl:rounded-2xl xl:px-6 xl:pb-3 xl:pt-2 text-black">
                <div className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-4">
                    <div>
                        <button
                            type="button"
                            onClick={() => (lenis ? lenis.scrollTo(0, { immediate: false }) : window.scrollTo({ top: 0, behavior: "smooth" }))}
                            className="cursor-pointer"
                            aria-label="Scroll to top"
                        >
                            <Logo size="small" />
                        </button>
                    </div>
                    <nav className="flex gap-4 xl:gap-10 justify-center pointer-events-none [&_a]:pointer-events-auto">
                        {menuItems.map((item) => (
                            <Link
                                href={item.href}
                                key={item.href}
                                className="transition opacity-50 hover:opacity-100 text-base font-medium font-geist leading-5 text-purple"
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollTo(item.href)
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <button className="text-base font-medium font-geist leading-5 text-purple pointer-events-auto xl:rounded-2xl bg-red-500 px-4 py-2 cursor-pointer">
                        App
                    </button>
                </div>
            </header>
        </div>
    )
}