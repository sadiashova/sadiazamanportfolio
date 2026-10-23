import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { navLinks, profile } from "@/data/profile";
import { SocialIcons } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.2fr_1fr_auto]">
        <div>
          <p className="font-display text-xl font-bold">{profile.name}</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">{profile.headline}</p>
          <a href={`mailto:${profile.email}`} className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <Mail className="h-4 w-4" /> {profile.email}
          </a>
        </div>
        <ul className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
          {navLinks.map((l) => (
            <li key={l.id}>
              <Link to="/" hash={l.id} className="text-muted-foreground hover:text-foreground">{l.label}</Link>
            </li>
          ))}
        </ul>
        <SocialIcons />
      </div>
      <p className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
