import Image from 'next/image';
import type { Metadata } from 'next';
import DonateSection from '@/components/DonateSection';

export const metadata: Metadata = { title: 'Agricultural Training' };

export default function AgriculturalTrainingPage() {
  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Agricultural Training
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/landing.jpg"
                alt="Agricultural training"
                fill
                className="object-cover rounded shadow-sm"
                priority
              />
            </div>
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our Agricultural Training program equips smallholder farmers and community members with vital skills in sustainable farming, crop management, and soil health. Through hands-on sessions on urban plots and community farms, participants learn regenerative practices that restore the land while producing healthy, abundant harvests for their families and neighbours.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Training is grounded in agroecology and the cultivation of ancestral crops such as okra, hibiscus, and amaranth. Farmers practise composting, water stewardship, intercropping, and seasonal planning — building the confidence and capacity to grow food sustainably without dependence on extractive, industrial inputs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Beyond technique, the program builds community. Participants join Garden Clubs where knowledge is shared freely between elders and youth, experienced growers and first-time gardeners. Every harvest strengthens the local food system and moves our communities closer to genuine food sovereignty.
              </p>
              <p className="text-gray-700 leading-relaxed">
                No prior farming experience is necessary — only a commitment to collective work. Whether you want to feed your family, supply your neighbourhood, or become a trainer yourself, the Agricultural Training program offers a clear pathway from first seed to self-sufficiency.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] order-1 lg:order-2">
              <Image
                src="/images/landing.jpg"
                alt="Community members working garden beds"
                fill
                className="object-cover rounded shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <DonateSection projectName="Agricultural Training" />
    </>
  );
}
