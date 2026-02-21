export type AccountFeature = {
  id: string
  icon: string
  title: string
  description: string
  /** 'primary' = larger hero card; 'default' = standard grid card */
  variant?: "primary" | "default"
}

export const accountsSectionTitle = "Your accounts, unified"
export const accountsSectionDescription =
  "Link checking, savings, credit cards, and investments in one secure dashboard. One login, full picture."

export const accountFeatures: AccountFeature[] = [
  {
    id: "unified",
    icon: "🏦",
    title: "All accounts in one place",
    description:
      "Connect checking, savings, credit cards, and investments. See balances and activity in a single view.",
    variant: "primary",
  },
  {
    id: "connections",
    icon: "🔗",
    title: "Bank connections",
    description: "Secure linking with thousands of institutions. Add or remove accounts anytime.",
    variant: "default",
  },
  {
    id: "realtime",
    icon: "📱",
    title: "Real-time balances",
    description: "Refreshed automatically so you always see up-to-date numbers when it matters.",
    variant: "default",
  },
  {
    id: "security",
    icon: "🔒",
    title: "Bank-level security",
    description: "Encrypted and protected like your bank. We never store your login credentials.",
    variant: "default",
  },
]
