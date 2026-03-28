import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SystemBlueprint } from "@/components/visuals/SystemBlueprint";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function WorkPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-24 space-y-16">
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
                            <h2 className="text-3xl font-bold">Sequoia Compliance Engine v2</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Architected a high-performance GRC platform designed to automate the mapping of complex cybersecurity frameworks. Engineered a robust data pipeline utilizing **Pandas** and **RapidFuzz** to ingest and synchronize 8MB+ SCF (Secure Controls Framework) datasets.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">Django REST</Badge>
                            <Badge variant="secondary">SCF 2024</Badge>
                            <Badge variant="secondary">Pandas</Badge>
                            <Badge variant="secondary">Celery</Badge>
                            <Badge variant="secondary">RapidFuzz</Badge>
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                            <li className="flex items-center gap-2">
                                <span className="text-primary">+</span> Automated framework synchronization
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary">+</span> 45% faster audit reporting
                            </li>
                        </ul>
                    </div>
                    <Card className="glass">
                        <CardContent className="p-4">
                            <SystemBlueprint type="federated" />
                        </CardContent>
                    </Card>
                </section>

                {/* Project 2: Orchestration Grid */}
                <section className="grid lg:grid-cols-2 gap-8 items-center lg:flex-row-reverse">
                    {/* Order change for visual variety: Diagram Left on desktop? No, let's keep text left for consistency or alternate. Let's alternate locally via grid logic if we wanted, but simple grid is fine. Let's just swap columns in grid. */}
                    <Card className="glass lg:order-last">
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
                            <Badge variant="secondary">Docker</Badge>
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground font-mono">
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
                            <Badge variant="secondary">Jenkins</Badge>
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                            <li className="flex items-center gap-2">
                                <span className="text-primary">+</span> Standardized deployment patterns
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary">+</span> Reduced friction & spin-up time
                            </li>
                        </ul>
                    </div>
                    <Card className="glass">
                        <CardContent className="p-4">
                            <SystemBlueprint type="idp" />
                        </CardContent>
                    </Card>
                </section>
                
                {/* Project 4: SaaS Replication */}
                <section className="grid lg:grid-cols-2 gap-8 items-center lg:flex-row-reverse">
                    <Card className="glass lg:order-last">
                        <CardContent className="p-4">
                            <SystemBlueprint type="replication" />
                        </CardContent>
                    </Card>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Badge variant="cyber">WHITE-LABEL REPLICATION</Badge>
                            <h2 className="text-3xl font-bold">Cyber Security SaaS Replication</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Engineered a high-fidelity technical replication of the flagship Cyber Security SaaS for partner white-labeling. This "trial" project demonstrated the ability to rapidly clone and deploy mission-critical infrastructure to external partner servers while maintaining environment parity.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">GitLab CI</Badge>
                            <Badge variant="secondary">Jenkins</Badge>
                            <Badge variant="secondary">Docker</Badge>
                            <Badge variant="secondary">Nervous System (Audit)</Badge>
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                            <li className="flex items-center gap-2">
                                <span className="text-primary">+</span> Full environment parity
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary">+</span> Automated partner provisioning
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Project 5: Risk Engine */}
                <section className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Badge variant="cyber">RISK QUANTIFICATION</Badge>
                            <h2 className="text-3xl font-bold">Project Sentinel: Dynamic Risk Engine</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Architected a next-generation risk engine that calculates residual risk in real-time based on control implementation status. Implemented a "Dual-State" scoring model in **Django 5** that recalibrates impact scores as mitigation tasks are completed.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">Django 5</Badge>
                            <Badge variant="secondary">PostgreSQL</Badge>
                            <Badge variant="secondary">Service Patterns</Badge>
                            <Badge variant="secondary">Redis</Badge>
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                            <li className="flex items-center gap-2">
                                <span className="text-primary">+</span> Live Residual Risk scoring
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary">+</span> Real-time executive telemetry
                            </li>
                        </ul>
                    </div>
                    <Card className="glass">
                        <CardContent className="p-4">
                            <SystemBlueprint type="risk-engine" />
                        </CardContent>
                    </Card>
                </section>

                {/* Project 6: Benchmarking */}
                <section className="grid lg:grid-cols-2 gap-8 items-center lg:flex-row-reverse">
                    <Card className="glass lg:order-last">
                        <CardContent className="p-4">
                            <SystemBlueprint type="benchmarking" />
                        </CardContent>
                    </Card>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Badge variant="cyber">DIAGNOSTIC ANALYTICS</Badge>
                            <h2 className="text-3xl font-bold">SMA: Industry Benchmarking Tool</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Built a high-performance benchmarking engine that provides real-time security maturity scores compared against peer-specific industry data. Optimized 35,000+ benchmark data points into a lean **JSONField** lookup system.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">Django</Badge>
                            <Badge variant="secondary">Pandas</Badge>
                            <Badge variant="secondary">ReportLab</Badge>
                            <Badge variant="secondary">JSONField</Badge>
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                            <li className="flex items-center gap-2">
                                <span className="text-primary">+</span> industry-contextual scoring
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-primary">+</span> Automated PDF diagnostics
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}
