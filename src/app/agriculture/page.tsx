// src/app/agriculture/page.tsx
import AgricultureMap from "../../components/AgricultureMap";
import AIRecommendations from "../../components/AIRecommendations";
import CropHealthStats from "../../components/CropHealthStats";
import Link from "next/link";

export default function AgriculturePage() {
  return (
    <div className="container mx-auto py-6 px-4">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6">Smart Agriculture Dashboard</h1>

      {/* Agriculture Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Real-time Agriculture Map */}
        <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Real-time Farmland Map</h2>
          <AgricultureMap />  {/* Interactive map showing farmlands */}
        </div>
        
        {/* AI-Driven Recommendations */}
        <div className="col-span-1 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">AI Recommendations</h2>
          <AIRecommendations />  {/* AI-driven recommendations for crop optimization */}
        </div>
      </div>

      {/* Crop Health and Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        
        {/* Crop Health Stats */}
        <div className="col-span-1 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Crop Health Insights</h2>
          <CropHealthStats />  {/* Component displaying crop health data */}
        </div>

        {/* Historical Data */}
        <div className="col-span-1 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Historical Data & Trends</h2>
          <p>View the historical performance of your crops and soil conditions.</p>
          {/* Link to view detailed historical data */}
          <Link href="/agriculture/history" passHref>
            <a className="text-blue-500 hover:text-blue-700 mt-4 block">View Historical Data</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
