import { cvData } from "@/data/cv-data";
import { caseStudies } from "@/data/case-studies";
import { ArrowUpRight, Activity, FolderGit2, Calendar, MapPin, Mail, Sparkles, Cpu, Download } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const featuredProjects = caseStudies.filter((p) => p.featured !== false).slice(0, 4);
  const recentExperience = cvData.experience.slice(0, 3);

  // Calculate years of experience dynamically based on the earliest start date in cvData.experience
  const oldestExperience = cvData.experience[cvData.experience.length - 1];
  const startDateStr = oldestExperience ? oldestExperience.period.split(" - ")[0] : "";
  const startDate = startDateStr ? new Date(startDateStr) : null;
  const yearsExp = startDate ? Math.floor((new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)) : 0;

  const getBadgeColor = (category: string) => {
    switch (category) {
      case "Backend Development":
        return "bg-blue-500/10 text-blue-600 ring-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.05)] hover:bg-blue-500/20";
      case "Frontend Development":
        return "bg-purple-500/10 text-purple-600 ring-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.05)] hover:bg-purple-500/20";
      case "DevOps & Infrastructure":
        return "bg-emerald-500/10 text-emerald-600 ring-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.05)] hover:bg-emerald-500/20";
      case "Architecture & Systems Design":
        return "bg-amber-500/10 text-amber-600 ring-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.05)] hover:bg-amber-500/20";
      case "Leadership & Management":
        return "bg-rose-500/10 text-rose-600 ring-rose-500/20 shadow-[0_0_10px_rgba(244,63,94,0.05)] hover:bg-rose-500/20";
      default:
        return "bg-primary/10 text-primary ring-primary/20 shadow-[0_0_10px_hsl(var(--primary)/0.05)] hover:bg-primary/20";
    }
  };

  return (
    <div className="home-layout">
      
      {/* Top Row: Profile Hero */}
      <div className="home-grid-top">
        
        {/* Profile Widget */}
        <div className="profile-widget group relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none -z-10 transition-transform duration-700 group-hover:scale-110" />

          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="flex-1 max-w-2xl">
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-4 mb-2">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                      {cvData.personal.name}
                    </h1>
                    <span className="flex items-center gap-2 text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20 shadow-[0_0_15px_hsl(var(--primary)/0.15)]">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
                      Available for Hire
                    </span>
                  </div>
                  <p className="text-base font-medium text-muted-foreground flex items-center gap-2">
                    <Sparkles size={16} className="text-primary" />
                    {cvData.personal.title}
                  </p>
                </div>
              </div>
              
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-6">
                {cvData.summary}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground mt-8">
                <span className="flex items-center gap-2 hover:text-foreground transition-colors cursor-default"><MapPin size={16} className="text-primary/70" /> {cvData.personal.location}</span>
                <a href={`mailto:${cvData.personal.email}`} className="flex items-center gap-2 hover:text-primary transition-colors"><Mail size={16} className="text-primary/70" /> {cvData.personal.email}</a>
                <Link href="/cv" className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors shadow-[0_0_15px_hsl(var(--primary)/0.1)] font-semibold mt-2 sm:mt-0">
                  <Download size={16} /> View & Download CV
                </Link>
              </div>
            </div>

            {/* Right side stats anchor */}
            <div className="hidden lg:flex flex-col justify-center items-end gap-8 pr-4">
              <div className="text-right">
                <div className="flex items-baseline justify-end gap-1">
                  <span className="text-7xl font-black tracking-tighter text-foreground">{caseStudies.length}</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Projects Delivered</span>
              </div>
              <div className="text-right">
                <div className="flex items-baseline justify-end gap-1">
                  <span className="text-7xl font-black tracking-tighter text-foreground">{yearsExp}</span>
                  <span className="text-5xl font-bold text-primary">+</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience List Widget */}
        <div className="list-widget group">
          <div className="widget-title-bar">
            <h3 className="widget-title">Recent Experience</h3>
            <Link href="/experience" className="list-widget-link group/link">
              View All <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
          
          <div className="list-container">
            {recentExperience.map((exp, idx) => (
              <div key={idx} className="cv-list-item group/exp">
                <div className="cv-list-item-header">
                  <span className="cv-list-item-title">{exp.title}</span>
                  <span className="cv-list-item-meta"><Calendar size={12} /> {exp.period.split(" - ")[0]}</span>
                </div>
                <span className="project-card-category">{exp.company}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Middle Row: Featured Projects */}
      <div className="home-grid-middle">

        {/* Featured Projects Widget */}
        <div className="list-widget group">
          <div className="widget-title-bar">
            <h3 className="widget-title">Featured Architecture</h3>
            <Link href="/projects" className="list-widget-link group/link">
              View All <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <Link href={project.link ?? `/projects/${project.slug}`} key={project.slug} className="project-card group/card">
                <div className="project-card-header">
                  <FolderGit2 size={18} />
                  <ArrowUpRight size={16} className="opacity-0 -translate-x-2 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 group-hover/card:translate-y-0 transition-all duration-300" />
                </div>
                <div>
                  <h4 className="project-card-title">{project.title}</h4>
                  <p className="project-card-category">{project.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Tech Stack Widget */}
        <div className="lg:col-span-2 list-widget group flex flex-col">
          <div className="widget-title-bar">
            <h3 className="widget-title"><Cpu size={16} /> Core Tech Stack</h3>
            <Link href="/stack" className="list-widget-link group/link">
              View Full Stack <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 flex-1">
            {cvData.skills.slice(0, 4).map((skillGroup, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <h4 className="text-sm font-semibold text-foreground border-b border-border/40 pb-2">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.slice(0, 5).map((item, itemIdx) => (
                    <span key={itemIdx} className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ring-1 ring-inset transition-colors duration-200 ${getBadgeColor(skillGroup.category)}`}>
                      {item}
                    </span>
                  ))}
                  {skillGroup.items.length > 5 && (
                    <span className="text-xs text-muted-foreground font-medium flex items-center px-1">+{skillGroup.items.length - 5} more</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}
