"use client";

import { motion } from "framer-motion";
import { Server, Workflow, Zap, ShieldCheck } from "lucide-react";

const services = [
    {
        title: "Backend Architecture",
        description: "System design, scalability planning, and database optimization for high-load environments.",
        icon: <Server className="w-8 h-8 text-primary" />,
    },
    {
        title: "DevOps & CI/CD",
        description: "Dockerization, GitHub Actions/GitLab CI, and automated deployment pipelines.",
        icon: <Workflow className="w-8 h-8 text-secondary" />,
    },
    {
        title: "Performance Optimization",
        description: "Async workflows, Celery task orchestration, and bottleneck elimination.",
        icon: <Zap className="w-8 h-8 text-accent" />,
    },
    {
        title: "Security-Focused System Design",
        description: "Compliance-aware architectures (SOC2/HIPAA) and secure coding practices.",
        icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
    },
];

export const ServicesSection = () => {
    return (
        <section className="container mx-auto px-4 md:px-6 py-20 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold mb-12 border-b border-primary/20 pb-4 inline-block">
                    &gt; Core_Competencies
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 border border-primary/10 bg-primary/5 rounded-lg hover:border-primary/30 transition-colors group"
                        >
                            <div className="mb-4 p-3 bg-background rounded-md inline-block border border-primary/10 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
