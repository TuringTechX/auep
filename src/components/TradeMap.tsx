// src/components/TradeMap.tsx
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Tooltip } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

// Function to determine the color of the polyline based on status
const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "green";
    case "in-progress":
      return "yellow";
    case "delayed":
      return "red";
    default:
      return "gray";
  }
};

export default function TradeMap() {
  const [tradeRoutes, setTradeRoutes] = useState([]);

  // Fetch trade routes data from the API
  useEffect(() => {
    const fetchTradeRoutes = async () => {
      const res = await fetch("/api/tradeRoutes");
      const data = await res.json();
      setTradeRoutes(data);
    };

    fetchTradeRoutes();
  }, []);

  return (
    <div className="relative w-full h-[500px] bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Africa Trade Routes</h3>

      {/* Leaflet Map */}
      <MapContainer
        center={[0, 20]} // Center of Africa
        zoom={4}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Display trade routes as polylines */}
        {tradeRoutes.map((route, index) => (
          <Polyline
            key={index}
            positions={[route.from, route.to]}
            color={getStatusColor(route.status)}
            weight={4}
            opacity={0.7}
          >
            <Tooltip>
              Route Status: {route.status}
            </Tooltip>
          </Polyline>
        ))}
      </MapContainer>
    </div>
  );
}
