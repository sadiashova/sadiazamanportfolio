import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { About, Education, Experience, Projects, Skills } from "@/components/portfolio/Sections";
import { Contact } from "@/components/portfolio/Contact";

const title = "Sadia Zaman — Full-Stack Developer Portfolio";
const description =
  "Portfolio of Sadia Zaman, final-year CSE student in Dhaka building full-stack web apps and exploring AI & LLM research.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sadia Zaman",
          jobTitle: "Full-Stack Developer",
          email: "mailto:sadiazaman485@gmail.com",
          address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
          alumniOf: "Manarat International University",
          sameAs: ["https://github.com/sadiashova", "https://www.linkedin.com/in/sadia-zaman-b5861b2ba/"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Experience />
      <Contact />
    </>
  );
}
