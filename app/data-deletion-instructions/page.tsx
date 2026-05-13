import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Data Deletion Instructions | Autex AI",
  description: "Detailed instructions on how to request the deletion of your personal data from Autex AI, as per Facebook Platform requirements.",
}

export default function DataDeletionInstructions() {
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
          <h1 className="text-4xl font-bold mb-4 font-serif italic text-[#322D2B]">Data Deletion Instructions</h1>
          <p className="text-[#605A57] mb-12 italic">Compliance with Facebook Platform Policy</p>
          
          <div className="space-y-10 text-[#49423D] leading-relaxed">
            <p className="text-lg">
              At Autex, we value your privacy and provide you with full control over your data. According to Facebook Platform rules, we provide the following instructions for users to request data deletion.
            </p>

            <div className="grid gap-6">
              <div className="p-8 bg-white/60 border border-[rgba(55,50,47,0.1)] rounded-2xl shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-[#322D2B] flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#322D2B] text-white text-sm">1</span>
                  Automatic Deletion (Via Dashboard)
                </h2>
                <p className="text-[#605A57] mb-4">
                  The fastest way to delete your data is directly through your Autex seller dashboard:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-2">
                  <li>Log in to your Autex dashboard at <code className="bg-[rgba(55,50,47,0.05)] px-1.5 py-0.5 rounded text-[#322D2B]">app.autexai.com</code></li>
                  <li>Navigate to the <span className="font-medium">Settings</span> section.</li>
                  <li>Find your connected Facebook Page and click <span className="font-medium text-red-600">Disconnect Page</span>.</li>
                </ol>
                <p className="mt-4 text-sm font-medium text-[#322D2B]">
                  Result: This action immediately and permanently deletes all associated customer conversations, product data, and Facebook Access Tokens from our servers.
                </p>
              </div>

              <div className="p-8 bg-white/60 border border-[rgba(55,50,47,0.1)] rounded-2xl shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-[#322D2B] flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#322D2B] text-white text-sm">2</span>
                  Manual Request (Via Email)
                </h2>
                <p className="text-[#605A57] mb-4">
                  If you no longer have access to the dashboard or wish to delete your entire account:
                </p>
                <p className="mb-4">
                  Please send an email to <span className="font-semibold text-[#322D2B]">support@autex.app</span> with the subject line <span className="italic">"Data Deletion Request"</span>.
                </p>
                <p className="text-sm">
                  Please include your registered email address or your Facebook Page ID. We will process your request and confirm the complete deletion of all your records within <span className="font-medium">7 business days</span>.
                </p>
              </div>
            </div>

            <section className="pt-8 border-t border-[rgba(55,50,47,0.08)]">
              <h2 className="text-lg font-semibold mb-2 text-[#322D2B]">Privacy Commitment</h2>
              <p className="text-sm text-[#605A57]">
                Once your data is deleted, it cannot be recovered. For more information on how we handle your data, please refer to our <Link href="/privacy-policy" className="underline hover:text-[#322D2B]">Privacy Policy</Link>.
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
