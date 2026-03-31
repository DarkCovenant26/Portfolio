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
                "The project began with a single, massive Excel file containing thousands of un-referenced rows of regulatory data. The domain was so complex that traditional business requirements were non-existent; the Product Owner could not 'dumb down' the logic. Compliance audits were failing due to this manual bottleneck.",
            architecture:
                "After a failed initial prototype (V1) that struggled with the sheer volume of fragmented data, I led a rigorous domain-driven rebuild (V2). I engineered a 'Multi-Surface Architectural Strategy' capable of simultaneously powering manual control management and a high-throughput Universal Control Blueprint (UCB) engine.",
            execution:
                "Developed a robust data pipeline to ingest 8MB+ SCF datasets using Pandas for high-speed processing and RapidFuzz for resilient control mapping despite inconsistent input formats. To support the multi-surface design, I implemented **Imperative APIViews** to handle the nuanced 'manual' frontend interactions and **Declarative ViewSets** to optimize high-volume data flow during bulk orchestration, ensuring a seamless experience across two completely different user workflows.",
            baseline:
                "Eliminated manual spreadsheet tracking across the organization. Technical replication of the entire environment for enterprise partners was reduced from weeks to days via automated provisioning. API performance for complex audit reports improved by 45%.",
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
                "Architected and led the iterative ground-up rebuild (V2) of 'Project Sentinel' (Risk Management Engine); translated ambiguous stakeholder visions and 'nightmare' high-level computations into a high-performance, deterministic residual risk engine via Django Service patterns.",
            architecture:
                "Engineered a 'Dual-State' risk quantification engine using Django Service patterns. The system maintains two distinct risk profiles for every asset: Inherent Risk (the baseline threat) and Actual Residual Risk (the risk remaining after accounting for implemented controls).",
            execution:
                "Developed a robust, deterministic calculation pipeline using Django Service patterns to decouple complex business logic from the database layer. By implementing a suite of modular 'updaters' and state-aware service classes, I successfully bridged the gap between vague strategic goals and rigid mathematical formulas, delivering a real-time risk scoring engine that ensures data integrity and auditability.",
            baseline:
                "Shifted the organization from reactive to proactive risk management. Executive leadership now has access to 'Live Risk Gauges' that reflect the current implementation status of security controls, enabling faster decision-making for resource allocation.",
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
                "Security assessments often lack context, leaving organizations unsure if their maturity level is adequate for their specific industry. The client needed a platform that could quantify security posture relative to a hierarchical dataset of thousands of global peers.",
            architecture:
                "Engineered a high-performance benchmarking engine utilizing a hierarchical industry lookup system. To avoid a massive, unmanageable database, I optimized 35,000+ benchmark rows into a lean 'JSONField Answer Key' system, enabling sub-millisecond lookups for contextual scoring.",
            execution:
                "Spearheaded an 'AI-Augmented Discovery' phase to decipher and restructure a high-complexity 'brain dump' spreadsheet of unstructured legacy calculations. This enabled the design of a clean, hierarchical data model and a high-performance benchmarking engine utilizing a lookup system. To avoid a massive, unmanageable database, I optimized 35,000+ benchmark rows into a lean 'JSONField Answer Key' system, enabling sub-millisecond lookups for contextual scoring.",
            baseline:
                "Successfully transitioned the assessment process from static spreadsheets to a dynamic, comparison-driven diagnostic tool. Organizations now receive strategic roadmaps based on real-world peer performance rather than generic checklists.",
        },
    },
];

export function getCaseStudyData(slug: string): CaseStudy | undefined {
    return caseStudies.find((study) => study.slug === slug);
}
