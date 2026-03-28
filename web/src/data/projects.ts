export interface Project {
    id: string;
    title: string;
    problem: string;
    role: string;
    solution: string;
    impact: string;
    tags: string[];
    link?: string;
    className?: string; // For BentoGrid span
    featured?: boolean;
    category: "Orchestration" | "Infrastructure" | "Backend" | "R&D" | "SaaS";
    image?: string;
}

export const projects: Project[] = [
    {
        id: "sequoia-grc",
        title: "Sequoia Compliance Engine v2",
        problem: "Automating the ingestion and mapping of massive SCF (Secure Controls Framework) datasets.",
        role: "Lead Backend Architect",
        solution: "Engineered a high-performance data pipeline using Pandas and RapidFuzz for framework synchronization and maturity analytics.",
        impact: "Automated 1000+ control mappings; 45% reduction in audit reporting time through real-time readiness scoring.",
        tags: ["Django", "SCF 2024", "Pandas", "RapidFuzz", "Celery"],
        link: "/work/sequoia-grc",
        className: "md:col-span-2",
        category: "SaaS",
        featured: true,
    },
    {
        id: "risk-sentinel",
        title: "Risk Management Engine v2",
        problem: "Legacy risk assessments are static and fail to reflect real-time mitigation status.",
        role: "Module Architect & Lead",
        solution: "Engineered a dynamic 'Dual-State' scoring engine that calculates residual risk based on live control implementation.",
        impact: "Shifted platform from point-in-time assessment to continuous-state risk monitoring with live executive telemetry.",
        tags: ["Django 5", "Service Patterns", "Redis", "PostgreSQL"],
        link: "/work/risk-management-sentinel",
        className: "md:col-span-1",
        category: "Backend",
        featured: true,
    },
    {
        id: "devsecops-pipeline",
        title: "DevSecOps Pipeline Orchestration",
        problem: "Inconsistent deployment security and manual bottlenecks slowed releases.",
        role: "DevOps Engineer",
        solution: "Automated zero-trust CI/CD pipelines with integrated secret management.",
        impact: "Contributed to zero production security incidents over 12+ months.",
        tags: ["Jenkins", "GitLab CI", "Docker", "Infisical"],
        link: "/work/secure-auth-gateway",
        className: "md:col-span-1",
        category: "Orchestration",
        featured: true,
    },

    {
        id: "white-label-replication",
        title: "White-Label SaaS Replication",
        problem: "Enterprise partner required a dedicated, white-labeled instance of the Cyber Security SaaS on their own infrastructure.",
        role: "Lead Replication Architect",
        solution: "Engineered a robust replication pipeline using GitLab CI and Jenkins, enabling automated deployment and environment parity for partner servers.",
        impact: "Successfully delivered full SaaS replication, securing a major white-label partnership and demonstrating high-scale deployment capability.",
        tags: ["GitLab CI", "Jenkins", "DevOps", "Cyber Security", "SaaS"],
        className: "md:col-span-2",
        category: "SaaS",
        featured: true,
    },
    {
        id: "sma-assessment",
        title: "Security Management Assessment (SMA)",
        problem: "Security assessments lack industry context, making maturity scores difficult to quantify against peers.",
        role: "Lead Architect",
        solution: "Engineered a benchmarking engine using hierarchical JSONField mappings to provide real-time peer-performance diagnostics.",
        impact: "Optimized 35k+ benchmark data points into a sub-millisecond lookup system; automated diagnostic PDF generation with ReportLab.",
        tags: ["Django 5", "Pandas", "ReportLab", "JSONField", "Pydantic"],
        link: "/work/sma-benchmarking",
        className: "md:col-span-1",
        category: "Backend",
        featured: true,
    },
];
