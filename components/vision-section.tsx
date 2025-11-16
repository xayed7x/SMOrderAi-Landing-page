'use client'

export default function VisionSection() {
  const features = [
    {
      title: "AI Product Recognition",
      titleBn: "স্মার্ট ভিশন",
      description:
        "কাস্টমার পণ্যের স্ক্রিনশট ইনবক্সে দিলেই AI ছবি থেকে পণ্যের নাম, দাম, ও স্টক খুঁজে বের করবে।",
      emoji: "📸",
    },
    {
      title: "Automated Order Taking",
      titleBn: "স্বয়ংক্রিয় অর্ডার গ্রহণ",
      description:
        "গ্রাহক নাম, ঠিকানা, ও ফোন নম্বর দিলে AI নিজে থেকেই একটি কমপ্লিট অর্ডার তৈরি করে ফেলবে।",
      emoji: "🤖",
    },
    {
      title: "The Orderly Dashboard",
      titleBn: "স্মার্টঅর্ডার ড্যাশবোর্ড",
      description:
        "আপনার সমস্ত অর্ডার, কাস্টমার ডেটা, কমেন্ট এবং সেলস রিপোর্ট—সবকিছু ম্যানেজ করার জন্য একটি সেন্ট্রাল হাব।",
      emoji: "📊",
    },
    {
      title: "Enterprise Infrastructure",
      titleBn: "এন্টারপ্রাইজ-গ্রেড অবকাঠামো",
      description:
        "Built on a Multi-Client Superbase Sync for unmatched speed, scalability, and reliability.",
      emoji: "🚀",
    },
  ]

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-4 md:px-6 py-4 md:py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          <h2 className="w-full text-center flex justify-center flex-col text-[#49423D] text-2xl md:text-4xl font-semibold leading-tight md:leading-[44px] font-sans tracking-tight">
            This is Just the Beginning. We are Building the Future of Social Commerce.
          </h2>
        </div>
      </div>

      {/* Upcoming Features */}
      <div className="self-stretch px-4 md:px-12 py-12 md:py-16 flex flex-col justify-center items-center gap-8">
        <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 md:p-8 border border-[rgba(55,50,47,0.12)] rounded-lg hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{feature.emoji}</div>
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
            </div>
          ))}
        </div>

        {/* CTA for Vision */}
        <div className="mt-4 md:mt-8 flex justify-center">
          <button
            onClick={() => (window.location.href = "#pre-registration-form")}
            className="px-8 md:px-12 py-3 md:py-4 bg-[#37322F] hover:bg-[#37322F]/90 text-white rounded-full font-medium text-sm md:text-base transition-colors"
          >
            Join Now & Grow With Us
          </button>
        </div>
      </div>
    </div>
  )
}
