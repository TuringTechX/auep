// src/components/VotingDial.tsx
import React from 'react';

const VotingDial = ({ votes }) => {
    return (
        <div className="flex justify-center">
            {votes.map((vote) => (
                <div key={vote.id} className="mx-4 text-center">
                    <h4 className="text-xl font-bold">{vote.issue}</h4>
                    <div className="relative w-40 h-40">
                        <svg viewBox="0 0 36 36" className="circular-chart">
                            <path
                                className="circle"
                                strokeDasharray={`${vote.percentage}, 100`}
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                            {vote.percentage}%
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VotingDial;
