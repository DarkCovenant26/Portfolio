"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const backendServices = [
    { name: "Cyber Security Risk Mgmt", abbrev: "CSRM" },
    { name: "Global Security/Privacy Compliance", abbrev: "Compliance" },
    { name: "Unified Compliance Blueprint", abbrev: "UCB" },
];

// Architecturally accurate flow layout reflecting Multi-Tenant Orchestration
const nodes = [
    // Row 1: Entry points
    { id: "nextjs", label: "Next.js", x: 100, y: 60, description: "Server-side rendered React 19 app with edge caching.", type: "core" },
    { id: "nginx", label: "Nginx", x: 250, y: 60, description: "Reverse proxy for load balancing and SSL termination.", type: "core" },
    { id: "identity", label: "Identity Service", x: 450, y: 60, description: "Authentication and authorization gateway.", type: "core" },

    // Row 2: Backend services with Ref-ID context
    { id: "csrm", label: "CSRM Service", x: 200, y: 150, description: "Cyber Security Risk Management module using the multi-tenant middleware.", type: "service" },
    { id: "compliance", label: "Compliance Service", x: 400, y: 150, description: "Global Security/Privacy Compliance module using the multi-tenant middleware.", type: "service" },
    { id: "ucb", label: "UCB Engine", x: 600, y: 150, description: "Unified Compliance Blueprint engine utilizing dynamic routing.", type: "service" },

    // Row 3: The Orchestration Layer (The Core Achievement)
    { id: "middleware", label: "Tenant Router (Middleware)", x: 400, y: 250, description: "Custom backend middleware that intercepts 'Ref-ID' headers to dynamically route requests to the correct physical database instance.", type: "shared" },

    // Row 4: Physically Isolated Databases
    { id: "mssp-a", label: "MSSP Instance A", x: 200, y: 350, description: "Physically isolated database instance for high-security tenant A.", type: "database" },
    { id: "mssp-b", label: "MSSP Instance B", x: 400, y: 350, description: "Physically isolated database instance for high-security tenant B.", type: "database" },
    { id: "mssp-c", label: "MSSP Instance C", x: 600, y: 350, description: "Physically isolated database instance for high-security tenant C.", type: "database" },

    // Side: Shared Cache
    { id: "redis", label: "Redis Cache", x: 100, y: 250, description: "Global read-through cache layer for session and framework data.", type: "cache" },
];

const connections = [
    // Entry flow with Header Context
    { from: "nextjs", to: "nginx", label: "HTTP", type: "primary" },
    { from: "nginx", to: "identity", label: "Auth", type: "primary" },

    // Identity to services (Incoming Ref-ID Header)
    { from: "identity", to: "csrm", label: "Ref-ID Header", type: "primary" },
    { from: "identity", to: "compliance", label: "Ref-ID Header", type: "primary" },
    { from: "identity", to: "ucb", label: "Ref-ID Header", type: "primary" },

    // Services hit the Middleware for routing
    { from: "csrm", to: "middleware", label: "Resolve Tenant", type: "primary" },
    { from: "compliance", to: "middleware", label: "Resolve Tenant", type: "primary" },
    { from: "ucb", to: "middleware", label: "Resolve Tenant", type: "primary" },

    // Middleware routes to specific isolated instances
    { from: "middleware", to: "mssp-a", label: "Route A", type: "primary" },
    { from: "middleware", to: "mssp-b", label: "Route B", type: "primary" },
    { from: "middleware", to: "mssp-c", label: "Route C", type: "primary" },

    // Cache Path
    { from: "middleware", to: "redis", label: "Cache Check", type: "cache" },
];

