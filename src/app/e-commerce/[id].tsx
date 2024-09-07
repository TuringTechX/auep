// src/app/e-commerce/[id].tsx
import React from 'react';
import { GetServerSideProps } from 'next';
import { fetchECommerceProductById } from '../../lib/api';
import { Product } from '../../types/product';

interface ProductDetailPageProps {
  product: Product;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover rounded-lg" />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-sm text-gray-600 mb-4">{product.country}</p>
          <p className="text-lg font-bold text-green-600 mb-4">{product.afriCoinPrice} AfriCoin</p>
          <p className="text-gray-800 mb-8">{product.description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Buy with AfriCoin
          </button>
        </div>
      </div>
    </div>
  );
};

// Fetch product by ID
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const product = await fetchECommerceProductById(id as string);

  return {
    props: {
      product,
    },
  };
};

export default ProductDetailPage;
