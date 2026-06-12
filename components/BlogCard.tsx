import Link from 'next/link';
import Image from 'next/image';
import type { Blog } from '@/lib/types';
import { blogExcerpt } from '@/lib/utils';

interface Props {
  blog: Blog;
}

function normalizeSrc(src: string | null | undefined): string {
  if (!src) return '/images/random.jpg';
  if (src.startsWith('http') || src.startsWith('/')) return src;
  // Strip legacy "assets/" prefix from DB paths
  return '/' + src.replace(/^assets\//, '');
}

export default function BlogCard({ blog }: Props) {
  return (
    <article className="bg-white rounded overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
      <div className="relative h-48">
        <Image
          src={normalizeSrc(blog.image)}
          alt={blog.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute top-3 left-3 bg-white text-red-600 text-xs font-bold px-3 py-1 rounded">
          {blog.category?.toUpperCase()}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-gray-900 font-bold text-base mb-2 line-clamp-2 leading-snug">
          {blog.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {blogExcerpt(blog.content)}
        </p>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <div>
            <p className="text-sm font-medium text-gray-900">
              {blog.firstname} {blog.lastname}
            </p>
            <p className="text-xs text-gray-500">{blog.updated_at?.slice(0, 10)}</p>
          </div>
          <Link
            href={`/blog/${blog.id}`}
            className="text-red-600 text-sm font-medium hover:text-red-700 flex items-center gap-1"
          >
            Read more
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
