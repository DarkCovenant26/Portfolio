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
                "Architected and led the iterative ground-up rebuild (V2) of 'Project Sentinel' (Risk Management Engine); translated ambiguous stakeholder visions and 'nightmare' high-level computations into a high-performance, deterministic residual risk engine via Django Service patterns",
                "Architected the Security Management Assessment (SMA) benchmarking tool, utilizing JSONField optimizations to map 35k+ industry data points; leveraged AI-augmented analysis to reverse-engineer and restructure unstructured legacy 'brain-dumps' into a clean, hierarchical API logic",
                "Leveraged AI-augmented analysis to engineer a high-performance Pandas data pipeline for Enterprise GRC Core, reverse-engineering 8MB+ SCF datasets into a scalable 'Secure by Design' architecture",
                "Successfully executed technical replication of flagship SaaS into partner infrastructure as a white-label solution, securing key enterprise business partnerships",
                "Orchestrated complex CI/CD workflows using GitLab CI and Jenkins to enable seamless environment parity and automated deployment to partner-owned VPCs",
            ],
        },
        {
            title: "Senior Manager",
            company: "CyTech Development and Operations, Inc.",
            location: "Cagayan De Oro, Philippines",
            period: "December 2023 - September 2025",
            responsibilities: [
                "Mentored 10 junior developers (OJTs and fresh graduates) through code reviews, pair programming, and exposure-based learning, enabling progression from HTML/CSS to full-stack capability (React, Django, Redis, Kafka) within 6 months",
                "Architected 'Enterprise GRC Core', a high-performance GRC platform that replaced fragmented and un-managed Excel-based compliance workflows with a scalable Django/Celery/Redis ecosystem",
                "Built reusable backend implementation patterns (async email workers, Redis caching, audit log triggers) that reduced repetitive development work and enabled team to implement complex features independently",
                "Engineered an automated SCF (Secure Controls Framework) parser and updater, synchronizing 1000+ controls from regulatory updates into a multi-tenant DB",
                "Developed a 'Readiness Analytics Engine' providing snapshot-based trend analysis and maturity scoring across 20+ cybersecurity frameworks",
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
                "Developed custom web applications, resulting in tailored solutions for client needs",
                "Maintained version control using Git for efficient code management",
                "Participated in code reviews, providing constructive feedback to improve code quality",
                "Conducted cross-browser testing to ensure compatibility and optimize load times",
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
                "Architected and led the iterative ground-up rebuild (V2) of 'Project Sentinel' (Risk Management Engine); translated ambiguous stakeholder visions and 'nightmare' high-level computations into a high-performance, deterministic residual risk engine via Django Service patterns",
                "Architected the Security Management Assessment (SMA) benchmarking tool, utilizing JSONField optimizations to map 35k+ industry data points; leveraged AI-augmented analysis to reverse-engineer and restructure unstructured legacy 'brain-dumps' into a clean, hierarchical API logic",
                "Leveraged AI-augmented analysis to engineer a high-performance Pandas data pipeline for Enterprise GRC Core, reverse-engineering 8MB+ SCF datasets into a scalable 'Secure by Design' architecture",
                "Successfully executed technical replication of flagship SaaS into partner infrastructure as a white-label solution, ensuring environment parity and high-scale deployment capability",
                "Orchestrated complex CI/CD workflows using GitLab CI and Jenkins to enable automated deployment and infrastructure synchronization for executive partners",
            ],
        },
        {
            title: "Senior Manager",
            company: "CyTech Development and Operations, Inc.",
            location: "Cagayan De Oro, Philippines",
            period: "December 2023 - September 2025",
            responsibilities: [
                "Implement frontend monolith-to-module-federation migration using React and Webpack Module Federation, reducing build times and enabling independent team deployments across 4 developers",
                "Build multi-tenant white-label environment provisioning system with Django backend, automated deployment workflows, and tenant-specific configuration management",
                "Design and maintain reusable React component libraries and Django API patterns that improve development velocity and code consistency",
                "Collaborate with product team to translate business requirements into technical implementations, participating in architecture discussions and technical planning",
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
                "Developed custom web applications using React, Django, and PostgreSQL for client-specific business requirements",
                "Implemented responsive UI components with modern CSS frameworks and integrated RESTful APIs for data fetching and mutations",
                "Maintained version control using Git, participated in code reviews, and followed established coding standards",
                "Conducted cross-browser testing and performance optimization to ensure consistent user experience",
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
                "Extended reference CI/CD pipeline into reusable templates with integrated secret management (Infisical), automated Docker builds, and standardized development environments. Created cookiecutter project templates reducing onboarding friction.",
            technologies: ["Jenkins", "GitLab CI", "Docker", "Infisical", "Python"],
            impact: "Reduced developer environment setup from 2 weeks to 1-3 days; standardized deployment workflows",
        },
    ],
};
