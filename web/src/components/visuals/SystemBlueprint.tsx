"use client";

import { motion } from "framer-motion";

type BlueprintType = "federated" | "orchestration" | "idp";

interface SystemBlueprintProps {
    type: BlueprintType;
}

export function SystemBlueprint({ type }: SystemBlueprintProps) {
    return (
        <div className="relative w-full aspect-video bg-slate-900/50 rounded-lg border border-primary/20 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-cyber-grid bg-[size:20px_20px] opacity-10" />

            {/* Federated Ecosystem Visualization */}
            {type === "federated" && (
                <svg viewBox="0 0 400 200" className="w-full h-full p-8">
                    {/* Central Hub */}
                    <motion.circle
                        cx="200"
                        cy="100"
                        r="30"
                        className="fill-primary/20 stroke-primary stroke-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                    {/* Satellites */}
                    {[0, 1, 2, 3, 4].map((i) => (
                        <motion.circle
                            key={i}
                            cx="200"
                            cy="100"
                            r="10"
                            className="fill-secondary/20 stroke-secondary stroke-1"
                            initial={{ x: 0, y: 0 }}
                            animate={{
                                x: Math.cos((i * 72 * Math.PI) / 180) * 120,
                                y: Math.sin((i * 72 * Math.PI) / 180) * 80,
                            }}
                            transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        />
                    ))}
                    {/* Connection Lines */}
                    {[0, 1, 2, 3, 4].map((i) => (
                        <motion.line
                            key={`line-${i}`}
                            x1="200"
                            y1="100"
                            x2="200"
                            y2="100"
                            className="stroke-primary/50 stroke-1"
                            animate={{
                                x2: 200 + Math.cos((i * 72 * Math.PI) / 180) * 120,
                                y2: 100 + Math.sin((i * 72 * Math.PI) / 180) * 80,
                            }}
                            transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        />
                    ))}
                </svg>
            )}

            {/* Orchestration Grid Visualization */}
            {type === "orchestration" && (
                <div className="grid grid-cols-4 gap-4 p-8 w-full h-full">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="rounded-md border border-accent/30 bg-accent/5"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <motion.div
                                className="h-full w-full bg-accent/20"
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
                            />
                        </motion.div>
                    ))}
                </div>
            )}

            {/* IDP Visualization */}
            {type === "idp" && (
                <div className="flex flex-col items-center justify-center gap-8 w-full">
                    <div className="flex gap-4">
                        {[1, 2, 3].map(i => (
                            <motion.div key={i} className="w-12 h-12 border border-slate-500 rounded bg-slate-800"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: i * 0.2 }}
                            />
                        ))}
                    </div>
                    <motion.div className="w-64 h-2 bg-gradient-to-r from-transparent via-primary to-transparent"
                        animate={{ scaleX: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div className="w-24 h-24 border-2 border-primary rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1, type: "spring" }}
                    >
                        <div className="text-xs text-primary font-mono">DEPLOY</div>
                    </motion.div>
                </div>
            )}

            <div className="absolute bottom-2 right-2 text-[10px] font-mono text-muted-foreground">
                FIG {type === "federated" ? "1.0" : type === "orchestration" ? "2.1" : "3.0"}
            </div>
        </div>
    );
}
