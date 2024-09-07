// pages/api/visa-status.ts
export default function handler(req, res) {
    const visaStatus = [
      { id: 1, name: "Kenya", status: "visa-free" },
      { id: 2, name: "Nigeria", status: "visa-required" },
      { id: 3, name: "South Africa", status: "visa-pending" },
    ];
    res.status(200).json(visaStatus);
  }
  
  // pages/api/travel-feed.ts
  export default function handler(req, res) {
    const travelFeed = [
      {
        id: 1,
        name: "John Doe",
        bio: "Crossing from Kenya to Uganda",
        photoUrl: "/images/johndoe.jpg",
      },
      {
        id: 2,
        name: "Jane Smith",
        bio: "Crossing from Nigeria to Ghana",
        photoUrl: "/images/janesmith.jpg",
      },
    ];
    res.status(200).json(travelFeed);
  }
  