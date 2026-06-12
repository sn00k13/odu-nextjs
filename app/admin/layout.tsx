import type { Metadata } from 'next';

export const metadata: Metadata = { title: { template: '%s | Odu Admin', default: 'Odu Admin' } };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
