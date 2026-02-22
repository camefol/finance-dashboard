"use client"

import { useState, useRef } from "react"
import Logo from "@/components/icons/logo"
import Link from "next/link"
import {
    LegalModal,
    PrivacyPolicyContent,
    TermsOfServiceContent,
    ContactUsContent,
} from "@/components/legal"

const contactEmail = "camefol.janecko38@gmail.com"
const thumbWidth = 40

export default function Footer() {
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [slidePos, setSlidePos] = useState(0)
    const [privacyModalOpen, setPrivacyModalOpen] = useState(false)
    const [termsModalOpen, setTermsModalOpen] = useState(false)
    const [contactModalOpen, setContactModalOpen] = useState(false)
    const trackRef = useRef<HTMLButtonElement>(null)
    const animatingRef = useRef(false)

    const handleClick = () => {
        if (submitted || !email.trim()) return
        const track = trackRef.current
        const maxX = track ? Math.max(0, track.getBoundingClientRect().width - thumbWidth - 8) : 172
        animatingRef.current = true
        setSlidePos(maxX)
    }

    const handleTransitionEnd = () => {
        if (animatingRef.current) {
            setSubmitted(true)
            animatingRef.current = false
        }
    }

    return (
        <>
            <LegalModal
                isOpen={privacyModalOpen}
                onClose={() => setPrivacyModalOpen(false)}
                titleId="privacy-modal-title"
                title="Privacy Policy"
            >
                <PrivacyPolicyContent />
            </LegalModal>
            <LegalModal
                isOpen={termsModalOpen}
                onClose={() => setTermsModalOpen(false)}
                titleId="terms-modal-title"
                title="Terms of Service"
            >
                <TermsOfServiceContent />
            </LegalModal>
            <LegalModal
                isOpen={contactModalOpen}
                onClose={() => setContactModalOpen(false)}
                titleId="contact-modal-title"
                title="Contact Us"
            >
                <ContactUsContent contactEmail={contactEmail} />
            </LegalModal>

            <footer className="border-t border-white/10 bg-gradient-to-b from-black/80 to-black py-14 text-white/90">
            <div className="container mx-auto max-w-6xl px-4">
                {/* Newsletter block */}
                <div className="mb-12 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 backdrop-blur-sm sm:px-8">
                    <div className="mx-auto max-w-xl">
                        <h3 className="mb-1 text-lg font-semibold text-white">
                            Stay in the loop
                        </h3>
                        <p className="mb-6 text-sm text-white/60">
                            Get product updates and tips. No spam, unsubscribe anytime.
                        </p>
                        {submitted ? (
                            <p className="flex items-center gap-2 text-sm text-emerald-400">
                                <span className="text-lg">✓</span> Thanks! We’ll email you at {email || "your address"}.
                            </p>
                        ) : (
                            <form
                                className="flex flex-col gap-4 sm:flex-row sm:items-stretch"
                                onSubmit={(e) => e.preventDefault()}
                            >
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="min-w-0 flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                                    required
                                />
                                <button
                                    type="button"
                                    ref={trackRef}
                                    onClick={handleClick}
                                    disabled={submitted || !email.trim()}
                                    className="relative flex h-12 min-w-[220px] cursor-pointer select-none items-center overflow-hidden rounded-xl border border-white/20 bg-white/10 transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center justify-end pr-2 transition-[width] duration-500 ease-out"
                                        style={{ width: slidePos }}
                                    >
                                        <span className="text-xs font-medium text-white/80">Subscribe</span>
                                    </div>
                                    <div
                                        className="absolute inset-y-1 left-1 flex h-[calc(100%-8px)] w-10 items-center justify-center rounded-lg bg-white/20 text-white shadow transition-[left] duration-500 ease-out"
                                        style={{ left: 4 + slidePos }}
                                        onTransitionEnd={handleTransitionEnd}
                                    >
                                        →
                                    </div>
                                    <span className="pointer-events-none ml-14 text-xs text-white/50">
                                        Click to confirm
                                    </span>
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Main footer grid */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <Logo size="small" />
                        <p className="text-sm text-white/60">
                            &copy; {new Date().getFullYear()} FinSaver. All rights reserved.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                            Contact
                        </span>
                        <a
                            href={`mailto:${contactEmail}`}
                            className="text-sm text-white/80 underline decoration-white/30 underline-offset-2 transition-colors hover:text-white hover:decoration-white/70"
                        >
                            {contactEmail}
                        </a>
                    </div>

                    {/* Legal */}
                    <div className="flex flex-col gap-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                            Legal
                        </span>
                        <nav className="flex flex-col gap-2 text-sm">
                            <button
                                type="button"
                                onClick={() => setPrivacyModalOpen(true)}
                                className="w-fit border-b border-transparent py-0.5 text-left transition-colors hover:border-white/70 hover:text-white"
                            >
                                Privacy Policy
                            </button>
                            <button
                                type="button"
                                onClick={() => setTermsModalOpen(true)}
                                className="w-fit border-b border-transparent py-0.5 text-left transition-colors hover:border-white/70 hover:text-white"
                            >
                                Terms of Service
                            </button>
                            <button
                                type="button"
                                onClick={() => setContactModalOpen(true)}
                                className="w-fit border-b border-transparent py-0.5 text-left transition-colors hover:border-white/70 hover:text-white"
                            >
                                Contact Us
                            </button>
                        </nav>
                    </div>

                    {/* Optional: Product links placeholder */}
                    <div className="flex flex-col gap-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                            Product
                        </span>
                        <div className="flex flex-col gap-2 text-sm text-white/60">
                            <Link href="#dashboard" className="w-fit transition-colors hover:text-white">Dashboard</Link>
                            <Link href="#accounts" className="w-fit transition-colors hover:text-white">Accounts</Link>
                            <Link href="#budgets" className="w-fit transition-colors hover:text-white">Budgets</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
