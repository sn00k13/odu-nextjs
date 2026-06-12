import Image from 'next/image';
import type { Metadata } from 'next';
import DonateSection from '@/components/DonateSection';

export const metadata: Metadata = { title: 'Community Governance' };

export default function CommunityGovernancePage() {
  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Community Governance
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/unsplash.jpg"
                alt="Community governance"
                fill
                className="object-cover rounded shadow-sm"
                priority
              />
            </div>
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Community Governance program invites members to participate in assemblies and learn cooperative decision-making. We believe farmers belong at the centre of food systems, so we build structures — assemblies, cooperatives, and unions — that give communities real ownership over the land they work and the food they grow.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our Garden Clubs serve as bases for political education and people&apos;s assemblies. We don&apos;t just grow food; we grow collective power. Members practise democratic deliberation, shared budgeting, and consensus-building — the everyday skills of self-governance.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <p className="text-gray-700 mb-6 leading-relaxed">
                The program draws on the long legacy of Southern Black cooperative economics and organising, and on global movements for autonomy from the Zapatistas to African agroecological networks. Participants study how communities around the world govern their own land, water, and food systems — and apply those lessons at home.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Built on respect, autonomy, dignity, and democracy, Community Governance is how we ensure the Odu Project remains accountable to the people it serves. Join an assembly, take on a role in your local cooperative, and help shape the decisions that shape our shared future.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] order-1 lg:order-2">
              <Image
                src="/images/Community.jpg"
                alt="Community assembly meeting"
                fill
                className="object-cover rounded shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <DonateSection projectName="Community Governance" />
    </>
  );
}
