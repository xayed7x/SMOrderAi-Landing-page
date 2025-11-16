"use client"

import { useRef, useState } from "react"
import EarlyBirdPricing from "./early-bird-pricing"
import PreRegistrationFormSection from "./pre-registration-form-section"
import { PreRegistrationModal } from "./pre-registration-modal"

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState("")
  const formSectionRef = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId)
  }

  return (
    <>
      <EarlyBirdPricing onPlanSelect={handlePlanSelect} formSectionRef={formSectionRef} />

      <div ref={formSectionRef}>
        <PreRegistrationFormSection selectedPlan={selectedPlan} />
      </div>

      <PreRegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
