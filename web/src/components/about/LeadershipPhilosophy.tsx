"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, ShieldCheck, Flame, TrendingUp } from "lucide-react";

const pillars = [
    {
        title: "Lead by Example",
        description: "Scaled high-performance engineering teams through hands-on mentorship, pair programming, and rigorous code reviews to advance junior developers to production-level competency.",
        icon: Users,
        metric: "Engineering Velocity",
        color: "text-blue-400",
        bg: "bg-blue-400/10"
    },
    {
        title: "Technical Ownership",
        description: "Proven capability to step into critical infrastructure gaps, architecting and implementing zero-trust pipelines and backend services to secure strategic go-lives.",
        icon: Flame,
        metric: "99.9% Uptime Strategy",
        color: "text-orange-400",
        bg: "bg-orange-400/10"
    },
    {
        title: "Secure by Design",
        description: "Moving compliance from a checklist to an architecture. Engineered multi-tenant ecosystems with physical data isolation from the first line of code.",
        icon: ShieldCheck,
        metric: "SOC2-Centric Architecture",
        color: "text-cyan-400",
        bg: "bg-cyan-400/10"
    }
];

export const LeadershipPhilosophy = () => {
    return (
        <section className="container mx-auto px-4 md:px-6 py-24 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
                <Badge variant="outline" className="text-secondary border-secondary/20 bg-secondary/5 uppercase tracking-widest text-[10px]">
                    Engineering Leadership
                </Badge>
                <h2 className="text-4xl font-light tracking-tight text-foreground mb-6">
                    Hands-on <span className="text-secondary font-medium">Lead Methodology</span>
                </h2>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                    I believe the best leaders are practitioners. I lead by architecting clean systems and delivering 
                    industrial-grade code alongside my team.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pillars.map((pillar, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-card border-card-border backdrop-blur-xl h-full group hover:border-secondary/30 transition-all duration-500 shadow-sm dark:shadow-none">
                            <CardContent className="p-8 space-y-6">
                                <div className={`p-4 rounded-2xl w-fit ${pillar.bg} ${pillar.color} group-hover:scale-110 transition-transform duration-500`}>
                                    <pillar.icon className="w-6 h-6" />
                                </div>
                                
                                <div className="space-y-3">
                                    <h3 className="text-xl font-medium text-foreground">{pillar.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                                        {pillar.description}
                                    </p>
                                </div>

                                <div className="pt-6 border-t border-card-border flex items-center justify-between">
                                    <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground/50">Impact</span>
                                    <span className={`text-[11px] font-mono font-bold ${pillar.color} flex items-center gap-2`}>
                                        <TrendingUp className="w-3 h-3" />
                                        {pillar.metric}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
