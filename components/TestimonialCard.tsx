'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import type { Testimonial } from '@/lib/types';

export default function TestimonialCard({ img, name, role, message, rating }: Testimonial) {
  return (
    <div className="bg-white rounded p-6 shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
          <Image
            src={img}
            alt={name}
            width={48}
            height={48}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{name}</p>
          <p className="text-gray-500 text-xs">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed mb-4">"{message}"</p>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}
          />
        ))}
      </div>
    </div>
  );
}
