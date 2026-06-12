'use client';

import Link from 'next/link';
import Image from 'next/image';
import { STRIPE_DONATE_URL } from '@/lib/constants';

const EXPLORE = [
  { href: '/about',     label: 'About Us' },
  { href: '/community', label: 'Community' },
  { href: '/blog',      label: 'Blog' },
  { href: '/volunteer', label: 'Volunteer' },
];

const SUPPORT = [
  { href: '/support',        label: 'Support' },
  { href: '/help',    label: 'Help Centre' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/security',       label: 'Security' },
  { href: '/#faq',           label: 'FAQ' },
  { href: STRIPE_DONATE_URL, label: 'Donate', external: true },
];

export default function Footer() {
  return (
    <footer className="bg-[#4C4B4B]">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">

          {/* Logo & Contact */}
          <div className="lg:col-span-3">
            <div className="bg-white w-12 h-12 flex items-center justify-center rounded mb-4 overflow-hidden">
              <Image
                src="/images/odu-logo.png"
                alt="Odù Project"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm mb-4">contact@theoduproject.com</p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/17evkyS77A/" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://x.com/Symbodied" target="_blank" rel="noreferrer" aria-label="Twitter / X" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.linkedin.com/showcase/the-od%C3%BA-project/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2 lg:col-start-5">
            <h3 className="text-white text-sm font-semibold mb-4">Explore</h3>
            <ul className="space-y-2.5">
              {EXPLORE.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-300 text-sm hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-sm font-semibold mb-4">Support</h3>
            <ul className="space-y-2.5">
              {SUPPORT.map(({ href, label, external }) => (
                <li key={href}>
                  {external ? (
                    <a href={href} target="_blank" rel="noreferrer" className="text-gray-300 text-sm hover:text-white transition-colors">{label}</a>
                  ) : (
                    <Link href={href} className="text-gray-300 text-sm hover:text-white transition-colors">{label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-sm font-semibold mb-4">Newsletter</h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2.5 rounded text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-red-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#6A6868] py-4 px-4">
        <p className="text-gray-400 text-sm text-center">© {new Date().getFullYear()} The Odù Project. All rights reserved.</p>
      </div>
    </footer>
  );
}
