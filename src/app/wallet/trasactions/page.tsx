// src/app/wallet/transactions/page.tsx
import React, { useState, useEffect } from 'react';
import TransactionList from '@/components/TransactionList';
import { fetchTransactions } from '@/lib/api';  // Fetch transactions from API

const TransactionHistoryPage = () => {
    const [transactions, setTransactions] = useState([]);
    const [filter, setFilter] = useState('all');  // To filter transactions by status

    useEffect(() => {
        async function loadTransactions() {
            const txData = await fetchTransactions();
            setTransactions(txData);
        }
        loadTransactions();
    }, []);

    const filteredTransactions = transactions.filter((tx) => filter === 'all' || tx.status === filter);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 text-center">Transaction History</h1>
            <div className="mb-4">
                <select value={filter} onChange={(e) => setFilter(e.target.value)} className="border border-gray-300 p-2 rounded">
                    <option value="all">All</option>
                    <option value="success">Success</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                </select>
            </div>
            <TransactionList transactions={filteredTransactions} />
        </div>
    );
};

export default TransactionHistoryPage;
