"use client"

export default function SolutionSection() {
  const features = [
    {
      title: "Auto Comment Reply",
      titleBn: "সাড়া দিন স্বয়ংক্রিয়ভাবে",
      description:
        "Our AI reads every single comment on your posts and provides an immediate, relevant response.",
      icon: "⚡",
    },
    {
      title: "Smart Intent Detection",
      titleBn: "স্মার্ট অভিপ্রায় সনাক্তকরণ",
      description:
        "শুধু রিপ্লাই নয়; AI কমেন্টের উদ্দেশ্য (দাম জিজ্ঞাসা / প্রশংসা / প্রশ্ন) বুঝে সবচেয়ে সঠিক উত্তর দেয়।",
      icon: "🧠",
    },
    {
      title: "Automated Inbox Delivery",
      titleBn: "স্বয়ংক্রিয় ইনবক্স ডেলিভারি",
      description:
        "When a customer asks for the price, the AI replies 'Check Inbox' and simultaneously sends a private message with the details you've set.",
      icon: "📨",
    },
    {
      title: "24/7 Active Agent",
      titleBn: "২৪/৭ সক্রিয় এজেন্ট",
      description:
        "আপনার টিম বা আপনি যখন ঘুমাচ্ছেন, তখনও SmartOrder AI জেগে থেকে কাস্টমার ম্যানেজ করে।",
      icon: "🌙",
    },
    {
      title: "Human-like Tone",
      titleBn: "মানবসদৃশ টোন",
      description:
        "The AI communicates in a positive, friendly, and supportive tone, ensuring a perfect first impression and customer experience.",
      icon: "💬",
    },
  ]

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-4 md:px-6 py-4 md:py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          <h2 className="w-full text-center flex justify-center flex-col text-[#49423D] text-2xl md:text-4xl font-semibold leading-tight md:leading-[44px] font-sans tracking-tight">
            AI That Manages Your Comments & Inbox — Intelligently.
          </h2>
        </div>
      </div>

      {/* Features Grid */}
      <div className="self-stretch px-4 md:px-12 py-8 md:py-12 flex flex-col justify-center items-center gap-4">
        <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 md:p-6 border border-[rgba(55,50,47,0.12)] rounded-lg hover:bg-[rgba(55,50,47,0.02)] transition-colors"
            >
              <div className="flex items-start gap-3 md:gap-4 mb-3">
                <div className="text-2xl md:text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="text-[#49423D] font-semibold text-base md:text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-[#605A57] text-xs md:text-sm font-medium">
                    {feature.titleBn}
                  </p>
                </div>
              </div>
              <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
