import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import TestimonialCard from '@/components/TestimonialCard';
import FaqSection from '@/components/FaqSection';
import MapSection from '@/components/MapSection';
import { getAllBlogs } from '@/lib/data';
import { TESTIMONIALS, STRIPE_DONATE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'The Odù Project — Sustainable Agricultural Practices',
};

const PROJECTS = [
  {
    title: 'Agricultural Training',
    description: 'Learn vital skills in sustainable farming, crop management, and soil health.',
    image: '/images/landing.jpg',
    href: '/projects/agricultural-training',
  },
  {
    title: 'Cultural Heritage',
    description: 'Connect with ancestral wisdom and traditional agricultural practices.',
    image: '/images/unsplash_bofe6iZUW_A-1.jpg',
    href: '/projects/cultural-heritage',
  },
  {
    title: 'Community Governance',
    description: 'Participate in assemblies and learn about cooperative decision-making.',
    image: '/images/unsplash.jpg',
    href: '/projects/community-governance',
  },
];

const STATS = [
  { value: '1,000+', label: 'Farmers To Be Trained' },
  { value: '4,000',  label: 'Acres To Be Cultivated' },
  { value: '30+',    label: 'Active Unions' },
  { value: '50+',    label: 'Communities To Be Served' },
];

const CULTURE_ITEMS = [
  {
    svg: '/svgs/Vector (1).svg',
    title: 'Economic Resilience',
    body: 'Building community-owned systems that create stable livelihoods, shared wealth, and long-term prosperity for farmers and their families.',
  },
  {
    svg: '/svgs/Vector (3).svg',
    title: 'Ancestral Knowledge',
    body: 'Documenting and nurturing traditional farming techniques and cultural practices passed down through generations.',
  },
  {
    svg: '/svgs/Vector (2).svg',
    title: 'Environmental Stewardship',
    body: 'Protecting and restoring the land through regenerative practices that honour the balance between people, nature, and future generations.',
  },
];

const CULTURE_CARDS = [
  { title: 'Heritage Workshops',           body: 'Hands-on sessions where community members learn traditional crafts, rituals, and ancestral skills.' },
  { title: 'Community Gatherings',         body: 'Safe, inclusive spaces for families, elders, and youth to connect and build communal bonds.' },
  { title: 'Cultural Education Programs',  body: 'Teaching the history, values, and philosophies of our people to ensure younger generations grow with pride.' },
  { title: 'Seasonal Festivals',           body: 'Honouring important agricultural and cultural seasons with ceremony, food, art, and celebration.' },
];

// Pick 3 random testimonials server-side (stable per build)
const SELECTED_TESTIMONIALS = TESTIMONIALS.slice(0, 3);

export default async function HomePage() {
  const blogs = await getAllBlogs();
  const latestBlogs = blogs.slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="hero-section min-h-[90vh] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url('/images/Pixabay-9322331.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Revitalizing Local Economies Through Sustainable Agricultural Practices
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Empowering growers, preserving culture, and building sustainable communities for generations to come.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={STRIPE_DONATE_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-medium transition-colors"
              >
                Donate Now
              </a>
              <Link
                href="/about"
                className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded font-medium transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Projects ─────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              More than a farming initiative, The Odù Project is a sanctuary for learning, a space for connection, and a blueprint for self-sufficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map(({ title, description, image, href }) => (
              <div key={href} className="bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-56">
                  <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{description}</p>
                  <Link href={href} className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-medium text-sm">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact Stats ─────────────────────────────────── */}
      <section className="bg-zinc-900 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">Our Goals</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-rose-500 text-4xl md:text-5xl font-bold mb-2">{value}</div>
                <div className="text-white text-sm md:text-base">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-zinc-900 text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Community Says
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SELECTED_TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Culture & Heritage ───────────────────────────── */}
      <section className="bg-rose-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Culture Our Heritage</h2>
            <p className="text-gray-600 text-lg">Preserving ancestral wisdom and traditional practices for future generations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-[4/3]">
                <Image src="/images/Our culture.jpg" alt="Community farming" fill className="object-cover rounded shadow-lg" />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              {CULTURE_ITEMS.map(({ svg, title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                    <Image src={svg} alt={title} width={24} height={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CULTURE_CARDS.map(({ title, body }) => (
              <div key={title} className="bg-white rounded p-6 shadow-sm">
                <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.41 1.41l-.7.7a1 1 0 11-1.41-1.41l.7-.7zM17 9a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-3.07 4.22a1 1 0 010 1.41l-.7.7a1 1 0 11-1.41-1.41l.7-.7a1 1 0 011.41 0zM11 17a1 1 0 11-2 0v-1a1 1 0 112 0v1zM5.05 15.95a1 1 0 010-1.41l.7-.7a1 1 0 111.41 1.41l-.7.7a1 1 0 01-1.41 0zM5 9a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zm1.95-3.95a1 1 0 01-1.41-1.41l.7-.7a1 1 0 111.41 1.41l-.7.7zM10 6a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{title}</h3>
                <p className="text-gray-600 text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest Blog Insights ─────────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Latest Insights</h2>
            <p className="text-gray-600 text-lg">Stories from our vibrant farming community</p>
          </div>

          {latestBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {latestBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mb-8">No articles yet — check back soon.</p>
          )}

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-block px-8 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* ── Map ──────────────────────────────────────────── */}
      <MapSection />

      {/* ── FAQ ──────────────────────────────────────────── */}
      <FaqSection />

      {/* ── Join the Movement ────────────────────────────── */}
      <section className="bg-red-600 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-3">Join the Movement</h2>
          <p className="text-white/90 text-sm md:text-base mb-6 max-w-2xl mx-auto">
            Be a part of a transformative initiative that&apos;s reshaping food communities and pioneering our cultural heritage.
          </p>
          <Link
            href="/community"
            className="inline-block bg-white text-red-600 px-8 py-3 rounded font-semibold text-sm hover:bg-gray-100 transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}
