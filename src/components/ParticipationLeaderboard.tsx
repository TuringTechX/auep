// src/components/ParticipationLeaderboard.tsx
import React from 'react';

const ParticipationLeaderboard = () => {
    const topParticipants = [
        { country: 'Kenya', participationRate: 95 },
        { country: 'Nigeria', participationRate: 90 },
        { country: 'South Africa', participationRate: 88 },
    ];

    return (
        <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-4">Top Participating Countries</h3>
            <ul className="space-y-3">
                {topParticipants.map((participant, index) => (
                    <li key={index} className="flex justify-between">
                        <span>{participant.country}</span>
                        <span>{participant.participationRate}%</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ParticipationLeaderboard;
