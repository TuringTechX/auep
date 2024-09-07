import React, { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const journeyDate = new Date('2024-09-15T00:00:00'); // Example date for next journey
    const interval = setInterval(() => {
      const now = new Date();
      const timeRemaining = journeyDate - now;
      setTimeLeft(timeRemaining);
    }, 1000);

    return () => clearInterval(interval); // Cleanup the timer on unmount
  }, []);

  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg text-center shadow-md">
      <h2 className="text-xl font-semibold mb-2">Next Journey Starts In:</h2>
      {timeLeft ? <p className="text-lg">{formatTime(timeLeft)}</p> : <p>Loading...</p>}
    </div>
  );
}
