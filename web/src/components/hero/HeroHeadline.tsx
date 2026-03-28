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
                <span className="block text-3xl md:text-4xl text-primary font-mono mb-4 tracking-normal">
                    Senior Backend & Systems Architect
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-primary/80">
                    Building Secure, Scalable Backend Systems
                </span>
            </motion.h1>

            <motion.p
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl font-light leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                Specializing in <span className="text-secondary font-medium">Django & FastAPI</span>,{" "}
                <span className="text-accent font-medium">DevOps automation</span>,{" "}
                <span className="text-primary font-medium">CI/CD pipelines</span>, and{" "}
                security-driven architectures.
            </motion.p>
        </div>
    );
};
