import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PhilosophyPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-24 space-y-24">
            {/* Header */}
            <div className="space-y-4 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Architectural Philosophy
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed font-light">
                    Software should be <span className="text-primary font-medium">"Secure by Design"</span> and systems must be <span className="text-foreground font-medium italic">"Tactical by Nature."</span>
                    I build architecture that survives the storm, not just the whiteboard.
                </p>
            </div>

            {/* Core Principles Grid */}
            <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-surface-card border-primary/20 hover:border-primary/50 transition-colors shadow-sm dark:shadow-none">
                    <CardHeader>
                        <CardTitle className="text-primary mb-2">01</CardTitle>
                        <h3 className="text-xl font-semibold">Tactical Resilience</h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                            I believe architecture must be "Battle-Hardened." I specialize in "Rescue Architecture"—stabilizing fragmented legacy monoliths and transforming high-technical-debt systems into scalable, high-velocity platforms.
                        </p>
                        <div className="pt-2 border-t border-card-border">
                            <span className="text-xs font-mono text-primary/70 uppercase tracking-widest">Applied In:</span>
                            <p className="text-sm font-medium mt-1">Multi-Tenant Transition & White-Label Replication</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-surface-card border-secondary/20 hover:border-secondary/50 transition-colors shadow-sm dark:shadow-none">
                    <CardHeader>
                        <CardTitle className="text-secondary mb-2">02</CardTitle>
                        <h3 className="text-xl font-semibold">Domain-Driven Clarity</h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                            High-stakes data engineering is about the "Truth." I specialize in reverse-engineering unreferenced, contextless legacy datasets into deterministic schemas that align with strategic business objectives.
                        </p>
                        <div className="pt-2 border-t border-card-border">
                            <span className="text-xs font-mono text-secondary/70 uppercase tracking-widest">Applied In:</span>
                            <p className="text-sm font-medium mt-1">GRC Pandas Pipelines & V1 GRC Genesis</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-surface-card border-accent/20 hover:border-accent/50 transition-colors shadow-sm dark:shadow-none">
                    <CardHeader>
                        <CardTitle className="text-accent mb-2">03</CardTitle>
                        <h3 className="text-xl font-semibold">Secure by Design</h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                            Security is not a layer; it is the foundation. I advocate for physical data isolation and multi-tenant sovereignty as baseline requirements, ensuring that every architectural decision prioritizes trust and zero-leakage.
                        </p>
                        <div className="pt-2 border-t border-card-border">
                            <span className="text-xs font-mono text-accent/70 uppercase tracking-widest">Applied In:</span>
                            <p className="text-sm font-medium mt-1">Project Nexus & Physically Isolated DB Clusters</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Future Vision Section */}
            <div className="relative rounded-2xl border border-card-border bg-surface-muted p-8 md:p-12 overflow-hidden shadow-sm dark:shadow-inner">
                <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-[0.05]" />

                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start justify-between">
                    <div className="space-y-6 max-w-2xl">
                        <Badge variant="cyber" className="w-fit">FUTURE VISION</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold">Autonomous Assurance</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed font-light">
                            The future of GRC is not manual spreadsheets but continuous, programmatic verification. My vision is to build "Self-Driving Compliance" architectures that automatically detect risk posture, map infrastructure changes to regulatory controls, and generate evidence artifacts without human intervention—turning security from a bottleneck into a competitive advantage.
                        </p>
                    </div>
                    <div className="w-full md:w-auto flex-shrink-0">
                        <div className="p-6 rounded-lg bg-surface-accent border border-primary/10 max-w-sm">
                            <h4 className="font-mono text-primary mb-4">&gt; System Evolution</h4>
                            <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-card-border" />
                                    <span className="line-through opacity-50 text-xs">Point-in-time Security</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                                    <span className="text-foreground font-medium text-xs">Continuous-State Assurance</span>
                                </li>
                                <li className="flex items-center gap-3 pt-2">
                                    <div className="h-2 w-2 rounded-full bg-card-border" />
                                    <span className="line-through opacity-50 text-xs">Manual Spreadsheets</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                                    <span className="text-foreground font-medium text-xs">Programmatic Proof</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
