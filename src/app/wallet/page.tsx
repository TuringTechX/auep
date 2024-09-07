// src/app/wallet/page.tsx
import React, { useState, useEffect } from 'react';
import WalletBalance from '@/components/WalletBalance';
import TransactionList from '@/components/TransactionList';
import SendAfriCoin from '@/components/SendAfriCoin';
import ReceiveAfriCoin from '@/components/ReceiveAfriCoin';
import { fetchWalletData, fetchTransactions } from '@/lib/api';  // API utilities for wallet data

const WalletPage = () => {
    const [balance, setBalance] = useState(0);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        async function loadWalletData() {
            const walletData = await fetchWalletData();
            setBalance(walletData.balance);
            const txData = await fetchTransactions();
            setTransactions(txData);
        }

        loadWalletData();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 text-center">AfriCoin Wallet Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1">
                    <WalletBalance balance={balance} />
                    <div className="mt-6">
                        <SendAfriCoin />
                        <ReceiveAfriCoin />
                    </div>
                </div>
                <div className="col-span-1">
                    <TransactionList transactions={transactions} />
                </div>
            </div>
        </div>
    );
};

export default WalletPage;
