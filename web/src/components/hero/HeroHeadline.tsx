"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HeroHeadline = () => {
    return (
        <div className="relative z-10">
            <motion.h1
                className={cn(
                    "text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6",
                    "font-sans"
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <span className="inline-block relative">
                    <span className="relative z-10">Director of</span>
                    <motion.span
                        className="absolute inset-0 text-primary opacity-30 z-0"
                        animate={{
                            x: [-2, 2, -1, 0],
                            y: [1, -1, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2.5,
                            repeatType: "mirror",
                        }}
                    >
                        Director of
                    </motion.span>
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-pulse-slow">
                    Cyber R&D
                </span>
            </motion.h1>

            <motion.p
                className="text-xl md:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                Architecting <span className="text-secondary font-mono text-lg">high-frequency</span> security ecosystems
                and <span className="text-accent font-mono text-lg">intelligent</span> defense grids.
            </motion.p>
        </div>
    );
};
