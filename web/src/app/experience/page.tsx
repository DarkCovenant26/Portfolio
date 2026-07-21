import { cvData } from "@/data/cv-data";
import { Calendar, MapPin, Building2, Briefcase } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experience",
    description: "Professional journey and leadership roles of Zandro E. Narvaza.",
};

const EXPERIENCE_TECHS: Record<string, string[]> = {
  "Director of Cyber R&D": ["Django", "Django-Ninja", "Keycloak", "React", "Next.js", "MinIO", "Claude Code", "Docker", "Lens", "Event-Driven", "CI/CD", "GitLab CI", "Jenkins", "JSONField", "PostgreSQL"],
  "Senior Manager": ["Django", "React", "Redis", "Celery", "Workers", "Event-Driven", "Pandas", "Gemini Pro", "Multi-Tenancy", "PostgreSQL", "CI/CD"],
  "Manager": ["Django REST Framework", "React", "TypeScript", "PostgreSQL"],
  "Web Developer II": ["React", "Django REST Framework", ".NET", "HTML/CSS", "Git"],
  "IT Instructor / IT Program Head": ["Teaching", "IT Curriculum", "Mentoring", "Leadership"],
};

function renderResponsibilityText(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={index} className="text-foreground font-semibold">{part}</strong>;
    }
    return part;
  });
}

export default function ExperiencePage() {
  return (
    <div className="w-full h-full space-y-6 animate-fade-in-up pb-8">
      
      <div className="flex flex-col gap-1 border-b border-border pb-3">
        <h1 className="text-2xl font-bold tracking-tight">Experience</h1>
        <p className="text-sm text-muted-foreground">Professional journey and leadership roles.</p>
      </div>

      <div className="relative pl-6 md:pl-8 border-l-2 border-border/60 ml-3 md:ml-4 space-y-6 my-4">
        {cvData.experience.map((exp, index) => {
          const techs = EXPERIENCE_TECHS[exp.title] || [];
          const isLatest = index === 0;
          return (
            <div key={index} className="relative group">
              
              {/* Timeline Node Icon/Dot */}
              <div className={`absolute -left-[36px] md:-left-[48px] top-4 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full border-2 bg-card transition-all duration-300 ${
                isLatest 
                  ? "border-primary shadow-[0_0_12px_hsl(var(--primary)/0.4)]" 
                  : "border-border group-hover:border-primary group-hover:shadow-[0_0_12px_hsl(var(--primary)/0.4)]"
              }`}>
                <Briefcase size={12} className={isLatest ? "text-primary" : "text-muted-foreground group-hover:text-primary transition-colors"} />
                {isLatest && (
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                  </span>
                )}
              </div>

              {/* Timeline Card */}
              <div className="widget-card p-4 md:p-5 flex flex-col gap-3 hover:border-primary/20 hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300">
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-primary font-semibold">
                      <Building2 size={13} /> {exp.company}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={12} className="shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/40 my-0.5" />

                <div>
                  <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex gap-2.5 text-xs text-muted-foreground leading-relaxed">
                        <span className="text-primary mt-1 select-none shrink-0">•</span>
                        <span>{renderResponsibilityText(resp)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {techs.length > 0 && (
                  <div className="flex flex-col gap-1.5 mt-1">
                    <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {techs.map((tech, idx) => (
                        <span key={idx} className="text-[10px] font-medium bg-muted px-2 py-0.5 rounded-md border border-border/40 hover:border-primary/30 hover:text-primary transition-all duration-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
