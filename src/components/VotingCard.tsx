// src/components/VotingCard.tsx
import React from 'react';

const VotingCard = ({ referendum }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 shadow-md">
            <h3 className="text-2xl font-bold">{referendum.title}</h3>
            <p className="mt-2 text-gray-600">{referendum.description}</p>
            <div className="mt-4">
                <span className={`px-4 py-2 text-white rounded ${referendum.status === 'completed' ? 'bg-green-500' : referendum.status === 'ongoing' ? 'bg-yellow-500' : 'bg-red-500'}`}>
                    {referendum.status}
                </span>
            </div>
            {referendum.status === 'ongoing' && (
                <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700">
                    Cast Your Vote
                </button>
            )}
        </div>
    );
};

export default VotingCard;
