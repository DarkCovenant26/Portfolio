"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Network, Zap, Code, ArrowRight } from "lucide-react";
import Link from "next/link";

const bluePrints = [
    {
        id: "kpi-orchestration",
        title: "Global KPI Orchestration",
        icon: Zap,
        description: "Event-driven synthesis engine that aggregates cross-module data into business-intel KPIs for a centralized dashboard.",
        snippet: "@receiver(post_save, sender=ClientSection)\ndef trigger_kpi_refresh(sender, instance, created, **kwargs):\n    # Recompute local effectiveness artifacts\n    recompute_control_effectiveness_for_section(instance)\n    \n    # Sync to centralized Dashboard via Interop Orchestrator\n    send_interop_notification(\n        action=\"calculate_audit_readiness\",\n        client_id=instance.client_standard.client.client_no,\n        params={\"section_id\": instance.id, \"status\": instance.status}\n    )",
        link: "/work/kpi-orchestration",
        tags: ["Orchestration", "Event-Driven", "Analytics"]
    },
    {
        id: "isolation",
        title: "Multi-Tenant Middleware",
        icon: Database,
        description: "Physical database isolation via custom header-based routing and high-entropy tenant identifiers.",
        snippet: "class MultiTenantRouter:\n  def db_for_read(self, model, **hints):\n    return get_tenant_context()\n\nclass TenantSecurityMiddleware:\n  def __call__(self, request):\n    ref_id = request.headers.get('ref-id')\n    set_tenant_context(ref_id)\n    return self.get_response(request)",
        link: "/work/multi-tenant-db-orchestration",
        tags: ["Middleware", "Security", "Isolation"]
    },
    {
        id: "sma-engine",
        title: "SMA Benchmarking Engine",
        icon: Code,
        description: "High-performance data mapping using JSONField optimizations to process 35k+ industry benchmark points.",
        snippet: "def optimize_benchmarks(self, raw_data):\n    # Mapping complex hierarchical industry schemas\n    processed = { \n        d['key']: d['val'] for d in raw_data \n        if d.is_valid() \n    }\n    return SMAStats.objects.filter(id=self.id).update(\n        metrics_blob=Cast(processed, JSONField())\n    )",
        link: "/work/sma-benchmarking",
        tags: ["JSONField", "Optimization", "Mapping"]
    }
];

export const ArchitectureShowcase = () => {
    const [activeTab, setActiveTab] = useState(bluePrints[0]);

    return (
        <section className="container mx-auto px-4 md:px-6 py-32 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                <div className="space-y-4">
                    <Badge variant="outline" className="text-cyan-500 border-cyan-500/20 bg-cyan-500/5 uppercase tracking-[0.2em] text-[10px]">
                        Engineering Excellence
                    </Badge>
                    <h2 className="text-4xl font-light tracking-tight text-foreground leading-tight">
                        The Architectural <span className="text-cyan-500 font-medium">Blueprint</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl text-lg font-light leading-relaxed">
                        Moving beyond simple scripts into enterprise-grade system orchestration. 
                        Live extractions of my core engineering patterns.
                    </p>
                </div>
                
                <div className="flex gap-2">
                    {bluePrints.map((bp) => (
                        <button
                            key={bp.id}
                            onClick={() => setActiveTab(bp)}
                            className={`p-3 rounded-lg border transition-all duration-300 ${
                                activeTab.id === bp.id 
                                ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-400" 
                                : "bg-white/5 border-white/5 text-white/30 hover:text-white/60 hover:border-white/10"
                            }`}
                        >
                            <bp.icon className="w-5 h-5" />
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
                {/* Left: Content Description */}
                <div className="lg:col-span-2 flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <h3 className="text-2xl font-medium text-foreground">{activeTab.title}</h3>
                                <p className="text-muted-foreground leading-relaxed font-light">
                                    {activeTab.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {activeTab.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="bg-white/5 text-white/40 border-transparent text-[10px] uppercase tracking-widest font-bold">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            <Link 
                                href={activeTab.link}
                                className="inline-flex items-center text-sm font-medium text-cyan-500 group"
                            >
                                Explorer Deep-Dive 
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right: Technical Preview */}
                <div className="lg:col-span-3">
                    <Card className="bg-card/40 border-card-border overflow-hidden h-full group backdrop-blur-md">
                        <div className="flex items-center justify-between px-6 py-4 bg-muted/40 border-b border-card-border">
                            <div className="flex items-center gap-3">
                                <Code className="w-4 h-4 text-cyan-500" />
                                <span className="text-[10px] font-mono text-muted-foreground tracking-[0.2em] uppercase font-bold">Extraction_Layer_{activeTab.id}</span>
                            </div>
                            <div className="flex gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-500/20" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                                <div className="w-2 h-2 rounded-full bg-green-500/20" />
                            </div>
                        </div>
                        <CardContent className="p-8 font-mono text-sm text-foreground/80 leading-relaxed bg-muted/20">
                             <AnimatePresence mode="wait">
                                <motion.pre
                                    key={activeTab.id}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.02 }}
                                    className="whitespace-pre-wrap selection:bg-cyan-500/20"
                                >
                                    {activeTab.snippet}
                                </motion.pre>
                            </AnimatePresence>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Background Highlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/10 blur-[120px] pointer-events-none -z-10 rounded-full" />
        </section>
    );
};
