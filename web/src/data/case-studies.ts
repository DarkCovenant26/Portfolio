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
    technicalDeepDive?: {
        blueprint: {
            title: string;
            description: string;
            participants: string[];
            flow: { from: string; to: string; action: string }[];
        };
        signatureSnippet: {
            language: string;
            code: string;
            annotation: string;
        };
        reflections: {
            title: string;
            tradeOffs: { outcome: string; impact: string }[];
        };
    };
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
        role: "Lead Software Engineer | Security Focus",
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
        technicalDeepDive: {
            blueprint: {
                title: "Legacy Monolithic Orchestration (V1)",
                description: "Synchronous data pipeline optimized for rapid ingestion of unreferenced legacy datasets.",
                participants: ["UI Layer", "Ingestion Script", "Central Database"],
                flow: [
                    { from: "UI Layer", to: "Ingestion Script", action: "Trigger Import" },
                    { from: "Ingestion Script", to: "Central Database", action: "Pandas Bulk Upsert" },
                    { from: "Central Database", to: "UI Layer", action: "Return Full Dataset" }
                ]
            },
            signatureSnippet: {
                language: "python",
                code: `class IngestionEngine:\n    def process_csv(self, file_path):\n        df = pd.read_csv(file_path)\n        df['norm'] = df['raw'].apply(normalize)\n        return CorporateMetric.objects.bulk_create(df.to_dict('records'))`,
                annotation: "Focused on high-speed data normalization from unstructured sources via in-memory vectorized operations."
            },
            reflections: {
                title: "V1 Technical Trade-offs",
                tradeOffs: [
                    { outcome: "Immediate Consistency", impact: "Zero lag but caused UI lockups during 8MB+ ingestion." },
                    { outcome: "Monolithic Coupling", impact: "Faster development but localized to single-module usage." },
                    { outcome: "Manual Partitioning", impact: "Used basic DB filtering instead of true multi-tenant routing." }
                ]
            }
        }
    },
    {
        slug: "risk-management-sentinel",
        title: "Project Sentinel: Dynamic Risk Quantification",
        description: "Architected a next-generation risk management engine that calculates residual risk in real-time by orchestrating live telemetry from engineering task-management systems.",
        clientType: "Enterprise GRC / Cyber Security",
        role: "Lead Software Engineer | Architect",
        period: "2025 - Present",
        technologies: ["Django 5", "Service Patterns", "Redis", "Celery", "PostgreSQL"],
        sections: {
            mission:
                "The project began as a high-stakes architectural rescue. The existing Risk Register (V1) was a static spreadsheet-mimic: synchronous, monolithic, and disconnected from reality. My mission was to architect a 'Dynamic Quantification Engine' capable of reflecting risk based on actual implementation status, not just promises.",
            architecture:
                "I engineered a 'Service-Oriented Core' where risk logic was decoupled from database models. The primary achievement was the 'Live Sync Orchestrator'—a specialized layer that reaches out to external Task APIs to verify the completion of security controls before calculating a 'Projected' vs 'Actual' residual risk score.",
            execution:
                "I spearheaded the move from V1's legacy views to a robust Service Pattern. This involved designing an 'Asynchronous Synthesis' pipeline using Celery and Redis to handle complex risk recalculations across 1000+ controls without locking the user interface. I also enforced strict Tenant Isolation via a custom Ref-ID routing middleware.",
            baseline:
                "Automated the calculation of 'Live Risk Gauges' for executive leadership. The platform now provides a deterministic, real-time security posture that is 100% verifiable through engineering audit trails, reducing manual review overhead by 85%.",
        },
        technicalDeepDive: {
            blueprint: {
                title: "Live-Telemetry Risk Orchestration",
                description: "Shifted from manual field updates to an orchestrated flow that verifies security status via external service state.",
                participants: ["Risk Engine", "Service Layer", "Task Registry (External)", "Telemetry Store"],
                flow: [
                    { from: "Risk Engine", to: "Service Layer", action: "Trigger Recalculation" },
                    { from: "Service Layer", to: "Task Registry (External)", action: "Fetch Completion Status" },
                    { from: "Task Registry (External)", to: "Service Layer", action: "Return Live Task State" },
                    { from: "Service Layer", to: "Telemetry Store", action: "Commit Score Synthesis" }
                ]
            },
            signatureSnippet: {
                language: "python",
                code: `class ResidualRiskService:\n    def calculate_actual_risk(self, risk_id: int):\n        risk = Risk.objects.get(id=risk_id)\n        # Orchestration: Fetching live task data from external system\n        task_data = workplan_api.fetch_verification_status(risk.control_ids)\n        \n        # Quantification: Only count controls with 100% task completion\n        completed_eff = [\n            c.effectiveness for c in task_data \n            if c.status == \"COMPLETED\" and not c.has_staged_tasks\n        ]\n        \n        # Synthesis: Capped reduction based on live implementation status\n        final_effectiveness = sum(completed_eff) / len(completed_eff)\n        return risk.inherent_score * (1 - (final_effectiveness * 0.8))`,
                annotation: "Orchestrates live verification by reaching out to the Task Management system before committing a risk score reduction."
            },
            reflections: {
                title: "Architectural Evolution Trade-offs",
                tradeOffs: [
                    { outcome: "Eventual Consistency", impact: "Risk scores update after background sync, required UX Skeletons." },
                    { outcome: "Decoupled Scalability", impact: "Moving logic to Services enabled industrial-scale simulations." },
                    { outcome: "Verification Rigor", impact: "Actual risk is lower but 100% verifiable vs. non-monitored states." }
                ]
            }
        }
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
        role: "Lead Software Engineer | Infrastructure",
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
                "Achieved 100% go-live success within the aggressive client window. The 'bare-bones' pipeline proved so stable it continues to power the partner's production environment, securing a key strategic partnership and demonstrating my ability to lead technical execution under extreme crisis conditions.",
        },
    },
    {
        slug: "kpi-orchestration",
        title: "Global KPI Orchestration",
        description: "Engineered a high-performance synthesis engine that aggregates cross-module security data in real-time to drive executive decision dashboards.",
        clientType: "Enterprise GRC",
        role: "Lead Systems Architect",
        period: "2024 - Present",
        technologies: ["Python", "Redis", "Celery", "Django REST", "Next.js"],
        sections: {
            mission:
                "Standard compliance modules operated in silos, making global risk-posture reporting a slow, manual task. My mission was to build a 'Synthesis Engine' that could pull live metrics from any connected module and compute global KPIs on-the-fly.",
            architecture:
                "I architected an event-driven pipeline where modules push raw updates to a Redis queue. A cluster of specialized workers then consumes these events, applies deterministic scoring logic, and pushes the final KPI state to a real-time dashboard.",
            execution:
                "Developed the core computation service using Python and Redis for sub-second latency. I implemented a 'Module-Agnostic' interface that allows new frameworks (like SCF or ISO) to integrate with the KPI engine simply by fulfilling a standard data contract, eliminating the need for custom logic per-module.",
            baseline:
                "Enabled executive leadership to monitor enterprise readiness in real-time. Automated the data collection for 20+ global frameworks, reducing organizational reporting latency from 48 hours to less than 1 second.",
        },
        technicalDeepDive: {
            blueprint: {
                title: "KPI Synthesis Sequence",
                description: "Event-driven flow from user request to real-time analytics delivery.",
                participants: ["Client", "Engine", "Redis Queue", "Worker", "Module", "Analytics Store"],
                flow: [
                    { from: "Client", to: "Engine", action: "Request KPI Refresh" },
                    { from: "Engine", to: "Redis Queue", action: "Enqueue Synthesis Task" },
                    { from: "Redis Queue", to: "Worker", action: "Pop Task" },
                    { from: "Worker", to: "Module", action: "Fetch Normalized Data" },
                    { from: "Module", to: "Worker", action: "Return Module State" },
                    { from: "Worker", to: "Analytics Store", action: "Commit KPI Synthesis" }
                ]
            },
            signatureSnippet: {
                language: "python",
                code: `@receiver(post_save, sender=ClientSection)\ndef trigger_kpi_refresh(sender, instance, created, **kwargs):\n    # Recompute local effectiveness metrics\n    recompute_control_effectiveness_for_section(instance)\n    \n    # Orchestrate Global KPI Refresh via Interop Orchestrator\n    send_interop_notification(\n        action=\"calculate_audit_readiness\",\n        client_id=instance.client_standard.client.client_no,\n        params={\n            \"section_id\": instance.id,\n            \"status\": instance.status,\n            \"standard_name\": instance.client_standard.standard.standard\n        }\n    )`,
                annotation: "Authentic Sequoia signal that orchestrates a Global KPI refresh by pushing event-driven notifications to the centralized dashboard engine."
            },
            reflections: {
                title: "System Synchronization Trade-offs",
                tradeOffs: [
                    { outcome: "Scalable Event Intake", impact: "Decoupled computation from web requests, preventing UI timeouts." },
                    { outcome: "Data Normalization", impact: "Unified disparate module outputs into a singular schema." },
                    { outcome: "Compute Efficiency", impact: "Used Redis-backed caching to prevent redundant syntheses." }
                ]
            }
        }
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
