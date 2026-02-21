import Header from "@/components/header/header"
import IntroDashboardSection from "@/components/sections/intro-dashboard/section"
import StatsSection from "@/components/sections/stats/section"
import TransactionsSection from "@/components/sections/transactions/section"
import AccountsSection from "@/components/sections/accounts/section"
import BudgetsSection from "@/components/sections/budgets/section"
import ReportsSection from "@/components/sections/reports/section"

export default function Home() {
  return (
    <main>
      <Header className="fixed top-0 lg:top-4 left-0 right-0 w-full" />
      <IntroDashboardSection />
      <StatsSection />
      <TransactionsSection />
      <AccountsSection />
      <BudgetsSection />
      <ReportsSection />
    </main>
  )
}
