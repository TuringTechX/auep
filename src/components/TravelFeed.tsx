import React, { useState, useEffect } from 'react';

export default function TravelFeed() {
  const [travelFeed, setTravelFeed] = useState([]);

  useEffect(() => {
    async function fetchTravelFeed() {
      const data = await fetch('/api/travel-feed'); // API endpoint for travel feed
      const result = await data.json();
      setTravelFeed(result);
    }
    fetchTravelFeed();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {travelFeed.map((traveler) => (
        <div key={traveler.id} className="border p-4 rounded-lg shadow-md">
          <img
            src={traveler.photoUrl}
            alt={traveler.name}
            className="w-full h-40 object-cover rounded-lg"
          />
          <h3 className="text-lg font-semibold mt-2">{traveler.name}</h3>
          <p className="text-sm text-gray-500">{traveler.bio}</p>
        </div>
      ))}
    </div>
  );
}
