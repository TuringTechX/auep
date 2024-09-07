// src/types/profile.ts

export interface EnrolledCourse {
    id: string;
    name: string;
    progress: number;
  }
  
  export interface StudentProfile {
    id: string;
    name: string;
    email: string;
    courses: EnrolledCourse[];
  }
  