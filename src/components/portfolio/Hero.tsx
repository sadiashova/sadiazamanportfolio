import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import sadia from "@/assets/sadia.jpeg.asset.json";
import { ResumeButton, SocialIcons } from "./SocialIcons";

function RoleCycler() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-flex h-8 overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={profile.roles[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="text-gradient font-semibold"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const words = "Hi, I'm Sadia Zaman.".split(" ");
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden className="grid-lines absolute inset-0" />
      <div aria-hidden className="animate-drift absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
      <div aria-hidden className="animate-drift absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl [animation-delay:-6s]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eyebrow inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-success" /> {profile.label}
          </motion.p>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
            {words.map((w, i) => (
              <motion.span
                key={i}
                className="mr-[0.25em] inline-block"
                initial={reduce ? false : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {w === "Zaman." ? <span className="text-gradient">{w}</span> : w}
              </motion.span>
            ))}
          </h1>
          <motion.div initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <p className="mt-5 text-xl text-foreground/90 sm:text-2xl">{profile.headline}</p>
            <p className="mt-4 text-lg">I'm a <RoleCycler /></p>
            <p className="mt-4 max-w-xl text-muted-foreground">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow transition hover:brightness-110">
                Explore My Work <ArrowDown className="h-4 w-4" />
              </a>
              <ResumeButton />
            </div>
            <div className="mt-8 flex items-center gap-4">
              <SocialIcons />
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="h-4 w-4" />{profile.location}</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="group relative mx-auto w-full max-w-sm"
        >
          <div aria-hidden className="absolute -inset-4 rounded-[2.5rem_6rem_2.5rem_2.5rem] bg-gradient-brand opacity-40 blur-2xl transition group-hover:opacity-60" />
          <div aria-hidden className="absolute -right-3 -top-3 h-full w-full rounded-[2rem_5rem_2rem_2rem] border border-accent/40" />
          <div className="relative overflow-hidden rounded-[2rem_5rem_2rem_2rem] border border-border bg-card shadow-glow">
            {/* Profile photo — replace src/assets/sadia.jpeg.asset.json to change it */}
            <img src={sadia.url} alt="Portrait of Sadia Zaman" className="aspect-[4/5] w-full object-cover object-[50%_20%] transition duration-700 group-hover:scale-[1.03]" />
          </div>
          <div className="glass absolute -bottom-5 -left-5 rounded-2xl px-4 py-3">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Currently</p>
            <p className="text-sm font-semibold">Final-year CSE · MIU</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
