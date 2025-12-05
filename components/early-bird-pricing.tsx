"use client"

import { useRef } from "react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { Check } from 'lucide-react'

export interface PricingPlan {
  id: string
  displayName: string // Clean name for database and emails
  title: string
  price: string
  regularPrice?: string
  badge?: string
  tagline: string
  features: string[]
  buttonText: string
  founderGuarantee?: string
}

export const plans: PricingPlan[] = [
  {
    id: "starter",
    displayName: "Starter",
    title: "Starter",
    price: "499৳/month",
    badge: "PERFECT FOR BEGINNERS",
    tagline: "শুরু করুন আপনার automation journey।",
    features: [
      "Unlimited Products",
      "500 Screenshots/Month",
      "Unlimited Comments",
      "Unlimited Conversations",
      "Unlimited Uploads",
      "AI Product Recognition",
      "Conversational Order Collection",
      "Lead Management Dashboard",
      "Basic Analytics",
      "Email Support",
    ],
    buttonText: "Pre-Register Now",
  },
  {
    id: "pro-founder",
    displayName: "Pro - Founder Offer",
    title: "Pro — Founder Launch Price ⭐",
    price: "599৳/month",
    regularPrice: "Regular Price: 899৳/month",
    badge: "BEST VALUE — FOUNDER OFFER",
    tagline: "সম্পূর্ণ automation। Lifetime locked price।",
    features: [
      "Unlimited Products",
      "1,500 Screenshots/Month ⭐",
      "Unlimited Comments",
      "Unlimited Conversations",
      "Unlimited Uploads",
      "Smart Intent Detection (Buying vs General)",
      "AI Product Recognition",
      "Conversational Order Collection",
      "Lead Management Dashboard",
      "Advanced Analytics",
      "Priority Email Support",
      "Setup Assistance",
    ],
    buttonText: "Pre-Register Now",
    founderGuarantee: "যখন Phase 2 launch হবে (Payment + Delivery integration), আপনি সব পাবেন — কিন্তু price থাকবে ৳৫৯৯-ই। শুধুমাত্র প্রথম ৫০ users-এর জন্য।",
  },
  {
    id: "business",
    displayName: "Business",
    title: "Business",
    price: "1,799৳/month",
    badge: "FOR GROWING BUSINESSES",
    tagline: "Scale করুন tension-free।",
    features: [
      "Unlimited Products",
      "5,000 Screenshots/Month",
      "Unlimited Comments",
      "Unlimited Conversations",
      "Unlimited Uploads",
      "সব Pro features",
      "Priority Support (WhatsApp)",
      "Advanced Analytics & Reports",
      "Multiple Facebook Pages",
      "Dedicated Account Manager",
      "Custom Integrations",
    ],
    buttonText: "Pre-Register Now",
  },
]

interface EarlyBirdPricingProps {
  selectedPlan: string
  onPlanSelect: (planId: string) => void
  formSectionRef: React.RefObject<HTMLDivElement>
}

export default function EarlyBirdPricing({ selectedPlan, onPlanSelect, formSectionRef }: EarlyBirdPricingProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2" id="pricing">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[700px] px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          <h2 className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Simple, Honest Pricing
          </h2>
          <p className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            যা দেখছেন তাই পাবেন। কোনো লুকানো খরচ নেই।
          </p>
          <div className="flex flex-col items-center gap-1">
             <p className="self-stretch text-center text-[#605A57] text-sm font-medium leading-6 font-sans">
              প্রথম ৫০ Founder Members পাবে Lifetime Discount।
            </p>
            <p className="self-stretch text-center text-[#37322F] text-lg font-bold leading-6 font-sans">
              মাত্র ৳৫৯৯/month — forever locked।
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="self-stretch border-b border-t border-[rgba(55,50,47,0.12)] flex justify-center items-center flex-col">
        <div className="w-full flex flex-col lg:flex-row justify-center items-stretch gap-6 py-12 md:py-16 px-4 md:px-8 max-w-7xl">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={cn(
                "flex-1 px-6 py-8 md:py-12 bg-white border rounded-lg flex flex-col justify-start items-start gap-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative cursor-pointer",
                selectedPlan === plan.id && "border-2 border-[#37322f]",
                plan.id === "pro-founder" && "animate-border-glow animate-pulse-glow border-2"
              )}
              onClick={() => onPlanSelect(plan.id)}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#37322F] text-[#FBFAF9] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              {/* Plan Header */}
              <div className="self-stretch flex flex-col justify-start items-center gap-6 mt-2">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <h3 className="text-[rgba(55,50,47,0.90)] text-xl md:text-2xl font-semibold leading-7 font-sans">
                    {plan.title}
                  </h3>
                </div>

                {/* Price */}
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="relative flex items-center text-[#37322F] text-3xl md:text-4xl font-semibold leading-tight font-serif">
                      {plan.price}
                    </div>
                    {plan.regularPrice && (
                       <p className="text-[#847971] text-xs md:text-sm font-medium font-sans line-through">
                        {plan.regularPrice}
                      </p>
                    )}
                  </div>
                </div>

                 {/* Tagline */}
                 <div className="self-stretch p-3 bg-[rgba(55,50,47,0.04)] rounded border border-[rgba(55,50,47,0.08)]">
                    <p className="text-[#49423D] text-sm font-medium font-sans">
                      {plan.tagline}
                    </p>
                  </div>

                <a
                  href="https://autex-app.vercel.app/"
                  className="self-stretch px-4 py-3 relative bg-gradient-to-r from-[#605A57] to-[#37322f] text-white rounded-[99px] flex justify-center items-center animate-shimmer"
                >
                  <span className="flex justify-center flex-col text-[#FBFAF9] text-sm font-semibold leading-5 font-sans relative z-10">
                    {plan.buttonText}
                  </span>
                </a>
              </div>

              {/* Features List */}
              <div className="self-stretch flex flex-col justify-start items-start gap-3 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="self-stretch flex justify-start items-start gap-3">
                    <Check className="w-5 h-5 text-[#37322F] flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <p className="text-[rgba(55,50,47,0.80)] text-sm font-normal leading-5 font-sans pt-0.5">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

               {/* Founder Guarantee */}
               {plan.founderGuarantee && (
                <div className="self-stretch mt-auto pt-4 border-t border-[rgba(55,50,47,0.12)]">
                  <p className="text-[#49423D] text-xs font-semibold mb-1">🎁 Founder Guarantee:</p>
                  <p className="text-[#605A57] text-xs italic leading-relaxed">
                    {plan.founderGuarantee}
                  </p>
                  <p className="text-[#847971] text-[10px] mt-2">
                    "শুধুমাত্র প্রথম ৫০ members-এর জন্য। তারপর price ৳৮৯৯/month।"
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Add-on Section */}
        <div className="w-full max-w-3xl px-4 pb-16 flex flex-col items-center gap-6">
           <div className="w-full p-6 bg-[#FAFAFA] border border-[rgba(55,50,47,0.12)] rounded-lg flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col gap-2">
                 <h4 className="text-[#37322F] text-lg font-semibold font-sans">ADD-ON (Optional):<br></br> Extra Screenshot Pack</h4>
                 <p className="text-[#605A57] text-sm font-sans">যদি আপনার monthly limit শেষ হয়:</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                 <p className="text-[#37322F] text-base font-medium font-sans">100 screenshots = <span className="font-bold">৳১৫০</span> (bulk discount)</p>
                 <p className="text-[#847971] text-sm font-sans">Or pay-as-you-go: ৳২ per screenshot</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
