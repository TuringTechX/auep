// src/pages/learning/[id].tsx
import React, { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { fetchCourseById, enrollInCourse, markModuleComplete } from '../../lib/api';
import { Course } from '../../types/course';
import Chat from '../../components/Chat'; // Chat component
import { useSession, signIn } from 'next-auth/react';

interface CourseDetailPageProps {
  course: Course;
  userId: string; // userId from authenticated session
}

const CourseDetailPage: React.FC<CourseDetailPageProps> = ({ course, userId }) => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [completedModules, setCompletedModules] = useState<string[]>([]); // Store completed module IDs
  const { data: session, status } = useSession(); // Use NextAuth's session hook

  // Check if the user is already enrolled in the course (could be fetched from the API)
  useEffect(() => {
    if (status === 'authenticated') {
      // Fetch user's enrollment status for this course here (optional).
      // Assume the user is enrolled for demo purposes
      setIsEnrolled(true); // Replace with actual enrollment check logic
    }
  }, [status]);

  const handleEnroll = async () => {
    if (!session) {
      signIn(); // Prompt the user to sign in if they're not authenticated
      return;
    }

    const result = await enrollInCourse(course.id, userId);
    if (result) {
      setIsEnrolled(true);
    } else {
      alert('Enrollment failed, please try again.');
    }
  };

  const handleCompleteModule = async (moduleId: string) => {
    const result = await markModuleComplete(userId, course.id, moduleId);
    if (result) {
      setCompletedModules((prev) => [...prev, moduleId]); // Mark module as complete
    } else {
      alert('Failed to mark module as complete.');
    }
  };

  // If the user isn't authenticated, prompt them to sign in
  if (status === 'loading') return <div>Loading...</div>;
  if (!session) return <div>Please <a href="/api/auth/signin">sign in</a> to view the course.</div>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
      <p className="text-lg mb-4">{course.description}</p>

      {/* Enroll Button */}
      <div className="mb-8">
        {!isEnrolled ? (
          <button
            onClick={handleEnroll}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Enroll in Course
          </button>
        ) : (
          <p className="text-green-600">You are enrolled in this course!</p>
        )}
      </div>

      {/* Conditionally Render Course Modules and Videos if User is Enrolled */}
      {isEnrolled && (
        <>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">Course Modules:</h2>
            {course.modules.map((module) => (
              <div key={module.id} className="mb-4">
                <h3 className="text-lg font-bold">{module.name}</h3>
                <p className="text-gray-700 mb-2">{module.description}</p>

                {/* Video Player */}
                <video
                  controls
                  src={module.videoUrl}
                  className="w-full rounded-lg shadow-md"
                >
                  Your browser does not support the video tag.
                </video>

                {/* Complete Module Button */}
                <button
                  onClick={() => handleCompleteModule(module.id)}
                  disabled={completedModules.includes(module.id)}
                  className={`mt-2 px-4 py-2 rounded-lg ${
                    completedModules.includes(module.id)
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-500 text-white'
                  }`}
                >
                  {completedModules.includes(module.id)
                    ? 'Module Completed'
                    : 'Mark as Complete'}
                </button>
              </div>
            ))}
          </div>

          {/* Chat Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">Join the Discussion:</h2>
            <Chat courseId={course.id} />
          </div>
        </>
      )}
    </div>
  );
};

// Protect the route with getServerSideProps
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { getSession } = await import('next-auth/react'); // Dynamically import to avoid SSR issues
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin', // Redirect to sign in page if not authenticated
        permanent: false,
      },
    };
  }

  const { id } = context.params!;
  const course = await fetchCourseById(id as string);

  return {
    props: {
      course,
      userId: session.user?.id, // Pass the user ID from the session to the page props
    },
  };
};

export default CourseDetailPage;
