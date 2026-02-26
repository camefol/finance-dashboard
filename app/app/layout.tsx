import type { Metadata } from "next";
import Menu from "@/components/app/menu/menu";

export const metadata: Metadata = {
  title: "FinSaver App",
  description: "The FinSaver app is a financial management tool that helps you track your income, expenses, and savings.",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-gray-800 min-h-screen text-white">
      <Menu />
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}
