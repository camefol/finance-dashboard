"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLenis } from "@studio-freight/react-lenis"
import Logo from "@/components/icons/logo"
import { twMerge } from "tailwind-merge"
import AnimateOnView from "@/animations/motion-section"

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
    const [isAtTop, setIsAtTop] = useState(true)
    const [isHovered, setIsHovered] = useState(false)
    const isExpanded = isAtTop || isHovered

    useEffect(() => {
        const check = () => setIsAtTop(typeof window !== "undefined" ? window.scrollY < TOP_THRESHOLD : true)
        check()
        window.addEventListener("scroll", check, { passive: true })
        return () => window.removeEventListener("scroll", check)
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
                    "group fixed left-0 right-0 top-0 z-50 flex flex-col overflow-hidden",
                    "transition-[height] duration-300 ease-out",
                    isExpanded ? "h-[5.5rem] xl:h-[4.5rem]" : "h-12",
                    "lg:top-4 lg:left-4 lg:right-4 lg:mx-auto lg:max-w-[1600px]",
                    className
                )}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-label="Header - hover to expand menu"
            >
                {/* Collapsed: small Menu pill; hidden when expanded (at top or hover) */}
                <div
                    className={twMerge(
                        "flex h-12 shrink-0 items-center justify-center rounded-xl border-2 border-gray-200 bg-white/95 shadow-sm max-w-[100px] mx-auto px-4",
                        "transition-all duration-300 ease-out",
                        isExpanded && "h-0 min-h-0 overflow-hidden opacity-0 border-transparent shadow-none",
                        "xl:rounded-t-2xl",
                        isExpanded && "xl:rounded-none"
                    )}
                >
                    <span className="text-sm font-medium text-gray-600">Menu</span>
                </div>

                {/* Expanded: full header; slides up into view on hover */}
                <header
                    className={twMerge(
                        "flex w-full shrink-0 flex-1 flex-col justify-center overflow-hidden rounded-b-2xl bg-white px-4 pb-2 pt-1 text-black",
                        "transition-all duration-300 ease-out",
                        "xl:rounded-xl xl:px-6 xl:pb-3 xl:pt-2"
                    )}
                >
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
                        <nav className="flex justify-center gap-4 pointer-events-none [&_a]:pointer-events-auto xl:gap-10">
                            {menuItems.map((item) => (
                                <Link
                                    href={item.href}
                                    key={item.href}
                                    className="text-base font-medium leading-5 text-purple opacity-50 transition-opacity hover:opacity-100"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        scrollTo(item.href)
                                    }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                        <button className="pointer-events-auto rounded-2xl bg-red-500 px-4 py-2 text-base font-medium leading-5 text-purple cursor-pointer">
                            App
                        </button>
                    </div>
                </header>
            </div>
       
    )
}