import { Github, Linkedin, FileDown } from "lucide-react";
import { profile, RESUME_URL } from "@/data/profile";
import { cn } from "@/lib/utils";

export function SocialIcons({ className }: { className?: string }) {
  const items = [
    { href: profile.github, label: "GitHub profile", Icon: Github },
    { href: profile.linkedin, label: "LinkedIn profile", Icon: Linkedin },
  ];
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {items.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-foreground"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition";

export function ResumeButton({ variant = "outline", className }: { variant?: "outline" | "small"; className?: string }) {
  const size = variant === "small" ? "px-4 py-2 text-sm" : "px-6 py-3";
  const style = "border border-border bg-secondary/60 text-foreground hover:border-primary";
  if (!RESUME_URL) {
    return (
      <button
        type="button"
        disabled
        title="Resume coming soon"
        aria-label="Download resume (coming soon)"
        className={cn(btnBase, size, style, "cursor-not-allowed opacity-60", className)}
      >
        <FileDown className="h-4 w-4" />
        {variant === "small" ? "Resume" : "Download Resume"}
        <span className="sr-only"> — coming soon</span>
      </button>
    );
  }
  return (
    <a href={RESUME_URL} download className={cn(btnBase, size, style, className)}>
      <FileDown className="h-4 w-4" />
      {variant === "small" ? "Resume" : "Download Resume"}
    </a>
  );
}
