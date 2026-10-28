export interface CVData {
    personal: {
        name: string;
        title: string;
        location: string;
        phone: string;
        email: string;
        linkedin?: string;
        github?: string;
        gitlab?: string;
        website?: string;
        photo?: string;
    };
    summary: string;
    experience: {
        title: string;
        company: string;
        location: string;
        period: string;
        responsibilities: string[];
    }[];
    skills: {
        category: string;
        items: string[];
    }[];
    education: {
        degree: string;
        institution: string;
        location: string;
        year: string;
    }[];
    projects?: {
        title: string;
        description: string;
        technologies: string[];
        impact?: string;
    }[];
    certifications?: {
        category: string;
        items: {
            title: string;
            issuer: string;
            date: string;
            details?: string;
            // Shown on the downloadable CV; the certifications page lists everything
            highlight?: boolean;
        }[];
    }[];
}

type CertificationGroup = NonNullable<CVData["certifications"]>[number];

// ── Shared across every CV variant ────────────────────────────

const contact = {
    name: "Zandro E. Narvaza",
    location: "Cagayan de Oro City, Philippines",
    phone: "+639566500885",
    email: "zandro.narvaza@gmail.com",
    linkedin: "linkedin.com/in/zandro-narvaza-3a2863198/",
    github: "github.com/darkcovenant26",
    gitlab: "gitlab.cytechint.io/zandron",
    photo: "/images/profile-photo.jpg",
};

const education: CVData["education"] = [
    {
        degree: "Bachelor of Science: Information Technology",
        institution: "STI College Cagayan De Oro",
        location: "Cagayan de Oro City",
        year: "2020",
    },
    {
        degree: "Diploma: Computer and Electronics Technology",
        institution: "STI College Cagayan De Oro",
        location: "Cagayan de Oro City",
        year: "2010",
    },
];

const securityCertifications: CertificationGroup = {
    category: "Security & Auditing",
    items: [
        {
            title: "Lead Auditor Certificate - ISO/IEC 27001:2022 (ISMS)",
            issuer: "SIS CERT.",
            date: "December 2025",
            details: "Information Security Management System, Management System Auditing, Leading Management System Audit Teams",
            highlight: true,
        },
        {
            title: "Introduction to Cybersecurity",
            issuer: "Cisco Networking Academy",
            date: "October 2020",
            details: "Foundational knowledge in cybersecurity principles and practices",
        },
    ],
};

const ciscoFoundationCertifications: CertificationGroup["items"] = [
    {
        title: "NDG Linux Unhatched",
        issuer: "Cisco Networking Academy & Partner NDG",
        date: "November 2020",
        details: "Foundational Linux system administration and command-line skills",
    },
    {
        title: "Introduction to IoT",
        issuer: "Cisco Networking Academy",
        date: "November 2020",
        details: "Fundamentals of the Internet of Things and digital transformation",
    },
];

