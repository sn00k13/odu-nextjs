import type { Metadata } from 'next';
import { getAllBlogsAdmin } from '@/lib/data';
import BlogsTable from './BlogsTable';

export const metadata: Metadata = { title: 'Manage Blogs' };

export default async function AdminBlogsPage() {
  const blogs = await getAllBlogsAdmin();
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Blogs</h1>
      <BlogsTable initialBlogs={blogs} />
    </div>
  );
}
