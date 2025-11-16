"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  questionBn: string
  answer: string
  answerBn?: string
}

const faqData: FAQItem[] = [
  {
    question: "Is this really 24/7?",
    questionBn: "এটা কি সত্যি ২৪ ঘণ্টা কাজ করে?",
    answer: "Yes, our AI server runs 24/7 without interruption.",
    answerBn:
      "হ্যাঁ, আমাদের AI সার্ভার ২৪/৭ সচল থাকে। আপনার পেজের কোনো কমেন্টই মিস হবে না।",
  },
  {
    question: "Can the AI make mistakes?",
    questionBn: "AI কি ভুল রিপ্লাই দিতে পারে?",
    answer:
      "Our AI has 99% accuracy in understanding comment intent. You can set custom rules to make it even more perfect.",
    answerBn:
      "আমাদের AI ৯৯% নির্ভুলভাবে কমেন্টের উদ্দেশ্য বুঝতে পারে। তবে আপনি রিপ্লাইয়ের নিয়ম সেট করে এটিকে আরও পারফেক্ট করতে পারবেন।",
  },
  {
    question: "Is my Facebook page secure?",
    questionBn: "আমার ফেসবুক পেজের অ্যাক্সেস কি নিরাপদ থাকবে?",
    answer:
      "Absolutely. We use Facebook's official API and never access your password or personal information.",
    answerBn:
      "অবশ্যই। আমরা ফেসবুকের অফিশিয়াল API ব্যবহার করি এবং আপনার পেজের পাসওয়ার্ড বা ব্যক্তিগত তথ্যের কোনো অ্যাক্সেস নিই না।",
  },
  {
    question: "Can I cancel anytime?",
    questionBn: "আমি কি যেকোনো সময় সাবস্ক্রিপশন বাতিল করতে পারবো?",
    answer: "Yes, cancel your subscription anytime with no questions asked.",
    answerBn:
      "হ্যাঁ, আপনি যেকোনো সময় কোনো প্রশ্ন ছাড়াই আপনার সাবস্ক্রিপশন বাতিল করতে পারেন।",
  },
  {
    question: "How do I pay?",
    questionBn: "পেমেন্ট কীভাবে করতে হবে?",
    answer:
      "You can pay via bKash, Nagad, Rocket, or any Bangladeshi bank card.",
    answerBn:
      "আপনি বিকাশ, নগদ, রকেট বা যেকোনো ব্যাংক কার্ডের মাধ্যমে সহজেই পেমেন্ট করতে পারবেন।",
  },
  {
    question: "Is there a setup fee?",
    questionBn: "কি কোনো সেটআপ ফি আছে?",
    answer:
      "No hidden fees. Just 999৳/month, and our team helps you set up for free.",
    answerBn:
      "না, কোনো লুকানো খরচ নেই। শুধু ৯৯৯৳ মাসিক, এবং আমাদের টিম আপনাকে সম্পূর্ণ বিনামূল্যে সেটআপ করে দেবে।",
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="w-full flex justify-center items-start" id="faq">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <h2 className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-3xl md:text-4xl tracking-tight">
            Got Questions? We've Got Answers.
          </h2>
          <p className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            আমাদের সাথে আপনি ১০০% নিরাপদ এবং সন্তুষ্ট থাকবেন।
          </p>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index)

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-4 md:py-5 flex justify-between items-start gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1">
                      <div className="text-[#49423D] text-base md:text-lg font-semibold leading-6 font-sans mb-1">
                        {item.question}
                      </div>
                      <div className="text-[#605A57] text-sm md:text-base font-medium font-sans">
                        {item.questionBn}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-4 md:pb-5">
                      <p className="text-[#605A57] text-base font-normal leading-6 font-sans mb-2">
                        {item.answer}
                      </p>
                      {item.answerBn && (
                        <p className="text-[#605A57] text-base font-normal leading-6 font-sans italic">
                          {item.answerBn}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
