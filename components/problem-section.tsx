'use client'

export default function ProblemSection() {
  const problemCards = [
    {
      icon: "⏰",
      title: "Slow Response = Lost Sales",
      description_en: "Customer comments 'Price?' at 2 AM. I reply at 9 AM. By then, they've bought from another page.",
      description_bn: "কাস্টমার রাত ২টায় কমেন্ট করে 'Price?' আমি সকাল ৯টায় reply দেই। ততক্ষণে সে অন্য পেজ থেকে কিনে ফেলেছে।",
      impact_bn: "প্রতিদিন এভাবে ৫-৮টা অর্ডার হাতছাড়া হয়।",
    },
    {
      icon: "📸",
      title: "Screenshot Chaos",
      description_en: "Customers send product screenshots. I manually search for the product and price. Time wasted + mistakes made.",
      description_bn: "কাস্টমাররা পণ্যের screenshot পাঠায়। আমি manually খুঁজে বের করি কোন product, কত দাম। সময় নষ্ট + ভুল হয়।",
      impact_bn: "একটা ভুল মানে একটা angry customer।",
    },
    {
      icon: "📝",
      title: "Manual Order Collection",
      description_en: "I have to manually collect name, address, and phone number from each customer separately. I spend hours in the inbox.",
      description_bn: "প্রতিটা customer-এর কাছ থেকে আলাদা করে নাম, ঠিকানা, ফোন নম্বর collect করতে হয়। ঘণ্টার পর ঘণ্টা inbox-এ বসে থাকি।",
      impact_bn: "এটাই আমার দিনের সবচেয়ে বড় headache।",
    },
    {
      icon: "🌙",
      title: "Midnight Messages",
      description_en: "I see messages from 12-2 AM in the morning. By then, the customer's interest has waned. Even if I reply, they don't respond.",
      description_bn: "রাত ১২টা-২টার messages সকালে দেখি। ততক্ষণে customer-এর interest কমে গেছে। Reply দিলেও আর respond করে না।",
      impact_bn: "৩০-৪০% potential orders এভাবে মিস হয়।",
    },
    {
      icon: "📈",
      title: "No System = No Scale",
      description_en: "I'm doing everything manually, which means I can't scale. I want to launch more products but I know I won't be able to handle the inbox.",
      description_bn: "আমি manually সব করছি মানে আমি scale করতে পারছি না। আরো products launch করতে চাই কিন্তু inbox handle করতে পারব না জানি।",
      impact_bn: "Manual system = growth-এর ceiling।",
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
          <p>আপনি হয়তো বুঝতেই পারছেন না।</p>
        </div>
      </div>

      {/* Problem Cards */}
      <div className="self-stretch px-4 md:px-12 py-8 md:py-12 flex flex-col justify-center items-center gap-4">
        <div className="w-full max-w-[800px] flex flex-col gap-3 md:gap-4">
          {problemCards.map((card, index) => (
            <div
              key={index}
              className="px-4 md:px-6 py-3 md:py-4 border border-[rgba(55,50,47,0.12)] rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{card.icon}</span>
                <p className="text-[#49423D] font-semibold text-base md:text-lg">
                  {card.title}
                </p>
              </div>
              <p className="text-[#605A57] text-base font-normal leading-[1.6]">
                "{card.description_bn}"
              </p>
              <p className="text-[#605A57] text-base font-normal leading-[1.6] mt-1">
                {card.impact_bn}
              </p>
            </div>
          ))}
        </div>
      </div>


    </div>
  )
}
