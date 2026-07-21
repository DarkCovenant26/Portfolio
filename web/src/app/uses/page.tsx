import { Monitor, Cpu, Terminal, Keyboard, Mouse, Speaker, Code, Server, Laptop, Briefcase } from "lucide-react";

export default function UsesPage() {
  const software = [
    {
      category: "Editor & Environment",
      icon: <Terminal className="w-5 h-5 text-primary" />,
      items: [
        { name: "VS Code & Antigravity IDE", description: "Primary editors for full-stack and AI-driven development." },
        { name: "WSL (Windows Subsystem for Linux)", description: "Core development environment (Linux workflow on Windows)." },
      ],
      colSpan: "md:col-span-2 lg:col-span-1"
    },
    {
      category: "DevOps & Cloud",
      icon: <Server className="w-5 h-5 text-primary" />,
      items: [
        { name: "Docker & Lens", description: "Containerization and K8s visibility." },
        { name: "Jenkins & Infisical", description: "CI/CD Orchestration and Secret Management." },
        { name: "Proxmox", description: "Bare-metal hypervisor and virtual environments." },
        { name: "AWS & MinIO", description: "Cloud infrastructure and S3 storage." },
      ],
      colSpan: "md:col-span-1 lg:col-span-1"
    },
    {
      category: "Architecture & Productivity",
      icon: <Code className="w-5 h-5 text-primary" />,
      items: [
        { name: "Gemini Pro & Claude", description: "AI-assisted coding and complex problem-solving." },
        { name: "Draw.io", description: "Designing ERDs and system architecture diagrams." },
        { name: "In-House Custom App", description: "Proprietary sprint/project management (formerly OpenProject)." },
      ],
      colSpan: "md:col-span-1 lg:col-span-1"
    }
  ];

  return (
    <div className="w-full h-full space-y-10 animate-fade-in-up pb-12">
      
      <div className="flex flex-col gap-2 border-b border-border pb-6">
        <h1 className="text-3xl font-bold tracking-tight">Workspace & Setup</h1>
        <p className="text-base text-muted-foreground max-w-2xl">
          The hardware and software I rely on to build scalable enterprise architecture. Split between my deep-focus home lab and my high-velocity office setup.
        </p>
      </div>

      {/* Side-by-Side Rig Comparison */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Monitor className="w-5 h-5 text-muted-foreground" /> Hardware Loadouts
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          
          {/* Subtle VS Badge in the middle */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background border border-border rounded-full items-center justify-center font-black text-xs text-muted-foreground shadow-sm">
            VS
          </div>

          {/* Home Rig */}
          <div className="widget-card p-6 relative overflow-hidden group border-primary/20 hover:border-primary/50 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Laptop className="w-24 h-24 text-primary" />
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  Personal Lab
                </h3>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Deep Focus / R&D</p>
              </div>

              <ul className="space-y-4">
                <li className="group/item">
                  <div className="font-medium text-foreground group-hover/item:text-primary transition-colors">Custom Desktop Rig</div>
                  <div className="text-sm text-muted-foreground mt-0.5">Gigabyte B550 AORUS PRO, 32GB XPG Spectrix D50</div>
                </li>
                <li className="group/item">
                  <div className="font-medium text-foreground group-hover/item:text-primary transition-colors">Sapphire Nitro+ Radeon RX 6700 XT</div>
                  <div className="text-sm text-muted-foreground mt-0.5">Primary GPU for high-performance workloads</div>
                </li>
                <li className="group/item">
                  <div className="font-medium text-foreground group-hover/item:text-primary transition-colors">Dual Display Setup</div>
                  <div className="text-sm text-muted-foreground mt-0.5">Samsung Odyssey G3 (165Hz) & Philips 24" LED</div>
                </li>
                <li className="group/item">
                  <div className="font-medium text-foreground group-hover/item:text-primary transition-colors">Rakk Peripherals</div>
                  <div className="text-sm text-muted-foreground mt-0.5">Rakk Ilis Wired Keyboard & Rakk Dasig X3 Mouse</div>
                </li>
              </ul>
            </div>
          </div>

          {/* Office Rig */}
          <div className="widget-card p-6 relative overflow-hidden group border-border hover:border-primary/50 transition-colors bg-muted/30">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Briefcase className="w-24 h-24 text-muted-foreground" />
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  Office Command Center
                </h3>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">High-Velocity / Operations</p>
              </div>

              <ul className="space-y-4">
                <li className="group/item">
                  <div className="font-medium text-foreground group-hover/item:text-primary transition-colors">Desktop Workstation</div>
                  <div className="text-sm text-muted-foreground mt-0.5">ASUS Prime B660M-A WiFi D4, i7-12700, 32GB Kingston RAM</div>
                </li>
                <li className="group/item">
                  <div className="font-medium text-foreground group-hover/item:text-primary transition-colors">Samsung Odyssey G3 27" (LS27AG30)</div>
                  <div className="text-sm text-muted-foreground mt-0.5">High refresh rate primary display</div>
                </li>
                <li className="group/item">
                  <div className="font-medium text-foreground group-hover/item:text-primary transition-colors">Royal Kludge RK-H81</div>
                  <div className="text-sm text-muted-foreground mt-0.5">75% Mechanical Keyboard</div>
                </li>
                <li className="group/item">
                  <div className="font-medium text-foreground group-hover/item:text-primary transition-colors">A4Tech OP-330</div>
                  <div className="text-sm text-muted-foreground mt-0.5">Reliable optical wired mouse</div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Bento Grid for Software */}
      <div className="space-y-4 pt-4 border-t border-border/50">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Terminal className="w-5 h-5 text-muted-foreground" /> Core Software Stack
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {software.map((section, idx) => (
            <div key={idx} className={`widget-card p-6 space-y-4 ${section.colSpan}`}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 border-b border-border/50 pb-3">
                {section.icon} {section.category}
              </h3>
              <ul className="space-y-4 pt-1">
                {section.items.map((item, i) => (
                  <li key={i} className="group">
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">{item.name}</div>
                    <div className="text-sm text-muted-foreground mt-1">{item.description}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
