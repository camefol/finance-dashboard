"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
    { label: "Dashboard", href: "/app/dashboard" },
    { label: "Transactions", href: "/app/transactions" },
    { label: "Accounts", href: "/app/accounts" },
    { label: "Budgets", href: "/app/budgets" },
    { label: "Reports", href: "/app/reports" },
];

export default function Menu() {
    const pathname = usePathname();

    return (
        <div className="relative w-[180px] h-screen shrink-0 group">
            <aside className="absolute right-0 top-0 h-screen w-20 border-r border-gray-600 text-gray-400 flex justify-end px-4 transition-all duration-300 group-hover:translate-x-[50px] group-hover:scale-105 group-hover:text-2xl">
                <nav className="flex mx-auto flex-col sm:gap-4 lg:gap-16 items-center justify-between">
                <Link href="/app" className="text-gray-300 font-semibold items-center gap-2 justify-center flex-1 flex text-3xl group-hover:text-4xl">
                    <span className="hover:text-white transition-all duration-300">FinSaver</span>
                </Link>
                <div className="flex flex-col gap-8 flex-2 items-center">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={
                                isActive
                                    ? "text-white font-semibold"
                                    : "text-gray-200 hover:text-white"
                            }
                        >
                            {item.label}
                        </Link>
                    );
                })}
                </div>
                </nav>
            </aside>
        </div>
    );
}