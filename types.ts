import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: LucideIcon;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
}