"use client"

export default function CTASection() {

  return (
    <>
      <div className="w-full relative overflow-hidden flex flex-col justify-center items-center gap-2">
        {/* Content */}
        <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-t border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6 relative z-10">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div className="w-full h-full relative">
              {Array.from({ length: 300 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute h-4 w-full rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                  style={{
                    top: `${i * 16 - 120}px`,
                    left: "-100%",
                    width: "300%",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="w-full max-w-[700px] px-6 py-5 md:py-8 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-6 relative z-20">
            <div className="self-stretch flex flex-col justify-start items-center gap-3">
              <h2 className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-[56px] font-sans tracking-tight">
                আর কখনো customer হারাবেন না।
              </h2>
              <p className="self-stretch text-center text-[#605A57] text-lg leading-7 font-sans font-medium">
                আর কখনো inbox-এ আটকে থাকবেন না।<br/>
                আপনার business এখন চলুক autopilot-এ।
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4 text-[#49423D] font-medium text-sm md:text-base">
                   <div className="flex items-center gap-2">
                    <span>⚡ AI handles comments</span>
                    <span className="bg-amber-100 text-amber-700 text-[10px] px-1.5 py-0.5 rounded-full font-semibold">Soon</span>
                   </div>
                 <div className="flex items-center gap-2">
                    <span>📸 AI recognizes products</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span>💬 AI collects orders</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span>📊 You just deliver & scale</span>
                 </div>
              </div>
            </div>
            
            <div className="w-full max-w-[497px] flex flex-col justify-center items-center gap-4">
              <p className="text-[#37322F] font-semibold text-sm uppercase tracking-wider">🎉 ১৪ দিন সম্পূর্ণ ফ্রি — এখনই শুরু করুন</p>
              <a
                href="https://app.autexai.com/"
                className="w-full px-6 py-4 relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center cursor-pointer hover:bg-[#2A2520] transition-colors text-center group"
              >
                <div className="w-44 h-[41px] absolute left-0 top-0 bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply pointer-events-none"></div>
                <span className="text-white text-base font-bold leading-5 font-sans relative z-10 block">
                  Start Your Free 14-Day Trial
                </span>
              </a>
              <p className="text-[#605A57] text-xs italic">No credit card required। কোনো commitment নেই।</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
