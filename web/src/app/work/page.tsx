import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SystemBlueprint } from "@/components/visuals/SystemBlueprint";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function WorkPage() {
    return (
        <div className="container px-4 md:px-6 py-24 space-y-16">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Systems Architected</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    A selection of high-scale platforms designed to solve complex regulatory and operational challenges.
                </p>
            </div>

            <div className="grid gap-12">
                {/* Project 1: Federated Ecosystem */}
                <section className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Badge variant="cyber">FEDERATED ARCHITECTURE</Badge>
                            <h2 className="text-3xl font-bold">The Federated Cybersecurity Ecosystem</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Architected a multi-module SaaS platform designed to ingest, normalize, and analyze disparate security data streams in near real-time. Designed a cross-module communication fabric allowing independent domains (SIEM, Risk, Audit) to share context.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">Rust</Badge>
                            <Badge variant="secondary">FastAPI</Badge>
                            <Badge variant="secondary">Kafka</Badge>
                            <Badge variant="secondary">Module Federation</Badge>
                        </div>
                        <ul className="space-y-2 text-sm text-neutral-300 font-mono">
                            <li className="flex items-center gap-2">
                                <span className="text-primary">+</span> Multi-tenant MSSP support
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary">+</span> Near real-time ingestion
                            </li>
                        </ul>
                    </div>
                    <Card className="bg-slate-950/50 border-white/5">
                        <CardContent className="p-4">
                            <SystemBlueprint type="federated" />
                        </CardContent>
                    </Card>
                </section>

                {/* Project 2: Orchestration Grid */}
                <section className="grid lg:grid-cols-2 gap-8 items-center lg:flex-row-reverse">
                    {/* Order change for visual variety: Diagram Left on desktop? No, let's keep text left for consistency or alternate. Let's alternate locally via grid logic if we wanted, but simple grid is fine. Let's just swap columns in grid. */}
                    <Card className="bg-slate-950/50 border-white/5 lg:order-last">
                        <CardContent className="p-4">
                            <SystemBlueprint type="orchestration" />
                        </CardContent>
                    </Card>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Badge variant="cyber">DISTRIBUTED SYSTEMS</Badge>
                            <h2 className="text-3xl font-bold">Distributed Task Orchestration Grid</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Engineered a resilient async worker system using Redis and Celery to handle long-running security tasks. Built self-healing worker pools with dynamic scaling based on queue pressure.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">Redis</Badge>
                            <Badge variant="secondary">Celery</Badge>
                            <Badge variant="secondary">Python</Badge>
                            <Badge variant="secondary">Auto-scaling</Badge>
                        </div>
                        <ul className="space-y-2 text-sm text-neutral-300 font-mono">
                            <li className="flex items-center gap-2">
                                <span className="text-primary">+</span> Comprehensive state tracking
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary">+</span> Failure-oblivious architecture
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Project 3: IDP */}
                <section className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Badge variant="cyber">PLATFORM ENGINEERING</Badge>
                            <h2 className="text-3xl font-bold">Internal Developer Platform (IDP)</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Transformed the engineering lifecycle by treating infrastructure as a product. Created a unified CI/CD backbone and container strategy that normalized deployment patterns across distinct engineering teams.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">Docker</Badge>
                            <Badge variant="secondary">GitLab CI</Badge>
                            <Badge variant="secondary">Terraform</Badge>
                        </div>
                        <ul className="space-y-2 text-sm text-neutral-300 font-mono">
                            <li className="flex items-center gap-2">
                                <span className="text-primary">+</span> Standardized deployment patterns
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary">+</span> Reduced friction & spin-up time
                            </li>
                        </ul>
                    </div>
                    <Card className="bg-slate-950/50 border-white/5">
                        <CardContent className="p-4">
                            <SystemBlueprint type="idp" />
                        </CardContent>
                    </Card>
                </section>
            </div>
        </div>
    );
}
