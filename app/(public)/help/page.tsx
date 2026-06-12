import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Help Center' };

const FAQS = [
  {
    q: 'How do I join the Odu Project?',
    a: 'Visit our Community page to learn about the onboarding process. You can also email info@theoduproject.com and a team member will be in touch within a week.',
  },
  {
    q: 'Where are your programs based?',
    a: 'Our core programs operate in North Carolina, USA. We also have remote and online programming that members worldwide can participate in.',
  },
  {
    q: 'How do I donate?',
    a: 'You can make a secure one-off or recurring donation through our Donate button or via the Support page. All payments are processed by Stripe.',
  },
  {
    q: 'How do I leave a comment on the blog?',
    a: 'Open any blog article and scroll to the comments section. Enter your email address and we will send you a one-click magic link — no password required.',
  },
  {
    q: 'How do I become a volunteer?',
    a: 'Visit our Volunteer page to see open roles and send your application by email. We aim to respond within one week.',
  },
  {
    q: 'I noticed an error on the website — who do I contact?',
    a: 'Please email info@theoduproject.com with a description of the issue and the page URL. We appreciate all reports.',
  },
  {
    q: 'How do I partner with the Odu Project as an organisation?',
    a: 'Visit our Support page and use the institutional partnership contact form to reach our partnerships team.',
  },
];

export default function HelpPage() {
  return (
    <>
      <section className="bg-pink-50 py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Answers to the most common questions. Can&apos;t find what you need? Email us at{' '}
            <a href="mailto:info@theoduproject.com" className="text-red-600 underline">
              info@theoduproject.com
            </a>
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {FAQS.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-8 last:border-0 last:pb-0">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">{item.q}</h2>
              <p className="text-gray-600 leading-relaxed text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Still need help?</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our team is happy to answer any questions not covered above.
          </p>
          <a
            href="mailto:info@theoduproject.com"
            className="inline-block bg-red-600 text-white font-semibold px-8 py-3 rounded hover:bg-red-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
