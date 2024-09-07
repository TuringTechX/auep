import React, { useEffect, useState } from 'react';

// Simulate fetching wallet balance from an API
const fetchWalletBalance = async () => {
  // Replace this with actual API call
  return {
    balance: 1000,  // Example balance in AfriCoin
    exchangeRate: 0.5,  // Example AfriCoin to USD conversion rate
  };
};

export default function WalletBalance() {
  const [balance, setBalance] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(0);

  useEffect(() => {
    // Fetch balance and exchange rate on component mount
    const loadWalletData = async () => {
      const walletData = await fetchWalletBalance();
      setBalance(walletData.balance);
      setExchangeRate(walletData.exchangeRate);
    };

    loadWalletData();
  }, []);

  // Calculate equivalent in USD
  const balanceInUSD = (balance * exchangeRate).toFixed(2);

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-lg font-semibold">Balance</h3>
      <p className="text-2xl font-bold">{balance} AfriCoin</p>
      <p className="text-sm text-gray-500">Equivalent to USD: ${balanceInUSD}</p>
    </div>
  );
}
