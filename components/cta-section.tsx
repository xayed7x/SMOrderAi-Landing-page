"use client"

import { useState } from "react"
import { PreRegistrationModal } from "./pre-registration-modal"

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="w-full relative overflow-hidden flex flex-col justify-center items-center gap-2">
        {/* Content */}
        <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-t border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6 relative z-10">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div className="w-full h-full relative">
              {Array.from({ length: 300 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute h-4 w-full rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                  style={{
                    top: `${i * 16 - 120}px`,
                    left: "-100%",
                    width: "300%",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="w-full max-w-[586px] px-6 py-5 md:py-8 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-6 relative z-20">
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <h2 className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-[56px] font-sans tracking-tight">
                Never Miss Another Customer — Ever Again.
              </h2>
              <p className="self-stretch text-center text-[#605A57] text-base leading-7 font-sans font-medium">
                Stop losing sales in your comment section. Let AI handle the repetitive work while you focus on what truly matters: growing your business.
              </p>
            </div>
            <div className="w-full max-w-[497px] flex flex-col justify-center items-center gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full px-6 py-3 relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center cursor-pointer hover:bg-[#2A2520] transition-colors text-center"
              >
                <div className="w-44 h-[41px] absolute left-0 top-0 bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply pointer-events-none"></div>
                <span className="text-white text-sm font-semibold leading-5 font-sans relative z-10 block">
                  Automate My Business Now — 999৳/month
                </span>
              </button>            </div>
          </div>
        </div>
      </div>

      <PreRegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
