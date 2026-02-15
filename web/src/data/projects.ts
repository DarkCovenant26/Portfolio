export interface Project {
    id: string;
    title: string;
    problem: string;
    role: string;
    solution: string;
    impact: string;
    tags: string[];
    className?: string; // For BentoGrid span
    featured?: boolean;
    category: "Orchestration" | "Infrastructure" | "Backend" | "R&D" | "SaaS";
    image?: string;
}

export const projects: Project[] = [
    {
        id: "enterprise-grc",
        title: "Enterprise GRC Ecosystem",
        problem: "Scaling compliance audits for massive regulatory datasets was causing timeouts.",
        role: "Lead Backend Architect",
        solution: "Transitioned to Micro-Frontends and async Celery processing pipelines.",
        impact: "Reduced audit reporting time by 40% and enabled real-time analytics.",
        tags: ["React", "Module Federation", "Django", "PostgreSQL"],
        className: "md:col-span-2",
        category: "SaaS",
        featured: true,
    },
    {
        id: "devsecops-pipeline",
        title: "DevSecOps Pipeline Orchestration",
        problem: "Inconsistent deployment security and manual bottlenecks slowed releases.",
        role: "DevOps Engineer",
        solution: "Automated zero-trust CI/CD pipelines with integrated secret management.",
        impact: "Achieved zero security incidents in production for 12+ months.",
        tags: ["Jenkins", "GitLab CI", "Docker", "Infisical"],
        className: "md:col-span-1",
        category: "Orchestration",
        featured: true,
    },
    {
        id: "threat-aggregator",
        title: "Threat Data Aggregator",
        problem: "Slow ingestion of high-volume security logs prevented real-time analysis.",
        role: "Backend Architect",
        solution: "High-performance FastAPI service with Redis caching and batch processing.",
        impact: "Enabled real-time threat detection with <10ms ingestion latency.",
        tags: ["FastAPI", "Redis", "Python", "ClickHouse"],
        className: "md:col-span-3",
        category: "Backend",
        featured: true,
    },
];
