// lib/api.ts
export const fetchCrowdfundingProjects = async () => {
  try {
    const res = await fetch('https://api.example.com/crowdfunding-projects');
    const data = await res.json();
    return data.projects;
  } catch (error) {
    console.error('Failed to fetch crowdfunding projects:', error);
    return [];
  }
};

// src/lib/api.ts
export const fetchECommerceProducts = async () => {
try {
  const res = await fetch('https://api.example.com/ecommerce-products');
  const data = await res.json();
  return data.products;
} catch (error) {
  console.error('Error fetching e-commerce products:', error);
  return [];
}
};

// src/lib/api.ts
export const fetchECommerceProductById = async (id: string) => {
  try {
    const res = await fetch(`https://api.example.com/ecommerce-products/${id}`);
    const data = await res.json();
    return data.product;
  } catch (error) {
    console.error('Error fetching product details:', error);
    return null;
  }
};

// src/lib/api.ts
export const fetchCourses = async () => {
  try {
    const res = await fetch('https://api.example.com/courses');
    const data = await res.json();
    return data.courses;
  } catch (error) {
    console.error('Failed to fetch courses:', error);
    return [];
  }
};

// src/lib/api.ts
export const fetchCourseById = async (id: string) => {
  try {
    const res = await fetch(`https://api.example.com/courses/${id}`);
    const data = await res.json();
    return data.course;
  } catch (error) {
    console.error(`Failed to fetch course with id ${id}:`, error);
    return null;
  }
};

// src/lib/api.ts

// Simulate enrolling a user in a course
export const enrollInCourse = async (courseId: string, userId: string) => {
  try {
    const res = await fetch(`https://api.example.com/enroll`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ courseId, userId }),
    });

    if (!res.ok) {
      throw new Error('Failed to enroll in course');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error enrolling in course:', error);
    return null;
  }
};

// src/lib/api.ts

export const fetchStudentProfile = async (userId: string) => {
  try {
    const res = await fetch(`https://api.example.com/student-profile/${userId}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch student profile:', error);
    return null;
  }
};

// src/lib/api.ts

export async function fetchReferendums() {
  // Simulate fetching data from the blockchain or API
  return [
      { id: 1, title: 'Referendum on Climate Action', description: 'Vote for the new climate action policies.', status: 'ongoing' },
      { id: 2, title: 'Economic Reform Proposal', description: 'Vote on the economic reform for sustainable growth.', status: 'completed' },
  ];
}

export async function fetchVotingData() {
  // Simulate fetching vote data
  return [
      { id: 1, issue: 'Climate Action', percentage: 75 },
      { id: 2, issue: 'Economic Reform', percentage: 60 },
  ];
}


// src/lib/api.ts
export const markModuleComplete = async (userId: string, courseId: string, moduleId: string) => {
  try {
    const res = await fetch('https://api.example.com/mark-module-complete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, courseId, moduleId }),
    });

    if (!res.ok) {
      throw new Error('Failed to mark module as complete');
    }

    return res.json();
  } catch (error) {
    console.error('Error marking module as complete:', error);
    return null;
  }
};

