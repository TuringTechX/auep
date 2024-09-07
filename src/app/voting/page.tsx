// src/app/voting/page.tsx
import React, { useState, useEffect } from 'react';
import VotingCard from '@/components/VotingCard';
import VotingDial from '@/components/VotingDial';
import ParticipationLeaderboard from '@/components/ParticipationLeaderboard';
import { fetchReferendums, fetchVotingData } from '@/lib/api'; // API utilities to fetch voting data

const VotingPage = () => {
    const [referendums, setReferendums] = useState([]);
    const [votes, setVotes] = useState([]);
    
    // Fetch referendums and voting data on mount
    useEffect(() => {
        async function loadReferendums() {
            const data = await fetchReferendums();
            setReferendums(data);
        }
        
        async function loadVotes() {
            const voteData = await fetchVotingData();
            setVotes(voteData);
        }

        loadReferendums();
        loadVotes();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 text-center">Blockchain Voting Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {referendums.map((referendum) => (
                    <VotingCard key={referendum.id} referendum={referendum} />
                ))}
            </div>
            <div className="mt-12">
                <h2 className="text-3xl font-semibold text-center">Your Vote Matters</h2>
                <VotingDial votes={votes} />
            </div>
            <div className="mt-12">
                <h2 className="text-3xl font-semibold text-center">Top Participants</h2>
                <ParticipationLeaderboard />
            </div>
        </div>
    );
};

export default VotingPage;
