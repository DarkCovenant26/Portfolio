"use client";

import { motion } from "framer-motion";
import React from "react";

const nodes = [
    { id: "frontend", label: "Next.js Client", x: 100, y: 150 },
    { id: "proxy", label: "Nginx Proxy", x: 350, y: 150 },
    { id: "backend", label: "Python API", x: 600, y: 50 },
    { id: "db", label: "PostgreSQL", x: 600, y: 250 },
    { id: "cache", label: "Redis", x: 600, y: 150 },
];

const connections = [
    { from: "frontend", to: "proxy" },
    { from: "proxy", to: "backend" },
    { from: "proxy", to: "cache" },
    { from: "backend", to: "db" },
];

export const TechPipeline = () => {
    return (
        <section className="container mx-auto px-4 md:px-6 py-20 relative z-10">
            <h2 className="text-3xl font-bold mb-12 border-b border-primary/20 pb-4 inline-block">
                &gt; Architecture_Pipeline
            </h2>

            <div className="relative w-full overflow-hidden border border-white/5 bg-card/30 backdrop-blur-sm rounded-xl p-8 min-h-[400px] flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
                            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
                        </linearGradient>
                    </defs>

                    {connections.map((conn, i) => {
                        const start = nodes.find(n => n.id === conn.from)!;
                        const end = nodes.find(n => n.id === conn.to)!;

                        return (
                            <g key={i}>
                                {/* Base Line */}
                                <line
                                    x1={start.x} y1={start.y}
                                    x2={end.x} y2={end.y}
                                    stroke="rgba(255,255,255,0.1)"
                                    strokeWidth="2"
                                />
                                {/* Pulsing Data Packet */}
                                <motion.circle r="3" fill="#3b82f6">
                                    <animateMotion
                                        dur={`${1.5 + i * 0.5}s`}
                                        repeatCount="indefinite"
                                        path={`M${start.x},${start.y} L${end.x},${end.y}`}
                                    />
                                </motion.circle>
                            </g>
                        )
                    })}
                </svg>

                {nodes.map((node) => (
                    <motion.div
                        key={node.id}
                        className="absolute flex flex-col items-center justify-center w-32 h-16 bg-background border border-primary/30 rounded shadow-[0_0_15px_rgba(59,130,246,0.2)] text-xs font-mono text-primary z-10"
                        style={{
                            left: `${(node.x / 800) * 100}%`,
                            top: `${(node.y / 300) * 100}%`,
                            transform: 'translate(-50%, -50%)'
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        viewport={{ once: true }}
                    >
                        {node.label}
                    </motion.div>
                ))}
            </div>
            <p className="text-center text-muted-foreground mt-6 font-mono text-sm max-w-xl mx-auto">
                Built on Next.js 16, utilizing React Server Components, Tailwind v4, and edge-native deployment strategies.
            </p>
        </section>
    );
};
