// src/app/learning/page.tsx
import React from 'react';
import { GetServerSideProps } from 'next';
import LearningCard from '../../components/LearningCard'; // Reusable component for displaying individual courses
import { fetchCourses } from '../../lib/api'; // API function to fetch course data
import { Course } from '../../types/course'; // TypeScript type for course data

interface LearningPageProps {
  courses: Course[];
}

const LearningPage: React.FC<LearningPageProps> = ({ courses }) => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Timbuktu Digital University</h1>
      <p className="text-lg text-center mb-8">
        Browse courses on technology, African history, entrepreneurship, and more. Empower your learning journey in a decentralized online platform.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <LearningCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

// Fetch courses from the server-side for SEO optimization
export const getServerSideProps: GetServerSideProps = async () => {
  const courses = await fetchCourses();
  return {
    props: {
      courses,
    },
  };
};

export default LearningPage;
