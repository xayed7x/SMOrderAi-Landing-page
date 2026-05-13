'use client'

import { Clock, Camera, Moon } from 'lucide-react'

export default function ProblemSection() {
  const problemCards = [
    {
      icon: Clock,
      accentColor: 'from-red-400 to-red-500',
      iconBg: 'bg-red-50',
      iconColor: 'text-red-500',
      title: "Slow Response = Lost Sales",
      description: "কাস্টমার রাত ২টায় কমেন্ট করে, আপনি সকাল ৯টায় reply দেন — ততক্ষণে সে অন্য পেজ থেকে কিনে ফেলেছে।",
    },
    {
      icon: Camera,
      accentColor: 'from-orange-400 to-orange-500',
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-500',
      title: "Screenshot Chaos",
      description: "কাস্টমার screenshot পাঠায়, আপনি manually খুঁজে বের করেন — সময় নষ্ট, ভুল হয়, customer angry।",
    },
    {
      icon: Moon,
      accentColor: 'from-amber-400 to-yellow-500',
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-500',
      title: "24/7 is Impossible",
      description: "আপনি ঘুমান, কিন্তু customers থামে না। ৩০-৪০% orders মিস হয় শুধু response delay-তে।",
    },
  ]

  return (
    <section className="w-full border-b border-[rgba(55,50,47,0.12)] py-16 md:py-24">
      <div className="max-w-[900px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#49423D] text-2xl md:text-4xl font-semibold leading-tight tracking-tight mb-3">
            আপনার ব্যবসা প্রতিদিন কাস্টমার হারাচ্ছে
          </h2>
          <p className="text-[#605A57] text-base md:text-lg">
            আপনি হয়তো বুঝতেই পারছেন না।
          </p>
        </div>

        {/* Problem Cards - Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {problemCards.map((card, index) => {
            const IconComponent = card.icon
            return (
              <div
                key={index}
                className="relative bg-white rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
              >
                {/* Left Accent Border */}
                <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${card.accentColor}`} />
                
                {/* Icon */}
                <div className={`w-12 h-12 ${card.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-6 h-6 ${card.iconColor}`} strokeWidth={1.5} />
                </div>
                
                {/* Title */}
                <h3 className="text-[#49423D] text-lg font-semibold mb-2">
                  {card.title}
                </h3>
                
                {/* Description - Short & Sweet */}
                <p className="text-[#605A57] text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
