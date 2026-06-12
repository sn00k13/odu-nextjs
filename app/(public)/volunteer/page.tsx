import type { Metadata } from 'next';

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
    </>
  );
}
