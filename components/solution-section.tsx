"use client";

import { Zap, Brain, Camera, MessageSquare, LayoutDashboard, Moon } from 'lucide-react'

export default function SolutionSection() {
  const features = [
    {
      icon: Zap,
      accentColor: 'from-yellow-400 to-amber-500',
      iconBg: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      title: "Lightning-Fast Reply",
      titleBn: "তাৎক্ষণিক রিপ্লাই",
      description: "কমেন্টে auto-reply (Coming Soon) + DM-এ instant response। Customer engaged, আপনি ঘুমান।",
      comingSoon: true,
    },
    {
      icon: Brain,
      accentColor: 'from-purple-400 to-violet-500',
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      title: "Smart Intent Detection",
      titleBn: "স্মার্ট Intent বোঝে",
      description: "\"Price?\" vs \"Beautiful!\" — Autex বোঝে কে buyer, কে শুধু admirer। Priority অনুযায়ী respond করে।",
    },
    {
      icon: Camera,
      accentColor: 'from-pink-400 to-rose-500',
      iconBg: 'bg-pink-50',
      iconColor: 'text-pink-600',
      title: "AI Product Recognition",
      titleBn: "ছবি থেকে Product চেনে",
      description: "Screenshot পাঠালে AI আপনার database থেকে product খুঁজে বের করে। ৯৭% accuracy, ২-৫ সেকেন্ডে।",
    },
    {
      icon: MessageSquare,
      accentColor: 'from-blue-400 to-cyan-500',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      title: "Conversational Orders",
      titleBn: "মানুষের মতো কথা বলে",
      description: "নাম, ঠিকানা, ফোন — সব naturally collect করে। Robotic না, human-like conversation।",
    },
    {
      icon: LayoutDashboard,
      accentColor: 'from-emerald-400 to-green-500',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      title: "Centralized Dashboard",
      titleBn: "সব এক জায়গায়",
      description: "Conversations, products, orders, analytics — এক dashboard থেকে পুরো business চালান।",
    },
    {
      icon: Moon,
      accentColor: 'from-indigo-400 to-blue-500',
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      title: "24/7 Active Agent",
      titleBn: "কখনো ঘুমায় না",
      description: "রাত ২টা, শুক্রবার, ঈদের দিন — Autex সবসময় active। আপনি পরিবারের সাথে সময় কাটান।",
    },
  ];

  return (
    <section className="w-full border-b border-[rgba(55,50,47,0.12)] py-16 md:py-24">
      <div className="max-w-[1000px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#49423D] text-2xl md:text-4xl font-semibold leading-tight tracking-tight mb-3">
            Autex কীভাবে সব Automate করে?
          </h2>
          <p className="text-[#605A57] text-base md:text-lg">
            Comment to Confirmed Order — AI Handles Everything.
          </p>
        </div>

        {/* Features Grid - Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="relative bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
              >
                {/* Left Accent Border */}
                <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${feature.accentColor}`} />
                
                {/* Icon */}
                <div className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-6 h-6 ${feature.iconColor}`} strokeWidth={1.5} />
                </div>
                
                {/* Title + Bengali */}
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-[#49423D] text-lg font-semibold">
                    {feature.title}
                  </h3>
                  {feature.comingSoon && (
                    <span className="bg-amber-100 text-amber-700 text-[10px] px-1.5 py-0.5 rounded-full font-semibold">Soon</span>
                  )}
                </div>
                <p className="text-[#847971] text-xs font-medium mb-3">
                  {feature.titleBn}
                </p>
                
                {/* Description - Short & Sweet */}
                <p className="text-[#605A57] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
