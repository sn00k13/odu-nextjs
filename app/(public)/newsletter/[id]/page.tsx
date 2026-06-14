import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getSingleNewsletter } from '@/lib/data';

interface Props {
  params: Promise<{ id: string }>;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const n = await getSingleNewsletter(Number(id));
  return { title: n ? `${n.subject} — The Odù Project` : 'Newsletter' };
}

export default async function NewsletterIssuePage({ params }: Props) {
  const { id } = await params;
  const n = await getSingleNewsletter(Number(id));

  if (!n) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <section className="w-full h-20 bg-rose-50 flex items-center">
        <div className="max-w-3xl mx-auto px-4 w-full">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600">Home</Link>
            {' / '}
            <Link href="/newsletter" className="hover:text-red-600">Newsletter</Link>
            {' / '}
            <span className="text-gray-900 line-clamp-1">{n.subject}</span>
          </nav>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">
          {n.sent_at ? formatDate(n.sent_at) : formatDate(n.created_at)}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
          {n.subject}
        </h1>

        <div
          className="tiptap-content text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: n.content }}
        />

        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link
            href="/newsletter"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            ← Back to all issues
          </Link>
        </div>
      </article>
    </>
  );
}
