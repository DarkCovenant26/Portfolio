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
        id: "enterprise-grc",
        title: "Enterprise GRC Core",
        problem: "Automating the ingestion and mapping of massive SCF (Secure Controls Framework) datasets.",
        role: "Lead Backend Architect",
        solution: "Leveraged AI-driven data analysis and high-performance Pandas pipelines to reverse-engineer 8MB+ legacy SCF datasets into a scalable, multi-tenant architecture.",
        impact: "Automated 1000+ control mappings; replaced fragmented Excel workflows with a deterministic regulatory intelligence platform.",
        tags: ["Reverse-Engineering", "Pandas", "Django", "SCF 2024", "AI-Augmented", "Celery"],
        link: "/work/enterprise-grc",
        className: "md:col-span-2",
        category: "SaaS",
        featured: true,
    },
    {
        id: "risk-sentinel",
        title: "Risk Management Engine",
        problem: "Legacy risk engine struggled with high-velocity feature expansion and lacked real-time deterministic quantification.",
        role: "Lead Architect (V2 Rebuild)",
        solution: "Led a ground-up rebuild (V2) under aggressive weekly delivery cycles; engineered a dynamic 'Dual-State' scoring engine using Django Service patterns.",
        impact: "Provided continuous-state risk monitoring with live executive telemetry, ensuring architectural integrity during rapid scaling.",
        tags: ["Django 5", "Service Patterns", "High-Velocity", "Redis", "PostgreSQL"],
        link: "/work/risk-management-sentinel",
        className: "md:col-span-1",
        category: "Backend",
        featured: true,
    },
    {
        id: "devops-pipeline",
        title: "DevOps Pipeline Orchestration",
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
        problem: "Critical technical replication project stalled after specialist transition; required immediate infrastructure ownership to meet enterprise client deadlines.",
        role: "Director of Cyber Development (Trial by Fire)",
        solution: "Assumed full-stack ownership of infrastructure orchestration, architecting pragmatic CI/CD pipelines to ensure immediate system existence and go-live success.",
        impact: "Secured major enterprise white-label partnership, demonstrating extreme ownership and the ability to deliver under crisis conditions.",
        tags: ["Extreme Ownership", "GitLab CI", "Jenkins", "DevOps", "White-Label", "SaaS"],
        link: "/work/white-label-replication",
        className: "md:col-span-2",
        category: "SaaS",
        featured: true,
    },
    {
        id: "sma-assessment",
        title: "Security Management Assessment (SMA)",
        problem: "Benchmarking engine required reverse-engineering unstructured legacy 'brain-dumps' into a high-performance hierarchical logic.",
        role: "Lead Architect",
        solution: "Utilized JSONField optimizations and AI-augmented analysis to map 35k+ industry data points into a clean, hierarchical API logic.",
        impact: "Optimized contextual scoring into sub-millisecond lookups; automated diagnostic PDF generation for strategic maturity roadmaps.",
        tags: ["Reverse-Engineering", "Django 5", "Pandas", "JSONField", "Pydantic"],
        link: "/work/sma-benchmarking",
        className: "md:col-span-1",
        category: "Backend",
        featured: true,
    },
    {
        id: "multi-tenant-orchestration",
        title: "Multi-Tenant DB Orchestration",
        problem: "Enterprise MSSPs required strict data sovereignty and physical isolation across 8 standalone modules.",
        role: "Systems Architect & Lead",
        solution: "Engineered a high-security architecture utilizing physically isolated database instances per tenant, routed via custom Ref-ID header middleware.",
        impact: "Enabled 100% data isolation for high-security clients; reduced technical debt by unifying 8 standalone modules into a centralized platform.",
        tags: ["Multi-Tenancy", "PostgreSQL", "Middleware", "Data Sovereignty", "Python"],
        link: "/work/multi-tenant-db-orchestration",
        className: "md:col-span-1",
        category: "Orchestration",
        featured: true,
    },
];
