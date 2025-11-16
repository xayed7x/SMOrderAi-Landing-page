'use client'

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Connect Your Facebook Page",
      description: "1-click secure login. Your page is instantly connected with Orderly.",
      descriptionBn: "",
    },
    {
      number: "2",
      title: "Activate Your AI Agent",
      description: "Just turn on the auto-reply feature.",
      descriptionBn: "আপনি চাইলে রিপ্লাইয়ের টোন এবং নিয়ম সেট করতে পারেন।",
    },
    {
      number: "3",
      title: "Watch Your Business Grow",
      description: "That's it. You focus on running your business. AI handles your comments and brings customers to your inbox.",
      descriptionBn: "",
    },
  ]

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-4 md:px-6 py-4 md:py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          <h2 className="w-full text-center flex justify-center flex-col text-[#49423D] text-2xl md:text-4xl font-semibold leading-tight md:leading-[44px] font-sans tracking-tight">
            Get Started in 3 Simple Clicks.
          </h2>
          <p className="self-stretch text-center text-[#605A57] text-base md:text-lg font-normal leading-7 font-sans">
            It's That Easy
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="self-stretch px-4 md:px-12 py-12 md:py-16 flex flex-col justify-center items-center gap-8 md:gap-12">
        <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center md:items-start">
              {/* Step Number */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#37322F] text-white flex items-center justify-center text-2xl font-bold mb-4">
                {step.number}
              </div>
              {/* Step Content */}
              <div className="text-center md:text-left">
                <h3 className="text-[#49423D] font-semibold text-lg md:text-xl mb-2">
                  {step.title}
                </h3>
                <p className="text-[#605A57] text-base font-normal leading-relaxed mb-2">
                  {step.description}
                </p>
                {step.descriptionBn && (
                  <p className="text-[#605A57] text-base font-normal leading-relaxed italic">
                    {step.descriptionBn}
                  </p>
                )}
              </div>
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[rgba(55,50,47,0.12)] mt-[-100px]" />
              )}
            </div>
          ))}
        </div>

        {/* Value Reinforcement */}
        <div className="w-full max-w-[800px] px-4 md:px-6 py-6 md:py-8 bg-[rgba(55,50,47,0.05)] rounded-lg border border-[rgba(55,50,47,0.12)] text-center">
          <p className="text-[#37322F] font-semibold text-base md:text-lg">
            This simple setup increases your sales, conversion rates, and brand trust from day one.
          </p>
        </div>
      </div>
    </div>
  )
}
