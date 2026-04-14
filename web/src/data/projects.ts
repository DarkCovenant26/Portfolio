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
    hasBlueprint?: boolean;
}

export const projects: Project[] = [
    {
        id: "kpi-orchestration",
        title: "Global KPI Service",
        problem: "Cross-module data remained siloed, preventing real-time visibility into global security compliance and operational KPIs.",
        role: "Lead Systems Architect",
        solution: "Engineered an event-driven synthesis engine that orchestrates data from 8 modules into a centralized dashboard via Redis task queues.",
        impact: "Automated real-time KPI generation for enterprise stakeholders; reduced manual reporting latency from 48 hours to sub-second.",
        tags: ["System Orchestration", "Redis", "Event-Driven", "KPI Engine", "Next.js"],
        link: "/work/kpi-orchestration",
        className: "md:col-span-1",
        category: "Orchestration",
        featured: true,
        hasBlueprint: true,
    },
    {
        id: "multi-tenant-orchestration",
        title: "Multi-Tenant Middleware",
        problem: "Enterprise clients required strict data sovereignty and physical isolation across a shared application core.",
        role: "Lead Software Engineer",
        solution: "Architected a custom header-based routing layer that dynamically swaps database connections based on Ref-ID identifiers.",
        impact: "Ensured 100% tenant isolation with zero cross-talk; enabled friction-less scaling to 10+ high-security partner instances.",
        tags: ["Strategic Architecture", "Multi-Tenancy", "Data Sovereignty", "Middleware"],
        link: "/work/multi-tenant-db-orchestration",
        className: "md:col-span-1",
        category: "Orchestration",
        featured: true,
        hasBlueprint: true,
    },
    {
        id: "risk-sentinel",
        title: "Project Sentinel: Dynamic Risk Quantification",
        problem: "Enterprise risk assessments were static, synchronous, and disconnected from the real-time engineering task lifecycle.",
        role: "Lead Software Engineer | Architect",
        solution: "Engineered a 'Real-Time Telemetry' risk engine using Django Service Patterns; orchestrated live data synchronization with external Task APIs to calculate 'Actual' residual risk.",
        impact: "Shifted organization from manual quarterly reviews to continuous, live risk monitoring; automated the scoring of 1000+ dynamic security controls.",
        tags: ["Service Patterns", "Dynamic Scoring", "API Orchestration", "Enterprise SaaS", "PostgreSQL"],
        link: "/work/risk-management-sentinel",
        className: "md:col-span-1",
        category: "Backend",
        featured: true,
        hasBlueprint: true,
    },
    {
        id: "white-label-replication",
        title: "Infrastructure 'Trial by Fire'",
        problem: "Critical replication project stalled after specialist transition; required immediate ownership to meet enterprise deadlines.",
        role: "Director level Ownership",
        solution: "Assumed full-stack ownership of infrastructure orchestration, architecting pragmatic CI/CD pipelines to ensure system existence.",
        impact: "Secured major enterprise partnership under crisis conditions; demonstrated extreme ownership and strategic infrastructure rescue.",
        tags: ["Extreme Ownership", "Strategic Rescue", "Infrastructure", "DevOps", "White-Label"],
        link: "/work/white-label-replication",
        className: "md:col-span-1",
        category: "SaaS",
        featured: true,
    },
    {
        id: "enterprise-grc",
        title: "Enterprise GRC Core",
        problem: "Automating the mapping of massive SCF (Secure Controls Framework) datasets.",
        role: "Lead Backend Architect",
        solution: "Leveraged AI-driven data analysis and high-performance Pandas pipelines to reverse-engineer 8MB+ legacy datasets.",
        impact: "Automated 1000+ control mappings; replaced fragmented Excel workflows with a unified regulatory intelligence platform.",
        tags: ["Data Engineering", "Pandas", "Django", "Reverse-Engineering", "Celery"],
        link: "/work/enterprise-grc",
        className: "md:col-span-1",
        category: "SaaS",
        featured: true,
        hasBlueprint: true,
    },
    {
        id: "sma-assessment",
        title: "Security Management Assessment (SMA)",
        problem: "Benchmarking engine required reverse-engineering unstructured legacy 'brain-dumps' into a high-performance logic.",
        role: "Lead Architect",
        solution: "Utilized JSONField optimizations and AI-augmented analysis to map 35k+ industry data points into a clean API logic.",
        impact: "Optimized contextual scoring into sub-millisecond lookups; automated strategic maturity roadmaps via real-time logic.",
        tags: ["Architecture", "Django 5", "JSONField", "Strategic Logic", "Pydantic"],
        link: "/work/sma-benchmarking",
        className: "md:col-span-1",
        category: "Backend",
        featured: true,
    },
    {
        id: "devops-pipeline",
        title: "Secure CI/CD Pipelines",
        problem: "Inconsistent deployment security across automated workflows.",
        role: "Lead Orchestrator",
        solution: "Standardized reference pipelines into zero-trust templates with integrated secret management (Infisical).",
        impact: "Ensured 100% environment parity; reduced onboarding friction from weeks to days for technical teams.",
        tags: ["Orchestration", "GitLab CI", "Docker", "Security", "Team Enablement"],
        link: "/work/secure-auth-gateway",
        className: "md:col-span-1",
        category: "Orchestration",
        featured: true,
    },
];
