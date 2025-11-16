"use client"

import { useState } from "react"
import { toast } from "sonner"
import { X } from 'lucide-react'

interface PreRegistrationModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  email: string
  businessType: string
  facebookPage: string
  instagramHandle: string
}

export function PreRegistrationModal({ isOpen, onClose }: PreRegistrationModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    businessType: "",
    facebookPage: "",
    instagramHandle: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast.error("আপনার নাম প্রবেশ করুন")
      return false
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("সঠিক ইমেইল অ্যাড্রেস দিন")
      return false
    }
    if (!formData.businessType) {
      toast.error("আপনার ব্যবসার ধরন নির্বাচন করুন")
      return false
    }
    if (!formData.facebookPage.trim()) {
      toast.error("আপনার ফেসবুক পেজ URL দিন")
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Success
      toast.success("নিবন্ধন সফল! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।", {
        description: "আমাদের টিম 24 ঘন্টার মধ্যে আপনার সাথে যোগাযোগ করবে।"
      })

      // Store in localStorage for demo purposes
      const submissions = JSON.parse(localStorage.getItem('smartorder_submissions') || '[]')
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString()
      })
      localStorage.setItem('smartorder_submissions', JSON.stringify(submissions))

      // Reset form
      setFormData({
        name: "",
        email: "",
        businessType: "",
        facebookPage: "",
        instagramHandle: "",
      })

      onClose()
    } catch (error) {
      toast.error("কিছু ভুল হয়েছে। আবার চেষ্টা করুন।")
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[rgba(55,50,47,0.12)]">
            <h2 className="text-xl font-semibold text-[#37322F]">
              আপনার SmartOrder যাত্রা শুরু করুন
            </h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-[rgba(55,50,47,0.08)] rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X size={20} className="text-[#605A57]" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-[#37322F]">
                আপনার নাম *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="আপনার পূর্ণ নাম"
                className="w-full px-4 py-2 border border-[rgba(55,50,47,0.12)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37322F] focus:ring-offset-0 text-sm"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-[#37322F]">
                ইমেইল অ্যাড্রেস *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-[rgba(55,50,47,0.12)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37322F] focus:ring-offset-0 text-sm"
              />
            </div>

            {/* Business Type */}
            <div className="space-y-2">
              <label htmlFor="businessType" className="block text-sm font-medium text-[#37322F]">
                আপনার ব্যবসার ধরন *
              </label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[rgba(55,50,47,0.12)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37322F] focus:ring-offset-0 text-sm bg-white"
              >
                <option value="">নির্বাচন করুন...</option>
                <option value="ecommerce">ই-কমার্স</option>
                <option value="services">সেবা প্রদান</option>
                <option value="digital">ডিজিটাল পণ্য</option>
                <option value="physical">শারীরিক পণ্য</option>
                <option value="consulting">পরামর্শ সেবা</option>
                <option value="other">অন্যান্য</option>
              </select>
            </div>

            {/* Facebook Page */}
            <div className="space-y-2">
              <label htmlFor="facebookPage" className="block text-sm font-medium text-[#37322F]">
                ফেসবুক পেজের লিংক *
              </label>
              <input
                type="url"
                id="facebookPage"
                name="facebookPage"
                value={formData.facebookPage}
                onChange={handleChange}
                placeholder="https://facebook.com/yourpage"
                className="w-full px-4 py-2 border border-[rgba(55,50,47,0.12)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37322F] focus:ring-offset-0 text-sm"
              />
            </div>

            {/* Instagram Handle */}
            <div className="space-y-2">
              <label htmlFor="instagramHandle" className="block text-sm font-medium text-[#37322F]">
                ইনস্টাগ্রাম হ্যান্ডেল (ঐচ্ছিক)
              </label>
              <input
                type="text"
                id="instagramHandle"
                name="instagramHandle"
                value={formData.instagramHandle}
                onChange={handleChange}
                placeholder="@yourhandle"
                className="w-full px-4 py-2 border border-[rgba(55,50,47,0.12)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37322F] focus:ring-offset-0 text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 px-4 py-3 bg-[#37322F] hover:bg-[#37322F]/90 disabled:bg-[#37322F]/50 text-white rounded-full font-semibold text-sm transition-colors relative overflow-hidden"
            >
              <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-b from-[rgba(255,255,255,0.20)] to-[rgba(0,0,0,0.10)] mix-blend-multiply pointer-events-none"></div>
              <span className="relative z-10 flex items-center justify-center">
                {loading ? "প্রসেস করছি..." : "Register Now"}
              </span>
            </button>

            {/* Privacy Note */}
            <p className="text-center text-xs text-[#847971] mt-4">
              আমরা আপনার ডেটা সুরক্ষিত রাখি এবং কখনো শেয়ার করি না।
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
