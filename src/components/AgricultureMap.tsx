// src/components/AgricultureMap.tsx
import React from "react";
import { MapContainer, TileLayer, Marker, Circle, Tooltip } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

// Mock data for farmlands and crop health
const farmlands = [
  {
    id: 1,
    location: "Kano, Nigeria",
    coords: [12.0022, 8.5919],
    cropHealth: "healthy",
    soilMoisture: 75,
  },
  {
    id: 2,
    location: "Nairobi, Kenya",
    coords: [-1.286389, 36.817223],
    cropHealth: "at-risk",
    soilMoisture: 45,
  },
  {
    id: 3,
    location: "Cairo, Egypt",
    coords: [30.0444, 31.2357],
    cropHealth: "healthy",
    soilMoisture: 80,
  },
];

// Function to determine circle color based on crop health
const getHealthColor = (cropHealth: string) => {
  switch (cropHealth) {
    case "healthy":
      return "green";
    case "at-risk":
      return "red";
    default:
      return "yellow";
  }
};

export default function AgricultureMap() {
  return (
    <div className="relative w-full h-[500px] bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">African Farmland Overview</h3>

      {/* Leaflet Map */}
      <MapContainer
        center={[0, 20]} // Center of Africa
        zoom={4}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Tile layer - OpenStreetMap */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Display farmland markers and crop health */}
        {farmlands.map((farm) => (
          <Circle
            key={farm.id}
            center={farm.coords}
            radius={20000} // Adjust radius to reflect farmland size
            color={getHealthColor(farm.cropHealth)}
            fillOpacity={0.5}
          >
            <Tooltip>
              <div>
                <strong>{farm.location}</strong>
                <p>Crop Health: {farm.cropHealth}</p>
                <p>Soil Moisture: {farm.soilMoisture}%</p>
              </div>
            </Tooltip>
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
}
