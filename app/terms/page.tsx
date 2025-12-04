
export default function TermsOfService() {
  return (
    <main className="py-12 sm:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center sm:text-4xl">Terms of Service - Autex</h1>
        <p className="text-center text-muted-foreground mb-10">Last updated: December 4, 2025</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. সেবা (Our Service)</h2>
            <p className="text-muted-foreground">
              Autex provides a software-as-a-service (SaaS) platform that automates customer interactions for Facebook Pages. By subscribing to our service, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. আপনার দায়বদ্ধতা (Your Responsibilities)</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>You are responsible for maintaining the security of your Autex account and your connected Facebook Page.</li>
              <li>You agree to use our service in compliance with all applicable laws and Facebook's own Platform Terms.</li>
              <li>You are responsible for the content of the products you upload and the automated messages configured in your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Payment and Subscription Terms</h2>
            <p className="text-muted-foreground">
              Our service is billed on a monthly subscription basis. Payments are due at the beginning of each billing cycle. We do not offer refunds for partial months of service. We reserve the right to change our pricing with 30 days' prior notice.
            </p>
          </section>
            
          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              While we strive for 99.9% uptime and high accuracy for our AI models, Autex is provided "as is". We are not liable for any lost sales, data, or other damages resulting from the use or inability to use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Termination</h2>
            <p className="text-muted-foreground">
              You may cancel your subscription at any time. We reserve the right to suspend or terminate your account if you violate these terms of service. Upon termination, your data will be deleted as per our Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
