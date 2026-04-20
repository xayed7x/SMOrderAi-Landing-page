'use client'

import { Button } from "@/components/ui/button"

export default function VisionSection() {
  const futureFeatures = [
    {
      icon: "💳",
      title: "Automated Payment Gateway",
      titleBn: "স্বয়ংক্রিয় পেমেন্ট সিস্টেম",
      description: "bKash, Nagad, Rocket integration। Customer pay করলেই auto-verify। আপনি manually screenshot check করবেন না।",
      coming: "Coming: Phase 2 (Q1 2026)",
    },
    {
      icon: "🚚",
      title: "Delivery Partner Integration",
      titleBn: "Pathao, eCourier Auto-Connect",
      description: "Order confirm হলেই automatically parcel create। Rider assign হবে। Customer tracking link পাবে। এক click-এ delivery handled।",
      coming: "Coming: Phase 2 (Q1 2026)",
    },
    {
      icon: "📈",
      title: "Advanced Customer Analytics",
      titleBn: "গ্রাহক বিশ্লেষণ ড্যাশবোর্ড",
      description: "কোন area-তে বেশি order? কোন product জনপ্রিয়? Repeat customers কারা? Facebook ad targeting data।",
      coming: "Coming: Phase 2 (Q2 2026)",
    },
    {
      icon: "📦",
      title: "Smart Inventory Management",
      titleBn: "স্টক ম্যানেজমেন্ট",
      description: "Auto-stock tracking। Low stock alerts। Reorder suggestions।",
      coming: "Coming: Phase 2 (Q2 2026)",
    },
  ]

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-4 md:px-6 py-4 md:py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          <h2 className="w-full text-center flex justify-center flex-col text-[#49423D] text-2xl md:text-4xl font-semibold leading-tight md:leading-[44px] font-sans tracking-tight">
            এটা শুধু শুরু। Autex-এর Future আরও Powerful।
          </h2>
          <p className="self-stretch text-center text-[#605A57] text-base md:text-lg font-normal leading-7 font-sans">
            Phase 2 Launch: ২-৩ মাসের মধ্যে। এখনই ১৪ দিনের ফ্রি ট্রায়াল শুরু করুন এবং সব features experience করুন।
          </p>
        </div>
      </div>

      {/* Upcoming Features */}
      <div className="self-stretch px-4 md:px-12 py-12 md:py-16 flex flex-col justify-center items-center gap-8">
        <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {futureFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 md:p-8 border border-[rgba(55,50,47,0.12)] rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{feature.icon}</div>
                <div>
                  <h3 className="text-[#49423D] font-semibold text-lg md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-[#605A57] text-sm font-medium mt-1">
                    {feature.titleBn}
                  </p>
                </div>
              </div>
              <p className="text-[#605A57] text-base font-normal leading-relaxed">
                {feature.description}
              </p>
              <p className="text-[#49423D] text-xs font-semibold mt-4">
                {feature.coming}
              </p>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="text-center mt-4">
          <p className="text-[#37322f] text-lg font-semibold font-sans">
            🎉 ১৪ দিন Free Trial — কোনো payment নেই।
          </p>
          <p className="text-[#605A57] text-sm font-medium font-sans mt-2">
            কোনো payment নেই। ১৪ দিন ফ্রিতে ব্যবহার করে দেখুন।
          </p>
        </div>

        {/* CTA for Vision */}
        <div className="mt-4 md:mt-8 flex justify-center">
          <Button
            className="bg-gradient-to-r from-[#605A57] to-[#37322f] text-white text-sm font-semibold font-sans rounded-full px-6 py-3 animate-shimmer"
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start Free Trial
          </Button>
        </div>
      </div>
    </div>
  )
}
