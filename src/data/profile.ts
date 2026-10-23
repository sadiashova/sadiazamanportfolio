import type { LucideIcon } from "lucide-react";
import {
  Code2, Puzzle, BrainCircuit, GraduationCap, Users, Trophy, Rocket, FlaskConical,
  FileCheck2, Globe2, Award, HeartPulse,
} from "lucide-react";

export const profile = {
  name: "Sadia Zaman",
  designation: "Full-Stack Developer",
  label: "CSE Student · Aspiring Software Engineer",
  headline: "Building thoughtful digital experiences through code.",
  intro:
    "Final-year Computer Science student who enjoys turning ideas into working web applications — from database to interface — and solving problems along the way.",
  roles: ["Full-Stack Developer", "Software Engineer", "AI Research Enthusiast"],
  email: "sadiazaman485@mail.com",
  phone: "+8801606274728",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/sadiashova",
  linkedin: "https://www.linkedin.com/in/sadia-zaman-b5861b2ba/",
  about:
    "I'm Sadia Zaman, a final-year Computer Science and Engineering student at Manarat International University, Bangladesh. I'm passionate about full-stack development, software engineering, and creating useful digital products. Alongside building web applications, I'm exploring Artificial Intelligence and Large Language Models through academic research. I enjoy programming competitions, hackathons, workshops, and opportunities to learn, collaborate, and solve real-world problems.",
};

/**
 * RESUME: add your PDF to /public (e.g. public/sadia-zaman-resume.pdf)
 * and set this to "/sadia-zaman-resume.pdf". While empty, resume buttons
 * render as disabled "coming soon" buttons instead of a broken link.
 */
export const RESUME_URL = "";

export const highlights: { icon: LucideIcon; label: string }[] = [
  { icon: Code2, label: "Software Development" },
  { icon: Puzzle, label: "Problem-Solving" },
  { icon: BrainCircuit, label: "AI and LLM Research" },
  { icon: GraduationCap, label: "Academic Growth" },
  { icon: Users, label: "Collaboration & Continuous Learning" },
];

/** Only technologies verified in Sadia's project repositories. Add more as confirmed. */
export const skillGroups: { title: string; items: string[] }[] = [
  { title: "Frontend Development", items: ["HTML", "CSS", "Tailwind CSS", "React", "Next.js", "Chart.js"] },
  { title: "Backend Development", items: ["Node.js", "Express", "REST APIs", "JWT Auth", "Firebase Auth"] },
  { title: "Programming Languages", items: ["JavaScript", "TypeScript", "C++ (Arduino)"] },
  { title: "Databases", items: ["MongoDB", "Mongoose", "Prisma", "SQLite"] },
  { title: "Developer Tools", items: ["Git", "GitHub", "Vercel", "Netlify"] },
  { title: "AI and Research", items: ["Large Language Models", "AI Research"] },
];

export const education = {
  school: "Manarat International University",
  degree: "BSc in Computer Science and Engineering",
  status: "Final Year",
  graduation: "Expected April 2027",
  location: "Bangladesh",
};

export type TimelineItem = {
  icon: LucideIcon;
  kind: string;
  title: string;
  detail: string;
  badge?: string;
};

/** Edit titles/dates here once verified. */
export const timeline: TimelineItem[] = [
  {
    icon: Trophy,
    kind: "Programming Contest",
    title: "4th Place — Team Pixel Justers",
    detail: "Programming contest organized by the Programming Club, Manarat International University.",
    badge: "4th place",
  },
  {
    icon: Rocket,
    kind: "AI Hackathon",
    title: "Phase 2 Qualifier — Team AI4U",
    detail: "Advanced to the second qualifying stage of an AI hackathon.",
    badge: "Phase 2",
  },
  {
    icon: FlaskConical,
    kind: "Thesis Research",
    title: "AI & Large Language Models",
    detail: "Ongoing undergraduate thesis research in Artificial Intelligence and Large Language Models.",
    badge: "Ongoing",
  },
  {
    icon: FileCheck2,
    kind: "Research Abstract",
    title: "Abstract accepted — ISRC, University of Dhaka Research Society",
    detail: "An AI-related research abstract was accepted. This is an accepted abstract, not a published paper.",
    badge: "Abstract accepted",
  },
  {
    icon: Globe2,
    kind: "Research Abstract",
    title: "Abstract accepted — SBAC, Thailand",
    detail: "An AI-related research abstract was accepted for SBAC in Thailand. Abstract acceptance only, not a full-paper publication.",
    badge: "Abstract accepted",
  },
  {
    icon: Award,
    kind: "Workshops & Certificates",
    title: "Workshops and learning activities",
    detail: "Participated in various workshops and learning activities, earning certificates through selected ones.",
  },
  {
    icon: HeartPulse,
    kind: "Volunteering",
    title: "Blood donation",
    detail: "Took part in blood donation and received related certificates.",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;
