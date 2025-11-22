"use client"

import { useState, useEffect } from "react"
import type React from "react"

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const testimonials = [
    {
      quote: "আগে রাতে ৫০+ কমেন্ট মিস হতো। Autex use করার পর প্রতিটা customer instantly response পায়। আর screenshot থেকে product identify করা — এটা magic! আমার order collection time 70% কমে গেছে।",
      name: "Roshni Ahmed",
      company: "Founder, Fashion Boutique",
      image: "/placeholder.svg",
    },
    {
      quote: "কমেন্ট ম্যানেজ করার কোনো পেইনই এখন আর নেই। রাতে ব্যবসা অটোমেটিক চলে, কারণ AI জেগে থাকে।",
      name: "Imran Khan",
      company: "Owner, Gadget Shop",
      image: "/placeholder.svg",
    },
    {
      quote: "আগে মডারেটরকে যা বেতন দিতাম, তার ১০ ভাগের এক ভাগ খরচে এখন তার চেয়ে ১০ গুণ ভালো সার্ভিস পাচ্ছি।",
      name: "Fatima Islam",
      company: "CEO, Beauty & Cosmetics",
      image: "/placeholder.svg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
        setTimeout(() => {
          setIsTransitioning(false)
        }, 100)
      }, 300)
    }, 12000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const handleNavigationClick = (index: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveTestimonial(index)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 100)
    }, 300)
  }

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-4 md:px-6 py-4 md:py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          <Badge
            icon={
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="3" width="4" height="6" stroke="#37322F" strokeWidth="1" fill="none" />
                <rect x="7" y="1" width="4" height="8" stroke="#37322F" strokeWidth="1" fill="none" />
              </svg>
            }
            text="Social Proof"
          />
          <h2 className="w-full max-w-[472px] text-center flex justify-center flex-col text-[#49423D] text-2xl md:text-4xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Trusted by the Smartest Growing Businesses in Bangladesh.
          </h2>
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="self-stretch px-4 md:px-12 py-16 md:py-20 overflow-hidden flex justify-start items-center">
        <div className="flex-1 py-8 md:py-12 flex flex-col md:flex-row justify-center items-end gap-6 md:gap-8">
          <div className="self-stretch px-3 md:px-6 justify-center items-start gap-4 md:gap-6 flex flex-col md:flex-row">
            {/* Testimonial Quote */}
            <div className="flex-1 px-6 md:px-8 py-6 md:py-8 shadow-[0px_0px_0px_0.75px_rgba(50,45,43,0.12)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-start items-start gap-6">
              <div
                className="self-stretch justify-start flex flex-col text-[#49423D] text-xl md:text-2xl font-medium leading-8 md:leading-8 font-sans h-auto md:h-[180px] overflow-hidden line-clamp-4 md:line-clamp-none transition-all duration-700 ease-in-out tracking-tight"
                style={{
                  filter: isTransitioning ? "blur(4px)" : "blur(0px)",
                  transition: "filter 0.7s ease-in-out",
                }}
              >
                "{testimonials[activeTestimonial].quote}"
              </div>
              <div
                className="self-stretch flex flex-col justify-start items-start gap-1 transition-all duration-700 ease-in-out"
                style={{
                  filter: isTransitioning ? "blur(4px)" : "blur(0px)",
                  transition: "filter 0.7s ease-in-out",
                }}
              >
                <div className="self-stretch justify-center flex flex-col text-[rgba(73,66,61,0.90)] text-lg font-semibold leading-[26px] font-sans">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="self-stretch justify-center flex flex-col text-[rgba(73,66,61,0.70)] text-sm font-medium leading-[20px] font-sans">
                  {testimonials[activeTestimonial].company}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="pr-0 md:pr-6 justify-start items-start gap-3 md:gap-4 flex">
              <button
                onClick={() =>
                  handleNavigationClick(
                    (activeTestimonial - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="w-9 h-9 shadow-[0px_1px_2px_rgba(0,0,0,0.08)] overflow-hidden rounded-full border border-[rgba(0,0,0,0.15)] justify-center items-center gap-2 flex hover:bg-gray-50 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="#46413E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() => handleNavigationClick((activeTestimonial + 1) % testimonials.length)}
                className="w-9 h-9 shadow-[0px_1px_2px_rgba(0,0,0,0.08)] overflow-hidden rounded-full border border-[rgba(0,0,0,0.15)] justify-center items-center gap-2 flex hover:bg-gray-50 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="#46413E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
