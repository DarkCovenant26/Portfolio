import { Server, Workflow, Zap, ShieldCheck } from "lucide-react";

const services = [
  {
      title: "Architecture & Systems Design",
      description: "Multi-tenant SaaS architecture, micro-frontends, API gateways, and state management strategies built for extreme scalability and zero downtime.",
      icon: <Server className="w-4 h-4 text-primary" />,
  },
  {
      title: "Cross-Functional Leadership",
      description: "Technical team leadership, sprint orchestration, and mentoring engineering talent across departments to accelerate from junior to production-ready.",
      icon: <Workflow className="w-4 h-4 text-accent" />,
  },
  {
      title: "GRC & Security Governance",
      description: "Aligning software builds with stringent quality standards, SOC2/HIPAA compliance, and risk mitigation using 'Secure by Design' principles.",
      icon: <ShieldCheck className="w-4 h-4 text-green-500" />,
  },
  {
      title: "Performance & Workflow Optimization",
      description: "Async workflows, Celery task orchestration, CI/CD pipeline optimization, and scaling distributed workloads for enterprise environments.",
      icon: <Zap className="w-4 h-4 text-amber-500" />,
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full h-full space-y-6 animate-fade-in-up pb-12">
      
      <div className="flex flex-col gap-1 border-b border-border pb-4">
        <h1 className="text-2xl font-bold tracking-tight">Core Competencies</h1>
        <p className="text-sm text-muted-foreground">Consulting, architecture, and team leadership offerings.</p>
      </div>

      <div className="widget-card p-0 overflow-hidden">
        <div className="divide-y divide-border">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 hover:bg-muted/10 transition-colors">
              <div className="shrink-0 pt-1">
                <div className="p-2 bg-muted rounded border border-border/50">
                  {service.icon}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl mt-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
