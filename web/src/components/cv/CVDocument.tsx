"use client";

import React from "react";
import { CVData } from "@/data/cv-data";

interface CVDocumentProps {
    data: CVData;
    showPhoto?: boolean;
}

export const CVDocument = React.forwardRef<HTMLDivElement, CVDocumentProps>(
    ({ data, showPhoto = false }, ref) => {
        return (
            <div
                ref={ref}
                className="bg-white text-black p-12 max-w-[210mm] mx-auto"
                style={{
                    minHeight: "297mm",
                    fontFamily: "'Inter', 'Segoe UI', 'Helvetica Neue', sans-serif",
                }}
            >
                {/* Header */}
                <header className="pb-6 mb-8 border-b-2" style={{ borderColor: '#2dd4bf' }}>
                    <div className="flex gap-6 items-start">
                        {/* Photo - only show if enabled and photo exists */}
                        {showPhoto && data.personal.photo && (
                            <div className="flex-shrink-0">
                                <img
                                    src={data.personal.photo}
                                    alt={data.personal.name}
                                    className="w-28 h-36 object-cover border-2"
                                    style={{
                                        objectPosition: 'center top',
                                        borderColor: '#2dd4bf'
                                    }}
                                />
                            </div>
                        )}

                        {/* Header Text */}
                        <div className="flex-1">
                            <h1 className="text-5xl font-bold mb-3" style={{ letterSpacing: '-0.02em' }}>
                                {data.personal.name}
                            </h1>
                            <h2 className="text-xl font-medium mb-4" style={{ color: '#0f766e' }}>
                                {data.personal.title}
                            </h2>
                            <div className="text-sm text-gray-700 space-y-2">
                                <div className="flex flex-wrap gap-3 items-center">
                                    <span className="font-medium">{data.personal.location}</span>
                                    <span style={{ color: '#2dd4bf' }}>•</span>
                                    <span>{data.personal.phone}</span>
                                    <span style={{ color: '#2dd4bf' }}>•</span>
                                    <a href={`mailto:${data.personal.email}`} className="hover:underline" style={{ color: '#0f766e' }}>
                                        {data.personal.email}
                                    </a>
                                </div>
                                {(data.personal.linkedin || data.personal.github) && (
                                    <div className="flex flex-wrap gap-3 items-center">
                                        {data.personal.linkedin && (
                                            <a href={`https://${data.personal.linkedin}`} className="hover:underline" style={{ color: '#0f766e' }}>
                                                {data.personal.linkedin}
                                            </a>
                                        )}
                                        {data.personal.github && (
                                            <>
                                                {data.personal.linkedin && <span style={{ color: '#2dd4bf' }}>•</span>}
                                                <a href={`https://${data.personal.github}`} className="hover:underline" style={{ color: '#0f766e' }}>
                                                    {data.personal.github}
                                                </a>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Professional Summary */}
                <section className="mb-8">
                    <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 uppercase tracking-wide" style={{ color: '#0f766e', borderColor: '#e5e7eb' }}>
                        Professional Summary
                    </h3>
                    <p className="text-sm text-gray-800 leading-loose">
                        {data.summary}
                    </p>
                </section>

                {/* Work Experience */}
                <section className="mb-8">
                    <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 uppercase tracking-wide" style={{ color: '#0f766e', borderColor: '#e5e7eb' }}>
                        Work Experience
                    </h3>
                    <div className="space-y-6">
                        {data.experience.map((job, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex-1">
                                        <h4 className="text-base font-bold" style={{ color: '#111827' }}>
                                            {job.title}
                                        </h4>
                                        <div className="text-sm font-medium mt-1" style={{ color: '#0f766e' }}>
                                            {job.company}
                                        </div>
                                    </div>
                                    <div className="text-sm font-medium text-gray-600 ml-4">
                                        {job.period}
                                    </div>
                                </div>
                                <ul className="list-disc ml-5 space-y-2 text-sm text-gray-800 leading-relaxed">
                                    {job.responsibilities.map((resp, idx) => (
                                        <li key={idx}>
                                            {resp}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Key Projects */}
                {data.projects && data.projects.length > 0 && (
                    <section className="mb-8">
                        <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 uppercase tracking-wide" style={{ color: '#0f766e', borderColor: '#e5e7eb' }}>
                            Key Projects
                        </h3>
                        <div className="space-y-4">
                            {data.projects.map((project, index) => (
                                <div key={index}>
                                    <h4 className="text-base font-bold mb-2" style={{ color: '#111827' }}>
                                        {project.title}
                                    </h4>
                                    <p className="text-sm text-gray-800 mb-2 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1 mb-2">
                                        {project.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs px-2 py-1 rounded"
                                                style={{
                                                    backgroundColor: '#f0fdfa',
                                                    color: '#0f766e',
                                                    border: '1px solid #99f6e4'
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    {project.impact && (
                                        <p className="text-xs font-medium" style={{ color: '#0f766e' }}>
                                            ⚡ {project.impact}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Skills */}
                <section className="mb-8">
                    <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 uppercase tracking-wide" style={{ color: '#0f766e', borderColor: '#e5e7eb' }}>
                        Technical Skills
                    </h3>
                    <div className="space-y-3">
                        {data.skills.map((skillGroup, index) => (
                            <div key={index}>
                                <h4 className="text-sm font-bold mb-2" style={{ color: '#111827' }}>
                                    {skillGroup.category}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs px-3 py-1 rounded-full"
                                            style={{
                                                backgroundColor: '#f9fafb',
                                                color: '#374151',
                                                border: '1px solid #e5e7eb'
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section>
                    <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 uppercase tracking-wide" style={{ color: '#0f766e', borderColor: '#e5e7eb' }}>
                        Education
                    </h3>
                    <div className="space-y-3">
                        {data.education.map((edu, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="text-base font-bold" style={{ color: '#111827' }}>
                                        {edu.degree}
                                    </h4>
                                    <span className="text-sm font-medium text-gray-600">
                                        {edu.year}
                                    </span>
                                </div>
                                <div className="text-sm font-medium" style={{ color: '#0f766e' }}>
                                    {edu.institution}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        );
    }
);

CVDocument.displayName = "CVDocument";
