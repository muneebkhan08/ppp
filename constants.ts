import { Code2, Megaphone, Terminal, Layout } from 'lucide-react';
import { Project, Experience, SkillCategory, ContactInfo } from './types';

export const CONTACT_INFO: ContactInfo = {
  phone: "03157236266",
  email: "muneebkhan@gmail.com",
  location: "Pakistan"
};

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    role: "Tech Team & Media Team Member",
    company: "EduAI Project",
    period: "2023 - Present",
    description: "Contributing to the technological development of educational AI tools while managing media presence and content strategy."
  },
  {
    id: "2",
    role: "Intern",
    company: "Devsinc",
    period: "Summer 2023",
    description: "Gained hands-on experience in enterprise software development lifecycles and collaborative coding environments."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "CRM System",
    description: "A comprehensive Customer Relationship Management tool designed to streamline business processes and enhance client interactions.",
    tags: ["React", "Node.js", "Database Design"],
    image: "https://picsum.photos/800/600?random=1"
  },
  {
    id: "2",
    title: "WhatsApp Clone",
    description: "Real-time messaging application replicating core functionalities of WhatsApp including instant messaging and status updates.",
    tags: ["Socket.io", "React", "Real-time"],
    image: "https://picsum.photos/800/600?random=2"
  },
  {
    id: "3",
    title: "Interview Platform",
    description: "A platform designed to conduct mock interviews and provide feedback to candidates using structured evaluation metrics.",
    tags: ["Full Stack", "WebRTC", "UI/UX"],
    image: "https://picsum.photos/800/600?random=3"
  },
  {
    id: "4",
    title: "EduAI Marketing Campaign",
    description: "Strategic media campaign design and execution to boost visibility for the EduAI platform.",
    tags: ["Digital Marketing", "Content Creation", "Analytics"],
    image: "https://picsum.photos/800/600?random=4"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Development",
    icon: Terminal,
    skills: ["React.js", "TypeScript", "Node.js", "HTML/CSS", "Tailwind CSS", "Git"]
  },
  {
    name: "Media & Marketing",
    icon: Megaphone,
    skills: ["Social Media Marketing", "Content Strategy", "Video Editing", "Brand Management"]
  },
  {
    name: "Design",
    icon: Layout,
    skills: ["UI/UX Fundamentals", "Responsive Design", "Visual Aesthetics", "Prototyping"]
  },
  {
    name: "Core Competencies",
    icon: Code2,
    skills: ["Problem Solving", "Team Collaboration", "Agile Methodology", "Communication"]
  }
];