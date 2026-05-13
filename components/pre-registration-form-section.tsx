"use client"

import { useState } from "react"
import { submitPreRegistration } from "@/app/actions"
import { plans } from "./early-bird-pricing"

interface PreRegistrationFormSectionProps {
  selectedPlan: string
}

export default function PreRegistrationFormSection({ selectedPlan }: PreRegistrationFormSectionProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    if (!selectedPlan) {
      setErrorMessage('Please choose an offer from the pricing table first.');
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    // Find the plan to get its display name
    const selectedPlanData = plans.find(plan => plan.id === selectedPlan);
    const planDisplayName = selectedPlanData?.displayName || selectedPlan;

    const formData = new FormData();
    formData.append('name', formFields.name);
    formData.append('email', formFields.email);
    formData.append('phone', formFields.phone);
    formData.append('selected_plan', planDisplayName); // Use display name instead of ID

    try {
      const result = await submitPreRegistration(formData);

      if (result.success) {
        setIsSuccess(true);
        setFormFields({ name: '', email: '', phone: '' }); // Reset state
      } else {
        setErrorMessage(result.message || 'An unknown error occurred.');
      }
    } catch (error) {
      setErrorMessage('Failed to submit the form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-2xl px-4 md:px-12 py-16 md:py-20 flex flex-col justify-center items-center gap-6 border-b border-[rgba(55,50,47,0.12)]">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-center text-[#49423D] text-2xl md:text-3xl font-semibold leading-tight font-sans">
            Thank you! Your early-bird price is locked.
          </h3>
          <p className="text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            We've sent a confirmation email and will notify you at launch!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div id="pre-registration-form" className="w-full flex justify-center items-center">
      <div className="w-full max-w-2xl px-4 md:px-12 py-16 md:py-20 flex flex-col justify-center items-center gap-8 border-b border-[rgba(55,50,47,0.12)]">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h2 className="text-center text-[#49423D] text-3xl md:text-4xl font-semibold leading-tight md:leading-[44px] font-sans tracking-tight">
            Lock In Your Discount
          </h2>
          <p className="text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Just fill in your details below. We will email you with a private payment link as soon as we launch.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="name" className="text-[#49423D] text-sm font-semibold font-sans">
              Your Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="আপনার সম্পূর্ণ নাম"
              value={formFields.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-[rgba(55,50,47,0.12)] rounded-lg bg-white text-[#37322F] placeholder-[#605A57] focus:outline-none focus:ring-2 focus:ring-[#37322F] focus:border-transparent transition-all"
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email" className="text-[#49423D] text-sm font-semibold font-sans">
              Your Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="আপনার ইমেইল অ্যাড্রেস"
              value={formFields.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-[rgba(55,50,47,0.12)] rounded-lg bg-white text-[#37322F] placeholder-[#605A57] focus:outline-none focus:ring-2 focus:ring-[#37322F] focus:border-transparent transition-all"
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="phone" className="text-[#49423D] text-sm font-semibold font-sans">
              Your Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="আপনার ফোন নম্বর"
              value={formFields.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-[rgba(55,50,47,0.12)] rounded-lg bg-white text-[#37322F] placeholder-[#605A57] focus:outline-none focus:ring-2 focus:ring-[#37322F] focus:border-transparent transition-all"
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-3 relative bg-[#37322F] shadow-[0px_2px_4px_rgba(55,50,47,0.12)] overflow-hidden rounded-[99px] flex justify-center items-center hover:bg-[#37322F]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <div className="w-full h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0.20)] to-[rgba(0,0,0,0.10)] mix-blend-multiply pointer-events-none"></div>
            <span className="flex justify-center items-center text-[#FBFAF9] text-sm font-semibold leading-5 font-sans relative z-10">
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                'Secure My Spot & Get Discount'
              )}
            </span>
          </button>
          {errorMessage && (
            <p className="mt-4 text-center text-red-500">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  )
}