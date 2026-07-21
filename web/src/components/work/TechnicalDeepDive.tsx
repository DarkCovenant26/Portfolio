"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, GitBranch, ShieldAlert, Cpu } from "lucide-react";

interface BlueprintFlow {
    from: string;
    to: string;
    action: string;
}

interface TechnicalDeepDiveProps {
    data: {
        blueprint: {
            title: string;
            description: string;
            participants: string[];
            flow: BlueprintFlow[];
        };
        signatureSnippet: {
            language: string;
            code: string;
            annotation: string;
        };
        reflections: {
            title: string;
            tradeOffs: { outcome: string; impact: string }[];
        };
    };
}

export const TechnicalDeepDive: React.FC<TechnicalDeepDiveProps> = ({ data }) => {
    return (
        <section className="space-y-6 border-t border-border/40 pt-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-1"
            >
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-widest text-[10px] w-fit">
                    Senior Architecture Deep-Dive
                </Badge>
                <h2 className="text-xl font-bold tracking-tight text-foreground">
                    Engineering <span className="text-primary">Blueprints</span>
                </h2>
                <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                    A clean-room extraction of the core patterns and architectural trade-offs managed during this lifecycle.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* 1. Architectural Blueprint */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="widget-card h-full border-0 shadow-none bg-transparent">
                        <CardHeader className="pb-3">
                            <div className="flex items-center gap-3 mb-1">
                                <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                                    <GitBranch className="w-4 h-4 text-primary" />
                                </div>
                                <CardTitle className="text-sm font-bold text-foreground">{data.blueprint.title}</CardTitle>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                {data.blueprint.description}
                            </p>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="relative p-4 bg-muted/30 rounded-xl border border-border/40 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                                <div className="space-y-4 relative z-10">
                                    {data.blueprint.flow.map((step, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="flex flex-col items-center shrink-0">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                                                {idx !== data.blueprint.flow.length - 1 && (
                                                    <div className="w-px h-10 bg-gradient-to-b from-primary/50 to-transparent" />
                                                )}
                                            </div>
                                            <div className="space-y-0.5">
                                                <div className="text-[9px] uppercase tracking-wider text-muted-foreground/60 font-bold">Step {idx + 1}</div>
                                                <div className="text-xs">
                                                    <span className="text-foreground/80">{step.from}</span>
                                                    <span className="text-muted-foreground mx-2">→</span>
                                                    <span className="text-primary">{step.to}</span>
                                                </div>
                                                <div className="text-[11px] text-muted-foreground italic">{step.action}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {data.blueprint.participants.map((p, i) => (
                                    <Badge key={i} variant="secondary" className="bg-muted/50 text-muted-foreground hover:text-foreground border-border/30 text-[10px]">
                                        {p}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* 2. Systems Reflections / Trade-offs */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="widget-card h-full border-0 shadow-none bg-transparent">
                        <CardHeader className="pb-3">
                            <div className="flex items-center gap-3 mb-1">
                                <div className="p-2 bg-orange-500/10 rounded-lg border border-orange-500/20">
                                    <ShieldAlert className="w-4 h-4 text-orange-500" />
                                </div>
                                <CardTitle className="text-sm font-bold text-foreground">{data.reflections.title}</CardTitle>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Critical technical trade-offs navigated during the scale-up from V1 to V2.
                            </p>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {data.reflections.tradeOffs.map((to, idx) => (
                                    <div key={idx} className="group p-3 rounded-xl hover:bg-muted/30 transition-colors border border-transparent hover:border-border/40">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Cpu className="w-3 h-3 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                                            <h4 className="text-xs font-semibold text-foreground">{to.outcome}</h4>
                                        </div>
                                        <p className="text-[12px] text-muted-foreground leading-relaxed pl-5">
                                            {to.impact}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>

            {/* 3. Signature Snippet */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <Card className="widget-card overflow-hidden border-0 shadow-none bg-transparent">
                    <div className="flex items-center justify-between px-5 py-3 bg-muted/30 border-b border-border/40">
                        <div className="flex items-center gap-2.5">
                            <Code className="w-4 h-4 text-primary" />
                            <span className="text-[11px] font-mono text-muted-foreground tracking-wider uppercase">Signature Isolation Layer</span>
                        </div>
                        <Badge variant="outline" className="text-[9px] border-border/40 text-muted-foreground">
                            CLEAN ROOM EXTRACT
                        </Badge>
                    </div>
                    <CardContent className="p-0">
                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            <div className="lg:col-span-2 p-5 bg-muted/20 font-mono text-[12px] leading-relaxed text-foreground/70 overflow-x-auto border-r border-border/40">
                                <pre className="whitespace-pre">
                                    {data.signatureSnippet.code}
                                </pre>
                            </div>
                            <div className="p-5 bg-card/50 flex items-center">
                                <div className="space-y-3">
                                    <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                                        <p className="text-xs text-primary/80 leading-relaxed italic">
                                            &quot;{data.signatureSnippet.annotation}&quot;
                                        </p>
                                    </div>
                                    <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-medium leading-loose">
                                        Architectural Standard: <br />
                                        <span className="text-foreground font-bold">Secure by Design</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    );
};

