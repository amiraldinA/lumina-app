import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface MentalDisorder {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  symptoms: string[];
  treatment: string[];
}

export interface Resource {
  id: string;
  name: string;
  phone: string;
  website: string;
  description: string;
  isNational: boolean;
  category: 'Crisis' | 'Support' | 'Information';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  role: string;
  quote: string;
  story: string;
  imageUrl: string;
}

export interface Counselor {
  id: string;
  name: string;
  specialty: string;
  availableTimes: string[];
  imageUrl: string;
}

export interface ForumTopic {
  id: string;
  title: string;
  author: string;
  replies: number;
  views: number;
  lastActive: string;
  category: 'General' | 'Anxiety' | 'Depression' | 'Success Stories';
}
