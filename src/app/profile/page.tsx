// src/app/profile/page.tsx
import React from 'react';
import { GetServerSideProps } from 'next';
import { fetchStudentProfile } from '../../lib/api';
import { StudentProfile } from '../../types/profile'; // Define profile types

interface ProfilePageProps {
  profile: StudentProfile;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ profile }) => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome, {profile.name}</h1>
      <p className="text-lg mb-8">Track your progress and manage your profile</p>

      <h2 className="text-xl font-bold mb-4">Enrolled Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profile.courses.map((course) => (
          <div key={course.id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-bold">{course.name}</h3>
            <p className="text-sm text-gray-600">Progress: {course.progress}%</p>
            <a href={`/learning/${course.id}`} className="text-blue-500 hover:underline">
              Continue Learning
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userId = 'user123'; // Replace this with actual userId from auth context
  const profile = await fetchStudentProfile(userId);

  return {
    props: {
      profile,
    },
  };
};

export default ProfilePage;
