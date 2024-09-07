// src/app/e-commerce/page.tsx
import React from 'react';
import { GetServerSideProps } from 'next';
import ECommerceItem from '../../components/ECommerceItem'; // Component for displaying individual products
import { fetchECommerceProducts } from '../../lib/api'; // API function to fetch products
import { Product } from '../../types/product'; // Type for product data

interface ECommercePageProps {
  products: Product[];
}

const ECommercePage: React.FC<ECommercePageProps> = ({ products }) => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Decentralized Pan-African Marketplace</h1>
      <p className="text-lg text-center mb-8">
        Discover unique products from artisans and businesses across Africa, using AfriCoin for seamless transactions.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ECommerceItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

// Fetch products on the server side
export const getServerSideProps: GetServerSideProps = async () => {
  const products = await fetchECommerceProducts();
  return {
    props: {
      products,
    },
  };
};

export default ECommercePage;
