"use client";

import { motion } from "framer-motion";
import { CaseStudy } from "@/data/case-studies";
import { Terminal, Shield, Zap, Target } from "lucide-react";

export const CaseStudyContent = ({ study }: { study: CaseStudy }) => {
    const sections = [
        {
            id: "mission",
            title: "The Mission",
            icon: <Target className="w-6 h-6 text-primary" />,
            content: study.sections.mission,
        },
        {
            id: "architecture",
            title: "The Architecture",
            icon: <Shield className="w-6 h-6 text-secondary" />,
            content: study.sections.architecture,
        },
        {
            id: "execution",
            title: "The Execution",
            icon: <Terminal className="w-6 h-6 text-accent" />,
            content: study.sections.execution,
        },
        {
            id: "baseline",
            title: "The Baseline",
            icon: <Zap className="w-6 h-6 text-green-400" />,
            content: study.sections.baseline,
        },
    ];

    return (
        <section className="py-16 relative z-10">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="space-y-16">
                    {/* Technologies Used */}
                    <div className="p-6 border border-primary/20 bg-surface-accent rounded-lg">
                        <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4 flex items-center">
                            <span className="w-8 h-[1px] bg-primary/50 mr-4"></span>
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-background border border-card-border text-foreground rounded-md text-sm font-medium hover:border-primary/50 transition-colors shadow-sm dark:shadow-none"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Dossier Sections */}
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="relative pl-6 md:pl-10 border-l border-card-border"
                        >
                            <div className="absolute left-[-16px] top-0 bg-background p-1 border border-card-border rounded-lg shadow-sm">
                                {section.icon}
                            </div>
                            <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide">
                                {section.title}
                            </h2>
                            <p className="text-lg text-muted-foreground font-light leading-relaxed">
                                {section.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
