"use client";

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

export function Footer() {
  return (
    <footer className="py-8 text-center">
      <div className="flex justify-center gap-6 mb-6 sm:hidden">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={link.name}
          >
            <link.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
      <p className="text-muted-foreground font-mono text-xs">
        Designed & Built with Next.js
      </p>
    </footer>
  );
}
