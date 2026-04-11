export type CaseStudy = {
    slug: string;
    title: string;
    description: string;
    clientType: string;
    role: string;
    period: string;
    technologies: string[];
    sections: {
        mission: string;
        architecture: string;
        execution: string;
        baseline: string;
    };
    image?: string;
};

export const caseStudies: CaseStudy[] = [
    {
        slug: "exodus-migration",
        title: "Project Exodus: Zero-Downtime Legacy Migration",
        description: "Orchestrated the migration of a monolithic legacy system to a highly available, microservices-based API gateway.",
        clientType: "Enterprise SaaS",
        role: "Lead Systems Architect",
        period: "2024 - 2025",
        technologies: ["FastAPI", "PostgreSQL", "Docker", "AWS ECR", "Jenkins"],
        sections: {
            mission:
                "The organization was constrained by a monolithic backend architecture that struggled to handle peak load. Data consistency issues were frequent, and deployments required scheduled downtime, significantly impacting the client's ability to scale rapidly in a competitive market.",
            architecture:
                "Designed a strangler fig pattern to incrementally migrate high-risk modules. Implemented an API Gateway to route traffic intelligently between legacy systems and new FastAPI microservices. Enforced strict Role-Based Access Control (RBAC) at the gateway level.",
            execution:
                "Utilized Pydantic for rigid request validation, ensuring zero malformed payloads reached the database. Replaced synchronous email delivery with asynchronous Celery background workers, offloading UI-blocking tasks. Containerized the entire ecosystem via Docker for consistent staging-to-production deployments.",
            baseline:
                "Achieved 99.99% uptime post-migration. API response times plummeted by 45% during peak load. CI/CD pipeline optimization reduced deployment lead times from hours to under 15 minutes, enabling daily feature releases without service interruption.",
        },
    },
    {
        slug: "secure-auth-gateway",
        title: "SOC2 Compliance & Zero-Trust Authentication",
        description: "Overhauled the authentication pipeline to meet strict SOC2 compliance requirements for a sensitive data firm.",
        clientType: "FinTech Startup",
        role: "Director of Cyber Development",
        period: "2023 - 2024",
        technologies: ["Next.js", "Django REST", "Redis", "Zod", "GitLab CI"],
        sections: {
            mission:
                "The client was facing an impending SOC2 audit and needed a complete overhaul of their authentication and authorization workflows. Existing systems relied on predictable, auto-incrementing database IDs and weak session management, presenting a massive attack surface.",
            architecture:
                "Architected a 'Secure by Design' Zero-Trust framework. Migrated all public-facing identifiers to ULIDs to prevent enumeration attacks. Implemented rigorous session invalidation strategies and a centralized Governance, Risk, and Compliance (GRC) logging system.",
            execution:
                "On the frontend, implemented strict Zod schema validation to sanitize all user inputs before they ever hit the wire. On the backend, Django REST Framework was heavily customized to enforce granular, resource-level RBAC. Every 'write' operation automatically triggered an immutable audit log sent to a secure storage bucket.",
            baseline:
                "The client passed their SOC2 Type II audit with zero exceptions related to software architecture. The new auth gateway effectively mitigated 100% of automated credential stuffing attempts during the first quarter post-launch.",
        },
    },
    {
        slug: "enterprise-grc",
        title: "Enterprise GRC Core: Automated Regulatory Intelligence",
        description: "Engineered a high-performance GRC platform that automates the mapping of complex cybersecurity frameworks using advanced data engineering.",
        clientType: "FinTech / Cyber Security",
        role: "Lead Backend Architect",
        period: "2024 - 2025",
        technologies: ["Django REST", "SCF 2024.1.1", "Pandas", "RapidFuzz", "Celery"],
        sections: {
            mission:
                "The project began as a high-stakes 'Genesis' phase where the mission was to move from a .NET/HTML background to build a complex GRC system in a completely new stack (React/Django) in just weeks. The domain was entirely unknown, and the only requirements were locked within a massive, contextless, and unreferenced SCF Excel dataset that required manual decoding to even begin architectural planning.",
            architecture:
                "I spearheaded the V1 domain-driven rebuild after a failed initial prototype, moving from manual concepts to a functional scalable schema. This evolved into a 'Multi-Surface Architectural Strategy' centered around a custom Pandas-based ingestion engine capable of reverse-engineering 8MB+ legacy SCF datasets into a scalable and deterministic Universal Control Blueprint (UCB).",
            execution:
                "Developed a high-performance data pipeline utilizing Pandas for industrial-scale processing and advanced fuzzy matching for resilient control mapping. Implemented **Imperative APIViews** for complex 'manual' frontend interactions and **Declarative ViewSets** to optimize high-volume data orchestration, ensuring a seamless experience despite the underlying data complexity.",
            baseline:
                "Successfully transitioned the organization from fragmented Excel files to a unified regulatory intelligence platform. Reduced audit preparation time and enabled the team to ship production features autonomously using established architectural patterns.",
        },
    },
    {
        slug: "risk-management-sentinel",
        title: "Project Sentinel: Dynamic Risk Quantification",
        description: "Architected a next-generation risk management engine that calculates residual risk in real-time based on control implementation status.",
        clientType: "Enterprise GRC",
        role: "Module Lead & Architect",
        period: "2025 - Present",
        technologies: ["Django 5", "DRF", "PostgreSQL", "Service Patterns", "Redis"],
        sections: {
            mission:
                "Architected and led the ground-up rebuild (V2) of 'Project Sentinel' (Risk Management Engine); successfully managed aggressive weekly feature releases while maintaining rigorous architectural standards and database scalability for high-complexity legacy computations.",
            architecture:
                "Engineered a 'Dual-State' risk quantification engine using Django Service patterns. The system maintains two distinct risk profiles for every asset, providing deterministic residual risk scores that account for live control implementation status.",
            execution:
                "Developed a robust, deterministic calculation pipeline using Django Service patterns to decouple complex business logic from the database layer. By advocating for and implementing scalable ERD designs under high-velocity delivery pressure, I successfully bridged the gap between vague strategic visions and rigid mathematical formulas, delivering a real-time risk scoring engine that ensures data integrity.",
            baseline:
                "Shifted the organization from reactive to proactive, continuous-state risk management. Executive leadership now has access to 'Live Risk Gauges' that reflect real-time security posture despite rapid product expansion.",
        },
    },
    {
        slug: "sma-benchmarking",
        title: "Project SMA: Security Management Assessment",
        description: "Architected the Security Management Assessment (SMA) benchmarking tool, utilizing JSONField optimizations to map 35k+ industry data points; leveraged AI-augmented analysis to reverse-engineer and restructure unstructured legacy 'brain-dumps' into a clean, hierarchical API logic",
        clientType: "FinTech / SaaS",
        role: "Lead Architect",
        period: "2025 - Present",
        technologies: ["Django 5", "Pandas", "ReportLab", "JSONField Optimization", "Pydantic"],
        sections: {
            mission:
                "Security assessments often lack industry-specific context, and the client's existing assets were unstructured 'brain dumps' of complex calculations. The mission was to reverse-engineer these legacy assets into a clean, hierarchical diagnostic platform.",
            architecture:
                "Engineered a high-performance benchmarking engine utilizing a hierarchical industry lookup system. Optimized 35,000+ benchmark rows into a lean 'JSONField Answer Key' system to avoid unmanageable database growth while enabling sub-millisecond lookups.",
            execution:
                "Spearheaded an 'AI-Augmented Discovery' phase to decipher and restructure a high-complexity 'brain dump' spreadsheet of unstructured legacy calculations. This enabled the design of a clean, hierarchical data model and a high-performance benchmarking engine. Utilizing JSONField optimizations, I ensured the system could scale to handle massive datasets without compromising on query performance or diagnostic accuracy.",
            baseline:
                "Successfully transitioned the assessment process from static, 'messed-up' spreadsheets to a dynamic, comparison-driven diagnostic tool. Organizations now receive strategic roadmaps based on real-world peer performance rather than generic checklists.",
        },
    },
    {
        slug: "white-label-replication",
        title: "The 'Trial by Fire' White-Label Replication",
        description: "Assumed extreme ownership of enterprise SaaS infrastructure during a critical resource transition, architecting pragmatic CI/CD pipelines to meet strict client go-live deadlines.",
        clientType: "Strategic Enterprise Partner",
        role: "Director of Cyber Development",
        period: "2025",
        technologies: ["GitLab CI", "Jenkins", "Docker", "SaaS White-Labeling"],
        sections: {
            mission:
                "A critical white-label replication project stalled after the lead DevOps engineer transitioned unexpectedly. With a major enterprise client deadline looming and progress at zero, I was tasked with orchestrating the entire infrastructure setup from scratch while maintaining my primary leadership responsibilities.",
            architecture:
                "Designed a 'Pragmatic Infrastructure' framework. The priority was system existence and deployment stability over aesthetic perfection. Utilized GitLab CI for core orchestration and Jenkins for environment synchronization across the partner's VPC.",
            execution:
                "Following the 'Trial by Fire' mandate that eventually led to my promotion to Director, I audited the existing technical debt and implemented a 'bare-bones' but rock-solid CI/CD pipeline. By focusing on essential environment parity and automated secret management, I successfully bypassed the initial bottleneck and established a functional deployment lifecycle in record time.",
            baseline:
                "Achieved 100% go-live success within the aggressive client window. The 'bare-bones' pipeline proved so stable it continues to power the partner's production environment, securing a key strategic partnership for the company and demonstrating my ability to deliver under extreme crisis conditions.",
        },
    },
    {
        slug: "multi-tenant-db-orchestration",
        title: "Project Nexus: Multi-Tenant Database Orchestration",
        description: "Architected a high-security multi-tenant ecosystem across 8 modules, utilizing physically isolated database instances and custom middleware for secure tenant routing.",
        clientType: "Managed Security Service Providers (MSSPs)",
        role: "Systems Architect & Lead",
        period: "2024",
        technologies: ["PostgreSQL", "Django", "Custom Middleware", "Python", "Redis"],
        sections: {
            mission:
                "The organization maintained 8 standalone projects that needed to be consolidated for Managed Security Service Providers (MSSPs). The critical requirement was absolute data sovereignty: each MSSP and their respective clients required a physically separate database instance to ensure zero data leakage and meet strict compliance standards.",
            architecture:
                "Designed a 'Shared-Application, Isolated-Database' architecture. I developed a routing strategy utilizing a unique 'Ref-ID' passed through request headers. This identifier was intercepted by a custom backend middleware that dynamically routed database queries to the appropriate tenant-specific instance.",
            execution:
                "Led a cross-functional team of developers through the research and implementation phases. While focusing on the database schema orchestration, I collaborated closely with the middleware engineers to ensure the 'hooking' logic was performant and secure. We successfully migrated all 8 existing modules to this new architecture, ensuring that every database operation was context-aware and isolated by default.",
            baseline:
                "Successfully unified 8 fragmented projects into a single, scalable ecosystem. The platform now supports high-security enterprise and government clients with 100% verifiable data isolation, significantly reducing operational overhead for multi-tenant management.",
        },
    },
];

export function getCaseStudyData(slug: string): CaseStudy | undefined {
    return caseStudies.find((study) => study.slug === slug);
}
