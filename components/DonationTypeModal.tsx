'use client';

import { useState } from 'react';
import { ShieldCheck, Clock, AlertTriangle } from 'lucide-react';
import { STRIPE_DONATE_URL } from '@/lib/constants';

interface Props {
  label: string;
  className?: string;
}

export default function DonationTypeModal({ label, className }: Props) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<'choose' | 'disclaimer'>('choose');
  const [agreed, setAgreed] = useState(false);

  function reset() {
    setOpen(false);
    setStep('choose');
    setAgreed(false);
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
            className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {step === 'choose' ? (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">How would you like to donate?</h3>
                  <p className="text-sm text-gray-500">Choose your donation type below.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Charitable */}
                  <button
                    onClick={openStripe}
                    className="border-2 border-gray-200 hover:border-red-500 rounded-xl p-6 text-left transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
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

                  {/* Direct */}
                  <button
                    onClick={() => setStep('disclaimer')}
                    className="border-2 border-gray-200 hover:border-red-500 rounded-xl p-6 text-left transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <div className="flex items-center justify-center h-11 w-11 bg-orange-100 rounded-full mb-4">
                      <Clock className="h-6 w-6 text-orange-500" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Direct Donation</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Make a direct contribution. This donation does <strong>not</strong> qualify for a charitable tax deduction.
                    </p>
                    <span className="text-sm font-semibold text-orange-500">Non-charitable →</span>
                  </button>
                </div>

                <button
                  onClick={reset}
                  className="mt-6 w-full text-sm text-gray-400 hover:text-gray-600 transition-colors text-center"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <div className="flex items-center mb-5">
                  <div className="flex items-center justify-center h-10 w-10 bg-orange-100 rounded-full mr-3 flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Important Notice</h3>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-orange-800 leading-relaxed">
                    <strong>Please be sure that you want to make a non-charitable tax donation.</strong>
                    <br /><br />
                    This direct donation <strong>does not qualify</strong> for a charitable tax deduction. You will{' '}
                    <strong>not</strong> receive a tax receipt for this contribution. If you wish to claim a tax
                    deduction, go back and select <em>Charitable Donation</em> instead.
                  </p>
                </div>

                <label className="flex items-start gap-3 mb-6 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-700">
                    I understand this donation does not qualify for a charitable tax deduction and I wish to proceed.
                  </span>
                </label>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep('choose')}
                    className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2.5 px-4 rounded-lg transition-colors"
                  >
                    Go Back
                  </button>
                  <button
                    onClick={openStripe}
                    disabled={!agreed}
                    className="flex-1 bg-red-600 hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-2.5 px-4 rounded-lg transition-colors"
                  >
                    Proceed
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
