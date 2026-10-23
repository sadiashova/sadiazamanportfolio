import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

export function validateContact(v: { name: string; email: string; subject: string; message: string }): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Please enter a valid email.";
  if (v.subject.trim().length < 3) e.subject = "Please add a subject.";
  if (v.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
  return e;
}

const field = "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none";

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"" | "opened">("");

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validateContact(values);
    setErrors(e);
    if (Object.keys(e).length) return;
    const body = `${values.message}\n\n— ${values.name} (${values.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
    setStatus("opened");
  };

  const contacts = [
    { Icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { Icon: Phone, label: profile.phone, href: `tel:${profile.phone}` },
    { Icon: MapPin, label: profile.location },
    { Icon: Github, label: "github.com/sadiashova", href: profile.github, ext: true },
    { Icon: Linkedin, label: "LinkedIn", href: profile.linkedin, ext: true },
  ];

  const set = (k: keyof typeof values) => (e: { target: { value: string } }) => setValues((v) => ({ ...v, [k]: e.target.value }));

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="text-3xl font-bold leading-tight sm:text-5xl">Have a project in mind? <span className="text-gradient">Let's connect.</span></h2>
          <p className="mt-4 text-muted-foreground">Open to internships, collaborations, and conversations about software and AI.</p>
          <ul className="mt-8 space-y-3">
            {contacts.map(({ Icon, label, href, ext }) => (
              <li key={label}>
                {href ? (
                  <a href={href} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group inline-flex items-center gap-3 text-foreground/85 hover:text-foreground">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-border group-hover:border-primary"><Icon className="h-4 w-4" /></span>{label}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-3 text-foreground/85">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-border"><Icon className="h-4 w-4" /></span>{label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="surface space-y-4 rounded-3xl p-6 sm:p-8">
            {(["name", "email", "subject"] as const).map((k) => (
              <div key={k}>
                <label htmlFor={k} className="mb-1.5 block text-sm font-medium capitalize">{k}</label>
                <input id={k} type={k === "email" ? "email" : "text"} value={values[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} className={field} />
                {errors[k] && <p id={`${k}-err`} className="mt-1 text-xs text-destructive">{errors[k]}</p>}
              </div>
            ))}
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
              <textarea id="message" rows={5} value={values.message} onChange={set("message")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} className={field} />
              {errors.message && <p id="message-err" className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground transition hover:brightness-110">
              <Send className="h-4 w-4" /> Send via email app
            </button>
            <p role="status" className="text-center text-xs text-muted-foreground">
              {status === "opened"
                ? "Your email app should open with the message ready — press send there to deliver it."
                : "This form opens your email app with your message pre-filled."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
