"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { CaseStudy } from "@/data/case-studies";
import { Badge } from "@/components/ui/badge";

export const CaseStudyHeader = ({ study }: { study: CaseStudy }) => {
    return (
        <section className="pt-32 pb-12 border-b border-primary/20 relative z-10">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors text-sm font-medium mb-12 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Return to Main Dashboard
                    </Link>

                    <div className="flex flex-wrap gap-3 mb-6">
                        <Badge variant="outline" className="text-secondary border-secondary/50 bg-secondary/5 font-mono text-xs uppercase tracking-wider">
                            {study.clientType}
                        </Badge>
                        <Badge variant="outline" className="text-muted-foreground border-card-border font-mono text-xs uppercase tracking-wider">
                            {study.period}
                        </Badge>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight">
                        {study.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-8 max-w-3xl">
                        {study.description}
                    </p>

                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-md font-mono text-sm shadow-[0_0_15px_rgba(var(--primary),0.1)]">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
                        ROLE: {study.role.toUpperCase()}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
