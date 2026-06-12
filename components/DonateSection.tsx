'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';
import DonationTypeModal from '@/components/DonationTypeModal';

const PRESET_AMOUNTS = ['$10', '$25', '$50', '$100'];

interface Props {
  projectName: string;
}

export default function DonateSection({ projectName }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [custom, setCustom] = useState('');

  const buttonLabel =
    custom && Number(custom) > 0
      ? `Donate $${Number(custom).toLocaleString()}`
      : selected
      ? `Donate ${selected}`
      : 'Donate Now';

  return (
    <section className="bg-rose-50 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-red-100 rounded mb-6">
          <Heart className="w-7 h-7 text-red-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Support {projectName}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
          Your contribution directly funds seeds, soil, tools, training, and the community members who make this project possible. Every dollar grows our collective power.
        </p>

        {/* Suggested amounts */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {PRESET_AMOUNTS.map((amt) => (
            <button
              key={amt}
              onClick={() => { setSelected(amt); setCustom(''); }}
              className={`border-2 font-semibold px-6 py-2.5 rounded transition-colors ${
                selected === amt && !custom
                  ? 'border-red-600 bg-red-600 text-white'
                  : 'border-gray-200 hover:border-red-600 hover:bg-red-600 hover:text-white text-gray-800'
              }`}
            >
              {amt}
            </button>
          ))}

          {/* Other amount */}
          <div className={`flex items-center border-2 rounded transition-colors ${
            custom ? 'border-red-600' : 'border-gray-200'
          }`}>
            <span className="pl-4 text-gray-500 font-semibold select-none">$</span>
            <input
              type="number"
              min="1"
              placeholder="Other"
              value={custom}
              onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
              className="w-24 bg-transparent py-2.5 px-2 text-gray-800 font-semibold placeholder:text-gray-400 focus:outline-none"
            />
          </div>
        </div>

        {custom && Number(custom) > 0 && (
          <p className="text-sm text-gray-500 mb-6">
            You&apos;ll be directed to Stripe where you can confirm your ${Number(custom).toLocaleString()} donation.
          </p>
        )}

        <div className="mt-4">
          <DonationTypeModal
            label={buttonLabel}
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-3.5 rounded transition-colors text-base"
          />
        </div>

        <p className="mt-4 text-xs text-gray-500">
          Secure payment powered by Stripe.
        </p>
      </div>
    </section>
  );
}
