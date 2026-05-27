import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Churn Cohort Analyzer — Understand Why Subscribers Leave',
  description: 'Analyze subscription churn patterns by customer cohorts. Connect your Stripe account and get actionable insights by acquisition channel, pricing tier, and signup period.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cf18fa42-c91a-4299-9063-7733b6a4859e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
