export type ProjectCategory = 
  | 'All' 
  | 'Computer Vision' 
  | 'Edge AI' 
  | 'GenAI' 
  | 'LLM' 
  | 'AI Agents';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  fullDescription?: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
  metrics?: ProjectMetric[];
  hardware?: string[];
  architecturePoints?: string[];
}

export interface Skill {
  name: string;
  level?: 'Core' | 'Advanced' | 'Expert';
  icon?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration?: string;
  category?: 'work' | 'voluntary';
  points: string[];
  technologies: string[];
  keyAchievements?: string[];
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  year: string;
  description: string;
  prize?: string;
  tag?: string;
  image?: string;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreLabel: string;
  highlights?: string[];
}

export interface JourneyMilestone {
  step: number;
  domain: string;
  title: string;
  description: string;
  keyTech: string[];
  icon: string;
}

export interface ProfileStat {
  label: string;
  value: string;
  subtext?: string;
}

export interface Profile {
  name: string;
  role: string;
  heroHeadline: string;
  heroSupportingText: string;
  aboutText: string[];
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  stats: ProfileStat[];
  badges: string[];
}
