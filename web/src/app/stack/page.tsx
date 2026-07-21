import { cvData } from "@/data/cv-data";
import { Cpu, Server, Code, Database, Braces, Sparkles, Network, Terminal, Users } from "lucide-react";

export default function StackPage() {
  const getIconForCategory = (category: string) => {
    switch (category) {
      case "Backend Development":
        return <Server className="w-5 h-5 text-blue-500" />;
      case "Frontend Development":
        return <Code className="w-5 h-5 text-purple-500" />;
      case "AI & Development Tools":
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case "DevOps & Infrastructure":
        return <Terminal className="w-5 h-5 text-emerald-500" />;
      case "Architecture & Systems Design":
        return <Network className="w-5 h-5 text-rose-500" />;
      case "Team Collaboration":
        return <Users className="w-5 h-5 text-indigo-500" />;
      default:
        return <Cpu className="w-5 h-5 text-primary" />;
    }
  };

  const getBadgeColor = (category: string) => {
    switch (category) {
      case "Backend Development":
        return "bg-blue-500/10 text-blue-600 ring-blue-500/20 hover:bg-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.05)]";
      case "Frontend Development":
        return "bg-purple-500/10 text-purple-600 ring-purple-500/20 hover:bg-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.05)]";
      case "AI & Development Tools":
        return "bg-amber-500/10 text-amber-600 ring-amber-500/20 hover:bg-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.05)]";
      case "DevOps & Infrastructure":
        return "bg-emerald-500/10 text-emerald-600 ring-emerald-500/20 hover:bg-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.05)]";
      case "Architecture & Systems Design":
        return "bg-rose-500/10 text-rose-600 ring-rose-500/20 hover:bg-rose-500/20 shadow-[0_0_10px_rgba(244,63,94,0.05)]";
      case "Team Collaboration":
        return "bg-indigo-500/10 text-indigo-600 ring-indigo-500/20 hover:bg-indigo-500/20 shadow-[0_0_10px_rgba(99,102,241,0.05)]";
      default:
        return "bg-primary/10 text-primary ring-primary/20 hover:bg-primary/20";
    }
  };

  const getColSpan = (idx: number) => {
    // Dynamic spanning to create a bento box feel
    const layout = [
      "md:col-span-2 lg:col-span-2", // Backend (wide)
      "md:col-span-1 lg:col-span-1", // Frontend (tall/square)
      "md:col-span-1 lg:col-span-1", // AI
      "md:col-span-2 lg:col-span-2", // DevOps (wide)
      "md:col-span-3 lg:col-span-3", // Architecture (full width bottom)
      "md:col-span-1 lg:col-span-3"  // Team Collaboration (if any)
    ];
    return layout[idx] || "md:col-span-1 lg:col-span-1";
  };

  return (
    <div className="w-full h-full space-y-8 animate-fade-in-up pb-12">
      
      <div className="flex flex-col gap-2 border-b border-border pb-6">
        <h1 className="text-3xl font-bold tracking-tight">Tech Stack & Capabilities</h1>
        <p className="text-base text-muted-foreground max-w-2xl">
          A comprehensive breakdown of my engineering arsenal. As an Enterprise Architect, I leverage these technologies to build secure, scalable, and high-performance ecosystems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {cvData.skills.map((skillGroup, idx) => (
          <div 
            key={idx} 
            className={`widget-card p-6 flex flex-col gap-4 group hover:border-primary/30 transition-colors ${getColSpan(idx)}`}
          >
            <div className="flex items-center gap-3 border-b border-border/40 pb-3">
              <div className="p-2 rounded-lg bg-background border border-border group-hover:scale-110 transition-transform">
                {getIconForCategory(skillGroup.category)}
              </div>
              <h2 className="text-lg font-bold text-foreground">{skillGroup.category}</h2>
            </div>
            
            <div className="flex flex-wrap gap-2.5 mt-2">
              {skillGroup.items.map((item, itemIdx) => (
                <span 
                  key={itemIdx} 
                  className={`inline-flex items-center rounded-md px-3 py-1.5 text-sm font-semibold ring-1 ring-inset transition-all duration-200 cursor-default ${getBadgeColor(skillGroup.category)}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
