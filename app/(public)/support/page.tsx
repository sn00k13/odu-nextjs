import type { Metadata } from 'next';
import { STRIPE_DONATE_URL } from '@/lib/constants';

export const metadata: Metadata = { title: 'Support Us' };

const TIERS = [
  {
    label: 'Seed',
    amount: '$10 / month',
    perks: ['Odu Project newsletter', 'Supporter credit on our website'],
  },
  {
    label: 'Harvest',
    amount: '$25 / month',
    perks: ['Everything in Seed', 'Monthly impact updates', 'Invitation to online community events'],
    featured: true,
  },
  {
    label: 'Grove',
    amount: '$50 / month',
    perks: ['Everything in Harvest', 'Quarterly 1-to-1 update call with our team', 'Name listed in annual report'],
  },
];

const PARTNERS = [
  'Co-fund a flagship workshop series',
  'Sponsor a seasonal cultural festival',
  'Support a community seed bank installation',
  'Fund a research and documentation project',
];

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-pink-50 py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Support the Odu Project
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Every contribution — large or small — helps us build the land-based, community-led future we believe in. Choose the way that works best for you.
          </p>
        </div>
      </section>

      {/* One-off donate */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Make a One-Off Donation</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Give whatever you can, whenever you can. Your gift goes directly towards workshops, cultural events, seed banks, and community assemblies.
          </p>
          <a
            href={STRIPE_DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white font-semibold px-10 py-3 rounded hover:bg-red-700 transition-colors"
          >
            Donate Now
          </a>
          <p className="text-xs text-gray-400 mt-3">Processed securely via Stripe</p>
        </div>
      </section>

      {/* Monthly tiers */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Monthly Giving</h2>
          <p className="text-gray-600 text-center mb-14 leading-relaxed max-w-xl mx-auto">
            Sustained giving lets us plan ahead and create lasting programs. All monthly tiers go through our Stripe link.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIERS.map((t) => (
              <div
                key={t.label}
                className={`rounded p-8 border ${
                  t.featured ? 'border-red-500 bg-white shadow-md' : 'border-gray-100 bg-white'
                }`}
              >
                {t.featured && (
                  <span className="inline-block text-xs font-bold text-red-600 uppercase tracking-widest mb-3">
                    Most popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900">{t.label}</h3>
                <p className="text-2xl font-bold text-red-600 my-3">{t.amount}</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-8">
                  {t.perks.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-red-500 mt-0.5">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={STRIPE_DONATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-semibold py-2 rounded transition-colors text-sm ${
                    t.featured
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Get started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional partnership */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Institutional Partners</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Universities, foundations, NGOs, and socially-minded businesses can partner with us on specific programs or multi-year initiatives. Examples include:
              </p>
              <ul className="text-gray-700 text-sm space-y-3">
                {PARTNERS.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="text-red-500 font-bold">→</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-pink-50 rounded p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Talk to Us</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Email our partnerships team and we will arrange a call to explore how we can work together.
              </p>
              <a
                href="mailto:partnerships@theoduproject.com?subject=Partnership Enquiry"
                className="inline-block bg-red-600 text-white font-semibold px-6 py-2 rounded hover:bg-red-700 transition-colors text-sm"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
