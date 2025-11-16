"use client"

import { useRef, useState } from "react"
import { toast } from "sonner"

interface PreRegistrationFormSectionProps {
  selectedPlan: string
}

export default function PreRegistrationFormSection({ selectedPlan }: PreRegistrationFormSectionProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = (): boolean => {
    if (!selectedPlan) {
      toast.error("Please Choose an Offer First!", {
        description:
          "কোনো পেমেন্ট এখনই লাগবে না। শুধু উপরের টেবিল থেকে আপনার পছন্দের অফারটি সিলেক্ট করুন। আমরা লঞ্চের সময় আপনাকে ইমেইলে জানিয়ে দেব।",
      })
      return false
    }

    if (!formData.name.trim()) {
      toast.error("Name is required")
      return false
    }

    if (!formData.email.trim()) {
      toast.error("Email is required")
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address")
      return false
    }

    if (!formData.phone.trim()) {
      toast.error("Phone number is required")
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Store in localStorage for demo
      const registrations = JSON.parse(localStorage.getItem("orderly_registrations") || "[]")
      registrations.push({
        ...formData,
        selected_plan: selectedPlan,
        timestamp: new Date().toISOString(),
      })
      localStorage.setItem("orderly_registrations", JSON.stringify(registrations))

      // Show success state
      setIsSuccess(true)
      toast.success("Registration Successful!", {
        description: "We will notify you as soon as Orderly launches.",
      })

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
        })
        setIsSuccess(false)
      }, 3000)
    } catch (error) {
      toast.error("Submission failed", {
        description: "Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-2xl px-4 md:px-12 py-16 md:py-20 flex flex-col justify-center items-center gap-6 border-b border-[rgba(55,50,47,0.12)]">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-center text-[#49423D] text-2xl md:text-3xl font-semibold leading-tight font-sans">
            Thank you! Your early-bird price is locked.
          </h3>
          <p className="text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            We'll notify you when Orderly launches.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div id="pre-registration-form" className="w-full flex justify-center items-center">
      <div className="w-full max-w-2xl px-4 md:px-12 py-16 md:py-20 flex flex-col justify-center items-center gap-8 border-b border-[rgba(55,50,47,0.12)]">
        {/* Header */}
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h2 className="text-center text-[#49423D] text-3xl md:text-4xl font-semibold leading-tight md:leading-[44px] font-sans tracking-tight">
            Lock In Your Discount
          </h2>
          <p className="text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Just fill in your details below. We will email you with a private payment link as soon as we launch.
          </p>
        </div>

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          {/* Name Input */}
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="name" className="text-[#49423D] text-sm font-semibold font-sans">
              Your Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="আপনার সম্পূর্ণ নাম"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-[rgba(55,50,47,0.12)] rounded-lg bg-white text-[#37322F] placeholder-[#605A57] focus:outline-none focus:ring-2 focus:ring-[#37322F] focus:border-transparent transition-all"
            />
          </div>

          {/* Email Input */}
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email" className="text-[#49423D] text-sm font-semibold font-sans">
              Your Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="আপনার ইমেইল অ্যাড্রেস"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-[rgba(55,50,47,0.12)] rounded-lg bg-white text-[#37322F] placeholder-[#605A57] focus:outline-none focus:ring-2 focus:ring-[#37322F] focus:border-transparent transition-all"
            />
          </div>

          {/* Phone Input */}
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="phone" className="text-[#49423D] text-sm font-semibold font-sans">
              Your Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="আপনার ফোন নম্বর"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-[rgba(55,50,47,0.12)] rounded-lg bg-white text-[#37322F] placeholder-[#605A57] focus:outline-none focus:ring-2 focus:ring-[#37322F] focus:border-transparent transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-3 relative bg-[#37322F] shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center hover:bg-[#37322F]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <div className="w-full h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0.20)] to-[rgba(0,0,0,0.10)] mix-blend-multiply pointer-events-none"></div>
            <span className="flex justify-center flex-col text-[#FBFAF9] text-sm font-semibold leading-5 font-sans relative z-10">
              {isSubmitting ? "Processing..." : "Secure My Spot & Get Discount"}
            </span>
          </button>
        </form>

        {/* Hidden input for selected plan - for reference */}
        <input type="hidden" name="selected_plan" value={selectedPlan} />
      </div>
    </div>
  )
}