const certifications: CertificationGroup[] = [
    securityCertifications,
    {
        category: "Database & Information Management",
        items: [
            {
                title: "Faculty Certification - Information Management",
                issuer: "STI College Cagayan De Oro",
                date: "July 2022",
                details: "Certified to deliver courses in information management, database design, data modeling, SQL, and relational databases",
            },
            {
                title: "Faculty Certification - Computer Programming 6",
                issuer: "STI College Cagayan De Oro",
                date: "July 2022",
                details: "SQL / Intro to ASP.NET, database design, administration, and hands-on training",
            },
        ],
    },
    {
        category: "Mobile Systems & Platforms",
        items: [
            {
                title: "Faculty Certification - Mobile App Programming 2",
                issuer: "STI College Cagayan De Oro",
                date: "July 2022",
                details: "Android OS and .NET Framework, cross-platform app development using Visual Studio with Xamarin",
            },
            {
                title: "Faculty Certification - Mobile Systems and Technologies",
                issuer: "STI College Cagayan De Oro",
                date: "2022",
                details: "Foundational programming technologies, design, and development for mobile applications",
            },
        ],
    },
    {
        category: "Programming & Application Development",
        items: [
            {
                title: "Faculty Certification - Computer/Web Programming 4",
                issuer: "STI College Cagayan De Oro",
                date: "2022",
                details: "Object-oriented applications for Web and Windows utilizing C#.NET programming, including user interfaces, arrays, and exception handling",
            },
            {
                title: "Faculty Certification - Integrative Programming",
                issuer: "STI College Cagayan De Oro",
                date: "2022",
                details: "Design, implementation, testing, and debugging of programs using fundamental constructs in C#",
            },
            {
                title: "Faculty Certification - Event-Driven Programming",
                issuer: "STI College Cagayan De Oro",
                date: "2022",
                details: "Exception/file handling, concurrency, and database connectivity",
            },
        ],
    },
    {
        category: "Systems, Technology, & Core Tools",
        items: [
            {
                title: "Faculty Certification - Empowerment Technologies",
                issuer: "STI College Cagayan De Oro",
                date: "July 2022",
                details: "Curate, contextualize, collaborate, and create content/experiences using ICT",
            },
            {
                title: "Faculty Certification - Computer Productivity Tools",
                issuer: "STI College Cagayan De Oro",
                date: "March 2022",
                details: "MS Word, MS PowerPoint, Windows OS, and personal computer operations",
            },
            {
                title: "Faculty Certification - Professional Issues in IT",
                issuer: "STI College Cagayan De Oro",
                date: "2022",
                details: "Dominant supportive technologies alongside professional, ethical, legal, security, and social responsibilities",
            },
            ...ciscoFoundationCertifications,
        ],
    },
];

// Skill groups shared by the executive and developer variants
const coreSkills: CVData["skills"] = [
    {
        category: "Backend Development",
        items: [
            "Python (Django, Django REST Framework, Django-Ninja, FastAPI)",
            "Celery (task queues, scheduled jobs)",
            "PostgreSQL, DynamoDB",
            "Redis",
            "Keycloak (Identity and Access Management)",
            "django-tenants (schema-per-tenant multi-tenancy)",
            "Event-driven messaging (Redis Streams, transactional outbox, Server-Sent Events)",
            "REST API design and integration",
            "Microservices / modular backend architecture",
        ],
    },
    {
        category: "Frontend Development",
        items: [
            "React, Next.js (13 through 16, pnpm monorepo)",
            "Vite, TanStack Query",
            "TypeScript",
            "Component libraries: MUI, ShadCN",
            "State management (Zustand, Redux)",
            "Testing: Vitest, Playwright",
        ],
    },
    {
        category: "AI & Development Tools",
        items: [
            "Gemini Pro",
            "Claude Code",
        ],
    },
    {
        category: "DevOps & Infrastructure",
        items: [
            "Docker, Docker Compose",
            "Kubernetes (manifests, ingress, CloudNativePG, Lens IDE)",
            "NGINX",
            "Jenkins (CI/CD Pipeline Orchestration)",
            "Infisical (Secret Management)",
            "Proxmox (Virtual Environment)",
            "Git Version Control (GitHub, GitLab)",
            "AWS ECR, S3-compatible storage (MinIO)",
            "Basic Linux server management",
        ],
    },
    {
        category: "Architecture & Systems Design",
        items: [
            "Multi-tenant SaaS architecture",
            "Cross-service event fabrics (outbox, idempotent consumers, replayable event log)",
            "Rules-based correlation with explainable provenance",
            "Module federation (microfrontend)",
            "API gateway patterns",
            "Background processing and distributed workloads",
            "Data models and ERD design",
            "Performance optimization and troubleshooting",
        ],
    },
    {
        category: "Security Engineering",
        items: [
            "Attack surface scanning (nuclei, naabu, nmap)",
            "MITRE ATT&CK coverage mapping, CISA KEV",
            "Certification workflows: ISO 27001, ISO 9001, SOC 2, C5",
        ],
    },
];

