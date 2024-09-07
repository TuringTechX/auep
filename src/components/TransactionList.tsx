import React from 'react';

const transactions = [
  { id: 1, description: 'Payment to Vendor A', amount: -100, date: '2024-01-10' },
  { id: 2, description: 'Received from Partner B', amount: 250, date: '2024-01-08' },
];

export default function TransactionList({ limit }: { limit?: number }) {
  return (
    <ul>
      {transactions.slice(0, limit).map((tx) => (
        <li key={tx.id} className="mb-2">
          <p className="text-sm">{tx.description} - {tx.amount} AfriCoin</p>
          <p className="text-xs text-gray-500">{tx.date}</p>
        </li>
      ))}
    </ul>
  );
}
