// src/types/course.ts
export interface Course {
    id: string;
    name: string;
    description: string;
    modules: Module[];
    lectureVideoUrl: string;
  }
  
  export interface Module {
    id: string;
    name: string;
    description: string;
  }

// src/types/course.ts
export interface Module {
  id: string;
  name: string;
  description: string;
  videoUrl: string; // URL for the video lecture
}

export interface Course {
  id: string;
  name: string;
  description: string;
  modules: Module[];
  // other fields...
}
