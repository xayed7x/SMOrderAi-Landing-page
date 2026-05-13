import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service | Autex AI",
  description: "Read our Terms of Service to understand the rules, guidelines, and legal agreements for using Autex AI.",
}

export default function TermsOfService() {
  return (
    <div className="w-full min-h-screen bg-[#F7F5F3] text-[#37322F] font-sans">
      <div className="max-w-[1060px] mx-auto px-4 relative min-h-screen border-x border-[rgba(55,50,47,0.12)] bg-white/50 backdrop-blur-sm">
        {/* Header */}
        <header className="py-8 border-b border-[rgba(55,50,47,0.06)] flex justify-between items-center px-6 md:px-12">
          <Link href="/" className="text-xl font-medium text-[#2F3037]">
            Autex
          </Link>
          <Link 
            href="/" 
            className="text-sm font-medium text-[rgba(49,45,43,0.80)] hover:text-[#37322F] transition-colors"
          >
            Back to Home
          </Link>
        </header>

        <main className="py-16 px-6 md:px-12 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 font-serif italic text-[#322D2B]">Terms of Service</h1>
          <p className="text-[#605A57] mb-12">Last updated: April 23, 2026</p>
          
          <div className="space-y-12 text-[#49423D] leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#322D2B]">1. সেবা (Our Service)</h2>
              <p>
                Autex provides a software-as-a-service (SaaS) platform that automates customer interactions for Facebook Pages. By subscribing to our service, you agree to these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#322D2B]">2. আপনার দায়বদ্ধতা (Your Responsibilities)</h2>
              <ul className="list-disc list-inside space-y-3 pl-2">
                <li>You are responsible for maintaining the security of your Autex account and your connected Facebook Page.</li>
                <li>You agree to use our service in compliance with all applicable laws and Facebook's own Platform Terms.</li>
                <li>You are responsible for the content of the products you upload and the automated messages configured in your account.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#322D2B]">3. Payment and Subscription Terms</h2>
              <p>
                Our service is billed on a monthly subscription basis. Payments are due at the beginning of each billing cycle. We do not offer refunds for partial months of service. We reserve the right to change our pricing with 30 days' prior notice.
              </p>
            </section>
              
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#322D2B]">4. Limitation of Liability</h2>
              <p>
                While we strive for 99.9% uptime and high accuracy for our AI models, Autex is provided "as is". We are not liable for any lost sales, data, or other damages resulting from the use or inability to use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#322D2B]">5. Termination</h2>
              <p>
                You may cancel your subscription at any time. We reserve the right to suspend or terminate your account if you violate these terms of service. Upon termination, your data will be deleted as per our Privacy Policy.
              </p>
            </section>

            <section className="pt-8 border-t border-[rgba(55,50,47,0.08)] text-center">
              <p className="text-sm text-[#605A57]">
                By using Autex, you acknowledge that you have read and understood these Terms of Service.
              </p>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-12 border-t border-[rgba(55,50,47,0.06)] text-center text-sm text-[#605A57]">
          <p>© 2026 Autex. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
