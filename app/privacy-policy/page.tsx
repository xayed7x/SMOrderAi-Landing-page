import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Autex AI",
  description: "Learn how Autex AI collects, uses, and protects your data. Our privacy policy ensures transparency and security for all users.",
}

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold mb-2 font-serif italic text-[#322D2B]">Privacy Policy</h1>
          <p className="text-[#605A57] mb-12">Last updated: April 23, 2026</p>
          
          <div className="space-y-12 text-[#49423D] leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#322D2B]">1. তথ্য সংগ্রহ (Data Collection)</h2>
              <p className="mb-4">আমাদের সেবা প্রদানের জন্য আমরা নিম্নলিখিত তথ্য সংগ্রহ এবং প্রক্রিয়া করি:</p>
              <ul className="list-disc list-inside space-y-3 pl-2">
                <li><span className="font-semibold">User Account Information:</span> Your name, email address, and Facebook profile information when you sign up.</li>
                <li><span className="font-semibold">Connected Page Data:</span> The names and IDs of the Facebook Pages you connect to Autex.</li>
                <li><span className="font-semibold">Customer Conversation Data:</span> Messages, comments, and images sent by customers to your connected Facebook Page.</li>
                <li><span className="font-semibold">Product & Order Information:</span> Product details you upload (images, names, prices) and order information collected from customers (name, phone, address).</li>
                <li><span className="font-semibold">API Tokens:</span> Encrypted Facebook Page Access Tokens required to communicate with the Facebook Graph API on your behalf.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#322D2B]">2. তথ্যের ব্যবহার (Data Usage)</h2>
              <p className="mb-4">সংগ্রহ করা তথ্য আমরা নিম্নলিখিত উদ্দেশ্যে ব্যবহার করি:</p>
              <ul className="list-disc list-inside space-y-3 pl-2">
                <li>To provide our core service of automating customer responses and collecting orders.</li>
                <li>To perform AI-based analysis for product recognition from images.</li>
                <li>To display conversation history and order details on your seller dashboard.</li>
                <li>To maintain and improve the security and performance of our services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#322D2B]">3. তথ্যের নিরাপত্তা (Data Security)</h2>
              <p>
                We take data security seriously. All sensitive information, especially your Facebook Page Access Token, is encrypted at rest using industry-standard encryption (AES-256). We use Supabase's built-in security features, including Row Level Security (RLS), to ensure your data is isolated and protected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#322D2B]">4. তৃতীয় পক্ষের শেয়ারিং (Third-Party Sharing)</h2>
              <p>
                We do not sell or share your personal data with third-party marketers. We only share data with the following essential service providers to operate Autex:
              </p>
              <div className="mt-4 p-6 bg-white/40 border border-[rgba(55,50,47,0.08)] rounded-xl space-y-2">
                <p><span className="font-semibold">OpenAI:</span> For processing images for product recognition via their Vision API.</p>
                <p><span className="font-semibold">Cloudinary:</span> For securely storing the product images you upload.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#322D2B]">5. Data Deletion Rights</h2>
              <p>
                You have full control over your data. You can disconnect your Facebook Page from the Autex dashboard at any time. This action will automatically trigger the deletion of your associated page data, conversations, and access tokens from our systems. You also have the right to request the complete deletion of your account and data by contacting us at our support email.
              </p>
            </section>

            <section className="pt-8 border-t border-[rgba(55,50,47,0.08)]">
              <h2 className="text-2xl font-semibold mb-4 text-[#322D2B]">যোগাযোগ (Contact Us)</h2>
              <p className="mb-2">If you have any questions about this Privacy Policy, please contact us:</p>
              <p className="font-medium text-[#322D2B]">Email: support@autex.app</p>
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
