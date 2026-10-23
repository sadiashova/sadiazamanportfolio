import { motion } from "framer-motion";
import { CalendarClock, GraduationCap, Layers, MapPin, Sparkles } from "lucide-react";
import { education, highlights, profile, skillGroups, timeline } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillIcons } from "@/data/skillIcons";
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
        <SectionHeading title={<>Projects I've <span className="text-gradient">built.</span></>} intro="Three full-stack projects — each with a live demo, source code, and a detailed write-up." />
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
              <motion.div whileHover={{ y: -4 }} className="surface h-full rounded-2xl p-6 transition-colors hover:border-primary/50">
                <h3 className="flex items-center gap-2 font-sans text-sm font-semibold tracking-normal text-muted-foreground">
                  <Layers className="h-4 w-4 text-accent" /> {g.title}
                </h3>
                <motion.ul
                  className="mt-4 flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
                >
                  {g.items.map((s) => {
                    const Icon = skillIcons[s];
                    return (
                      <motion.li
                        key={s}
                        variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
                        whileHover={{ y: -3, scale: 1.05 }}
                        className="group inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-sm transition-colors hover:border-primary/60"
                      >
                        {Icon && <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden />}
                        {s}
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.div>
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
        <SectionHeading eyebrow="Education" title={<>Where I've <span className="text-gradient">studied.</span></>} />
        <div className="grid gap-5">
          {education.map((ed, i) => (
            <Reveal key={ed.school} delay={i * 0.1}>
              <motion.div whileHover={{ y: -4 }} className="surface relative overflow-hidden rounded-3xl p-8 md:p-10">
                <div aria-hidden className="animate-drift absolute -right-20 -top-20 h-64 w-64 rounded-full bg-electric/20 blur-3xl" />
                <div className="relative flex flex-col gap-6 md:flex-row md:items-center">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground"><GraduationCap className="h-7 w-7" /></span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold sm:text-3xl">{ed.school}</h3>
                    <p className="mt-1 text-muted-foreground">{ed.degree}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5"><Sparkles className="h-3.5 w-3.5 text-primary" />{ed.status}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5"><CalendarClock className="h-3.5 w-3.5 text-accent" />{ed.graduation}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5"><MapPin className="h-3.5 w-3.5" />{ed.location}</span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
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
