import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ExternalLink, Github, Lightbulb, Target, User, Wrench } from "lucide-react";
import type { ReactNode } from "react";
import { getProject, projects } from "@/data/projects";
import { Reveal } from "@/components/portfolio/Reveal";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.project;
    const title = p ? `${p.name} — ${p.tagline} | Sadia Zaman` : "Project not found | Sadia Zaman";
    const description = p?.summary ?? "This project could not be found.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
        ...(p ? [] : [{ name: "robots", content: "noindex" }]),
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-5 py-40 text-center">
      <h1 className="text-4xl font-bold">Project not found</h1>
      <Link to="/" hash="projects" className="mt-6 inline-flex items-center gap-2 text-primary"><ArrowLeft className="h-4 w-4" /> Back to Projects</Link>
    </div>
  ),
  component: ProjectPage,
});

function Block({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <Reveal>
      <section className="surface rounded-2xl p-6 sm:p-8">
        <h2 className="flex items-center gap-2 font-sans text-lg font-semibold tracking-normal">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 text-primary">{icon}</span>{title}
        </h2>
        <div className="mt-4 text-muted-foreground">{children}</div>
      </section>
    </Reveal>
  );
}

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const others = projects.filter((o) => o.slug !== p.slug);
  return (
    <motion.main key={p.slug} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative pt-28 pb-24">
      <div aria-hidden className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-5">
        <Link to="/" hash="projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Link>
        <p className="eyebrow mt-8">{p.tagline}</p>
        <h1 className="mt-2 text-5xl font-extrabold sm:text-7xl">{p.name}</h1>
        <p className="mt-5 max-w-2xl text-lg text-foreground/85">{p.overview}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow">
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-6 py-3 font-semibold hover:border-primary">
            <Github className="h-4 w-4" /> GitHub Repository
          </a>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }} className="mt-12 overflow-hidden rounded-2xl border border-border shadow-glow">
          <img src={p.image} alt={`${p.name} interface screenshot`} className="w-full" />
        </motion.div>

        <div className="mt-12">
          <p className="eyebrow mb-3">Tech stack</p>
          <ul className="flex flex-wrap gap-2">
            {p.stack.map((s) => <li key={s} className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-sm">{s}</li>)}
          </ul>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Block icon={<Target className="h-4 w-4" />} title="Problem">{p.problem}</Block>
          <Block icon={<User className="h-4 w-4" />} title="My role">{p.role}</Block>
          <div className="md:col-span-2">
            <Block icon={<CheckCircle2 className="h-4 w-4" />} title="Key features">
              <ul className="grid gap-3 sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{f}</li>
                ))}
              </ul>
            </Block>
          </div>
          <Block icon={<Wrench className="h-4 w-4" />} title="Challenges">{p.challenges}</Block>
          <Block icon={<Lightbulb className="h-4 w-4" />} title="Future improvements">
            <ul className="list-disc space-y-1 pl-5">{p.future.map((f) => <li key={f}>{f}</li>)}</ul>
          </Block>
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <p className="eyebrow mb-4">More projects</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {others.map((o) => (
              <Link key={o.slug} to="/projects/$slug" params={{ slug: o.slug }} className="surface group flex items-center gap-4 rounded-2xl p-4 transition hover:shadow-glow">
                <img src={o.image} alt="" className="h-16 w-24 rounded-lg object-cover object-top" loading="lazy" />
                <div>
                  <p className="font-display text-lg font-bold group-hover:text-primary">{o.name}</p>
                  <p className="text-sm text-muted-foreground">{o.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.main>
  );
}
