import React, { useEffect, useState } from 'react';

// Simulated API call to fetch transactions
const fetchTransactions = async () => {
  return [
    { id: 1, description: 'Payment to Vendor A', amount: -100, date: '2024-01-10', status: 'success' },
    { id: 2, description: 'Received from Partner B', amount: 250, date: '2024-01-08', status: 'success' },
    { id: 3, description: 'Payment to Vendor C', amount: -50, date: '2024-01-05', status: 'pending' },
    { id: 4, description: 'Received from Partner D', amount: 300, date: '2024-01-01', status: 'failed' },
  ];
};

export default function TransactionList({ limit }: { limit?: number }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions on component mount
    const loadTransactions = async () => {
      const data = await fetchTransactions();
      setTransactions(data);
    };

    loadTransactions();
  }, []);

  return (
    <ul className="bg-white p-4 shadow-md rounded-lg">
      {transactions.slice(0, limit).map((tx) => (
        <li key={tx.id} className="mb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-semibold">{tx.description}</p>
              <p className="text-xs text-gray-500">{tx.date}</p>
            </div>
            <div className="text-right">
              <p
                className={`text-sm font-bold ${tx.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {tx.amount > 0 ? `+${tx.amount}` : tx.amount} AfriCoin
              </p>
              <p
                className={`text-xs font-semibold ${
                  tx.status === 'success'
                    ? 'text-green-600'
                    : tx.status === 'pending'
                    ? 'text-yellow-500'
                    : 'text-red-600'
                }`}>
                {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
