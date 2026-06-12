import Image from 'next/image';
import type { Metadata } from 'next';
import BlogListClient from './BlogListClient';
import { getAllBlogs } from '@/lib/data';

export const metadata: Metadata = { title: 'Blog' };

export default async function BlogPage() {
  const blogs = await getAllBlogs();

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row lg:min-h-[40vh]">
        <div className="w-full lg:w-1/2 bg-pink-50 flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-md">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Latest Articles
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Stay informed with our latest insights on sustainable farming, cultural heritage, and community governance.
            </p>
          </div>
        </div>
        <div className="hidden lg:block w-1/2 relative">
          <Image
            src="/images/Pixabay-6914029.jpg"
            alt="Farmer in field"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* ── Category tabs + articles ─────────────────────── */}
      <BlogListClient initialBlogs={blogs} />
    </>
  );
}