// Team Lead CV - Emphasizes leadership + technical balance
export const cvData: CVData = {
    personal: {
        ...contact,
        title: "Director of Cyber Development | Lead Full-Stack Architect",
    },
    summary:
        "Lead Software Engineer and Systems Architect with a deep focus on building secure, enterprise-grade platforms. Expert in hands-on full-stack development (Python/Django, FastAPI, React, Next.js) and event-driven service orchestration. Proven track record of leading high-performance engineering teams through complex technical replications and ground-up builds, and an early adopter of AI-assisted engineering (Gemini Pro, now Claude Code). Combines 'Secure by Design' principles with a pragmatic, delivery-focused mindset to build scalable, mission-critical software ecosystems.",
    experience: [
        {
            title: "Director of Cyber R&D",
            company: "CyTech Development and Operations, Inc.",
            location: "Cagayan De Oro, Philippines",
            period: "September 2025 - Present",
            responsibilities: [
                "Lead the technical architecture and hands-on delivery of **AQUILA v5**, a multi-tenant cyber security platform spanning GRC, Monitor, Sentinel, Resilience, EPA and C4I editions, built on Django-Ninja, Keycloak, MinIO and Kubernetes",
                "Designed and built the **AQUILA Interop Kernel**, the event fabric that lets editions share events without knowing about each other; 41 of 50 catalogued event types shipped within three weeks of the first commit",
                "Took the **AQUILA Sentinel** offensive-security edition from design mock to working product on open-source scanners (naabu, nuclei, nmap), with SLA-based remediation tracking and MITRE ATT&CK coverage derived from real detection logs",
                "Shipped certification renewal and an end-to-end external-auditor workflow to the production GRC edition, and built **CRAM** business-impact risk mapping in the C4I edition",
                "Own infrastructure delivery for new editions (Kubernetes manifests, Jenkins staging/production pipelines, Infisical secrets); took over a stalled white-label SaaS rollout during a critical staff transition and met the client's go-live date",
                "Rebuilt **Risk Management V2** as a service-layer engine that scores residual risk from live task completion, and built the SMA benchmarking engine mapping 35k+ industry data points",
            ],
        },
        {
            title: "Senior Manager",
            company: "CyTech Development and Operations, Inc.",
            location: "Cagayan De Oro, Philippines",
            period: "December 2023 - September 2025",
            responsibilities: [
                "Scaled and mentored a high-performance engineering team of 10 junior developers, accelerating their progression from HTML/CSS to production-ready Full-Stack capability within 6 months",
                "Architected 'Enterprise GRC Core', utilizing AI-augmented analysis and Pandas pipelines to reverse-engineer 8MB+ legacy SCF datasets, with an automated parser that synchronizes 1000+ controls from regulatory updates into a multi-tenant DB with zero downtime",
                "Led the architectural transition of 8 standalone modules to a unified Multi-Tenant ecosystem, implementing physically isolated database instances via a custom Ref-ID header routing middleware",
                "Designed a 'Readiness Analytics Engine' providing snapshot-based trend analysis and maturity scoring across 20+ cybersecurity frameworks",
                "Engineered reusable backend patterns (async email workers, Redis caching, audit log triggers) and moved heavy workloads onto Celery workers, standardizing development workflows and improving system responsiveness",
            ],
        },
        {
            title: "Manager",
            company: "CyTech Development and Operations, Inc.",
            location: "Cagayan De Oro, Philippines",
            period: "July 2023 - December 2023",
            responsibilities: [
                "Developed compliance management features (audit workflows, risk assessment modules, annual workplan tracking) using Django REST Framework and React",
                "Implemented data models and database migrations for multi-tenant PostgreSQL architecture supporting compliance workflows aligned with industry standards",
                "Onboarded and mentored initial batch of junior developers through hands-on project work and code review feedback",
                "Collaborated with cross-functional teams to align technical implementation with compliance and business requirements",
            ],
        },
        {
            title: "Web Developer II",
            company: "CyTech Development and Operations, Inc.",
            location: "Cagayan De Oro, Philippines",
            period: "January 2023 - July 2023",
            responsibilities: [
                "Rapidly transitioned from a .NET and HTML/CSS background to full-stack proficiency in React and Django REST Framework within weeks to meet aggressive product launch deadlines",
                "Spearheaded the V1 architectural design (ERD) of the company’s first GRC module, reverse-engineering a contextless, unreferenced SCF Excel dataset into a functional relational database schema",
                "Synthesized high-level stakeholder requirements and complex cybersecurity concepts into a functional MVP through deep manual analysis and rapid prototyping",
                "Maintained version control using Git and conducted cross-browser testing to ensure a consistent user experience during high-velocity development cycles",
            ],
        },
        {
            title: "IT Instructor / IT Program Head",
            company: "STI College",
            location: "Cagayan De Oro, Philippines",
            period: "September 2021 - January 2023",
            responsibilities: [
                "Facilitated hands-on training sessions using industry-standard software and tools, assessing student progress with regular, constructive feedback",
                "Mentored new IT instructors as Program Head, sharing teaching best practices",
            ],
        },
    ],
    skills: [
        ...coreSkills,
        {
            category: "Leadership & Management",
            items: [
                "Technical team leadership",
                "Project planning and execution",
                "Sprint management and backlog prioritization (OpenProject)",
                "Cross-team coordination",
                "Mentoring junior developers",
            ],
        },
    ],
    education,
    projects: [
        {
            title: "AQUILA Interop Kernel (Cross-Edition Event Fabric)",
            description:
                "Designed the interoperability layer for a six-edition cyber security platform and built it from the first commit: an event fabric on Redis Streams and a kernel that stores every event, correlates events with explainable rules and streams a live operating picture.",
            technologies: ["Django-Ninja", "Redis Streams", "PostgreSQL", "Kubernetes"],
            impact: "41 of 50 catalogued event types built across six editions within three weeks; first cross-edition route confirmed working in production",
        },
        {
            title: "AQUILA Sentinel (Attack Surface Management)",
            description:
                "Took an offensive-security edition from design mock to working product on open-source scanners, with findings, remediation tracking, engagement authorisation checks and ATT&CK coverage derived from detection logs.",
            technologies: ["Django-Ninja", "Celery", "nuclei", "naabu", "React"],
            impact: "Dashboards and KPIs now compute from each tenant's real findings instead of seeded demo data",
        },
        {
            title: "Enterprise GRC Ecosystem",
            description:
                "Designed multi-tenant compliance management architecture (SCF-based compliance, risk management, annual workplan modules) replacing fragmented Excel-based workflows. Architected modular Django backend and Module Federation micro-frontends; junior developers independently built and integrated 10+ audit endpoints from established patterns.",
            technologies: ["React", "Module Federation", "Django", "PostgreSQL"],
            impact: "Centralized compliance workflow eliminating scattered Excel files; enabled junior team to ship production features autonomously",
        },
        {
            title: "DevOps Pipeline Orchestration",
            description:
                "Extended VP-provided reference pipeline into standardized CI/CD templates with integrated secret management (Infisical) and automated Docker builds. Created cookiecutter templates that reduced new developer environment setup from 2 weeks to 1-3 days.",
            technologies: ["Jenkins", "Docker", "Infisical"],
            impact: "Eliminated repetitive onboarding bottlenecks; enabled consistent deployment workflows across teams",
        },
    ],
    certifications,
};

