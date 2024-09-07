// src/components/ECommerceItem.tsx
import React from 'react';
import Link from 'next/link';
import { Product } from '../types/product';

interface ECommerceItemProps {
  product: Product;
}

const ECommerceItem: React.FC<ECommerceItemProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="text-sm text-gray-600 mb-4">{product.country}</p>
        <p className="text-lg font-bold text-green-600">{product.afriCoinPrice} AfriCoin</p>
        <Link href={`/e-commerce/${product.id}`}>
          <a className="text-blue-500 hover:underline">View Details</a>
        </Link>
      </div>
    </div>
  );
};

export default ECommerceItem;
