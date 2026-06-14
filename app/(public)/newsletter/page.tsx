import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllNewsletters } from '@/lib/data';

export const metadata: Metadata = { title: 'Newsletter — The Odù Project' };

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

export default async function NewsletterPage() {
  const newsletters = await getAllNewsletters();

  return (
    <>
      <section className="bg-rose-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Newsletter</h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Updates, stories, and insights from The Odù Project community — straight from our team to your inbox.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          {newsletters.length === 0 ? (
            <p className="text-center text-gray-500 py-20">No newsletters published yet — check back soon.</p>
          ) : (
            <div className="divide-y divide-gray-100">
              {newsletters.map((n) => (
                <article key={n.id} className="py-8 first:pt-0">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                    {n.sent_at ? formatDate(n.sent_at) : formatDate(n.created_at)}
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{n.subject}</h2>
                  <p className="text-sm text-gray-400 mb-4">{n.title}</p>
                  <Link
                    href={`/newsletter/${n.id}`}
                    className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-medium text-sm"
                  >
                    Read issue →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
