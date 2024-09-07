import React from 'react';

export default function WalletBalance() {
  const balance = 1000;  // Example balance, replace with actual data fetch
  return (
    <div>
      <h3 className="text-lg font-semibold">Balance</h3>
      <p className="text-2xl font-bold">{balance} AfriCoin</p>
    </div>
  );
}
