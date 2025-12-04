
export default function PrivacyPolicy() {
  return (
    <main className="py-12 sm:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center sm:text-4xl">Privacy Policy - Autex</h1>
        <p className="text-center text-muted-foreground mb-10">Last updated: December 4, 2025</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. তথ্য সংগ্রহ (Data Collection)</h2>
            <p className="text-muted-foreground mb-3">আমাদের সেবা প্রদানের জন্য আমরা নিম্নলিখিত তথ্য সংগ্রহ এবং প্রক্রিয়া করি:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>User Account Information:</strong> Your name, email address, and Facebook profile information when you sign up.</li>
              <li><strong>Connected Page Data:</strong> The names and IDs of the Facebook Pages you connect to Autex.</li>
              <li><strong>Customer Conversation Data:</strong> Messages, comments, and images sent by customers to your connected Facebook Page.</li>
              <li><strong>Product & Order Information:</strong> Product details you upload (images, names, prices) and order information collected from customers (name, phone, address).</li>
              <li><strong>API Tokens:</strong> Encrypted Facebook Page Access Tokens required to communicate with the Facebook Graph API on your behalf.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. তথ্যের ব্যবহার (Data Usage)</h2>
            <p className="text-muted-foreground mb-3">সংগ্রহ করা তথ্য আমরা নিম্নলিখিত উদ্দেশ্যে ব্যবহার করি:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To provide our core service of automating customer responses and collecting orders.</li>
              <li>To perform AI-based analysis for product recognition from images.</li>
              <li>To display conversation history and order details on your seller dashboard.</li>
              <li>To maintain and improve the security and performance of our services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. তথ্যের নিরাপত্তা (Data Security)</h2>
            <p className="text-muted-foreground">
              We take data security seriously. All sensitive information, especially your Facebook Page Access Token, is encrypted at rest using industry-standard encryption (AES-256). We use Supabase's built-in security features, including Row Level Security (RLS), to ensure your data is isolated and protected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. তৃতীয় পক্ষের শেয়ারিং (Third-Party Sharing)</h2>
            <p className="text-muted-foreground">
              We do not sell or share your personal data with third-party marketers. We only share data with the following essential service providers to operate Autex:
              <br/>- **OpenAI:** For processing images for product recognition via their Vision API.
              <br/>- **Cloudinary:** For securely storing the product images you upload.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Data Deletion Rights</h2>
            <p className="text-muted-foreground">
              You have full control over your data. You can disconnect your Facebook Page from the Autex dashboard at any time. This action will automatically trigger the deletion of your associated page data, conversations, and access tokens from our systems. You also have the right to request the complete deletion of your account and data by contacting us at our support email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">যোগাযোগ (Contact Us)</h2>
            <p className="text-muted-foreground">If you have any questions about this Privacy Policy, please contact us:</p>
            <p className="text-muted-foreground">Email: support@autex.app</p>
          </section>
        </div>
      </div>
    </main>
  );
}