// Developer-focused CV variant (for Mid-Level to Senior IC roles)
export const cvDataDeveloper: CVData = {
    personal: {
        ...contact,
        title: "Director of Cyber Development | Lead Full-Stack Architect",
    },
    summary:
        "Senior Lead Software Engineer & Full-Stack Architect with 4+ years of production experience building high-performance Python systems (Django, FastAPI) and resilient frontend architectures. Expert in multi-tenant SaaS logic, event-driven integration, DevOps automation, and secure-by-design principles. A hands-on leader who bridges the gap between complex system design and industrial-grade delivery, and an early adopter of AI-assisted engineering (Gemini Pro, now Claude Code). Experienced in technical rescue operations and white-label scaling for global enterprise partners.",
    experience: [
        {
            title: "Director of Cyber R&D",
            company: "CyTech Development and Operations, Inc.",
            location: "Cagayan De Oro, Philippines",
            period: "September 2025 - Present",
            responsibilities: [
                "Built the **AQUILA Interop Kernel** (Django-Ninja, django-tenants, Redis Streams) from the first commit: transactional outbox and relay, ULID-idempotent consumers, append-only schema-per-tenant event store, graph projection, versioned rule packs and an SSE API; shipped the shared SDK as an internal Python package into six edition backends, backed by 400+ tests",
                "Built the **AQUILA Sentinel** edition end to end: Celery scanner workers on naabu and nuclei, a Behavioural Discovery engine for non-CVE templates, findings and SLA-based remediation services, scan authorisation checks, and MITRE ATT&CK coverage derived from detection logs",
                "Delivered certification renewal (env-driven validity rules, Celery beat reminders, certificate PDFs) and an external-auditor workflow to the production GRC edition across Django-Ninja and a Next.js 16 monorepo; fixed a production crash by replacing per-row round trips with a bulk upsert",
                "Built **CRAM** business-impact risk mapping in the C4I edition (FastAPI, psycopg 3, React) with Keycloak JWT authentication and trusted service-to-service reads",
                "Rebuilt **Risk Management V2** on a decoupled service layer that scores residual risk from live task status, and engineered the SMA benchmarking engine with JSONField answer keys over 35k+ industry data points",
                "Took full ownership of Jenkins CI/CD and Kubernetes delivery for white-labeled SaaS instances and new editions, keeping deployments running through a critical staff transition",
            ],
        },
        {
            title: "Senior Manager",
            company: "CyTech Development and Operations, Inc.",
            location: "Cagayan De Oro, Philippines",
            period: "December 2023 - September 2025",
            responsibilities: [
                "Scaled engineering velocity by mentoring a team of 10 developers, progressing them from foundational skills to production-level competency in Django, React, and Redis within 6 months",
                "Architected 'Enterprise GRC Core', leveraging AI-driven data analysis and Pandas pipelines to reverse-engineer 8MB+ legacy SCF datasets into a scalable, multi-tenant architecture",
                "Spearheaded the implementation of a high-security Multi-Tenant architecture across 8 modules, utilizing physically isolated PostgreSQL instances and custom middleware for header-based tenant routing",
                "Implemented frontend monolith-to-module-federation migration using React, reducing build times and enabling independent deployment cycles across 4 feature teams",
                "Designed reusable backend patterns and white-label environment provisioning systems, and moved heavy computational loads onto Celery workers in an event-driven architecture, standardizing client deployments and improving responsiveness",
            ],
        },
        {
            title: "Manager",
            company: "CyTech Development and Operations, Inc.",
            location: "Cagayan De Oro, Philippines",
            period: "July 2023 - December 2023",
            responsibilities: [
                "Developed compliance management features (audit workflows, risk assessment modules, annual workplan tracking) using Django REST Framework and React with TypeScript",
                "Designed and implemented 'Enterprise GRC Core' backend using Django REST, Celery, and Redis, processing high-volume regulatory data with 45% improved performance",
                "Participated in code reviews, providing constructive feedback and learning from senior developers to improve code quality and best practices",
                "Collaborated with compliance team to understand regulatory requirements and translate them into technical solutions",
            ],
        },
        {
            title: "Web Developer II",
            company: "CyTech Development and Operations, Inc.",
            location: "Cagayan De Oro, Philippines",
            period: "January 2023 - July 2023",
            responsibilities: [
                "Rapidly transitioned from a .NET background to Full-Stack development in React and Django REST Framework to meet aggressive weeks-long delivery windows for the GRC V1 launch",
                "Engineered the foundational ERD for the GRC module by reverse-engineering unreferenced legacy SCF datasets through manual analysis, deciphering complex domain logic without existing context",
                "Maintained version control and participated in code reviews, applying rapid-learning cycles to improve code quality and align technical implementation with shifting business needs",
                "Conducted performance optimization and cross-browser testing for the initial platform rollout to ensure stability under pioneer user loads",
            ],
        },
    ],
    skills: [
        ...coreSkills,
        {
            category: "Team Collaboration",
            items: [
                "Code review and pair programming",
                "Mentoring junior developers",
                "Technical documentation",
                "Agile/Scrum workflows (OpenProject)",
                "Cross-team coordination",
            ],
        },
    ],
    education,
    projects: [
        {
            title: "AQUILA Interop Kernel (Cross-Edition Event Fabric)",
            description:
                "Built a Django-Ninja + django-tenants kernel that consumes every edition's events off Redis Streams, deduplicates on ULID, stores them append-only per tenant, projects an entity graph in arrival order, evaluates versioned rule packs and streams the result over SSE. Packaged the outbox, relay, consumer and manifest validation as an internal SDK published from Jenkins.",
            technologies: ["Django-Ninja", "django-tenants", "Redis Streams", "PostgreSQL", "SSE", "Kubernetes"],
            impact: "Six edition backends integrated through one SDK; 400+ kernel tests; first cross-edition route confirmed working in production",
        },
        {
            title: "AQUILA Sentinel (Attack Surface Management)",
            description:
                "Built tenant-aware Celery scanner workers (naabu port discovery feeding nuclei), a Behavioural Discovery engine for non-CVE templates, findings and remediation services with SLAs, and a React UI ported from a 28-surface design mock.",
            technologies: ["Django-Ninja", "Celery", "nuclei", "naabu", "nmap", "React", "TypeScript"],
            impact: "Replaced seeded demo data with live per-tenant findings; 700+ backend tests",
        },
        {
            title: "Enterprise GRC Compliance Platform",
            description:
                "Architected and implemented modular Django backend for multi-tenant compliance management system (SCF-based compliance, risk management, annual workplan modules). Built Module Federation micro-frontends enabling independent team deployments. Established backend patterns that enabled junior developers to independently build 10+ audit endpoints.",
            technologies: ["Django", "React", "Module Federation", "PostgreSQL", "Celery"],
            impact: "Replaced fragmented Excel workflows with centralized platform; reduced audit preparation time significantly",
        },
        {
            title: "DevOps Pipeline Automation",
            description:
                "Assumed full ownership of CI/CD infrastructure during critical resource transitions. Standardized reference pipelines into reusable templates with integrated secret management (Infisical) and automated Docker builds. Created cookiecutter project templates reducing onboarding friction.",
            technologies: ["Jenkins", "Docker", "Infisical", "Python"],
            impact: "Ensured 100% go-live success for white-labeled client instances under aggressive deadlines; reduced developer environment setup from 2 weeks to 1-3 days.",
        },
    ],
    certifications,
};

