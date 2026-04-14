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
        <section className="py-24 space-y-24 border-t border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4 mb-16"
                >
                    <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-widest text-[10px]">
                        Senior Architecture Deep-Dive
                    </Badge>
                    <h2 className="text-3xl font-light tracking-tight text-white">
                        Engineering <span className="text-primary font-medium">Blueprints</span>
                    </h2>
                    <p className="text-white/40 max-w-2xl text-lg font-light leading-relaxed">
                        A clean-room extraction of the core patterns and architectural trade-offs managed during this lifecycle.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* 1. Architectural Blueprint */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-white/[0.02] border-white/5 backdrop-blur-xl h-full">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <GitBranch className="w-5 h-5 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl font-medium text-white">{data.blueprint.title}</CardTitle>
                                </div>
                                <p className="text-sm text-white/40 leading-relaxed font-light">
                                    {data.blueprint.description}
                                </p>
                            </CardHeader>
                            <CardContent className="space-y-8">
                                <div className="relative p-6 bg-black/40 rounded-xl border border-white/5 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                                    <div className="space-y-6 relative z-10">
                                        {data.blueprint.flow.map((step, idx) => (
                                            <div key={idx} className="flex items-start gap-4">
                                                <div className="flex flex-col items-center">
                                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                                    {idx !== data.blueprint.flow.length - 1 && (
                                                        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
                                                    )}
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="text-[10px] uppercase tracking-wider text-white/20 font-bold">Step {idx + 1}</div>
                                                    <div className="text-sm">
                                                        <span className="text-white/80">{step.from}</span>
                                                        <span className="text-white/30 mx-2">→</span>
                                                        <span className="text-primary">{step.to}</span>
                                                    </div>
                                                    <div className="text-[12px] text-white/40 italic">{step.action}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {data.blueprint.participants.map((p, i) => (
                                        <Badge key={i} variant="secondary" className="bg-white/5 text-white/60 hover:text-white border-transparent text-[10px]">
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
                        <Card className="bg-white/[0.02] border-white/5 backdrop-blur-xl h-full">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-orange-500/10 rounded-lg">
                                        <ShieldAlert className="w-5 h-5 text-orange-400" />
                                    </div>
                                    <CardTitle className="text-xl font-medium text-white">{data.reflections.title}</CardTitle>
                                </div>
                                <p className="text-sm text-white/40 leading-relaxed font-light">
                                    Critical technical trade-offs navigated during the scale-up from V1 to V2.
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    {data.reflections.tradeOffs.map((to, idx) => (
                                        <div key={idx} className="group p-4 rounded-xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Cpu className="w-3 h-3 text-white/20 group-hover:text-primary transition-colors" />
                                                <h4 className="text-sm font-medium text-white/90">{to.outcome}</h4>
                                            </div>
                                            <p className="text-[13px] text-white/40 font-light leading-relaxed">
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
                    className="mt-12"
                >
                    <Card className="bg-black/40 border-white/5 overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <Code className="w-4 h-4 text-primary" />
                                <span className="text-[11px] font-mono text-white/60 tracking-wider uppercase">Signature Isolation Layer</span>
                            </div>
                            <Badge variant="outline" className="text-[9px] border-white/20 text-white/40">
                                CLEAN ROOM EXTRACT
                            </Badge>
                        </div>
                        <CardContent className="p-0">
                            <div className="grid grid-cols-1 lg:grid-cols-3">
                                <div className="lg:col-span-2 p-6 bg-black/60 font-mono text-[13px] leading-relaxed text-white/70 overflow-x-auto">
                                    <pre className="whitespace-pre">
                                        {data.signatureSnippet.code}
                                    </pre>
                                </div>
                                <div className="p-6 bg-white/[0.02] border-l border-white/5 flex items-center">
                                    <div className="space-y-4">
                                        <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                                            <p className="text-xs text-primary/80 font-light leading-relaxed italic">
                                                "{data.signatureSnippet.annotation}"
                                            </p>
                                        </div>
                                        <p className="text-[11px] text-white/30 uppercase tracking-[0.2em] font-medium leading-loose">
                                            Architectural Standard: <br/> 
                                            <span className="text-white/60 font-bold">Secure by Design</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};
