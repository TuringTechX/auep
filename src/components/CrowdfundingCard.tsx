import React from 'react';

export default function CrowdfundingCard({ projectId }: { projectId: string }) {
  return (
    <div>
      <h3 className="text-lg font-semibold">Project: Solar Farm</h3>
      <p className="text-sm">Help fund this renewable energy project to bring solar power to rural areas.</p>
      <p className="text-sm font-bold">Funding: 75% Complete</p>
    </div>
  );
}
