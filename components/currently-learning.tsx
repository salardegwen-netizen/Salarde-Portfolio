"use client";

interface LearningItem {
  name: string;
  description: string;
  progress: number;
  category: string;
}

const learningItems: LearningItem[] = [
  {
    name: "TypeScript Advanced Patterns",
    description:
      "Deep diving into generics, conditional types, and utility types",
    progress: 75,
    category: "Language",
  },
  {
    name: "System Design",
    description: "Learning scalable architecture and distributed systems",
    progress: 40,
    category: "Architecture",
  },
  {
    name: "Testing Best Practices",
    description: "Unit testing, integration testing, and E2E with Playwright",
    progress: 60,
    category: "Quality",
  },
  {
    name: "Cloud Infrastructure",
    description: "AWS services, serverless architecture, and DevOps practices",
    progress: 35,
    category: "DevOps",
  },
];

export function CurrentlyLearning() {
  return (
    <section id="learning" className="py-24">
      <h2 className="flex items-center gap-4 text-2xl sm:text-3xl font-bold text-slate-200 mb-12">
        <span className="text-primary font-mono text-xl font-normal">02.</span>
        Currently Learning
        <span className="h-px bg-border flex-1 max-w-xs" />
      </h2>

      <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
        I believe in continuous learning and staying current with evolving
        technologies. Here&apos;s what I&apos;m currently focused on improving:
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {learningItems.map((item) => (
          <LearningCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}

function LearningCard({ item }: { item: LearningItem }) {
  return (
    <article className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <span className="text-primary font-mono text-xs px-2 py-1 bg-primary/10 rounded">
          {item.category}
        </span>
        <span className="text-muted-foreground font-mono text-sm">
          {item.progress}%
        </span>
      </div>

      <h3 className="text-slate-200 font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
        {item.name}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {item.description}
      </p>

      {/* Progress Bar */}
      <div className="h-1 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${item.progress}%` }}
        />
      </div>
    </article>
  );
}
