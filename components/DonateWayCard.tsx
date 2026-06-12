'use client';

import DonationTypeModal from '@/components/DonationTypeModal';

interface Props {
  desc: string;
}

export default function DonateWayCard({ desc }: Props) {
  return (
    <div className="bg-white border border-gray-100 rounded p-6 hover:shadow-md transition-shadow group">
      <DonationTypeModal
        label="Donate →"
        className="block w-full text-left text-lg font-semibold text-gray-900 group-hover:text-red-600 mb-2 transition-colors"
      />
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
