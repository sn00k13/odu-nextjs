import Image from 'next/image';
import type { Metadata } from 'next';
import DonateSection from '@/components/DonateSection';

export const metadata: Metadata = { title: 'Cultural Heritage' };

export default function CulturalHeritagePage() {
  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Cultural Heritage
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/unsplash_bofe6iZUW_A-1.jpg"
                alt="Cultural heritage"
                fill
                className="object-cover rounded shadow-sm"
                priority
              />
            </div>
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Cultural Heritage program connects our communities with ancestral wisdom and traditional agricultural practices. We document and nurture the farming techniques, foodways, and land-based knowledge passed down through generations of African and diasporic communities — knowledge that colonial food systems tried to erase.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through heritage workshops, community members learn traditional crafts, rituals, and ancestral skills that strengthen identity and belonging. Seasonal festivals honour important agricultural and cultural moments with ceremony, food, art, and communal celebration that keep our traditions alive.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Cultural education sits at the heart of the program. We teach the history, values, and philosophies of our people so that younger generations grow with pride and awareness of their roots, drawing on thinkers like Amílcar Cabral, Thomas Sankara, and bell hooks who understood culture as a foundation of liberation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Just as the Odù carries multitudes of meaning in West African spiritual traditions, this program carries the many ways we reclaim land, culture, and self-determination. Every story recorded, every seed saved, and every gathering held is an act of cultural preservation and collective power.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] order-1 lg:order-2">
              <Image
                src="/images/Our culture.jpg"
                alt="Community cultural gathering"
                fill
                className="object-cover rounded shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <DonateSection projectName="Cultural Heritage" />
    </>
  );
}
