'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Comment } from '@/lib/types';
import { createClient } from '@/lib/supabase/client';

export default function CommentsTable({ initialComments }: { initialComments: Comment[] }) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const sb = createClient();

  async function deleteComment(id: number) {
    if (!confirm('Delete this comment?')) return;
    const { error } = await sb.from('comments').delete().eq('id', id);
    if (!error) {
      setComments((prev) => prev.filter((c) => c.id !== id));
    }
  }

  return (
    <div className="bg-white border border-gray-100 rounded shadow-sm overflow-x-auto">
      <table className="admin-table w-full text-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Comment</th>
            <th>Blog ID</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {comments.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center text-gray-400 py-8">No comments yet.</td>
            </tr>
          )}
          {comments.map((c) => (
            <tr key={c.id}>
              <td className="whitespace-nowrap font-medium text-gray-900">{c.name}</td>
              <td className="max-w-[300px] text-gray-600 truncate">{c.text}</td>
              <td>
                <Link
                  href={`/blog/${c.blog_id}`}
                  target="_blank"
                  className="text-blue-600 hover:underline text-xs"
                >
                  #{c.blog_id}
                </Link>
              </td>
              <td className="whitespace-nowrap text-gray-400 text-xs">
                {c.created_at ? new Date(c.created_at).toLocaleDateString('en-GB', {
                  day: 'numeric', month: 'short', year: 'numeric',
                }) : '—'}
              </td>
              <td>
                <button
                  onClick={() => deleteComment(c.id)}
                  className="text-xs text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
