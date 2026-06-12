import type { Metadata } from 'next';
import Link from 'next/link';
import { STRIPE_DONATE_URL } from '@/lib/constants';

export const metadata: Metadata = { title: 'Join the Community' };

const STEPS = [
  {
    number: '01',
    title: 'Sign Up',
    desc: 'Register your interest and tell us a little about yourself — your location, skills, and what draws you to the Odu Project.',
  },
  {
    number: '02',
    title: 'Attend an Orientation',
    desc: 'Join one of our regular online or in-person orientations to meet the team and learn how our programs work.',
  },
  {
    number: '03',
    title: 'Choose Your Path',
    desc: 'Pick the program that resonates with you — Agricultural Training, Cultural Heritage, or Community Governance.',
  },
  {
    number: '04',
    title: 'Get Involved',
    desc: 'Attend workshops, participate in assemblies, contribute your skills, and grow alongside your community.',
  },
];

const WAYS = [
  { title: 'Volunteer', href: '/volunteer', desc: 'Lend your time and skills to support our programs on the ground.' },
  { title: 'Donate', href: STRIPE_DONATE_URL, desc: 'Fund a workshop, a seed bank, or a cultural gathering with a one-off or recurring gift.' },
  { title: 'Spread the Word', href: '#', desc: 'Share our work with your networks and help us reach more communities.' },
  { title: 'Partner With Us', href: '/support', desc: 'Organisations and institutions can partner formally to co-develop programs.' },
];

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-pink-50 py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Join the Movement
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            The Odu Project is built by its community. Whether you&apos;re a farmer, a student, a cultural practitioner, or simply someone who believes in food sovereignty — there is a place for you here.
          </p>
          <a
            href="mailto:info@theoduproject.com"
            className="inline-block bg-red-600 text-white font-semibold px-8 py-3 rounded hover:bg-red-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* How to join */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">How to Join</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STEPS.map((s) => (
              <div key={s.number} className="flex gap-6 items-start">
                <span className="text-4xl font-bold text-red-100 leading-none select-none">{s.number}</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to get involved */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">Ways to Get Involved</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WAYS.map((w) => (
              <a
                key={w.title}
                href={w.href}
                className="block bg-white border border-gray-100 rounded p-6 hover:shadow-md transition-shadow group"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 mb-2 transition-colors">
                  {w.title} →
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{w.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-red-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to take the first step?</h2>
          <p className="text-red-100 mb-8 leading-relaxed">
            Send us an email and one of our team members will follow up to find the best way for you to contribute.
          </p>
          <a
            href="mailto:info@theoduproject.com"
            className="inline-block bg-white text-red-600 font-semibold px-8 py-3 rounded hover:bg-red-50 transition-colors"
          >
            Email Us
          </a>
        </div>
      </section>
    </>
  );
}
