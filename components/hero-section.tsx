"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"

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
                  আপনার F-Commerce Business এখন চলবে Autopilot-এ 
                </h1>
              </div>

              {/* Subheadline in Bengali */}
              <p className="max-w-[600px] text-center text-[#605A57] text-xs sm:text-sm md:text-base leading-relaxed font-sans">
                কমেন্ট থেকে অর্ডার — সব কিছু AI করবে স্বয়ংক্রিয়ভাবে। আপনি শুধু ডেলিভারি দিন।
              </p>

              {/* Value Props */}
              <div className="max-w-[700px] grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 text-center">
                <div className="text-[#37322f] text-xs sm:text-sm font-medium flex items-center justify-center gap-2">
                  ✓ Instant Comment Reply + DM 
                </div>
                <div className="text-[#37322f] text-xs sm:text-sm font-medium">
                  ✓ AI Product Recognition from Screenshots 
                </div>
                <div className="text-[#37322f] text-xs sm:text-sm font-medium">
                  ✓ Conversational Order Collection 
                </div>
                <div className="text-[#37322f] text-xs sm:text-sm font-medium">
                  ✓ 24/7 Automation Even While You Sleep
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
            <a
              href="https://app.autexai.com/"
              className="bg-gradient-to-r from-[#605A57] to-[#37322f] text-white text-sm font-semibold font-sans rounded-full px-6 py-3 animate-shimmer flex items-center justify-center"
            >
              Get Started for Free
            </a>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                >
                  Watch 2-Min Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden border-none bg-transparent shadow-2xl">
                <DialogTitle className="sr-only">Autex Demo Video</DialogTitle>
                <div className="aspect-video w-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/0lrpnCDwQtM?autoplay=1"
                    title="Autex Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Free Trial Info */}
          <div className="text-center mt-4">
            <p className="text-[#37322f] text-sm font-semibold font-sans">
              🎉 14 Days Free Trial — No Payment Required
            </p>
            <p className="text-[#605A57] text-xs font-medium font-sans">
              সব features আনলক। ফ্রিতে ব্যবহার করে দেখুন।
            </p>
          </div>

          {/* Visual Element Placeholder */}
          <div className="w-full mt-8 md:mt-12">
            <div className="w-full aspect-video bg-gradient-to-b from-[#f0ede9] to-[#e8e5e2] rounded-lg flex items-center justify-center border border-[rgba(55,50,47,0.12)]">
              <div className="text-center text-[#605A57]">
                <div className="text-4xl md:text-5xl mb-2">📸➡️📦</div>
                <p className="text-sm md:text-base font-medium">
                  Screenshot to Order: Fully Automated
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
