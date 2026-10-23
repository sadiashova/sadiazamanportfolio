import type { IconType } from "react-icons";
import {
  SiHtml5, SiCss, SiTailwindcss, SiReact, SiNextdotjs, SiChartdotjs, SiNodedotjs, SiExpress,
  SiJsonwebtokens, SiFirebase, SiJavascript, SiTypescript, SiArduino, SiMongodb, SiMongoose,
  SiPrisma, SiSqlite, SiGit, SiGithub, SiVercel, SiNetlify,
} from "react-icons/si";
import { TbApi, TbBrain, TbFlask } from "react-icons/tb";

/** Maps a skill name (from skillGroups) to its logo. */
export const skillIcons: Record<string, IconType> = {
  HTML: SiHtml5, CSS: SiCss, "Tailwind CSS": SiTailwindcss, React: SiReact, "Next.js": SiNextdotjs,
  "Chart.js": SiChartdotjs, "Node.js": SiNodedotjs, Express: SiExpress, "REST APIs": TbApi,
  "JWT Auth": SiJsonwebtokens, "Firebase Auth": SiFirebase, JavaScript: SiJavascript,
  TypeScript: SiTypescript, "C++ (Arduino)": SiArduino, MongoDB: SiMongodb, Mongoose: SiMongoose,
  Prisma: SiPrisma, SQLite: SiSqlite, Git: SiGit, GitHub: SiGithub, Vercel: SiVercel, Netlify: SiNetlify,
  "Large Language Models": TbBrain, "AI Research": TbFlask,
};
