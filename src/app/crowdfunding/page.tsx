import React from 'react';
import { GetServerSideProps } from 'next';
import CrowdfundingCard from '../../components/CrowdfundingCard'; // Reusable card component for projects
import { fetchCrowdfundingProjects } from '../../lib/api'; // API function to fetch crowdfunding data
import { Project } from '../../types/project'; // Types for project data

interface CrowdfundingPageProps {
  projects: Project[];
}

const CrowdfundingPage: React.FC<CrowdfundingPageProps> = ({ projects }) => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Pan-African Infrastructure Crowdfunding</h1>
      <p className="text-lg text-center mb-8">
        Help fund transformative projects across Africa and make a difference in infrastructure, energy, and more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <CrowdfundingCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await fetchCrowdfundingProjects();
  return {
    props: {
      projects,
    },
  };
};

export default CrowdfundingPage;
