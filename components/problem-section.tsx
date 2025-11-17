'use client'

export default function ProblemSection() {
  const painPoints = [
    {
      en: "Missing Customer Responses",
      bn: "একটা কমেন্টের রিপ্লাই দিতে দেরি হওয়ায় কাস্টমার অন্য পেজ থেকে কিনে নিয়েছে।",
    },
    {
      en: "Overwhelming Comment Volume",
      bn: "একসাথে 10,000 টা কমেন্ট আসলে রিপ্লাই দিতে দিতে দিন শেষ, আসল কাজে মনোযোগই দিতে পারি না।",
    },
    {
      en: "Rising Moderator Costs",
      bn: "মডারেটর রাখতে গিয়ে খরচ বাড়ছে, আবার তার ভুলের কারণেও কাস্টমার হারাতে হচ্ছে।",
    },
    {
      en: "Time Zone Delays",
      bn: "রাতের বেলা বা ছুটির দিনে আসা কমেন্টগুলোর উত্তর দিতে দেরি হয়ে যায়, ততক্ষণে কাস্টমারের আগ্রহ কমে যায়।",
    },
    {
      en: "Lost Conversions",
      bn: "কমেন্ট থেকে ইনবক্সে নিতে গিয়ে অর্ধেক কাস্টমার রাস্তা হারিয়ে যায়।",
    },
  ]

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-4 md:px-6 py-4 md:py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          <h2 className="w-full text-center flex justify-center flex-col text-[#49423D] text-2xl md:text-4xl font-semibold leading-tight md:leading-[44px] font-sans tracking-tight">
            আপনার ব্যবসা প্রতিদিন কাস্টমার হারাচ্ছে
          </h2>
          <p className="self-stretch text-center text-[#605A57] text-base md:text-lg font-normal leading-7 font-sans">
            আপনি হয়তো বুঝতেই পারছেন না।
          </p>
        </div>
      </div>

      {/* Pain Points */}
      <div className="self-stretch px-4 md:px-12 py-8 md:py-12 flex flex-col justify-center items-center gap-4">
        <div className="w-full max-w-[800px] flex flex-col gap-3 md:gap-4">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="px-4 md:px-6 py-3 md:py-4 border border-[rgba(55,50,47,0.12)] rounded-lg hover:bg-[rgba(55,50,47,0.03)] transition-colors"
            >
              <p className="text-[#49423D] font-semibold text-base md:text-lg mb-1">
                {point.en}
              </p>
              <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed">
                "{point.bn}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing statement */}
      <div className="self-stretch px-4 md:px-12 pb-12 md:pb-16 flex justify-center items-center">
        <div className="w-full max-w-[800px] px-4 md:px-6 py-6 md:py-8 bg-[rgba(55,50,47,0.05)] rounded-lg border border-[rgba(55,50,47,0.12)]">
          <p className="text-center text-[#37322F] font-semibold text-lg md:text-xl">
            This is exactly the problem Autex solves — instantly and permanently.
          </p>
        </div>
      </div>
    </div>
  )
}
