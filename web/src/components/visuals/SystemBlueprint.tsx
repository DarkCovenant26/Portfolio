"use client";

import { motion } from "framer-motion";

type BlueprintType = "federated" | "orchestration" | "idp" | "replication" | "risk-engine" | "benchmarking";

interface SystemBlueprintProps {
    type: BlueprintType;
}

export function SystemBlueprint({ type }: SystemBlueprintProps) {
    return (
        <div className="relative w-full aspect-video bg-muted/30 rounded-lg border border-primary/10 overflow-hidden flex items-center justify-center transition-colors duration-300">
            <div className="absolute inset-0 bg-cyber-grid opacity-20" />

            {/* Federated Ecosystem Visualization */}
            {type === "federated" && (
                <svg viewBox="0 0 400 200" className="w-full h-full p-8">
                    {/* Central Hub */}
                    <motion.circle
                        cx="200"
                        cy="100"
                        r="30"
                        className="fill-primary/10 stroke-primary stroke-1 opacity-80"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    {/* Satellites */}
                    {[0, 1, 2, 3, 4].map((i) => (
                        <motion.circle
                            key={i}
                            cx="200"
                            cy="100"
                            r="10"
                            className="fill-slate-800/30 stroke-slate-500 stroke-[0.5]"
                            initial={{ x: 0, y: 0 }}
                            animate={{
                                x: Math.cos((i * 72 * Math.PI) / 180) * 120,
                                y: Math.sin((i * 72 * Math.PI) / 180) * 80,
                            }}
                            transition={{ duration: 3, delay: 1 + i * 0.2, ease: "easeInOut" }}
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
                            className="stroke-primary/20 stroke-[0.5]"
                            animate={{
                                x2: 200 + Math.cos((i * 72 * Math.PI) / 180) * 120,
                                y2: 100 + Math.sin((i * 72 * Math.PI) / 180) * 80,
                            }}
                            transition={{ duration: 3, delay: 1 + i * 0.2, ease: "easeInOut" }}
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
                            className="rounded-md border border-primary/10 bg-primary/5"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.2, duration: 1 }}
                        >
                            <motion.div
                                className="h-full w-full bg-primary/5"
                                animate={{ opacity: [0, 0.4, 0] }}
                                transition={{ duration: 4, repeat: Infinity, delay: Math.random() * 4 }}
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

            {/* Replication Visualization */}
            {type === "replication" && (
                <svg viewBox="0 0 400 200" className="w-full h-full p-8">
                    {/* Source Node */}
                    <motion.rect
                        x="50"
                        y="70"
                        width="60"
                        height="60"
                        rx="4"
                        className="fill-primary/10 stroke-primary stroke-2"
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                    />
                    <text x="35" y="150" className="fill-primary font-mono text-[10px]">CORE_SAAS</text>

                    {/* Flow Line */}
                    <motion.path
                        d="M 110 100 L 290 100"
                        className="stroke-primary/30 stroke-2 fill-none dash-array-[5,5]"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />

                    {/* Animated Packets */}
                    {[0, 1, 2].map((i) => (
                        <motion.circle
                            key={i}
                            r="3"
                            className="fill-primary"
                            initial={{ cx: 110, cy: 100 }}
                            animate={{ cx: 290 }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "linear"
                            }}
                        />
                    ))}

                    {/* Destination Node */}
                    <motion.rect
                        x="290"
                        y="70"
                        width="60"
                        height="60"
                        rx="4"
                        className="fill-slate-500/10 stroke-slate-500 stroke-1"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    />
                    <text x="280" y="150" className="fill-slate-600 dark:fill-slate-400 font-mono text-[10px]">PARTNER_NODE</text>
                </svg>
            )}
            
            {/* Risk Engine Visualization */}
            {type === "risk-engine" && (
                <svg viewBox="0 0 400 200" className="w-full h-full p-8">
                    {/* Inherent Risk Core */}
                    <motion.circle
                        cx="200"
                        cy="100"
                        r="45"
                        className="fill-primary/5 stroke-primary/40 stroke-1"
                        animate={{ r: [45, 47, 45] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    {/* Residual Risk Pulse */}
                    <motion.circle
                        cx="200"
                        cy="100"
                        r="60"
                        className="fill-none stroke-primary/20 stroke-[0.5]"
                        animate={{ r: [60, 90], opacity: [0.3, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
                    />
                    
                    {/* Mitigation Streams */}
                    {[0, 1, 2, 3].map((i) => (
                        <motion.line
                            key={`stream-${i}`}
                            x1={200 + Math.cos((i * 90 * Math.PI) / 180) * 150}
                            y1={100 + Math.sin((i * 90 * Math.PI) / 180) * 100}
                            x2="200"
                            y2="100"
                            className="stroke-primary/10 stroke-1"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 4, repeat: Infinity, delay: i * 1, ease: "linear" }}
                        />
                    ))}
                    <text x="175" y="105" className="fill-primary font-mono text-[10px] tracking-wider">RISK_CORE</text>
                </svg>
            )}

            {/* Benchmarking Visualization */}
            {type === "benchmarking" && (
                <svg viewBox="0 0 400 200" className="w-full h-full p-8">
                    {/* Peer Cloud Polygon */}
                    <motion.polygon
                        points="150,50 250,50 300,100 250,150 150,150 100,100"
                        className="fill-slate-800/20 stroke-primary/10 stroke-[0.5]"
                        animate={{ opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    {/* Industry Mean Line */}
                    <line x1="200" y1="50" x2="200" y2="150" className="stroke-slate-400 dark:stroke-slate-700/30 stroke-dasharray-[2,2]" />
                    <text x="210" y="60" className="fill-slate-600 dark:fill-slate-500 font-mono text-[8px]">INDUSTRY_MEAN</text>
                    
                    {/* Target Node (User) */}
                    <motion.circle
                        cx="220"
                        cy="90"
                        r="5"
                        className="fill-primary/80 shadow-primary"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <text x="230" y="95" className="fill-primary/80 font-mono text-[10px]">YOU</text>
                    
                    {/* Peer Nodes */}
                    {[1, 2, 3, 4, 5].map((i) => (
                        <circle
                            key={`peer-${i}`}
                            cx={150 + Math.random() * 100}
                            cy={70 + Math.random() * 60}
                            r="1.5"
                            className="fill-slate-400 dark:fill-slate-600/30"
                        />
                    ))}
                </svg>
            )}

            <div className="absolute bottom-2 right-2 text-[10px] font-mono text-muted-foreground">
                FIG {type === "federated" ? "1.0" : type === "orchestration" ? "2.1" : type === "idp" ? "3.0" : "4.0"}
            </div>
        </div>
    );
}
