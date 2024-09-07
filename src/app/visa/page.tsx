import React from 'react';
import VisaStatusMap from './components/VisaStatusMap';
import TravelFeed from './components/TravelFeed';
import CountdownTimer from './components/CountdownTimer';

export default function VisaDashboard() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Visa-Free Travel & Borderless Movement</h1>

      {/* Visa Status Map */}
      <VisaStatusMap />

      {/* Real-Time Travel Feed */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Real-Time Border Crossings</h2>
        <TravelFeed />
      </div>

      {/* Countdown Timer */}
      <div className="mt-8">
        <CountdownTimer />
      </div>
    </div>
  );
}
