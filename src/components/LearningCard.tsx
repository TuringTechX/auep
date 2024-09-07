// src/components/LearningCard.tsx
import React from 'react';
import Link from 'next/link';
import { Course } from '../types/course';

interface LearningCardProps {
  course: Course;
}

const LearningCard: React.FC<LearningCardProps> = ({ course }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{course.name}</h2>
        <p className="text-gray-700 mb-4">{course.description}</p>
        <Link href={`/learning/${course.id}`}>
          <a className="text-blue-500 hover:underline">View Course</a>
        </Link>
      </div>
    </div>
  );
};

export default LearningCard;
