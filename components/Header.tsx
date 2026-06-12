'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import DonationTypeModal from '@/components/DonationTypeModal';

const NAV_LINKS = [
  { href: '/',          label: 'Home' },
  { href: '/about',     label: 'About Us' },
  { href: '/community', label: 'Community' },
  { href: '/blog',      label: 'Blog' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center h-12 w-32 flex-shrink-0">
            <Image
              src="/images/odu-logo.png"
              alt="The Odù Project"
              width={120}
              height={48}
              className="object-contain h-full w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href || (href !== '/' && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-colors ${
                    active ? 'text-red-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <DonationTypeModal
              label="Donate"
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded text-sm font-medium transition-colors"
            />
            <Link
              href="/community"
              className="border border-gray-300 hover:border-gray-400 text-gray-700 px-5 py-2 rounded text-sm font-medium transition-colors"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-gray-700 rounded"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-3">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href || (href !== '/' && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`block text-sm font-medium py-2 ${
                  active ? 'text-red-600' : 'text-gray-700'
                }`}
              >
                {label}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-gray-100 flex flex-col gap-3">
            <DonationTypeModal
              label="Donate"
              className="block w-full bg-red-600 text-white text-center py-2.5 rounded text-sm font-medium"
            />
            <Link
              href="/community"
              onClick={() => setOpen(false)}
              className="block border border-gray-300 text-gray-700 text-center py-2.5 rounded text-sm font-medium"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
