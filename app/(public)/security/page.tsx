import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Security' };

export default function SecurityPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-3">Security</h1>
      <p className="text-gray-500 text-sm mb-10">How we keep your data safe</p>

      <div className="space-y-10 text-sm text-gray-700 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Authentication</h2>
          <p>
            We use passwordless magic-link authentication via Supabase for all public user accounts. This means you never create or store a password with us — a secure, time-limited link is sent to your email each time you sign in. Links expire after one hour and can only be used once.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Encryption</h2>
          <p>
            All traffic between your browser and our servers is encrypted with TLS (HTTPS). Data stored in our Supabase database is encrypted at rest using AES-256.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Payment security</h2>
          <p>
            Donations are processed by Stripe, a PCI DSS Level 1 certified payment processor. We never see, store, or handle your card details.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Access control</h2>
          <p>
            Administrative access to the website is protected by server-side middleware and is available only to authorised team members. Row-level security (RLS) in Supabase ensures users can only read and write their own data.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Infrastructure</h2>
          <p>
            The site is hosted on Netlify&apos;s globally distributed CDN. Our database runs on Supabase infrastructure in the United States. Both providers maintain SOC 2 compliance and dedicated security programmes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Responsible disclosure</h2>
          <p>
            If you discover a security vulnerability on our website, please report it responsibly to{' '}
            <a href="mailto:info@theoduproject.com" className="text-red-600 underline">
              info@theoduproject.com
            </a>{' '}
            with the subject &quot;Security Disclosure&quot;. We will acknowledge your report within 48 hours and keep you informed as we address the issue. We ask that you do not publicly disclose vulnerabilities until we have had a reasonable opportunity to fix them.
          </p>
        </div>
      </div>
    </section>
  );
}
