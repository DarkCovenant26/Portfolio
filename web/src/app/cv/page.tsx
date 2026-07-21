"use client";

import { cvData } from "@/data/cv-data";
import { Mail, Phone, MapPin, Github, Linkedin, Printer } from "lucide-react";
import { CVDownloader } from "@/components/CVDownloader";
import { motion } from "framer-motion";

export default function CVPage() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="flex flex-col items-center w-full pb-12">
            {/* Document Toolbar */}
            <div className="w-full max-w-5xl sticky top-4 z-40 mb-6 flex justify-end gap-3 print:hidden">
                <button 
                    onClick={handlePrint}
                    className="inline-flex items-center px-4 py-2 bg-background border border-border text-foreground rounded-md text-sm font-bold hover:bg-muted transition-all shadow-sm"
                >
                    <Printer className="w-4 h-4 mr-2" />
                    Print
                </button>
                <CVDownloader targetId="cv-document" />
            </div>

            {/* The CV Document */}
            <main id="cv-document" className="w-full max-w-5xl bg-white text-slate-900 shadow-2xl rounded-sm overflow-hidden p-8 md:p-12">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-[280px_1fr] gap-12"
                >
                    {/* Sidebar */}
                    <aside className="space-y-10 border-r border-slate-200 pr-8 hidden md:block print:block">
                        {/* Summary / Contact */}
                        <div className="space-y-6">
                            <h1 className="text-3xl font-black tracking-tighter uppercase leading-none">
                                {cvData.personal.name.split(' ')[0]}<br />
                                <span className="text-blue-600">{cvData.personal.name.split(' ').slice(1).join(' ')}</span>
                            </h1>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200 pb-4">
                                Executive Dossier
                            </p>
                            
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-3 text-slate-600">
                                    <Mail className="w-4 h-4 text-blue-600" />
                                    <a href={`mailto:${cvData.personal.email}`} className="hover:text-blue-600 transition-colors">
                                        {cvData.personal.email}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600">
                                    <Phone className="w-4 h-4 text-blue-600" />
                                    <a href={`tel:${cvData.personal.phone}`} className="hover:text-blue-600 transition-colors">
                                        {cvData.personal.phone}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600">
                                    <MapPin className="w-4 h-4 text-blue-600" />
                                    <span>{cvData.personal.location}</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600">
                                    <Github className="w-4 h-4 text-blue-600" />
                                    <a href={`https://${cvData.personal.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                        {cvData.personal.github}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600">
                                    <Linkedin className="w-4 h-4 text-blue-600" />
                                    <a href={`https://${cvData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                        {cvData.personal.linkedin}
                                    </a>
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
                                            <span key={item} className="text-[10px] bg-slate-100 border border-slate-200 px-2 py-0.5 rounded font-medium text-slate-700">
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
                                    <h4 className="text-xs font-bold text-slate-800">{edu.degree}</h4>
                                    <p className="text-[10px] text-slate-500">{edu.institution}</p>
                                    <p className="text-[10px] font-mono text-blue-600">{edu.year}</p>
                                </div>
                            ))}
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="space-y-12">
                        {/* Profile Summary */}
                        <section className="space-y-4">
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Executive Summary</h2>
                            <p className="text-lg text-slate-700 font-light leading-relaxed italic">
                                "{cvData.summary}"
                            </p>
                        </section>

                        {/* Professional Experience */}
                        <section className="space-y-10">
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Career Trajectory</h2>
                            <div className="space-y-12">
                                {cvData.experience.map((exp, idx) => (
                                    <div key={idx} className="relative pl-6 border-l-2 border-slate-200 group">
                                        <div className="absolute w-3 h-3 bg-slate-300 border-2 border-white rounded-full -left-[7.5px] top-1.5 group-hover:bg-blue-600 transition-colors" />
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                                            <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <h4 className="text-sm font-bold text-slate-500 mb-4">{exp.company}</h4>
                                        <ul className="space-y-2">
                                            {exp.responsibilities.map((resp, i) => (
                                                <li key={i} className="text-sm text-slate-600 leading-relaxed flex items-start gap-2">
                                                    <span className="text-blue-600 mt-1.5 min-w-[4px] h-[4px] bg-blue-600 rounded-full" />
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
                    @page {
                        size: A4;
                        margin: 0;
                    }
                    body {
                        background: white !important;
                    }
                    #cv-document {
                        box-shadow: none !important;
                        padding: 10mm !important;
                    }
                }
            `}</style>
        </div>
    );
}
