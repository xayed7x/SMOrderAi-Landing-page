import type React from "react"
import type { Metadata } from "next"
import { Inter, Instrument_Serif, Hind_Siliguri } from 'next/font/google'
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

// Bengali font for Bangla content
const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  variable: "--font-hind-siliguri",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  // Core Metadata for SEO
  title: {
    default: 'Autex AI - AI Chatbot for Facebook E-commerce | ফেসবুক বিজনেস অটোমেশন',
    template: '%s | Autex AI',
  },
  description: '24/7 automated customer responses, image recognition, and order management for Bangladesh F-commerce sellers. ফেসবুক মেসেঞ্জারে স্বয়ংক্রিয় গ্রাহক সেবা।',
  keywords: 'facebook chatbot bangladesh, f-commerce automation, messenger bot, ai chatbot bangla, ফেসবুক চ্যাটবট, অটোমেশন',
  metadataBase: new URL('https://www.autexai.com'),
  
  // Canonical URL
  alternates: {
    canonical: 'https://www.autexai.com',
  },

  // Theme color (brand color)
  themeColor: '#37322F',

  // Open Graph (OG) Metadata for Social Sharing
  openGraph: {
    title: 'Autex AI - AI Chatbot for Facebook E-commerce | ফেসবুক বিজনেস অটোমেশন',
    description: '24/7 automated customer responses, image recognition, and order management for Bangladesh F-commerce sellers. ফেসবুক মেসেঞ্জারে স্বয়ংক্রিয় গ্রাহক সেবা।',
    url: 'https://www.autexai.com',
    siteName: 'Autex AI',
    images: [
      {
        url: '/open graph.png',
        width: 1200,
        height: 630,
        alt: 'Autex AI - AI Chatbot for Facebook E-commerce automation',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },

  // Twitter-specific Metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Autex AI - AI Chatbot for Facebook E-commerce',
    description: '24/7 automated customer responses, image recognition, and order management for Bangladesh F-commerce sellers.',
    images: ['/open graph.png'],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
  },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Autex AI',
  applicationCategory: 'BusinessApplication',
  offers: {
    '@type': 'Offer',
    price: '899',
    priceCurrency: 'BDT',
  },
  operatingSystem: 'Web',
  description: 'AI chatbot for Facebook e-commerce automation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn" className={`${inter.variable} ${instrumentSerif.variable} ${hindSiliguri.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-V2T5G8WRSW"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V2T5G8WRSW');
            `,
          }}
        />

        {/* Facebook Pixel - Add Facebook Pixel ID after Meta Business verification */}
        {/*
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
        */}
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
