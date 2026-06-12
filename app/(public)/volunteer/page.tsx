import type { Metadata } from 'next';
import DonationTypeModal from '@/components/DonationTypeModal';

export const metadata: Metadata = { title: 'Volunteer' };

const ROLES = [
  {
    title: 'Farm Facilitator',
    commitment: '4–8 hrs / week',
    desc: 'Help run agricultural training sessions, support participants in the field, and document best practices.',
  },
  {
    title: 'Cultural Educator',
    commitment: 'Flexible',
    desc: 'Share knowledge of traditional food systems, heritage practices, or ancestral crafts in workshops.',
  },
  {
    title: 'Community Organiser',
    commitment: '2–4 hrs / week',
    desc: 'Support assemblies and cooperative meetings, facilitate group discussions, and help onboard new members.',
  },
  {
    title: 'Digital Contributor',
    commitment: 'Flexible',
    desc: 'Write for the blog, help with social media, design graphics, or translate content into other languages.',
  },
  {
    title: 'Research & Documentation',
    commitment: 'Project-based',
    desc: 'Help document community histories, compile impact reports, or support grant research and writing.',
  },
  {
    title: 'Event Support',
    commitment: 'Event-based',
    desc: 'Help plan and run seasonal festivals, cultural events, community markets, and fundraising gatherings.',
  },
];

export default function VolunteerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-pink-50 py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Volunteer with Us
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our work is powered by people who care. Whether you have a few hours a month or can commit to a regular role, your contribution matters.
          </p>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">Open Volunteer Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROLES.map((r) => (
              <div key={r.title} className="border border-gray-100 rounded p-6 hover:shadow-sm transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{r.title}</h3>
                <span className="text-xs font-medium text-red-600 uppercase tracking-wide">{r.commitment}</span>
                <p className="text-gray-600 text-sm leading-relaxed mt-3">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply to Volunteer</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Tell us which role interests you and a little about your background. We will match you with the right opportunity and follow up within a week.
          </p>
          <a
            href="mailto:volunteer@theoduproject.com?subject=Volunteer Application"
            className="inline-block bg-red-600 text-white font-semibold px-8 py-3 rounded hover:bg-red-700 transition-colors"
          >
            Send Application
          </a>
        </div>
      </section>

      {/* Donate */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            Can&apos;t volunteer right now? You can still make a difference. Every contribution goes directly towards training, events, seed banks, and the communities we serve.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="border border-gray-100 rounded-xl p-6 text-left">
              <div className="flex items-center justify-center h-10 w-10 bg-green-100 rounded-full mb-3">
                <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">Tax deductible</p>
              <p className="text-sm text-gray-600">Receive a receipt for your charitable contribution.</p>
            </div>
            <div className="border border-gray-100 rounded-xl p-6 text-left">
              <div className="flex items-center justify-center h-10 w-10 bg-orange-100 rounded-full mb-3">
                <svg className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-1">Direct giving</p>
              <p className="text-sm text-gray-600">Make a direct contribution without a tax receipt.</p>
            </div>
          </div>

          <DonationTypeModal
            label="Make a Donation"
            className="mt-8 inline-block bg-red-600 text-white font-semibold px-10 py-3 rounded hover:bg-red-700 transition-colors"
          />
          <p className="text-xs text-gray-400 mt-3">Processed securely via Stripe</p>
        </div>
      </section>
    </>
  );
}
