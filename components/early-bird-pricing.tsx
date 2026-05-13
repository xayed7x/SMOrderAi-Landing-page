"use client"

import { Check } from 'lucide-react'

export default function EarlyBirdPricing() {
  const features = [
    "Unlimited Products",
    "AI Product Recognition",
    "Conversational Order Collection",
    "Lead Management Dashboard",
    "Unlimited Conversations",
    "Unlimited Uploads",
    "Smart Intent Detection",
    "Basic Analytics",
    "Email Support",
  ]

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2" id="pricing">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[700px] px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          <h2 className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Try Autex Free for 3 Days
          </h2>
          <p className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            কোনো payment নেই, কোনো commitment নেই। ৩ দিন ফ্রিতে ব্যবহার করুন — তারপর decide করুন।
          </p>
        </div>
      </div>

      {/* Single Free Trial Card */}
      <div className="self-stretch border-b border-t border-[rgba(55,50,47,0.12)] flex justify-center items-center flex-col">
        <div className="w-full flex justify-center items-stretch py-12 md:py-16 px-4 md:px-8 max-w-3xl">
          <div
            className="flex-1 px-6 py-8 md:py-12 bg-white border-2 border-[#37322f] rounded-lg flex flex-col justify-start items-start gap-8 hover:shadow-lg transition-all duration-300 relative animate-border-glow animate-pulse-glow"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#37322F] text-[#FBFAF9] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
              🎉 FREE FOR 3 DAYS
            </div>

            {/* Plan Header */}
            <div className="self-stretch flex flex-col justify-start items-center gap-6 mt-2">
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <h3 className="text-[rgba(55,50,47,0.90)] text-xl md:text-2xl font-semibold leading-7 font-sans">
                  Full Access — Free Trial
                </h3>
              </div>

              {/* Price */}
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="flex flex-col justify-start items-start gap-1">
                  <div className="relative flex items-center text-[#37322F] text-3xl md:text-4xl font-semibold leading-tight font-serif">
                    ৳0
                  </div>
                  <p className="text-[#605A57] text-sm font-medium font-sans">
                    for 3 days — no credit card required
                  </p>
                </div>
              </div>

              {/* Tagline */}
              <div className="self-stretch p-3 bg-[rgba(55,50,47,0.04)] rounded border border-[rgba(55,50,47,0.08)]">
                <p className="text-[#49423D] text-sm font-medium font-sans">
                  সব features আনলক। ৩ দিন ফ্রি ব্যবহার করুন, তারপর সিদ্ধান্ত নিন।
                </p>
              </div>

              <a
                href="https://app.autexai.com/"
                className="self-stretch px-4 py-3 relative bg-gradient-to-r from-[#605A57] to-[#37322f] text-white rounded-[99px] flex justify-center items-center animate-shimmer"
              >
                <span className="flex justify-center flex-col text-[#FBFAF9] text-sm font-semibold leading-5 font-sans relative z-10">
                  Start Free Trial
                </span>
              </a>
            </div>

            {/* Features List */}
            <div className="self-stretch flex flex-col justify-start items-start gap-3 flex-grow">
              {features.map((feature, featureIndex) => (
                <div key={featureIndex} className="self-stretch flex justify-start items-start gap-3">
                  <Check className="w-5 h-5 text-[#37322F] flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <p className="text-[rgba(55,50,47,0.80)] text-sm font-normal leading-5 font-sans pt-0.5">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
