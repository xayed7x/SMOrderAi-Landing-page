"use client"

import { useState } from "react"
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"

function Badge({ text }: { text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs mx-auto mb-6">
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans uppercase">
        {text}
      </div>
    </div>
  )
}

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      badge: "SMALL BUSINESS",
      name: "Starter",
      monthlyPrice: "৳1,499",
      yearlyPrice: "৳1,249",
      yearlyBilled: "৳14,990/year",
      customerLimit: "500 customers/Month",
      overage: "৳3/extra customer",
      features: [
        "AI Sales Agent",
        "Facebook Messenger automation",
        "Instagram DM automation",
        "Comment auto-reply",
        "Unlimited products",
        "Order & payment collection",
        "Conversation dashboard",
        "Custom AI behavior rules",
        "Few-shot conversation examples",
        "Email support"
      ],
      highlighted: false,
      buttonText: "Start Free Trial",
      buttonVariant: "outline"
    },
    {
      badge: "MOST POPULAR",
      name: "Growth",
      monthlyPrice: "৳2,999",
      yearlyPrice: "৳2,499",
      yearlyBilled: "৳29,990/year",
      customerLimit: "1,500 customers/Month",
      overage: "৳3/extra customer",
      features: [
        "AI Sales Agent",
        "Facebook Messenger automation",
        "Instagram DM automation",
        "Comment auto-reply",
        "Unlimited products",
        "Order & payment collection",
        "Conversation dashboard",
        "Custom AI behavior rules",
        "Few-shot conversation examples",
        "WhatsApp support"
      ],
      highlighted: true,
      buttonText: "Start Free Trial",
      buttonVariant: "default"
    },
    {
      badge: "HIGH VOLUME",
      name: "Pro",
      monthlyPrice: "৳5,999",
      yearlyPrice: "৳4,999",
      yearlyBilled: "৳59,990/year",
      customerLimit: "3,500 customers/Month",
      overage: "৳3/extra customer",
      features: [
        "AI Sales Agent",
        "Facebook Messenger automation",
        "Instagram DM automation",
        "Comment auto-reply",
        "Unlimited products",
        "Order & payment collection",
        "Conversation dashboard",
        "Custom AI behavior rules",
        "Few-shot conversation examples",
        "Priority WhatsApp support"
      ],
      highlighted: false,
      buttonText: "Start Free Trial",
      buttonVariant: "outline"
    }
  ]

  return (
    <section className="w-full py-16 md:py-24 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center" id="pricing">
      <div className="flex flex-col items-center w-full max-w-[1200px] px-4 md:px-8">
        
        {/* Header */}
        <div className="w-full flex flex-col items-center mb-12 text-center">
          <Badge text="PRICING" />
          <h2 className="text-[#37322F] text-3xl md:text-4xl lg:text-5xl font-normal font-serif mb-4">
            সহজ pricing। কোনো surprise নেই।
          </h2>
          <p className="text-[#605A57] text-base md:text-lg font-sans">
            ১৪ দিন free trial। Credit card লাগবে না।
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center gap-4 bg-[rgba(55,50,47,0.05)] p-1.5 rounded-full mb-12 border border-[rgba(55,50,47,0.1)]">
          <button 
            onClick={() => setIsYearly(false)}
            className={`px-5 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium font-sans transition-all ${
              !isYearly ? "bg-white text-[#37322F] shadow-sm" : "text-[#605A57] hover:text-[#37322F]"
            }`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setIsYearly(true)}
            className={`px-5 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium font-sans flex items-center gap-2 transition-all ${
              isYearly ? "bg-white text-[#37322F] shadow-sm" : "text-[#605A57] hover:text-[#37322F]"
            }`}
          >
            Yearly
            <span className="bg-[#E4F3ED] text-[#1E7B5C] text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
              2 Months free
            </span>
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1100px]">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`flex flex-col p-6 md:p-8 rounded-xl bg-white transition-all duration-300 relative
                ${plan.highlighted 
                  ? "border-2 border-[#37322f] animate-border-glow animate-pulse-glow shadow-lg transform md:-translate-y-2 lg:scale-105 z-10" 
                  : "border border-[rgba(55,50,47,0.12)] hover:border-[rgba(55,50,47,0.3)] hover:shadow-md z-0"
                }
              `}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#37322F] text-[#FBFAF9] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap z-20">
                  {plan.badge}
                </div>
              )}
              {!plan.highlighted && (
                <div className="text-[rgba(55,50,47,0.7)] text-[10px] font-bold mb-4 uppercase tracking-wider">
                  {plan.badge}
                </div>
              )}
              
              <h3 className={`text-2xl font-semibold font-sans mt-0 ${plan.highlighted ? "mt-2" : ""}`}>
                {plan.name}
              </h3>
              
              <div className="mt-4 mb-2 flex items-baseline gap-1">
                <span className="text-[#37322F] text-3xl lg:text-4xl font-serif font-medium">
                  {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-[#605A57] text-base font-medium">/Month</span>
              </div>
              
              <div className="h-4">
                {isYearly && (
                  <p className="text-[#605A57] text-xs font-medium">billed {plan.yearlyBilled}</p>
                )}
              </div>

              <div className="mt-6 mb-6">
                <p className="text-[#37322F] font-semibold text-sm mb-1">{plan.customerLimit}</p>
                <p className="text-[#605A57] text-xs">{plan.overage}</p>
              </div>

              <Button 
                variant={plan.buttonVariant as any}
                className={`w-full rounded-full font-sans font-semibold py-6 transition-all ${plan.highlighted ? "bg-gradient-to-r from-[#605A57] to-[#37322f] text-white animate-shimmer hover:opacity-90" : "border-[#E0DEDB] hover:bg-[rgba(55,50,47,0.04)] text-[#37322f]"}`}
                onClick={() => window.location.href = "https://app.autexai.com/"}
              >
                <span className="relative z-10">{plan.buttonText}</span>
              </Button>

              <div className="border-t border-[rgba(55,50,47,0.12)] w-full my-6"></div>

              <div className="flex flex-col gap-3 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#37322F] flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <p className="text-sm font-normal leading-5 font-sans pt-0.5 text-[rgba(55,50,47,0.80)]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Notes */}
        <div className="mt-12 text-center max-w-[800px] flex flex-col items-center">
          <p className="text-[rgba(55,50,47,0.8)] text-sm font-medium mb-4">
            সব plan এ ১৪ দিন free trial। Overage charge শুধুমাত্র limit cross করলে।
          </p>
          <div className="bg-white/80 px-6 py-3 rounded-lg border border-[rgba(55,50,47,0.12)] inline-block max-w-[450px]">
            <p className="text-[#605A57] text-xs font-medium leading-relaxed">
              <strong className="text-[#37322F]">অন্যান্য প্ল্যাটফর্মে</strong> ১,৫০০ customer মানে ৳৩,৭৯৩/Month + per-customer charge।<br/>
              আমাদের Growth plan এ ৳২,৯৯৯। Fixed।
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
