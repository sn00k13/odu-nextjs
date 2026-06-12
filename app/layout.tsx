import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'The Odù Project — Sustainable Agricultural Practices',
    template: '%s | The Odù Project',
  },
  description:
    'Empowering growers, preserving culture, and building sustainable communities for generations to come.',
  icons: {
    icon: '/images/odu-logo.png',
    apple: '/images/odu-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-dvh bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
