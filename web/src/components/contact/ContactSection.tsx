"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const ContactSection = () => {
    return (
        <section id="contact" className="container mx-auto px-4 md:px-6 py-20 relative z-10 mb-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Have a project in mind? <br />
                    <span className="text-primary">Let’s talk.</span>
                </h2>

                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                    Interested in connecting? I'm always open to conversations about engineering, architecture, and new opportunities.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
                    <MagneticButton asChild size="lg" className="h-16 px-10 text-lg rounded-full font-bold">
                        <Link href="mailto:your.email@example.com">
                            Email Me <Mail className="ml-2 h-5 w-5" />
                        </Link>
                    </MagneticButton>

                    <div className="flex gap-4">
                        <Link
                            href="https://github.com"
                            target="_blank"
                            className="p-4 rounded-full bg-muted border border-card-border hover:bg-primary/10 hover:border-primary/50 transition-all"
                        >
                            <Github className="h-6 w-6" />
                        </Link>
                        <Link
                            href="https://linkedin.com"
                            target="_blank"
                            className="p-4 rounded-full bg-muted border border-card-border hover:bg-primary/10 hover:border-primary/50 transition-all"
                        >
                            <Linkedin className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
