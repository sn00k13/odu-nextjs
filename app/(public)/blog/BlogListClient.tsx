'use client';

import { useState } from 'react';
import BlogCard from '@/components/BlogCard';
import type { Blog } from '@/lib/types';

const CATEGORIES = ['All', 'Farming tips', 'Technology', 'Community', 'Sustainability'];

interface Props {
  initialBlogs: Blog[];
}

export default function BlogListClient({ initialBlogs }: Props) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? initialBlogs
      : initialBlogs.filter(
          (b) => (b.category || '').toLowerCase() === activeCategory.toLowerCase(),
        );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Category tabs */}
      <nav className="flex gap-6 overflow-x-auto pb-1 border-b border-gray-200 mb-8">
        {CATEGORIES.map((cat) => {
          const active = cat === activeCategory;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap font-medium text-sm pb-3 border-b-2 transition-colors ${
                active
                  ? 'border-red-600 text-red-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </nav>

      {/* Articles grid */}
      {filtered.length === 0 ? (
        <p className="text-gray-500 text-center py-16">
          No {activeCategory} articles yet — check back soon.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
}