// DevOps-focused CV variant (for Junior/Mid-Level DevOps or Infrastructure roles)
export const cvDataDevOps: CVData = {
    personal: {
        ...contact,
        title: "DevOps & Infrastructure Engineer",
    },
    summary:
        "Infrastructure and DevOps Engineer with strong hands-on experience in building automated CI/CD pipelines, containerizing applications, writing Kubernetes manifests, and managing Linux-based server environments. Demonstrated ability to reduce developer onboarding time from weeks to days using Docker, Jenkins, and automated secret management. Passionate about 'infrastructure as code', secure-by-design deployment architectures, and maintaining high-availability systems.",
    experience: [
        {
            title: "Infrastructure & Deployment Lead",
            company: "CyTech Development and Operations, Inc.",
            location: "Cagayan De Oro, Philippines",
            period: "September 2025 - Present",
            responsibilities: [
                "Assumed full ownership of infrastructure orchestration for enterprise white-labeled SaaS solutions, ensuring zero downtime during critical deployments",
                "Wrote the Kubernetes manifests for a new cross-edition event fabric: dedicated Redis with persistent TopoLVM storage, CloudNativePG Postgres, kernel, relay and consumer workloads, and ingress for staging and production",
                "Built Jenkins pipelines that publish an internal Python SDK and deploy services to staging and production, with pre-flight checks that stop a deploy when a required secret, database cluster or Redis is missing",
                "Rolled out the Sentinel and Resilience editions to Kubernetes (backends, scanner workers, frontends) following shared namespace, ConfigMap and Infisical conventions",
                "Containerised open-source security scanners (naabu, nuclei) with background template refresh, tuned concurrency and resource limits",
                "Monitor cluster health and troubleshoot workloads with Lens IDE across services that rely on Keycloak authentication and MinIO object storage",
            ],
        },
        {
            title: "DevOps & Backend Engineer",
            company: "CyTech Development and Operations, Inc.",
            location: "Cagayan De Oro, Philippines",
            period: "December 2023 - September 2025",
            responsibilities: [
                "Architected reusable backend deployment patterns and white-label environment provisioning systems, standardizing client rollouts",
                "Managed physically isolated PostgreSQL database instances for high-security, multi-tenant architectures",
                "Implemented Celery and asynchronous Redis workers to handle heavy computational loads, improving system responsiveness",
                "Scaled engineering velocity by mentoring a team of 10 developers on deployment best practices, Docker containerization, and Git workflows",
            ],
        },
        {
            title: "Full-Stack Developer",
            company: "CyTech Development and Operations, Inc.",
            location: "Cagayan De Oro, Philippines",
            period: "January 2023 - December 2023",
            responsibilities: [
                "Transitioned compliance applications into containerized Django/React environments to meet aggressive delivery windows",
                "Conducted performance optimization and cross-browser testing for initial platform rollouts under pioneer user loads",
                "Maintained strict version control practices and participated in infrastructure code reviews",
            ],
        },
    ],
    skills: [
        {
            category: "DevOps & Infrastructure",
            items: [
                "Docker, Docker Compose",
                "Jenkins (CI/CD Pipeline Orchestration)",
                "Kubernetes (manifests, ingress, CloudNativePG, Lens IDE)",
                "Linux Server Administration",
                "NGINX (Reverse Proxy & Load Balancing)",
                "Proxmox (Virtual Environment)",
                "Infisical (Secret Management)",
                "Git Version Control (GitHub, GitLab)",
            ],
        },
        {
            category: "Cloud & Storage",
            items: [
                "AWS ECR",
                "S3-compatible storage (MinIO)",
                "PostgreSQL Database Administration",
                "Redis (Caching, Queues & Streams)",
            ],
        },
        {
            category: "Backend & Scripting",
            items: [
                "Python (Django, FastAPI)",
                "Bash Scripting",
                "Celery (Task Queues)",
                "REST API Integration",
            ],
        },
        {
            category: "Security & Monitoring",
            items: [
                "Keycloak (IAM)",
                "Secure-by-Design Architecture",
                "Multi-tenant data isolation",
                "Open-source security scanners (nuclei, naabu)",
            ],
        },
    ],
    education,
    projects: [
        {
            title: "Event Fabric Infrastructure on Kubernetes",
            description:
                "Deployed a cross-edition event fabric to staging and production: a dedicated Redis for the event streams, CloudNativePG Postgres for the kernel, separate kernel, relay and consumer workloads, ingress for the live operating-picture stream, and Jenkins pipelines with pre-flight dependency checks.",
            technologies: ["Kubernetes", "CloudNativePG", "Redis", "Jenkins", "Infisical"],
            impact: "Moved the production kernel off a staging-pinned local volume onto the same managed Postgres setup as every other production database",
        },
        {
            title: "DevOps Pipeline Automation Ecosystem",
            description:
                "Standardized company-wide CI/CD pipelines using Jenkins and Docker. Integrated Infisical for secure secret management and created automated cookiecutter project templates.",
            technologies: ["Jenkins", "Docker", "Infisical", "Bash", "Python"],
            impact: "Ensured 100% go-live success for client instances and reduced developer environment setup time from 2 weeks to 1-3 days.",
        },
        {
            title: "Multi-Tenant Infrastructure Provisioning",
            description:
                "Designed the physical database isolation layer for an Enterprise GRC platform, setting up automated routing to dedicated PostgreSQL instances for high-security clients.",
            technologies: ["PostgreSQL", "NGINX", "Django", "Redis"],
            impact: "Successfully isolated tenant data while maintaining a unified application layer, passing rigorous security audits.",
        },
    ],
    certifications: [
        securityCertifications,
        {
            category: "Systems, Technology, & Core Tools",
            items: ciscoFoundationCertifications,
        },
    ],
};
