import silentalertImg from "@/assets/silentalert.jpg.asset.json";
import gatherlyImg from "@/assets/gatherly.jpg.asset.json";
import subsphereImg from "@/assets/subsphere.jpg.asset.json";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  image: string;
  github: string;
  live: string;
  stack: string[];
  overview: string;
  problem: string;
  features: string[];
  role: string;
  challenges: string;
  future: string[];
};

/** Details sourced from each repository's README. Edit freely. */
export const projects: Project[] = [
  {
    slug: "silentalert",
    name: "SilentAlert",
    tagline: "Silent Area Emergency Alert System",
    summary:
      "An IoT acoustic noise-monitoring platform that tracks sound levels in quiet zones and flags threshold violations on a live dashboard.",
    image: silentalertImg.url,
    github: "https://github.com/sadiashova/SilentAlert",
    live: "https://gorgeous-biscotti-3a4c6a.netlify.app/",
    stack: ["JavaScript", "Tailwind CSS", "Chart.js", "Node.js", "Express", "MongoDB", "JWT", "Firebase Auth", "Arduino (C++)"],
    overview:
      "SilentAlert is a noise-monitoring platform designed around Arduino Nano nodes with MAX4466 microphone sensors, a Node.js/Express API, and a single-page dashboard for viewing zones and readings.",
    problem:
      "Quiet spaces such as libraries, hospital wards, and exam halls need a simple way to notice when noise rises above acceptable levels.",
    features: [
      "Single-page dashboard with bar, line, and doughnut charts (Chart.js)",
      "Monitored zones view with noise-threshold indicators",
      "User and admin roles with JWT + bcrypt authentication and Google Sign-In",
      "PDF report export with jsPDF",
      "Arduino Nano + MAX4466 sensor layer bridged to Node.js over USB serial",
      "Dark mode interface",
    ],
    role: "Designed and built the project end-to-end as the sole listed author — frontend, REST API, and hardware integration code.",
    challenges: "Add details about the hardest problems you solved here (for example, serial-bridge reliability or chart performance).",
    future: [
      "Deploy the backend API publicly so the hosted demo uses live data",
      "Push notifications or SMS when a zone exceeds its threshold",
      "Wireless sensor nodes instead of USB serial",
    ],
  },
  {
    slug: "gatherly",
    name: "Gatherly",
    tagline: "Neighborhood gathering discovery",
    summary:
      "A responsive app for discovering local gatherings, with search, category and price filters, detail pages, and signed-in management screens.",
    image: gatherlyImg.url,
    github: "https://github.com/sadiashova/Gatherly",
    live: "https://gatherly-nine-alpha.vercel.app/",
    stack: ["Next.js (App Router)", "React", "JavaScript", "CSS", "Firebase"],
    overview:
      "Gatherly is a neighborhood-gathering discovery app built with the Next.js App Router. It includes public discovery pages, gathering details, an about page, and protected screens for adding and managing gatherings.",
    problem: "People often miss small local events because there's no simple, searchable place to find them.",
    features: [
      "Landing page with feature highlights, gathering preview, and testimonial",
      "Searchable gatherings list with category and price filters",
      "Dedicated gathering detail pages",
      "Protected add-gathering form and manage list with view/delete actions",
      "Auth context that redirects signed-out visitors to login",
      "Demo changes persisted in browser local storage",
    ],
    role: "Built the application's pages, routing, filtering, and protected management flows.",
    challenges: "Add details about the challenges you faced building Gatherly here.",
    future: [
      "Complete Firebase email/password and Google sign-in forms",
      "Replace local storage with a persistent shared database",
    ],
  },
  {
    slug: "subsphere",
    name: "SubSphere",
    tagline: "Subscription box & e-commerce platform",
    summary:
      "A full-stack subscription-box store with one-time or subscribe-and-save checkout, order tracking, and a subscription management dashboard.",
    image: subsphereImg.url,
    github: "https://github.com/sadiashova/SubSphere",
    live: "https://sub-sphere-five.vercel.app/",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Prisma", "SQLite", "REST API Routes"],
    overview:
      "SubSphere is a full-stack subscription box and e-commerce web application built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Prisma with SQLite.",
    problem: "Shoppers want the flexibility to buy once or subscribe — and to pause, resume, or cancel recurring boxes without friction.",
    features: [
      "Product catalog across categories with search, filters, and sorting",
      "Toggle between one-time purchase and subscribe-and-save with delivery cadence",
      "Slide-over cart drawer and cart page with voucher support",
      "Simulated card, bKash/Nagad, and cash-on-delivery checkout",
      "Order tracking timeline and subscription pause/resume/cancel dashboard",
      "Product reviews with star ratings, backed by Next.js API routes",
    ],
    role: "Built the full-stack application — UI, API routes, and Prisma data layer.",
    challenges: "Add details about the challenges you faced building SubSphere here.",
    future: [
      "Integrate a real payment gateway",
      "Move from SQLite to a hosted production database",
      "User accounts with order history across devices",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
