export interface CVData {
    personal: {
        name: string;
        title: string;
        location: string;
        phone: string;
        email: string;
        linkedin?: string;
        github?: string;
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
}

// Team Lead CV - Emphasizes leadership + technical balance
export const cvData: CVData = {
    personal: {
        name: "Zandro E. Narvaza",
        title: "Director of Cyber Development | Lead Full-Stack Architect",
        location: "Cagayan de Oro City, Philippines",
        phone: "+639566500885",
        email: "zandro.narvaza@gmail.com",
        linkedin: "linkedin.com/in/zandro-narvaza",
        github: "github.com/zandro-narvaza",
        photo: "/images/profile-photo.jpg",
    },
    summary:
        "Director of Cyber R&D with a proven track record of leading high-performance engineering teams and architecting enterprise-grade cyber security platforms. Expert in multi-tenant SaaS architecture, secure-by-design principles, and distributed systems (Python/Django, React, Module Federation). Successfully led complex technical replications and white-labeling initiatives for global partners. Focused on engineering excellence, infrastructure automation, and building scalable, secure mission-critical software.",
    experience: [
        {
            title: "Director of Cyber R&D",
            company: "CyTech Development and Operations, Inc.",
            location: "Cagayan De Oro, Philippines",
            period: "September 2025 - Present",
            responsibilities: [
                "Direct the strategic vision and technical roadmap for cyber security product development, focusing on 'Secure by Design' principles for GRC platforms",
                "Architected and led the ground-up rebuild (V2) of 'Project Sentinel' (Risk Management Engine); successfully balanced aggressive weekly delivery cycles with long-term architectural integrity to replace a high-complexity legacy system",
                "Optimized the Security Management Assessment (SMA) benchmarking tool using JSONField optimizations to map 35k+ industry data points; reverse-engineered unstructured legacy 'brain-dumps' into a clean, hierarchical API logic",
                "Assumed full-stack ownership of infrastructure orchestration for enterprise white-labeled SaaS instances, ensuring immediate client go-live during critical resource transitions",
                "Successfully advocated for and implemented scalable ERD designs in a high-velocity environment, ensuring the database remained robust during rapid feature expansion",
                "Orchestrated complex CI/CD workflows using GitLab CI and Jenkins to maintain environment parity across partner-owned VPCs while meeting demanding production deadlines",
            ],
        },
        {
            title: "Senior Manager",
            company: "CyTech Development and Operations, Inc.",
            location: "Cagayan De Oro, Philippines",
            period: "December 2023 - September 2025",
            responsibilities: [
                "Scaled and mentored a high-performance engineering team of 10 junior developers, accelerating their progression from HTML/CSS to production-ready Full-Stack capability within 6 months",
                "Architected 'Enterprise GRC Core', utilizing AI-augmented analysis and high-performance Pandas pipelines to reverse-engineer 8MB+ legacy SCF datasets into a scalable, multi-tenant ecosystem",
                "Led the architectural transition of 8 standalone modules to a unified Multi-Tenant ecosystem, implementing physically isolated database instances via a custom Ref-ID header routing middleware",
                "Engineered reusable backend patterns (async email workers, Redis caching, audit log triggers) that standardized development workflows and eliminated repetitive technical debt",
                "Developed an automated SCF (Secure Controls Framework) parser and updater, synchronizing 1000+ controls from regulatory updates into a multi-tenant DB with zero downtime",
                "Designed a 'Readiness Analytics Engine' providing snapshot-based trend analysis and maturity scoring across 20+ cybersecurity frameworks",
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
                "Facilitated hands-on training sessions using industry-standard software and tools",
                "Assessed student performance and provided constructive feedback to enhance learning outcomes",
                "Mentored new IT instructors, sharing best practices",
                "Evaluated student progress regularly through assessments and feedback",
            ],
        },
    ],
    skills: [
        {
            category: "Backend Development",
            items: [
                "Python (Django, Django REST Framework, FastAPI)",
                "Celery (task queues, scheduled jobs)",
                "PostgreSQL, DynamoDB",
                "Redis",
                "REST API design and integration",
                "Microservices / modular backend architecture",
            ],
        },
        {
            category: "Frontend Development",
            items: [
                "React, Next.js (including Next.js 13+)",
                "TypeScript",
                "Component libraries: MUI, ShadCN",
                "State management (Zustand, Redux)",
            ],
        },
        {
            category: "DevOps & Infrastructure",
            items: [
                "Docker, Docker Compose",
                "NGINX",
                "GitLab CI/CD, Jenkins",
                "AWS ECR, S3-compatible storage (MinIO)",
                "Basic Linux server management",
            ],
        },
        {
            category: "Architecture & Systems Design",
            items: [
                "Multi-tenant SaaS architecture",
                "Module federation (microfrontend)",
                "API gateway patterns",
                "Background processing and distributed workloads",
                "Data models and ERD design",
                "Performance optimization and troubleshooting",
            ],
        },
        {
            category: "Leadership & Management",
            items: [
                "Technical team leadership",
                "Project planning and execution",
                "Sprint management and backlog prioritization",
                "Cross-team coordination",
                "Mentoring junior developers",
            ],
        },
    ],
    education: [
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
    ],
    projects: [
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
            technologies: ["Jenkins", "GitLab CI", "Docker", "Infisical"],
            impact: "Eliminated repetitive onboarding bottlenecks; enabled consistent deployment workflows across teams",
        },
    ],
};

