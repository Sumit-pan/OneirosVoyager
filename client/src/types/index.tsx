export interface BlogPost {
    id: number;
    title: string;
    content: string;
    excerpt: string;
    date: string;
    status: 'published' | 'draft';
    author: string;
    tags: string[];
  }
  
  export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image?: string;
    github: string;
    liveDemo: string;
    status: 'completed' | 'in-progress' | 'planned';
  }
  
  export interface UserCredentials {
    username: string;
    password: string;
  }