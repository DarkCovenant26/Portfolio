import { cvData } from "@/data/cv-data";
import { Mail, Github, Linkedin, MapPin, Phone, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Zandro E. Narvaza for opportunities, consulting, or engineering discussions.",
};

export default function ContactPage() {
  return (
    <div className="w-full h-full space-y-6 animate-fade-in-up pb-12">
      
      <div className="flex flex-col gap-1 border-b border-border pb-4">
        <h1 className="text-2xl font-bold tracking-tight">Contact & Identity</h1>
        <p className="text-sm text-muted-foreground">Get in touch for opportunities, consulting, or engineering discussions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Info Widget */}
        <div className="widget-card p-6 space-y-6">
          <h2 className="text-sm font-semibold border-b border-border/50 pb-2">Direct Contact</h2>
          
          <div className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs text-muted-foreground flex items-center gap-1.5"><Mail size={12}/> Email Address</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{cvData.personal.email}</span>
                <Button variant="ghost" size="icon" className="h-6 w-6 ml-auto">
                  <Copy size={12} />
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5 pt-2 border-t border-border/30">
              <span className="text-xs text-muted-foreground flex items-center gap-1.5"><Phone size={12}/> Phone Number</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{cvData.personal.phone}</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 pt-2 border-t border-border/30">
              <span className="text-xs text-muted-foreground flex items-center gap-1.5"><MapPin size={12}/> Location</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{cvData.personal.location}</span>
              </div>
            </div>
          </div>
          
          <Button className="w-full h-8 text-xs font-medium" asChild>
            <a href={`mailto:${cvData.personal.email}`}>Open Mail Client</a>
          </Button>
        </div>

        {/* Social Links Widget */}
        <div className="widget-card p-6 space-y-6">
          <h2 className="text-sm font-semibold border-b border-border/50 pb-2">Profiles</h2>
          
          <div className="space-y-3">
            {cvData.personal.github && (
              <Button variant="outline" className="w-full justify-start h-10 text-xs" asChild>
                <a href={`https://${cvData.personal.github}`} target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" /> {cvData.personal.github}
                </a>
              </Button>
            )}
            
            {cvData.personal.linkedin && (
              <Button variant="outline" className="w-full justify-start h-10 text-xs" asChild>
                <a href={`https://${cvData.personal.linkedin}`} target="_blank" rel="noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> linkedin.com/in/zandro
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
