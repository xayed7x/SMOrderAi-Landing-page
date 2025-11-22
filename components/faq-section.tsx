"use client";

import { useState } from "react";
import type React from "react";

interface FAQItem {
  question: string;
  questionBn: string;
  answer: React.ReactNode; // changed from string to React.ReactNode to support structured content
  answerBn?: string;
}

const faqData: FAQItem[] = [
  {
    question: "AI কীভাবে product recognize করে?",
    questionBn: "How does AI recognize products?",
    answer: (
      <div className="space-y-3">
        <p>Autex একটা 3-tier system use করে:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>
            <span className="font-semibold">Exact image match:</span> Instant,
            free (0s)
          </li>
          <li>
            <span className="font-semibold">
              Visual features + text detection:
            </span>{" "}
            Fast, cheap
          </li>
          <li>
            <span className="font-semibold">Advanced AI vision:</span> High
            accuracy (85-92%)
          </li>
        </ol>
        <p className="text-sm bg-yellow-50 text-yellow-800 p-2 rounded border border-yellow-100">
          যদি AI নিশ্চিত না হয়, এটা আপনাকে manually confirm করতে বলবে।
        </p>
      </div>
    ),
    answerBn: "",
  },
  {
    question: "Screenshot limit শেষ হলে কী হবে?",
    questionBn: "What happens if the screenshot limit is reached?",
    answer: (
      <div className="space-y-3">
        <p>আপনি তিনটা option পাবেন:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Wait করুন next month পর্যন্ত (auto-reset)</li>
          <li>
            Extra pack কিনুন:{" "}
            <span className="font-semibold">100 screenshots = ৳১৫০</span>
          </li>
          <li>Higher plan-এ upgrade করুন</li>
        </ul>
        <p className="text-sm text-gray-500 italic">
          *আপনার unlimited text messages থাকবে — শুধু image recognition limited।
        </p>
      </div>
    ),
    answerBn: "",
  },
  {
    question: "Phase 2 কবে আসবে?",
    questionBn: "When will Phase 2 be launched?",
    answer: (
      <div className="space-y-3">
        <p>
          আমরা target করছি{" "}
          <span className="font-semibold">২-৩ মাসের মধ্যে (Q1 2025)</span>।
        </p>
        <div>
          <p className="font-medium mb-1">Phase 2-তে আসবে:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Payment gateway (bKash, Nagad)</li>
            <li>Delivery integration (Pathao, eCourier)</li>
            <li>Advanced analytics dashboard</li>
          </ul>
        </div>
        <p className="text-sm bg-green-50 text-green-800 p-2 rounded border border-green-100 font-medium">
          Founder members সব feature পাবে একই ৳৫৯৯ price-এ!
        </p>
      </div>
    ),
    answerBn: "",
  },
  {
    question: "আমার existing orders/data কি migrate করতে পারব?",
    questionBn: "Can I migrate my existing orders/data?",
    answer: (
      <div className="space-y-3">
        <p className="font-semibold text-lg">হ্যাঁ!</p>
        <p>আমরা আপনাকে help করব:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Excel/CSV থেকে products import</li>
          <li>Setup assistance provided</li>
          <li>Onboarding call available</li>
        </ul>
        <p className="font-medium text-[#49423D]">আপনি একা না। আমরা আছি।</p>
      </div>
    ),
    answerBn: "",
  },
  {
    question: "Is this really 24/7?",
    questionBn: "এটা কি সত্যি ২৪ ঘণ্টা কাজ করে?",
    answer: "Yes, our AI server runs 24/7 without interruption.",
    answerBn:
      "হ্যাঁ, আমাদের AI সার্ভার ২৪/৭ সচল থাকে। আপনার পেজের কোনো কমেন্টই মিস হবে না।",
  },
  {
    question: "Is my Facebook page secure?",
    questionBn: "আমার ফেসবুক পেজের অ্যাক্সেস কি নিরাপদ থাকবে?",
    answer:
      "Absolutely. We use Facebook's official API and never access your password or personal information.",
    answerBn:
      "অবশ্যই। আমরা ফেসবুকের অফিশিয়াল API ব্যবহার করি এবং আপনার পেজের পাসওয়ার্ড বা ব্যক্তিগত তথ্যের কোনো অ্যাক্সেস নিই না।",
  },
];

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
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

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
              const isOpen = openItems.includes(index);

              return (
                <div
                  key={index}
                  className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden"
                >
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
                      <div className="text-[#605A57] text-base font-normal leading-6 font-sans mb-2">
                        {item.answer}
                      </div>
                      {item.answerBn && (
                        <p className="text-[#605A57] text-base font-normal leading-6 font-sans italic">
                          {item.answerBn}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
