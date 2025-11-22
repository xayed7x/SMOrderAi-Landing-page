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
  // Core Metadata for SEO
  title: {
    default: 'Autex: AI Order Automation for Social Commerce', // Default title for the homepage
    template: '%s | Autex', // Template for titles on other pages
  },
  description: 'Autex fully automates your social commerce. Our AI recognizes products from screenshots, takes orders conversationally, and manages your inbox 24/7. Turn any inquiry into a sale, instantly.',
  metadataBase: new URL('https://autex.vercel.app/'), // Replace with your final domain

  // Open Graph (OG) Metadata for Social Sharing
  openGraph: {
    title: 'Autex: From Screenshot to Sale with AI',
    description: 'Don\'t just reply to comments. Autex\'s AI turns product screenshots from customers into fully confirmed orders, automatically. Manage your entire sales process without lifting a finger.',
    url: 'https://autex.vercel.app/', // Replace with your final domain
    siteName: 'Autex',
    images: [
      {
        url: '/open graph.png', // The path to your OG image in the /public folder
        width: 1200,
        height: 630,
        alt: 'Autex platform demonstrating AI order automation from a product screenshot.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter-specific Metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Autex: From Screenshot to Sale with AI',
    description: 'Autex\'s AI turns product screenshots from customers into fully confirmed orders, automatically. The future of social commerce is here.',
    images: ['/open graph.png'], // The path to your OG image
  },
};

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
