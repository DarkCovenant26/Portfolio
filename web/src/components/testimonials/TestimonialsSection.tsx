"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Zandro designed a highly scalable backend system that significantly improved our deployment workflow. His focus on security and reliability is unmatched.",
        author: "Sarah J.",
        role: "CTO, FinTech Startup",
    },
    {
        quote: "The automated CI/CD pipelines Zandro built saved us hours of manual work every week. He truly understands how to optimize engineering velocity.",
        author: "Michael T.",
        role: "VPE, SaaS Platform",
    },
];

export const TestimonialsSection = () => {
    return (
        <section className="container mx-auto px-4 md:px-6 py-20 relative z-10 border-t border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-3xl font-bold mb-12 text-center text-white">
                    Trusted by Technical Leaders
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/5 relative"
                        >
                            <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/20" />
                            <p className="text-slate-300 font-light leading-relaxed mb-6 mt-4 relative z-10 italic">
                                "{item.quote}"
                            </p>
                            <div>
                                <h4 className="text-white font-bold">{item.author}</h4>
                                <span className="text-sm text-primary/80 font-mono">{item.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
