"use client";

import { cvData } from "@/data/cv-data";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Printer, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CVPage() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-primary/20">
            {/* Control Bar - Hidden on Print */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 print:hidden">
                <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                    <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-primary transition-colors group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Dashboard
                    </Link>
                    <button 
                        onClick={handlePrint}
                        className="inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-md text-sm font-bold hover:bg-slate-800 transition-all shadow-sm"
                    >
                        <Printer className="w-4 h-4 mr-2" />
                        Print CV
                    </button>
                </div>
            </div>

            <main className="container mx-auto px-4 md:px-6 py-12 max-w-5xl">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-[300px_1fr] gap-12"
                >
                    {/* Sidebar */}
                    <aside className="space-y-10 border-r border-slate-100 pr-8 hidden md:block print:block">
                        {/* Summary / Contact */}
                        <div className="space-y-6">
                            <h1 className="text-3xl font-black tracking-tighter uppercase leading-none">
                                {cvData.personal.name.split(' ')[0]}<br />
                                <span className="text-primary">{cvData.personal.name.split(' ').slice(1).join(' ')}</span>
                            </h1>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200 pb-4">
                                Executive Dossier
                            </p>
                            
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-3 text-slate-600">
                                    <Mail className="w-4 h-4 text-primary" />
                                    <span>{cvData.personal.email}</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600">
                                    <Phone className="w-4 h-4 text-primary" />
                                    <span>{cvData.personal.phone}</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600">
                                    <MapPin className="w-4 h-4 text-primary" />
                                    <span>{cvData.personal.location}</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600">
                                    <Github className="w-4 h-4 text-primary" />
                                    <span>{cvData.personal.github}</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600">
                                    <Linkedin className="w-4 h-4 text-primary" />
                                    <span>{cvData.personal.linkedin}</span>
                                </div>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className="space-y-6">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Technical Arsenal</h3>
                            {cvData.skills.map((skillGroup) => (
                                <div key={skillGroup.category} className="space-y-2">
                                    <h4 className="text-[10px] font-bold text-slate-500 uppercase">{skillGroup.category}</h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {skillGroup.items.map((item) => (
                                            <span key={item} className="text-[10px] bg-slate-50 border border-slate-100 px-2 py-0.5 rounded font-medium">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Education */}
                        <div className="space-y-6">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Education</h3>
                            {cvData.education.map((edu) => (
                                <div key={edu.degree} className="space-y-1">
                                    <h4 className="text-xs font-bold">{edu.degree}</h4>
                                    <p className="text-[10px] text-slate-500">{edu.institution}</p>
                                    <p className="text-[10px] font-mono text-primary">{edu.year}</p>
                                </div>
                            ))}
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="space-y-12">
                        {/* Profile Summary */}
                        <section className="space-y-4">
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary">Executive Summary</h2>
                            <p className="text-lg text-slate-700 font-light leading-relaxed italic">
                                "{cvData.summary}"
                            </p>
                        </section>

                        {/* Professional Experience */}
                        <section className="space-y-10">
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary">Career Trajectory</h2>
                            <div className="space-y-12">
                                {cvData.experience.map((exp, idx) => (
                                    <div key={idx} className="relative pl-6 border-l-2 border-slate-100 group">
                                        <div className="absolute w-3 h-3 bg-slate-200 border-2 border-white rounded-full -left-[7.5px] top-1.5 group-hover:bg-primary transition-colors" />
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                                            <span className="text-xs font-mono font-bold text-primary bg-primary/5 px-2 py-1 rounded">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <h4 className="text-sm font-bold text-slate-500 mb-4">{exp.company}</h4>
                                        <ul className="space-y-2">
                                            {exp.responsibilities.map((resp, i) => (
                                                <li key={i} className="text-sm text-slate-600 leading-relaxed flex items-start gap-2">
                                                    <span className="text-primary mt-1.5 min-w-[4px] h-[4px] bg-primary rounded-full" />
                                                    {resp}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </motion.div>
            </main>

            {/* Print Styles */}
            <style jsx global>{`
                @media print {
                    body {
                        background: white;
                        color: black;
                        font-size: 12pt;
                    }
                    .container {
                        max-width: 100%;
                        width: 100%;
                        margin: 0;
                        padding: 0;
                    }
                    main {
                        padding: 0;
                    }
                    aside {
                        border-right: 1px solid #e2e8f0;
                    }
                }
            `}</style>
        </div>
    );
}
