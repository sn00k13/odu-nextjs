'use client';

import { useEffect, useRef, useState } from 'react';

const FILTERS = ['Farms', 'Testing Hub', 'Research Hub'] as const;
type Filter = typeof FILTERS[number];

const POINTS = [
  { lat: 35.9940, lng: -78.8986, type: 'Farms',       label: 'Durham Farm' },
  { lat: 35.9132, lng: -79.0558, type: 'Farms',       label: 'Orange County Farm' },
  { lat: 36.0999, lng: -80.2442, type: 'Testing Hub', label: 'Winston-Salem Hub' },
  { lat: 35.9940, lng: -78.8986, type: 'Research Hub', label: 'Durham Research Centre' },
];

export default function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Filter>('Farms');

  useEffect(() => {
    let mapInstance: unknown;

    async function init() {
      // Dynamic import so SSR doesn't break
      const L = (await import('leaflet')).default;
      await import('leaflet/dist/leaflet.css');

      if (!mapRef.current || (mapRef.current as HTMLDivElement & { _leaflet_id?: number })._leaflet_id) return;

      const m = L.map(mapRef.current, { zoomControl: true }).setView([35.99, -79.0], 7);
      mapInstance = m;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(m);

      POINTS.filter((p) => p.type === active).forEach((p) => {
        L.marker([p.lat, p.lng]).addTo(m).bindPopup(p.label);
      });
    }

    init();
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (mapInstance as any)?.remove?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Explore our Map</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Discover farms, testing hubs, and research centres across regions
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded text-sm font-medium transition-colors ${
                active === f
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-300 text-white hover:bg-gray-400'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div ref={mapRef} className="bg-white rounded shadow-sm overflow-hidden h-96 w-full" />
      </div>
    </section>
  );
}
