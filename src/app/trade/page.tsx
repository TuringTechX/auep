// src/app/trade/page.tsx
import TradeMap from "../../components/TradeMap";
import Link from "next/link";

export default function TradePage() {
  return (
    <div className="container mx-auto py-6 px-4">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6">Trade Network Overview</h1>

      {/* TradeMap Component */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Active Trade Routes</h2>
        <TradeMap />  {/* This component will display the trade routes */}
      </div>

      {/* Description & Call to Action */}
      <div className="mt-6">
        <p className="text-lg">
          The Africa Unified Economic Platform enables seamless cross-border trade across Africa.
          Visualize active shipments, track contract statuses, and explore trade routes in real-time.
        </p>
        <Link href="/dashboard" passHref>
          <a className="text-blue-500 hover:text-blue-700 mt-4 block">Return to Dashboard</a>
        </Link>
      </div>
    </div>
  );
}
