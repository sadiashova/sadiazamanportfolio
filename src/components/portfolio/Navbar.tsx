import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/profile";
import { ResumeButton } from "./SocialIcons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navLinks.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [onHome]);

  const linkCls = (id: string) =>
    cn(
      "relative rounded-full px-3 py-2 text-sm transition-colors",
      onHome && active === id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
    );

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "glass border-x-0 border-t-0" : "border-b border-transparent")}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" hash="home" className="font-display text-xl font-extrabold">
          Sadia<span className="text-primary">.</span>
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <Link to="/" hash={l.id} className={linkCls(l.id)}>
                {onHome && active === l.id && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-secondary" transition={{ type: "spring", duration: 0.5 }} />
                )}
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <ResumeButton variant="small" />
        </div>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass overflow-hidden border-x-0 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <Link to="/" hash={l.id} onClick={() => setOpen(false)} className={cn("block rounded-lg px-3 py-3", onHome && active === l.id ? "bg-secondary text-foreground" : "text-muted-foreground")}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2"><ResumeButton variant="small" className="w-full" /></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