// Developer-focused CV variant (for Mid-Level to Senior IC roles)
export const cvDataDeveloper: CVData = {
    personal: {
        name: "Zandro E. Narvaza",
        title: "Director of Cyber Development | Lead Full-Stack Architect",
        location: "Cagayan de Oro City, Philippines",
        phone: "+639566500885",
        email: "zandro.narvaza@gmail.com",
        linkedin: "linkedin.com/in/zandro-narvaza",
        github: "github.com/zandro-narvaza",
        photo: "/images/profile-photo.jpg",
    },
    summary:
        "Director of Cyber R&D and Lead Full-Stack Architect with over 3 years of production experience building scalable Python systems (Django, FastAPI) and distributed workflows (Celery, Redis, Kafka). Expert in secure-by-design architecture, multi-tenant SaaS provisioning, and DevOps automation. Proven capability in technical replication and white-labeling for enterprise partners. Combines deep technical expertise in backend systems with a strategic vision for development and engineering leadership.",
    experience: [
        {
            title: "Director of Cyber R&D",
            company: "CyTech Development and Operations, Inc.",
            location: "Cagayan De Oro, Philippines",
            period: "September 2025 - Present",
            responsibilities: [
                "Direct the strategic vision and technical roadmap for cyber security product development, focusing on 'Secure by Design' principles for GRC platforms",
                "Architected and led the ground-up rebuild (V2) of 'Project Sentinel'; successfully managed high-velocity weekly feature releases while maintaining rigorous architectural standards and database scalability",
                "Architected the Security Management Assessment (SMA) engine via JSONField optimizations to map 35k+ industry data points, restructuring legacy assets into a clean, hierarchical API logic",
                "Assumed full-stack ownership of infrastructure orchestration for enterprise white-labeled SaaS solutions, ensuring immediate system availability during critical resource shifts",
                "Orchestrated complex GitLab CI and Jenkins workflows to enable automated deployment and infrastructure synchronization for strategic enterprise partners",
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
                "Designed reusable backend patterns and white-label environment provisioning systems that reduced repetitive engineering effort and standardized client deployments",
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
        {
            category: "Backend Development",
            items: [
                "Python (Django, Django REST Framework, FastAPI)",
                "Celery (task queues, scheduled jobs)",
                "PostgreSQL, DynamoDB",
                "Redis",
                "REST API design and integration",
                "Microservices / modular backend architecture",
            ],
        },
        {
            category: "Frontend Development",
            items: [
                "React, Next.js (including Next.js 13+)",
                "TypeScript",
                "Component libraries: MUI, ShadCN",
                "State management (Zustand, Redux)",
            ],
        },
        {
            category: "DevOps & Infrastructure",
            items: [
                "Docker, Docker Compose",
                "NGINX",
                "GitLab CI/CD, Jenkins",
                "AWS ECR, S3-compatible storage (MinIO)",
                "Basic Linux server management",
            ],
        },
        {
            category: "Architecture & Systems Design",
            items: [
                "Multi-tenant SaaS architecture",
                "Module federation (microfrontend)",
                "API gateway patterns",
                "Background processing and distributed workloads",
                "Data models and ERD design",
                "Performance optimization and troubleshooting",
            ],
        },
        {
            category: "Team Collaboration",
            items: [
                "Code review and pair programming",
                "Mentoring junior developers",
                "Technical documentation",
                "Agile/Scrum workflows",
                "Cross-team coordination",
            ],
        },
    ],
    education: [
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
    ],
    projects: [
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
            technologies: ["Jenkins", "GitLab CI", "Docker", "Infisical", "Python"],
            impact: "Ensured 100% go-live success for white-labeled client instances under aggressive deadlines; reduced developer environment setup from 2 weeks to 1-3 days.",
        },
    ],
};
