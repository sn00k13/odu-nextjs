'use client';

import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { STRIPE_DONATE_URL } from '@/lib/constants';

interface Props {
  label: string;
  className?: string;
}

export default function DonationTypeModal({ label, className }: Props) {
  const [open, setOpen] = useState(false);

  function reset() {
    setOpen(false);
  }

  function openStripe() {
    window.open(STRIPE_DONATE_URL, '_blank', 'noopener,noreferrer');
    reset();
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
          onClick={reset}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">How would you like to donate?</h3>
              <p className="text-sm text-gray-500">Choose your donation type below.</p>
            </div>

            <button
              onClick={openStripe}
              className="w-full border-2 border-gray-200 hover:border-red-500 rounded-xl p-6 text-left transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <div className="flex items-center justify-center h-11 w-11 bg-green-100 rounded-full mb-4">
                <ShieldCheck className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Charitable Donation</h4>
              <p className="text-sm text-gray-600 mb-4">
                Your donation may qualify for a charitable tax deduction. A receipt will be issued for your records.
              </p>
              <span className="text-sm font-semibold text-green-600">Tax deductible →</span>
            </button>

            <button
              onClick={reset}
              className="mt-6 w-full text-sm text-gray-400 hover:text-gray-600 transition-colors text-center"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
