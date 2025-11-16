import type React from "react"
import type { Metadata } from "next"
import { Inter, Instrument_Serif } from 'next/font/google'
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Orderly - AI-Powered Comment Management for Facebook & Instagram",
  description:
    "Orderly automates customer interactions on Facebook & Instagram with AI-powered comments, inbox automation, and intelligent moderation. Join 200+ SMEs in Bangladesh.",
  keywords: "AI comment management, Facebook automation, Instagram automation, customer engagement, Bangladesh SaaS",
  authors: [{ name: "Orderly" }],
  openGraph: {
    title: "Orderly - AI-Powered Social Media Management",
    description: "Automate customer interactions with AI on Facebook & Instagram. 50% discount for early adopters.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orderly - AI Social Media Management",
    description: "Automate customer interactions with AI on Facebook & Instagram.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400&display=swap" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
