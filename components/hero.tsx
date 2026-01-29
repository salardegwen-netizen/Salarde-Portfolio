"use client";

import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:hello@example.com",
    icon: Mail,
  },
];

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">
        <div className="space-y-6 flex-1">
          <p className="text-primary font-mono text-sm tracking-wide">
            Hi, my name is
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-200 leading-tight">
            <span className="text-balance">Gwyneth Mild C. Salarde.</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-muted-foreground leading-tight">
            <span className="text-balance">I build things for the web.</span>
          </h2>
          <p className="max-w-xl text-muted-foreground leading-relaxed text-lg">
            I&apos;m a full-stack developer passionate about crafting accessible,
            pixel-perfect digital experiences. Currently focused on building
            responsive, user-friendly web applications.
          </p>

          <nav className="flex items-center gap-5 pt-4" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={link.name}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </nav>
        </div>

        <div className="flex-shrink-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-primary/20 rounded-full blur-md group-hover:bg-primary/30 transition-colors duration-300" />
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-primary/50 group-hover:border-primary transition-colors duration-300">
              <Image
                src="/images/profile.jpg"
                alt="Gwyneth Mild C. Salarde"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
