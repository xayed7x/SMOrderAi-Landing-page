"use client"

import { useRef } from "react"
import { toast } from "sonner"
import { Check } from 'lucide-react'

interface PricingPlan {
  id: string
  title: string
  price: string
  regularPrice: string
  description: string
  highlight: string
  highlightBn: string
  features: string[]
  buttonText: string
}

const plans: PricingPlan[] = [
  {
    id: "1-month-trial",
    title: "1 Month Trial",
    price: "499৳",
    regularPrice: "Regular Price: 999৳",
    description: "50% OFF your first month.",
    highlight: "সহজে শুরু করার জন্য সেরা",
    highlightBn: "(Easy to Get Started)",
    features: [
      "Unlimited AI Comment Replies",
      "Unlimited Inbox Automation",
      "Smart Intent Detection AI",
      "24/7 Automated Moderation",
      "Works with Facebook & Instagram",
      "Analytics & Performance Tracking",
      "Lightning-Fast, 1-Minute Setup",
      "Dedicated Onboarding & Support",
    ],
    buttonText: "Pre-Register Now",
  },
  {
    id: "3-month-pack",
    title: "⭐ 3 Month Pack",
    title_en: "3 Month Pack (Best Value)",
    price: "1999৳",
    regularPrice: "Regular Price: 2997৳",
    description: "Save almost 1000 Taka!",
    highlight: "সবচেয়ে বেশি ভ্যালু এবং সেভিংস",
    highlightBn: "(Most Value & Savings)",
    features: [
      "Unlimited AI Comment Replies",
      "Unlimited Inbox Automation",
      "Smart Intent Detection AI",
      "24/7 Automated Moderation",
      "Works with Facebook & Instagram",
      "Analytics & Performance Tracking",
      "Lightning-Fast, 1-Minute Setup",
      "Dedicated Onboarding & Support",
    ],
    buttonText: "Pre-Register Now",
  },
  {
    id: "founders-price",
    title: "Founder's Price",
    price: "799৳/month",
    regularPrice: "Regular Price: 999৳",
    description: "Price locked forever.",
    highlight: "যারা লম্বা সময় ধরে ব্যবসা করবেন",
    highlightBn: "(For Long-term Users)",
    features: [
      "Unlimited AI Comment Replies",
      "Unlimited Inbox Automation",
      "Smart Intent Detection AI",
      "24/7 Automated Moderation",
      "Works with Facebook & Instagram",
      "Analytics & Performance Tracking",
      "Lightning-Fast, 1-Minute Setup",
      "Dedicated Onboarding & Support",
    ],
    buttonText: "Pre-Register Now",
  },
]

interface EarlyBirdPricingProps {
  onPlanSelect: (planId: string) => void
  formSectionRef: React.RefObject<HTMLDivElement>
}

export default function EarlyBirdPricing({ onPlanSelect, formSectionRef }: EarlyBirdPricingProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2" id="pricing">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          <h2 className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Pre-Register Now & Get a Massive 50% Discount!
          </h2>
          <p className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Be one of our first users and lock in this exclusive price forever.
          </p>
          <p className="self-stretch text-center text-[#605A57] text-sm font-medium leading-6 font-sans italic">
            এই অফার শুধুমাত্র প্রথম ২০০ জন ব্যবহারকারীর জন্য প্রযোজ্য।
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="self-stretch border-b border-t border-[rgba(55,50,47,0.12)] flex justify-center items-center">
        <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-4 py-12 md:py-16 px-4 md:px-8 max-w-7xl">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className="flex-1 px-6 py-8 md:py-12 bg-white border border-[rgba(50,45,43,0.12)] rounded-lg flex flex-col justify-start items-start gap-8 hover:shadow-lg transition-shadow"
            >
              {/* Plan Header */}
              <div className="self-stretch flex flex-col justify-start items-center gap-6">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <h3 className="text-[rgba(55,50,47,0.90)] text-xl md:text-2xl font-semibold leading-7 font-sans">
                    {plan.title}
                  </h3>
                </div>

                {/* Price */}
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="relative flex items-center text-[#37322F] text-4xl md:text-5xl font-semibold leading-tight font-serif">
                      {plan.price}
                    </div>
                    <p className="text-[#847971] text-xs md:text-sm font-medium font-sans">
                      {plan.regularPrice}
                    </p>
                    <p className="text-[#49423D] text-xs md:text-sm font-medium font-sans">
                      {plan.description}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onPlanSelect(plan.id)
                    setTimeout(() => {
                      formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }, 100)
                  }}
                  className="self-stretch px-4 py-3 relative bg-[#37322F] shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center hover:bg-[#37322F]/90 transition-colors cursor-pointer"
                >
                  <div className="w-full h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0.20)] to-[rgba(0,0,0,0.10)] mix-blend-multiply pointer-events-none"></div>
                  <span className="flex justify-center flex-col text-[#FBFAF9] text-sm font-semibold leading-5 font-sans relative z-10">
                    {plan.buttonText}
                  </span>
                </button>
              </div>

              {/* Plan Highlight */}
              <div className="self-stretch p-3 bg-[rgba(55,50,47,0.04)] rounded border border-[rgba(55,50,47,0.08)]">
                <p className="text-[#49423D] text-sm font-semibold font-sans">
                  {plan.highlight}
                </p>
                <p className="text-[#605A57] text-xs font-normal font-sans italic">
                  {plan.highlightBn}
                </p>
              </div>

              {/* Features List */}
              <div className="self-stretch flex flex-col justify-start items-start gap-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="self-stretch flex justify-start items-start gap-3">
                    <Check className="w-5 h-5 text-[#37322F] flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <p className="text-[rgba(55,50,47,0.80)] text-sm font-normal leading-5 font-sans pt-0.5">
                      {feature.replace("✅ ", "")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