export const TechPipeline = () => {
    const [activeNode, setActiveNode] = useState<string | null>(null);

    return (
        <section className="container mx-auto px-4 md:px-6 py-20 relative z-10">
            <h2 className="text-3xl font-bold mb-12 border-b border-primary/20 pb-4 inline-block">
                &gt; Architecture_Pipeline
            </h2>

            <div className="relative w-full overflow-hidden border border-card-border bg-surface-muted backdrop-blur-sm rounded-xl p-8 flex items-center justify-center">
                <div className="relative w-full max-w-5xl aspect-[16/9]">
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 700 450"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="rgba(59, 130, 246, 0.6)" />
                            </marker>
                            <marker id="arrowhead-cache" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="rgba(234, 179, 8, 0.5)" />
                            </marker>
                        </defs>

                        {/* Connections with directional arrows */}
                        {connections.map((conn, i) => {
                            const start = nodes.find(n => n.id === conn.from)!;
                            const end = nodes.find(n => n.id === conn.to)!;
                            const isCachePath = conn.type === "cache";

                            return (
                                <g key={i}>
                                    <line
                                        x1={start.x} y1={start.y}
                                        x2={end.x} y2={end.y}
                                        stroke={isCachePath ? "rgba(234, 179, 8, 0.3)" : "rgba(59, 130, 246, 0.3)"}
                                        strokeWidth="2"
                                        strokeDasharray={isCachePath ? "4 4" : "0"}
                                        markerEnd={isCachePath ? "url(#arrowhead-cache)" : "url(#arrowhead)"}
                                    />
                                    {/* Animated data flow particle */}
                                    <motion.circle
                                        r="3"
                                        fill={isCachePath ? "#eab308" : "#3b82f6"}
                                        opacity="0.9"
                                    >
                                        <animateMotion
                                            dur={`${2 + (i * 0.15)}s`}
                                            repeatCount="indefinite"
                                            path={`M${start.x},${start.y} L${end.x},${end.y}`}
                                        />
                                    </motion.circle>
                                </g>
                            )
                        })}
                    </svg>

                    {nodes.map((node) => {
                        const isService = (node as any).type === "service";
                        const isShared = (node as any).type === "shared";
                        const isDatabase = (node as any).type === "database";
                        const isCache = (node as any).type === "cache";

                        return (
                            <motion.div
                                key={node.id}
                                className={cn(
                                    "absolute flex flex-col items-center justify-center border rounded font-mono z-10 cursor-pointer transition-all duration-300",
                                    activeNode === node.id
                                        ? "bg-primary/20 border-primary text-primary shadow-[0_0_25px_rgba(59,130,246,0.5)] scale-110 z-50"
                                        : "bg-background border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/50",

                                    // Type-specific styling
                                    isService && "w-28 h-16 text-xs font-bold shadow-[0_0_15px_rgba(34,197,94,0.2)] border-green-500/30",
                                    isShared && "w-28 h-14 text-xs shadow-[0_0_10px_rgba(59,130,246,0.2)] border-blue-500/30",
                                    isCache && "w-28 h-14 text-xs shadow-[0_0_10px_rgba(234,179,8,0.2)] border-yellow-500/30",
                                    isDatabase && "w-28 h-12 text-[10px] rounded-md shadow-[0_0_10px_rgba(139,92,246,0.2)] border-purple-500/30",
                                    !isService && !isShared && !isDatabase && !isCache && "w-28 h-14 text-xs font-bold shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                                )}
                                style={{
                                    left: `${(node.x / 700) * 100}%`,
                                    top: `${(node.y / 450) * 100}%`,
                                    translateX: "-50%",
                                    translateY: "-50%",
                                }}
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.1 + (node.y / 450) * 0.3,
                                    type: "spring"
                                }}
                                onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                            >
                                <span className="text-center px-2 break-words leading-tight pointer-events-none">
                                    {(node as any).fullLabel && activeNode === node.id ? (node as any).fullLabel : node.label}
                                </span>
                            </motion.div>
                        );
                    })}

                    <AnimatePresence>
                        {activeNode && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute top-4 left-4 glass p-4 rounded-lg backdrop-blur-md max-w-sm text-left z-50 shadow-2xl pointer-events-none"
                            >
                                <h4 className="text-primary font-bold mb-1 text-sm">
                                    {(nodes.find(n => n.id === activeNode) as any)?.fullLabel || nodes.find(n => n.id === activeNode)?.label}
                                </h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    {nodes.find(n => n.id === activeNode)?.description}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Updated Legend for Multi-Tenancy */}
            <p className="text-center text-muted-foreground mt-6 font-mono text-xs max-w-2xl mx-auto leading-relaxed mb-12">
                <span className="text-primary font-bold">Request Flow:</span> Next.js → Nginx → Identity Service (with Ref-ID Header) → Backend Services<br />
                <span className="text-blue-500">↳ Tenant Resolution (Middleware)</span> → <span className="text-purple-500">Physically Isolated MSSP Database Instance</span>
                <br />
                <span className="text-xs opacity-60 mt-1 block">Dotted lines = optional cache path | Solid lines = primary flow | Ref-ID = Tenant Routing Identifier</span>
            </p>

            <div className="max-w-4xl mx-auto border-t border-card-border pt-12">
                <h3 className="text-xl font-bold mb-8 text-center">Selected Technical Stack</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {[
                        "Django", "FastAPI", "PostgreSQL", "Redis", "Celery",
                        "Docker", "GitLab CI", "Jenkins", "AWS", "Next.js", "React"
                    ].map((tech) => (
                        <span
                            key={tech}
                            className="px-4 py-2 rounded-full bg-muted border border-card-border text-foreground font-mono text-sm hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};
