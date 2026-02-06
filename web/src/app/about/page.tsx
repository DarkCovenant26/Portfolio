import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Terminal } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="container px-4 md:px-6 py-24 space-y-16">
            <div className="grid lg:grid-cols-[1fr_300px] gap-12">
                {/* Main Bio Content */}
                <div className="space-y-12">
                    {/* Bio Header */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            About Me
                        </h1>
                        <div className="prose prose-invert prose-lg text-muted-foreground leading-relaxed">
                            <p>
                                I am a Principal Architect and Engineering Leader specializing in the design of large-scale cybersecurity platforms. With a deep background in distributed systems, I have led the technical evolution of SaaS ecosystems that power risk management, compliance, and threat detection for global enterprises.
                            </p>
                            <p>
                                At the intersection of Operations, Security, and Engineering, I build more than just software—I build internal platforms that multiply developer velocity. From architecting Rust-based ingestion engines to designing micro-frontend interoperability standards, I possess the ability to zoom out to the 10,000-foot strategic view and zoom in to the kernel-level debugger.
                            </p>
                        </div>
                    </div>

                    {/* Positioning */}
                    <div className="rounded-xl border border-white/5 bg-slate-900/50 p-8 space-y-4">
                        <h3 className="flex items-center gap-2 font-mono text-primary">
                            <Terminal className="h-4 w-4" />
                            CAREER_POSITIONING.md
                        </h3>
                        <blockquote className="text-2xl font-serif italic text-white leading-normal pl-4 border-l-2 border-primary">
                            "The Bridge Between Strategy and Scale."
                        </blockquote>
                        <p className="text-muted-foreground">
                            I am the translator between C-level security objectives and the distributed systems that enforce them. I don't just write code; I design the factories that build the code.
                        </p>
                    </div>
                </div>

                {/* Technical Sidebar */}
                <div className="space-y-8">
                    <Card className="bg-slate-950/40 border-white/10">
                        <CardContent className="p-6 space-y-6">
                            <h3 className="font-bold text-lg border-b border-white/10 pb-2">Technical Depth</h3>

                            <div className="space-y-3">
                                <span className="text-xs font-mono text-muted-foreground block">CORE ARCHITECTURE</span>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary">Python (Django/FastAPI)</Badge>
                                    <Badge variant="secondary">Rust</Badge>
                                    <Badge variant="secondary">TypeScript</Badge>
                                    <Badge variant="secondary">PostgreSQL</Badge>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <span className="text-xs font-mono text-muted-foreground block">INFRASTRUCTURE</span>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline">Docker</Badge>
                                    <Badge variant="outline">K8s</Badge>
                                    <Badge variant="outline">Redis</Badge>
                                    <Badge variant="outline">Terraform</Badge>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <span className="text-xs font-mono text-muted-foreground block">OBSERVABILITY</span>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline">Promtail</Badge>
                                    <Badge variant="outline">Loki</Badge>
                                    <Badge variant="outline">Grafana</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
