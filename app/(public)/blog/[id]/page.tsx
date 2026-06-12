import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getSingleBlog, getComments } from '@/lib/data';
import { createClient } from '@/lib/supabase/server';
import CommentSection from './CommentSection';
import ViewTracker from './ViewTracker';

function normalizeSrc(src: string): string {
  if (src.startsWith('http') || src.startsWith('/')) return src;
  return '/' + src.replace(/^assets\//, '');
}

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const blog = await getSingleBlog(Number(id));
  return { title: blog?.title ?? 'Article' };
}

export default async function ArticlePage({ params }: Props) {
  const { id } = await params;
  const blogId = Number(id);

  const [blog, comments] = await Promise.all([
    getSingleBlog(blogId),
    getComments(blogId),
  ]);

  if (!blog) notFound();

  const sb = await createClient();
  const { data: { user } } = await sb.auth.getUser();

  return (
    <>
      {/* Breadcrumb */}
      <section className="w-full h-20 bg-pink-50 flex items-center">
        <div className="max-w-5xl mx-auto px-4 w-full">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600">Home</Link>
            {' / '}
            <Link href="/blog" className="hover:text-red-600">Blog</Link>
            {' / '}
            <span className="text-gray-900 line-clamp-1">{blog.title}</span>
          </nav>
        </div>
      </section>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-10">
        {/* Meta row */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
          <span>By <strong className="text-gray-800">{blog.firstname} {blog.lastname}</strong></span>
          <span>·</span>
          <span>{blog.views ?? 0} views</span>
          <span>·</span>
          <span>{blog.likes ?? 0} likes</span>
          <span>·</span>
          <span>{blog.updated_at?.slice(0, 10)}</span>
          {blog.category && (
            <>
              <span>·</span>
              <span className="inline-block bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded uppercase">
                {blog.category}
              </span>
            </>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
          {blog.title}
        </h1>

        {/* Hero image */}
        {blog.image && (
          <div className="relative w-full aspect-[16/7] mb-8">
            <Image
              src={normalizeSrc(blog.image)}
              alt={blog.title}
              fill
              className="object-cover rounded"
              priority
            />
          </div>
        )}

        {/* Content (Quill HTML) */}
        <div
          className="ql-editor prose max-w-none text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>

      {/* View tracker (client component — fires once) */}
      <ViewTracker blogId={blogId} />

      {/* Comments */}
      <CommentSection blogId={blogId} initialComments={comments} serverUser={user} />
    </>
  );
}
