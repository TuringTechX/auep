import React from 'react';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamic import of the map to avoid SSR issues
const Map = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });

export default function VisaStatusMap() {
  const [visaStatus, setVisaStatus] = useState([]);

  useEffect(() => {
    async function fetchVisaStatus() {
      const data = await fetch('/api/visa-status'); // API endpoint for visa data
      const result = await data.json();
      setVisaStatus(result);
    }
    fetchVisaStatus();
  }, []);

  return (
    <div className="relative w-full h-96">
      <Map center={[9.0820, 8.6753]} zoom={4} style={{ height: '100%', width: '100%' }}>
        {visaStatus.map((country) => (
          <div key={country.id} className={`country-marker ${country.status}`}>
            <span>{country.name}</span>
          </div>
        ))}
      </Map>
      <style jsx>{`
        .country-marker {
          position: absolute;
          color: white;
        }
        .visa-free {
          background-color: green;
        }
        .visa-required {
          background-color: red;
        }
        .visa-pending {
          background-color: yellow;
        }
      `}</style>
    </div>
  );
}
