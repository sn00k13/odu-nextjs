'use client';

import { useState, useTransition } from 'react';
import type { User } from '@supabase/supabase-js';
import type { Comment } from '@/lib/types';
import { createClient } from '@/lib/supabase/client';

interface Props {
  blogId: number;
  initialComments: Comment[];
  serverUser: User | null;
}

export default function CommentSection({ blogId, initialComments, serverUser }: Props) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [user, setUser] = useState<User | null>(serverUser);
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [isPending, startTransition] = useTransition();

  const sb = createClient();

  /* ── Auth: sign in with magic link ─────────────────────────── */
  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    const { error } = await sb.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
        data: { source: 'blog_comments' },
      },
    });
    setStatus(error ? 'error' : 'sent');
  }

  /* ── Auth: sign out ─────────────────────────────────────────── */
  async function handleSignOut() {
    await sb.auth.signOut();
    setUser(null);
  }

  /* ── Comments: post ─────────────────────────────────────────── */
  async function handlePostComment(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim() || !user) return;
    setSubmitStatus('submitting');

    const name = (user.user_metadata?.full_name as string | undefined)
      || user.email?.split('@')[0]
      || 'Anonymous';

    const { data, error } = await sb
      .from('comments')
      .insert({ blog_id: blogId, user_id: user.id, name, text: text.trim() })
      .select()
      .single();

    if (error) {
      setSubmitStatus('error');
      return;
    }

    startTransition(() => {
      setComments((prev) => [data as Comment, ...prev]);
      setText('');
      setSubmitStatus('idle');
    });
  }

  /* ── Comments: delete own ────────────────────────────────────── */
  async function handleDelete(commentId: number) {
    const { error } = await sb.from('comments').delete().eq('id', commentId);
    if (!error) {
      setComments((prev) => prev.filter((c) => c.id !== commentId));
    }
  }

  /* ── Render ─────────────────────────────────────────────────── */
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 border-t border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Comments ({comments.length})
      </h2>

      {/* ── Sign-in gate ──────────────────────────────────────── */}
      {!user ? (
        <div className="bg-pink-50 rounded p-6 mb-8">
          <p className="text-gray-700 mb-4 font-medium">
            Join the conversation — we&apos;ll send you a one-click sign-in link straight to your inbox. No password needed.
          </p>
          {status === 'sent' ? (
            <p className="text-green-700 font-medium">
              Check your inbox — your sign-in link is on its way. Click it to come back and comment.
            </p>
          ) : (
            <form onSubmit={handleSignIn} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-red-600 text-white font-semibold text-sm px-6 py-2 rounded hover:bg-red-700 transition-colors disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Send link'}
              </button>
            </form>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-sm mt-2">Something went wrong — please try again.</p>
          )}
        </div>
      ) : (
        /* ── Post comment form ───────────────────────────────── */
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-gray-600">
              Signed in as <strong>{user.email}</strong>
            </p>
            <button
              onClick={handleSignOut}
              className="text-sm text-red-600 hover:underline"
            >
              Sign out
            </button>
          </div>
          <form onSubmit={handlePostComment} className="flex flex-col gap-3">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Share your thoughts…"
              required
              rows={4}
              className="border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            />
            {submitStatus === 'error' && (
              <p className="text-red-600 text-sm">Could not post comment — please try again.</p>
            )}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submitStatus === 'submitting' || isPending || !text.trim()}
                className="bg-red-600 text-white font-semibold text-sm px-6 py-2 rounded hover:bg-red-700 transition-colors disabled:opacity-60"
              >
                {submitStatus === 'submitting' ? 'Posting…' : 'Post comment'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ── Comment list ─────────────────────────────────────── */}
      {comments.length === 0 ? (
        <p className="text-gray-500 text-center py-10">
          No comments yet — be the first to share your thoughts.
        </p>
      ) : (
        <ol className="flex flex-col gap-6">
          {comments.map((c) => (
            <li key={c.id} className="border border-gray-100 rounded p-5 bg-white shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="font-semibold text-gray-900">{c.name}</span>
                  <span className="text-gray-400 text-xs ml-3">
                    {c.created_at ? new Date(c.created_at).toLocaleDateString('en-GB', {
                      day: 'numeric', month: 'short', year: 'numeric',
                    }) : ''}
                  </span>
                </div>
                {user && c.user_id === user.id && (
                  <button
                    onClick={() => handleDelete(c.id)}
                    className="text-xs text-gray-400 hover:text-red-600 transition-colors"
                    title="Delete comment"
                  >
                    Delete
                  </button>
                )}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">{c.text}</p>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
