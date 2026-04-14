"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HeroHeadline = () => {
    return (
        <div className="relative z-10">
            <motion.h1
                className={cn(
                    "text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-6",
                    "font-sans"
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <span className="block text-3xl md:text-4xl text-primary font-mono mb-4 tracking-normal font-bold">
                    Lead Software Engineer | Systems Architect
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                    Architecting & Delivering Robust Digital Infrastructure
                </span>
            </motion.h1>

            <motion.p
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl font-light leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                Specializing in <span className="text-secondary font-medium">Technical Strategy</span>,{" "}
                <span className="text-accent font-medium">Team Mentorship</span>,{" "}
                <span className="text-primary font-medium">Mission-Critical Orchestration</span>, and{" "}
                security-driven architectures for high-growth enterprises.
            </motion.p>
        </div>
    );
};
