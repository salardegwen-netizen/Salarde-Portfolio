"use client";

import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A full-stack web application that demonstrates modern development practices. Built with a focus on performance, accessibility, and user experience. Features include real-time updates, responsive design, and comprehensive testing.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    title: "Project Two",
    description:
      "An interactive dashboard application with data visualization capabilities. Implements complex state management, RESTful API integration, and dynamic charting components for real-time analytics.",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Chart.js", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    title: "Project Three",
    description:
      "A mobile-first e-commerce platform with seamless checkout flow. Features product filtering, cart management, secure payments, and an intuitive admin panel for inventory management.",
    technologies: ["React Native", "Express", "MongoDB", "Stripe", "AWS"],
    githubUrl: "https://github.com",
    featured: true,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="flex items-center gap-4 text-2xl sm:text-3xl font-bold text-slate-200 mb-12">
        <span className="text-primary font-mono text-xl font-normal">01.</span>
        Featured Projects
        <span className="h-px bg-border flex-1 max-w-xs" />
      </h2>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <article
      className={`relative grid md:grid-cols-12 gap-4 items-center ${isEven ? "" : "md:text-right"}`}
    >
      {/* Project Image Placeholder */}
      <div
        className={`md:col-span-7 ${isEven ? "md:col-start-1" : "md:col-start-6"} md:row-start-1`}
      >
        <div className="relative group rounded-lg overflow-hidden bg-secondary/50">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
            <span className="text-primary/50 font-mono text-sm">
              Project Preview
            </span>
          </div>
          <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
        </div>
      </div>

      {/* Project Content */}
      <div
        className={`md:col-span-7 ${isEven ? "md:col-start-6 md:text-right" : "md:col-start-1"} md:row-start-1 relative z-10`}
      >
        <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
        <h3 className="text-2xl font-bold text-slate-200 mb-4 hover:text-primary transition-colors">
          <a
            href={project.liveUrl || project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.title}
          </a>
        </h3>

        <div className="bg-card p-6 rounded-lg shadow-xl mb-4">
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        <ul
          className={`flex flex-wrap gap-3 font-mono text-sm text-muted-foreground mb-4 ${isEven ? "md:justify-end" : ""}`}
        >
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className={`flex gap-4 ${isEven ? "md:justify-end" : ""}`}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-primary transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-primary transition-colors"
              aria-label={`View ${project.title} live site`}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
