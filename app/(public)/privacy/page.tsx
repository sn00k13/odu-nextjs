import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-10">Last updated: June 2025</p>

      <div className="prose max-w-none text-gray-700 leading-relaxed space-y-8 text-sm">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Who we are</h2>
          <p>
            The Odu Project (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a community-led organisation based in North Carolina, USA. This Privacy Policy explains how we collect, use, and protect your personal information when you visit theoduproject.com or interact with our programs.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information we collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Email address</strong> — when you sign in to comment on our blog via magic link, or contact us by email.</li>
            <li><strong>Comments</strong> — text you submit in the blog comment section.</li>
            <li><strong>Payment information</strong> — donations are processed by Stripe. We do not store your payment card details.</li>
            <li><strong>Usage data</strong> — anonymised analytics such as page views to help us improve the site.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How we use your information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To authenticate you and allow you to participate in blog discussions.</li>
            <li>To respond to enquiries and support requests.</li>
            <li>To process donations securely.</li>
            <li>To send programme updates and newsletters where you have opted in.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Data storage and security</h2>
          <p>
            Personal data is stored on Supabase infrastructure hosted in the United States. We use industry-standard encryption in transit (TLS) and at rest. Access to personal data is restricted to authorised team members.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Third-party services</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Supabase</strong> — authentication and database.</li>
            <li><strong>Stripe</strong> — donation payment processing.</li>
            <li><strong>Netlify</strong> — website hosting.</li>
          </ul>
          <p className="mt-3">Each third party has its own privacy policy and data-processing terms.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Your rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data at any time. To make a request, email{' '}
            <a href="mailto:info@theoduproject.com" className="text-red-600 underline">info@theoduproject.com</a>.
            We will respond within 30 days.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Cookies</h2>
          <p>
            We use a single session cookie for authenticated users and admin access. We do not use third-party advertising or tracking cookies.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The date at the top of this page reflects the most recent revision. Continued use of the site after changes constitutes acceptance.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Contact</h2>
          <p>
            Questions about this policy? Email{' '}
            <a href="mailto:info@theoduproject.com" className="text-red-600 underline">info@theoduproject.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
