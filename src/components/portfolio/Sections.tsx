import { motion } from "framer-motion";
import { CalendarClock, GraduationCap, Layers, MapPin, Sparkles } from "lucide-react";
import { education, highlights, profile, skillGroups, timeline } from "@/data/profile";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal, SectionHeading } from "./Reveal";

const wrap = "mx-auto max-w-6xl px-5";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className={`${wrap} grid gap-12 md:grid-cols-[1fr_1.4fr]`}>
        <SectionHeading eyebrow="About me" title={<>Curious builder, <span className="text-gradient">lifelong learner.</span></>} />
        <div>
          <Reveal><p className="text-lg leading-relaxed text-foreground/85">{profile.about}</p></Reveal>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, label }, i) => (
              <Reveal key={label} delay={i * 0.06}>
                <li className="surface flex items-center gap-3 rounded-xl px-4 py-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary"><Icon className="h-4 w-4" /></span>
                  <span className="text-sm font-medium">{label}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className={wrap}>
        <SectionHeading eyebrow="Selected work" title={<>Projects I've <span className="text-gradient">built.</span></>} intro="Three full-stack projects — each with a live demo, source code, and a detailed write-up." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className={wrap}>
        <SectionHeading eyebrow="Tech stack" title={<>Tools I <span className="text-gradient">work with.</span></>} intro="Technologies used across my projects and research." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div className="surface h-full rounded-2xl p-6">
                <h3 className="flex items-center gap-2 font-sans text-sm font-semibold tracking-normal text-muted-foreground">
                  <Layers className="h-4 w-4 text-accent" /> {g.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <motion.li key={s} whileHover={{ y: -2 }} className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-sm transition-colors hover:border-primary/60">
                      {s}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="py-12">
      <div className={wrap}>
        <Reveal>
          <div className="surface relative overflow-hidden rounded-3xl p-8 md:p-10">
            <div aria-hidden className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-electric/20 blur-3xl" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground"><GraduationCap className="h-7 w-7" /></span>
              <div className="flex-1">
                <p className="eyebrow">Education</p>
                <h3 className="mt-1 text-2xl font-bold sm:text-3xl">{education.school}</h3>
                <p className="mt-1 text-muted-foreground">{education.degree}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5"><Sparkles className="h-3.5 w-3.5 text-primary" />{education.status}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5"><CalendarClock className="h-3.5 w-3.5 text-accent" />{education.graduation}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5"><MapPin className="h-3.5 w-3.5" />{education.location}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className={wrap}>
        <SectionHeading eyebrow="Journey" title={<>Experience, Research <span className="text-gradient">&amp; Achievements</span></>} />
        <ol className="relative ml-4 border-l border-border md:ml-6">
          {timeline.map(({ icon: Icon, kind, title, detail, badge }, i) => (
            <Reveal key={title} delay={i * 0.04}>
              <li className="relative pb-10 pl-10 last:pb-0">
                <span className="absolute -left-5 top-0 grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="eyebrow">{kind}</p>
                  {badge && <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-medium text-primary">{badge}</span>}
                </div>
                <h3 className="mt-2 font-sans text-lg font-semibold tracking-normal">{title}</h3>
                <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{detail}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
