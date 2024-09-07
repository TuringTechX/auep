import WalletBalance from "../../components/WalletBalance";
import TransactionList from "../../components/TransactionList";
import CrowdfundingCard from "../../components/CrowdfundingCard";
import TradeMap from "../../components/TradeMap";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="container mx-auto py-6 px-4">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Dashboard Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Wallet Overview Section */}
        <div className="col-span-1 lg:col-span-1 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">AfriCoin Wallet</h2>
          <WalletBalance />  {/* Component that shows the current AfriCoin balance */}
          <Link href="/wallet" passHref>
            <a className="text-blue-500 hover:text-blue-700 mt-4 block">View Wallet Details</a>
          </Link>
        </div>
        
        {/* Recent Transactions Section */}
        <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <TransactionList limit={5} />  {/* Component to show the recent 5 transactions */}
          <Link href="/wallet/transactions" passHref>
            <a className="text-blue-500 hover:text-blue-700 mt-4 block">View All Transactions</a>
          </Link>
        </div>
      </div>

      {/* Crowdfunding & Trade Network */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        
        {/* Crowdfunding Projects */}
        <div className="col-span-1 lg:col-span-1 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Active Crowdfunding Projects</h2>
          <CrowdfundingCard projectId="solar-farm" /> {/* Example project */}
          <Link href="/crowdfunding" passHref>
            <a className="text-blue-500 hover:text-blue-700 mt-4 block">Explore More Projects</a>
          </Link>
        </div>

        {/* Trade Network Status */}
        <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Trade Network Overview</h2>
          <TradeMap />  {/* Component that shows active trade routes */}
          <Link href="/trade" passHref>
            <a className="text-blue-500 hover:text-blue-700 mt-4 block">View Full Trade Network</a>
          </Link>
        </div>
      </div>

      {/* Shortcuts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Shortcut 1: Voting */}
        <div className="col-span-1 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Decentralized Voting</h3>
          <p>Participate in governance issues and vote on key matters.</p>
          <Link href="/voting" passHref>
            <a className="text-blue-500 hover:text-blue-700 mt-4 block">Go to Voting</a>
          </Link>
        </div>

        {/* Shortcut 2: Learning */}
        <div className="col-span-1 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Timbuktu Digital University</h3>
          <p>Access online courses and certifications in technology and entrepreneurship.</p>
          <Link href="/learning" passHref>
            <a className="text-blue-500 hover:text-blue-700 mt-4 block">Explore Courses</a>
          </Link>
        </div>

        {/* Shortcut 3: Agriculture */}
        <div className="col-span-1 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Smart Agriculture Dashboard</h3>
          <p>Get real-time insights and AI-driven farming advice to optimize your crops.</p>
          <Link href="/agriculture" passHref>
            <a className="text-blue-500 hover:text-blue-700 mt-4 block">View Agriculture Insights</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
