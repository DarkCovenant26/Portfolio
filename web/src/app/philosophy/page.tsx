import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PhilosophyPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-24 space-y-24">
            {/* Header */}
            <div className="space-y-4 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Leadership Philosophy
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Platform engineering is not just about tools; it's about removing friction.
                    Architecture is political, and reliability is the ultimate feature.
                </p>
            </div>

            {/* Core Principles Grid */}
            <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-slate-950/40 border-primary/20 hover:border-primary/50 transition-colors">
                    <CardHeader>
                        <CardTitle className="text-primary mb-2">01</CardTitle>
                        <h3 className="text-xl font-semibold">Force Multiplier</h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                            I believe that the role of leadership is to remove friction. By building robust internal platforms and paved-path architectures, I enable product teams to ship faster and more safely.
                        </p>
                        <div className="pt-2 border-t border-primary/10">
                            <span className="text-xs font-mono text-primary/70 uppercase tracking-widest">Applied In:</span>
                            <p className="text-sm text-foreground mt-1">DevSecOps Pipeline Orchestration</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-slate-950/40 border-secondary/20 hover:border-secondary/50 transition-colors">
                    <CardHeader>
                        <CardTitle className="text-secondary mb-2">02</CardTitle>
                        <h3 className="text-xl font-semibold">Architecture is Political</h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                            Great systems survive because they align with organizational incentives. I focus on interoperability strategies that allow teams to decouple their roadmap while maintaining a cohesive system contract.
                        </p>
                        <div className="pt-2 border-t border-secondary/10">
                            <span className="text-xs font-mono text-secondary/70 uppercase tracking-widest">Applied In:</span>
                            <p className="text-sm text-foreground mt-1">Hybrid Cloud & Mesh Interface</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-slate-950/40 border-accent/20 hover:border-accent/50 transition-colors">
                    <CardHeader>
                        <CardTitle className="text-accent mb-2">03</CardTitle>
                        <h3 className="text-xl font-semibold">Reliability is a Feature</h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                            In cybersecurity, trust is the currency. I advocate for "resilience by design"—immutable audit logs, strict data lineage, and failure-oblivious architectures.
                        </p>
                        <div className="pt-2 border-t border-accent/10">
                            <span className="text-xs font-mono text-accent/70 uppercase tracking-widest">Applied In:</span>
                            <p className="text-sm text-foreground mt-1">Threat Data Aggregator</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Future Vision Section */}
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-8 md:p-12 overflow-hidden">
                <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-[0.05]" />

                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start justify-between">
                    <div className="space-y-6 max-w-2xl">
                        <Badge variant="cyber" className="w-fit">FUTURE VISION</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold">Autonomous Assurance</h2>
                        <p className="text-lg text-neutral-300 leading-relaxed">
                            The future of GRC and Security is not manual checklists but continuous, programmatic verification. My vision is to build "Self-Driving Compliance" architectures—systems that automatically detect infrastructure changes, map them to regulatory controls, and generate evidence artifacts without human intervention.
                        </p>
                    </div>
                    <div className="w-full md:w-auto flex-shrink-0">
                        <div className="p-6 rounded-lg bg-teal-950/30 border border-teal-500/20 max-w-sm">
                            <h4 className="font-mono text-teal-400 mb-4">&gt; System Evolution</h4>
                            <ul className="space-y-3 font-mono text-sm text-teal-200/70">
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-slate-600" />
                                    <span className="line-through opacity-50">Point-in-time Security</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                                    <span>Continuous-State Assurance</span>
                                </li>
                                <li className="flex items-center gap-3 pt-2">
                                    <div className="h-2 w-2 rounded-full bg-slate-600" />
                                    <span className="line-through opacity-50">Manual Audits</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                                    <span>Programmatic Verification</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
