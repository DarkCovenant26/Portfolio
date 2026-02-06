export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    className?: string; // For BentoGrid span
    featured?: boolean;
    category: "Orchestration" | "Infrastructure" | "Backend" | "R&D" | "SaaS";
    image?: string; // Placeholder for future screenshots
}

export const projects: Project[] = [
    {
        id: "enterprise-grc",
        title: "Enterprise GRC Ecosystem",
        description: "A scalable SaaS platform for automated governance, risk, and compliance (GRC). Architected a transition from monolith to Micro-Frontends (Module Federation) while handling massive regulatory datasets (SCF) via async processing pipelines.",
        tags: ["React", "Module Federation", "Django", "Celery", "PostgreSQL"],
        className: "md:col-span-2",
        category: "SaaS",
        featured: true,
    },
    {
        id: "devsecops-pipeline",
        title: "DevSecOps Pipeline Orchestration",
        description: "Automated secure deployment workflows ensuring code integrity from commit to production with integrated secret zero-trust management.",
        tags: ["Jenkins", "GitLab CI", "Docker", "Infisical"],
        className: "md:col-span-2",
        category: "Orchestration",
        featured: true,
    },
    {
        id: "hybrid-infra",
        title: "Hybrid Cloud Infrastructure",
        description: "Scalable, resilient architecture leveraging AWS core services and self-hosted object storage for high-availability data retention.",
        tags: ["AWS EC2", "AWS S3", "MinIO", "Nginx"],
        className: "md:col-span-1",
        category: "Infrastructure",
    },
    {
        id: "threat-aggregator",
        title: "Threat Data Aggregator",
        description: "High-performance backend service for ingesting, normalizing, and caching security logs for real-time analysis.",
        tags: ["FastAPI", "PostgreSQL", "Redis", "Python"],
        className: "md:col-span-1",
        category: "Backend",
    },
    {
        id: "virt-lab",
        title: "Virtualization R&D Lab",
        description: "Self-hosted high-density virtualization environment for malware analysis and network security simulation.",
        tags: ["Proxmox", "Django Ninja", "Docker", "Bash"],
        className: "md:col-span-2",
        category: "R&D",
        featured: true,
    },
];
