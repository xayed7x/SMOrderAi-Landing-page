"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {

  return (
    <>
      <section className="relative w-full max-w-[937px] mx-auto">
        <div className="flex flex-col items-center gap-12">
          {/* Hero Content */}
          <div className="max-w-[937px] flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-6">
              <div className="w-full max-w-[748px] text-center">
                <h1 className="text-[#37322f] text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-normal leading-tight md:leading-[72px] font-serif mb-2 md:mb-4">
                  Turn Social Comments Into Customers
                </h1>
                <p className="text-[#37322f]/80 text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
                  Automatically.
                </p>
              </div>

              {/* Subheadline in Bengali */}
              <p className="max-w-[600px] text-center text-[#605A57] text-xs sm:text-sm md:text-base leading-relaxed font-sans">
                আপনার ফেসবুক পোস্টের প্রতিটি কমেন্টে AI নিজে রিপ্লাই করে মুহূর্তেই কাস্টমারকে ইনবক্সে নিয়ে আসবে।
              </p>

              {/* Value Props */}
              <div className="max-w-[700px] grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 text-center">
                <div className="text-[#37322f] text-xs sm:text-sm font-medium">
                  ✓ AI-Powered Instant Comment Reply
                </div>
                <div className="text-[#37322f] text-xs sm:text-sm font-medium">
                  ✓ Automated Inbox Message Delivery
                </div>
                <div className="text-[#37322f] text-xs sm:text-sm font-medium">
                  ✓ Never Miss a Customer Again
                </div>
                <div className="text-[#37322f] text-xs sm:text-sm font-medium">
                  ✓ Works 24/7, Even While You Sleep
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
            <Button
              className="bg-[#37322F] hover:bg-[#2A2520] text-white text-sm font-semibold font-sans rounded-full px-6 py-3 shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset]"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started — 999৳/month
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full"
              onClick={() => alert("Demo video functionality would be implemented here")}
            >
              Watch a 2-Min Demo
            </Button>
          </div>

          {/* Visual Element Placeholder */}
          <div className="w-full mt-8 md:mt-12">
            <div className="w-full aspect-video bg-gradient-to-b from-[#f0ede9] to-[#e8e5e2] rounded-lg flex items-center justify-center border border-[rgba(55,50,47,0.12)]">
              <div className="text-center text-[#605A57]">
                <div className="text-4xl md:text-5xl mb-2">📱💬✨</div>
                <p className="text-sm md:text-base font-medium">
                  AI Comment Reply Flow
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
