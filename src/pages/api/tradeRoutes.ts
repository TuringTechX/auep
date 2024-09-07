// src/pages/api/tradeRoutes.ts

// Mock API to fetch trade routes (replace with real backend or blockchain data)
export default function handler(req, res) {
    const tradeRoutes = [
      {
        id: 1,
        from: [6.5244, 3.3792], // Lagos
        to: [-4.4419, 15.2663], // Kinshasa
        status: "in-progress",
      },
      {
        id: 2,
        from: [-1.286389, 36.817223], // Nairobi
        to: [30.0444, 31.2357], // Cairo
        status: "completed",
      },
      {
        id: 3,
        from: [-26.2041, 28.0473], // Johannesburg
        to: [6.5244, 3.3792], // Lagos
        status: "delayed",
      },
    ];
  
    res.status(200).json(tradeRoutes);
  }
  