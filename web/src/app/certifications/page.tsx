import { cvData } from "@/data/cv-data";
import { Award, Calendar, Building2, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function CertificationsPage() {
  return (
    <div className="w-full h-full space-y-6 animate-fade-in-up pb-8">
      
      <div className="flex flex-col gap-1 border-b border-border pb-3">
        <h1 className="text-2xl font-bold tracking-tight">Certifications</h1>
        <p className="text-sm text-muted-foreground">Professional credentials and formal training.</p>
      </div>

      <div className="space-y-10 my-4">
        {cvData.certifications?.map((category, catIndex) => (
          <div key={catIndex} className="space-y-4">
            <h2 className="text-lg font-bold tracking-tight text-primary border-b border-border/50 pb-1.5">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {category.items.map((cert, index) => {
                return (
                  <div key={index} className="widget-card p-4 flex flex-col gap-3 hover:border-primary/30 transition-all duration-300 group">
                    
                    <div className="flex items-start justify-between gap-3">
                      <div className="p-2 bg-primary/10 text-primary rounded-lg shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-[0_0_10px_hsl(var(--primary)/0.15)]">
                        {cert.title.includes("Lead Auditor") ? <ShieldCheck size={18} /> : <Award size={18} />}
                      </div>
                      <div className="flex flex-col items-end gap-1 text-right">
                        <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-semibold bg-muted px-2 py-0.5 rounded border border-border/40">
                          <Calendar size={10} />
                          {cert.date}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 flex-1">
                      <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
                        <Building2 size={12} />
                        {cert.issuer}
                      </div>
                    </div>

                    {cert.details && (
                      <>
                        <div className="border-t border-border/40 w-full" />
                        <div className="flex items-start gap-1.5 text-xs text-muted-foreground leading-relaxed bg-muted/20 p-2.5 rounded-md border border-border/30">
                          <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                          <p>{cert.details}</p>
                        </div>
                      </>
                    )}

                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
