import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'About Us' };

const MISSION_CARDS = [
  {
    title: 'Sustainable Farming',
    body: 'Promoting ethical agricultural practices that nurture the earth and restore ecological balance for future generations.',
    icon: (
      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
    ),
  },
  {
    title: 'Community Building',
    body: 'Creating strong, self-reliant farming communities rooted in mutual aid, shared knowledge, and collective power.',
    icon: (
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
    ),
  },
  {
    title: 'Cultural Preservation',
    body: 'Reviving ancestral knowledge, traditions, and land-based wisdom to guide community growth and identity.',
    icon: (
      <path d="M10 2L2.5 6.5a1 1 0 000 1.7l7.5 4.3 7.5-4.3a1 1 0 000-1.7L10 2zm-5 9a1 1 0 011-1h1a1 1 0 011 1v5H5v-5zm4 0a1 1 0 011-1h1a1 1 0 011 1v5H9v-5zm4 0a1 1 0 011-1h1a1 1 0 011 1v5h-3v-5z" />
    ),
  },
];

const TIMELINE = [
  { side: 'left',  title: 'Baseline',     body: 'Begins with small-scale voluntary gatherings focused on building trust and foundational social value. Focus on partnerships, pre-testing, and farmer capacity.' },
  { side: 'right', title: 'World Growth', body: 'Scale grower and community gatherings, an approach to building trust and understanding food access. Focus on partnerships and farmer capacity.' },
  { side: 'left',  title: 'Scaling',      body: 'Expand training programs across regions, deepen cooperative networks, and formalise governance structures to sustain growth.' },
  { side: 'right', title: 'Independence', body: 'Communities fully own and operate their food systems, with The Odù Project serving as a resource hub and global solidarity network.' },
];

const IMPACT_STORIES = [
  {
    image: '/images/unsplash.jpg',
    title: 'Youth Empowerment Initiatives',
    body: 'We were able to inspire 100+ young people to return to agricultural roots while implementing innovative sustainable practices.',
    author: 'Josiah Evans',
    role: 'Community Farmer',
    avatar: '/images/random1.jpg',
  },
  {
    image: '/images/farmer-success.jpg',
    title: 'Community Farmer Success',
    body: 'Through the Odù Project, I joined a community farming network that taught sustainable, culturally-rooted techniques. Our harvests are stronger and our families more secure.',
    author: 'Jonathan Hayes',
    role: 'Community Farmer',
    avatar: '/images/random.jpg',
  },
  {
    image: '/images/unsplash_bofe6iZUW_A-1.jpg',
    title: "Women's Cooperative Success",
    body: "Women came together to form a successful cooperative, reviving traditional farming methods and creating economic independence.",
    author: 'Isabella Jackson',
    role: 'Community Farmer',
    avatar: '',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="min-h-[40vh] flex items-end pb-12"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url('/images/HeroSection.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
        </div>
      </section>

      {/* ── About content ────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About The Odù Project</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The Odu Project is an independent, community-led movement that empowers smallholder farmers to grow high-quality food in a way that is equitable and sustainable. We collaborate with farmers across West Africa who embrace the quest — &ldquo;Farmers, Engaged, and Cultivators&rdquo; — whose work sustains the essential rhythms of food security in the region.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The Odu Project places farmers at the centre of food systems, promoting equitable and environmental governance. Through assemblies, cooperatives, and unions, we build structures that empower and compensate farmers. It is built upon respect and autonomy, dignity, and democracy.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                More than a labelling initiative, The Odu Project is a pathway for learning, a space for connection, and a blueprint for what&apos;s to come. Through partnerships with farmers, cultural groups, and innovators, The Odu Project cultivates autonomy and resilience.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As a cornerstone of food and health values, we recognise that growers are the backbone of economic sustainability and progress. The Odu Project is a transformative initiative focused on redefining local economies through empowering growers and producers.
              </p>
            </div>
            <div className="lg:pl-8">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/images/About.jpg"
                  alt="Farmer harvesting crops"
                  fill
                  className="object-cover rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Mission (moved from Home) ────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The Odù Project is a transformative initiative focused on revitalising local economies by empowering growers as the foundation of food sovereignty.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {MISSION_CARDS.map(({ title, body, icon }) => (
              <div key={title} className="bg-red-50 p-8 rounded">
                <div className="w-12 h-12 bg-red-100 rounded flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    {icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Development Journey ───────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Our Development Journey</h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            From humble beginnings to a transformative movement, our journey has evolved through careful planning, community engagement, and sustainable practices.
          </p>

          {/* Desktop timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-red-500 top-5 bottom-5" />
            <div className="space-y-16">
              {TIMELINE.map(({ side, title, body }) => (
                <div key={title} className="relative flex items-start">
                  {side === 'left' ? (
                    <>
                      <div className="w-1/2 pr-12 text-right">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full border-4 border-white shadow" />
                      <div className="w-1/2 pl-12" />
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-12" />
                      <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full border-4 border-white shadow" />
                      <div className="w-1/2 pl-12">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden space-y-8">
            {TIMELINE.map(({ title, body }) => (
              <div key={title} className="flex gap-4">
                <div className="flex-shrink-0 w-5 h-5 bg-red-500 rounded-full border-4 border-white shadow mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact Stories ────────────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">More Impact Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {IMPACT_STORIES.map(({ image, title, body, author, role, avatar }) => (
              <div key={title} className="bg-white rounded overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image src={image} alt={title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{body}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                      {avatar && <Image src={avatar} alt={author} width={40} height={40} className="object-cover" />}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{author}</p>
                      <p className="text-xs text-gray-500">{role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
