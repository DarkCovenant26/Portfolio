export type CaseStudy = {
    // ── Identity ──────────────────────────────────────────────
    slug: string;
    title: string;
    description: string;

    // ── Card / List panel fields (formerly in projects.ts) ────
    problem?: string;
    solution?: string;
    impact?: string;
    tags?: string[];
    category?: "Orchestration" | "Infrastructure" | "Backend" | "R&D" | "SaaS";
    featured?: boolean;
    link?: string;
    className?: string;
    hasBlueprint?: boolean;

    // ── Detail / Case study fields ────────────────────────────
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
        slug: "cross-edition-event-fabric",
        title: "AQUILA Interop Kernel: Cross-Edition Event Fabric",
        description: "Designed and built the interoperability layer for a six-edition cyber security platform: a transactional-outbox event fabric on Redis Streams and a fusion kernel that stores every event, projects a per-tenant entity graph, runs explainable correlation rules, and streams a live common operating picture.",
        problem: "Six product editions (GRC, Monitor, EPA, Sentinel, Resilience, C4I) shared one login but no data plane; integrations were growing point-to-point, including a hub that read another edition's database directly with stored credentials.",
        solution: "Built an event fabric (outbox → relay → tenant-keyed Redis Streams) and a Django-Ninja kernel with an append-only event store, graph projector, versioned rule packs and an SSE operating-picture API; editions join through a shared SDK and a YAML manifest.",
        impact: "41 of 50 catalogued event types built across six editions within three weeks of the first commit; the first cross-edition route (Monitor incident → GRC suggested risk) confirmed working in production.",
        tags: ["Event-Driven", "Redis Streams", "Transactional Outbox", "Multi-Tenant", "Django-Ninja"],
        category: "Orchestration",
        featured: true,
        link: "/projects/cross-edition-event-fabric",
        className: "md:col-span-1",
        hasBlueprint: true,
        clientType: "Enterprise Cyber Security Platform (C4I)",
        role: "Lead Architect & Engineer",
        period: "2026 - Present",
        technologies: ["Python", "Django-Ninja", "django-tenants", "Redis Streams", "PostgreSQL", "Server-Sent Events", "Kubernetes", "Jenkins"],
        sections: {
            mission: "The platform had grown into strong verticals with no way to tell each other anything. The command-centre pages (operations wall, morning briefing, convergence stream) were finished UI running on placeholders, and every new integration meant wiring one more edition directly to another. My mission was to let any edition announce what happened and hear what others announced, without knowing they exist, and to fuse all of it into one picture per tenant.",
            architecture: "Every event uses one versioned envelope (`v1.<edition>.<entity>.<verb>`) with a ULID that doubles as the idempotency key, the tenant slug, the verified actor and a minimised payload. Each edition writes events into an outbox table inside the same database transaction as the change itself; a relay drains the outbox onto tenant-keyed Redis Streams on a dedicated Redis, so the bus being down never fails a user's request. The kernel consumes every stream, stores events append-only in schema-per-tenant Postgres, projects an entity graph in arrival order, and evaluates versioned rule packs that emit insights carrying the exact events that caused them. Because the kernel's store is the log of record, Redis is replaceable transport.",
            execution: "Built the kernel from the first commit: ingest with dead-lettering, projection-cursor workers, the rules and insights engine, the operating-picture API with a live SSE stream, per-dependency readiness probes and a chain-health report command. Packaged the outbox, relay, consumer, manifest validation and routing table as an internal Python SDK published from Jenkins, then rolled it into the GRC, Monitor, Resilience, Sentinel, EPA and C4I backends. Wrote the Kubernetes manifests for the fabric, kernel, relays and consumers on staging and production, and added kernel registration to tenant provisioning in the control plane. The kernel ships with 400+ automated tests.",
            baseline: "Within three weeks of the first commit, 41 of 50 catalogued event types were built across six editions and mapped against the 20 approved cross-edition routes. A new edition now joins with a manifest and the SDK instead of a multi-repo wiring project, and every insight can be traced back to the events, and therefore the audit rows, that produced it.",
        },
        technicalDeepDive: {
            blueprint: {
                title: "Outbox-to-Insight Event Flow",
                description: "An edition change becomes a stored event, a graph update and, when a rule matches, an insight that other editions hear.",
                participants: ["Edition", "Outbox", "Relay", "Fabric (Redis Streams)", "Kernel", "Rules Engine"],
                flow: [
                    { from: "Edition", to: "Outbox", action: "Write Event in Same Transaction" },
                    { from: "Relay", to: "Outbox", action: "Drain Pending Rows" },
                    { from: "Relay", to: "Fabric (Redis Streams)", action: "XADD to Tenant Stream" },
                    { from: "Fabric (Redis Streams)", to: "Kernel", action: "Consume, Dedupe, Store Append-Only" },
                    { from: "Kernel", to: "Rules Engine", action: "Evaluate Rule Packs in Arrival Order" },
                    { from: "Rules Engine", to: "Fabric (Redis Streams)", action: "Publish Insight with Provenance" },
                ],
            },
            signatureSnippet: {
                language: "python",
                code: `@transaction.atomic\ndef raise_incident(request, payload) -> Incident:\n    incident = Incident.objects.create(**payload.dict())\n\n    # Written, not sent: the event commits or rolls back with the incident.\n    # A separate relay publishes it, so the bus being down never fails the request.\n    emit(\n        "v1.monitor.incident.raised",\n        request=request,  # tenant slug + verified actor come from the principal\n        entity_refs=[("incident", incident.code), *(("asset", a) for a in incident.asset_keys)],\n        data={"severity": incident.severity, "phase": incident.phase},\n    )\n    return incident`,
                annotation: "Simplified from the SDK's publishing pattern: the event is queued in the same transaction as the domain write, so there is never an event for a change that rolled back.",
            },
            reflections: {
                title: "Fabric Design Trade-offs",
                tradeOffs: [
                    { outcome: "At-Least-Once Delivery", impact: "ULID ids make every consumer idempotent, so redeliveries are harmless." },
                    { outcome: "Kernel as Log of Record", impact: "Short stream retention is safe; any window can be replayed from Postgres." },
                    { outcome: "Rules over ML", impact: "Correlation stays deterministic and explainable, and works air-gapped." },
                ],
            },
        },
    },
    {
        slug: "sentinel-attack-surface",
        title: "AQUILA Sentinel: Attack Surface & Purple-Team Operations",
        description: "Took an offensive-security edition from design mock to working product: open-source attack surface scanning, a findings manager, a remediation tracker with SLAs, scoped engagements, and MITRE ATT&CK coverage derived from real detection logs.",
        problem: "The Sentinel edition existed as a 28-surface design mock on seeded data. MSSP operators needed real scans, real findings and a remediation loop, with no budget for licensed scanners.",
        solution: "Built the scanning pipeline on open-source tools (naabu port discovery feeding nuclei templates, nmap for CIDR and URL targets), persisted findings per tenant, and connected them to tickets, risk exceptions, engagements and the platform event fabric.",
        impact: "Dashboards and KPIs now compute from each tenant's real findings instead of seeded rows; every active scan is checked against the client's signed authorisations; ATT&CK coverage reflects what was actually detected.",
        tags: ["Attack Surface Management", "nuclei", "naabu", "MITRE ATT&CK", "Django-Ninja"],
        category: "Backend",
        featured: true,
        link: "/projects/sentinel-attack-surface",
        className: "md:col-span-1",
        hasBlueprint: true,
        clientType: "MSSP / Offensive Security",
        role: "Lead Engineer (Backend, Frontend & Deployment)",
        period: "2026 - Present",
        technologies: ["Django-Ninja", "django-tenants", "Celery", "PostgreSQL", "React", "TypeScript", "nuclei", "naabu", "nmap", "Kubernetes"],
        sections: {
            mission: "Sentinel is the platform's offensive and purple-team edition, used by MSSP operators to test client attack surfaces and track what gets fixed. It had a complete design but no working engine behind it. The constraint was open-source tooling only, and the mission was to make every surface run on real data for each tenant.",
            architecture: "A tenant-aware Celery scanner worker runs naabu for port discovery and hands live services to nuclei; nmap covers CIDR and URL targets. A Behavioural Discovery engine runs nuclei's non-CVE templates for misconfigurations and exposures. Results land in a Findings Manager tagged with CISA KEV status, and from there move into a Remediation Tracker (tickets, SLAs, risk exceptions) or into an engagement. Before any active scan, the targets are checked against every authorisation the client has signed (domains, wildcards and CIDR ranges); targets no signature covers are recorded on the scan or refused outright, depending on the configured mode. Findings and engagements are announced on the platform's event fabric so other editions can react.",
            execution: "Built the backend services, the scanner workers and the React UI end to end, porting the design mock surface by surface. Moved nuclei template refreshes to a background thread so workers report ready immediately, tuned scan concurrency and timeouts, added per-tenant subdomain CORS and bearer-token authentication, and replaced seeded KPI rows with statistics computed from each tenant's findings. Later phases added host promotion from scans into the asset inventory, a per-engagement detection log, and MITRE ATT&CK coverage derived from that log. Shipped the edition to Kubernetes with Jenkins pipelines for staging and production. The backend carries 700+ automated tests.",
            baseline: "Operators can now start a scan against real targets under an authorised engagement, see findings with exploit-in-the-wild context, raise a remediation ticket from a finding, and report ATT&CK coverage that is backed by recorded detections instead of a static matrix.",
        },
        technicalDeepDive: {
            blueprint: {
                title: "Authorised Scan to Remediation",
                description: "From a signed authorisation to a tracked fix, with every step recorded per tenant.",
                participants: ["Operator", "Authorisation Check", "Scanner Worker", "Findings Manager", "Remediation Tracker", "Event Fabric"],
                flow: [
                    { from: "Operator", to: "Authorisation Check", action: "Start Scan for Engagement" },
                    { from: "Authorisation Check", to: "Scanner Worker", action: "Queue Run with Uncovered Targets Noted" },
                    { from: "Scanner Worker", to: "Findings Manager", action: "Persist naabu + nuclei Results" },
                    { from: "Findings Manager", to: "Remediation Tracker", action: "Raise Ticket with SLA" },
                    { from: "Findings Manager", to: "Event Fabric", action: "Announce Finding to Other Editions" },
                ],
            },
            signatureSnippet: {
                language: "python",
                code: `def unauthorised_targets(tenant_slug: str, targets: list[str]) -> list[str]:\n    # Every signature counts, not only the newest: a client that signed for\n    # the DMZ in March and the VPN in June is authorised for both.\n    entries = [e for sig in repo.list_signatures(tenant_slug) for e in parse_scope(sig.scope)]\n    return [t for t in targets if not any(covers(e, t) for e in entries)]\n\n# In the scan service: "block" refuses with a 403 that names each uncovered\n# target; "warn" records them on the scan run so the evidence is never lost.\nif spec.active and mode == "block":\n    assert_authorised(slug, targets)\nelif spec.active and mode == "warn":\n    uncovered = unauthorised_targets(slug, targets)`,
                annotation: "Simplified from the scan service: authorisation is checked against every signed scope, and the result is either a refusal that says exactly what to fix or a record attached to the scan.",
            },
            reflections: {
                title: "Open-Source Tooling Trade-offs",
                tradeOffs: [
                    { outcome: "No Licence Fees", impact: "naabu + nuclei cover external discovery and CVE checks at zero cost." },
                    { outcome: "Template Freshness", impact: "Background refresh keeps templates current without blocking worker start." },
                    { outcome: "External Surface First", impact: "Internal-network agents deferred deliberately to ship the external surface." },
                ],
            },
        },
    },
    {
        slug: "grc-certification-audit",
        title: "GRC Edition: Certification Renewal & External Audit Workflow",
        description: "Extended a production GRC platform with a full certification lifecycle and an end-to-end external auditor workflow, from renewal rules and reminders to sealed findings and auditor-staff question threads.",
        problem: "Certificates were issued once with no renewal path, external auditors could not run an audit inside the platform, and auditor-staff questions on checklist items happened outside the system.",
        solution: "Built renewal cycles driven by per-framework validity rules, nightly reminders, certificate PDFs and an audit trail; added an external-auditor persona with limited write access, sealed findings and draft reports, and per-item question threads.",
        impact: "Merged and deployed to production in October 2026; a test pins that every certifiable framework in production is covered by a renewal rule.",
        tags: ["GRC", "Workflow Design", "Celery Beat", "Django-Ninja", "Next.js"],
        category: "SaaS",
        featured: true,
        link: "/projects/grc-certification-audit",
        className: "md:col-span-1",
        clientType: "Enterprise GRC / Compliance",
        role: "Lead Full-Stack Engineer",
        period: "2026",
        technologies: ["Django-Ninja", "django-tenants", "Celery", "PostgreSQL", "Next.js", "TypeScript", "Infisical", "Kubernetes"],
        sections: {
            mission: "Customers certify against frameworks such as ISO 27001, ISO 9001, SOC 2 and C5, and those certificates expire. The platform could issue a certificate but had no notion of a cycle, a renewal or an outside auditor. The mission was to model the whole lifecycle inside the product and let external auditors do their work there too.",
            architecture: "Renewal is built on cycles with framework-specific rules: an ISO certificate rule (27001, 27701, 27017, 9001) and a yearly report rule (SOC 2, C5). The validity numbers come from environment settings managed in Infisical and are re-applied by the nightly Celery beat run that also sends reminders. Concluded cycles lock, and every change lands in an audit trail. The audit side adds an external-auditor persona whose permissions allow review writes only, seals findings from viewers outside the audit team, and lets outside auditors build the sample and seal the draft report.",
            execution: "Delivered in phases across the backend and the Next.js monorepo frontend: renewal mechanism, reminders, certificate PDF, history and cycle lock, then the external-auditor flow and follow-ups. Added question threads on checklist items with paging so long conversations stay fast. Alongside this, built a guided onboarding journey that tracks tenant readiness, CRAM traceability on risks and assets, multi-framework ingestion from a single file, and fixed a production crash on framework requirements by replacing per-row round trips to a high-latency database with a bulk upsert.",
            baseline: "Certification is now a managed lifecycle instead of a one-off record: customers are reminded before expiry, auditors work inside the platform with the right level of access, and the renewal baseline was taken from the frameworks actually in use in production.",
        },
    },
    {
        slug: "kpi-orchestration",
        title: "Global KPI Orchestration",
        description: "Engineered a high-performance synthesis engine that aggregates cross-module security data in real-time to drive executive decision dashboards.",
        problem: "Cross-module data remained siloed, preventing real-time visibility into global security compliance and operational KPIs.",
        solution: "Engineered an event-driven synthesis engine that orchestrates data from 8 modules into a centralized dashboard via Redis task queues.",
        impact: "Automated real-time KPI generation for enterprise stakeholders; reduced manual reporting latency from 48 hours to sub-second.",
        tags: ["System Orchestration", "Redis", "Event-Driven", "KPI Engine", "Next.js"],
        category: "Orchestration",
        featured: true,
        link: "/projects/kpi-orchestration",
        className: "md:col-span-1",
        hasBlueprint: true,
        clientType: "Enterprise GRC",
        role: "Lead Systems Architect",
        period: "2024 - Present",
        technologies: ["Python", "Redis", "Celery", "Django REST", "Next.js"],
        sections: {
            mission: "Standard compliance modules operated in silos, making global risk-posture reporting a slow, manual task. My mission was to build a 'Synthesis Engine' that could pull live metrics from any connected module and compute global KPIs on-the-fly.",
            architecture: "I architected an event-driven pipeline where modules push raw updates to a Redis queue. A cluster of specialized workers then consumes these events, applies deterministic scoring logic, and pushes the final KPI state to a real-time dashboard.",
            execution: "Developed the core computation service using Python and Redis for sub-second latency. I implemented a 'Module-Agnostic' interface that allows new frameworks (like SCF or ISO) to integrate with the KPI engine simply by fulfilling a standard data contract, eliminating the need for custom logic per-module.",
            baseline: "Enabled executive leadership to monitor enterprise readiness in real-time. Automated the data collection for 20+ global frameworks, reducing organizational reporting latency from 48 hours to less than 1 second.",
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
                    { from: "Worker", to: "Analytics Store", action: "Commit KPI Synthesis" },
                ],
            },
            signatureSnippet: {
                language: "python",
                code: `@receiver(post_save, sender=ClientSection)\ndef trigger_kpi_refresh(sender, instance, created, **kwargs):\n    # Recompute local effectiveness metrics\n    recompute_control_effectiveness_for_section(instance)\n    \n    # Orchestrate Global KPI Refresh via Interop Orchestrator\n    send_interop_notification(\n        action="calculate_audit_readiness",\n        client_id=instance.client_standard.client.client_no,\n        params={\n            "section_id": instance.id,\n            "status": instance.status,\n            "standard_name": instance.client_standard.standard.standard\n        }\n    )`,
                annotation: "Authentic Sequoia signal that orchestrates a Global KPI refresh by pushing event-driven notifications to the centralized dashboard engine.",
            },
            reflections: {
                title: "System Synchronization Trade-offs",
                tradeOffs: [
                    { outcome: "Scalable Event Intake", impact: "Decoupled computation from web requests, preventing UI timeouts." },
                    { outcome: "Data Normalization", impact: "Unified disparate module outputs into a singular schema." },
                    { outcome: "Compute Efficiency", impact: "Used Redis-backed caching to prevent redundant syntheses." },
                ],
            },
        },
    },
    {
        slug: "multi-tenant-db-orchestration",
        title: "Project Nexus: Multi-Tenant Database Orchestration",
        description: "Architected a high-security multi-tenant ecosystem across 8 modules, utilizing physically isolated database instances and custom middleware for secure tenant routing.",
        problem: "Enterprise clients required strict data sovereignty and physical isolation across a shared application core.",
        solution: "Architected a custom header-based routing layer that dynamically swaps database connections based on Ref-ID identifiers.",
        impact: "Ensured 100% tenant isolation with zero cross-talk; enabled friction-less scaling to 10+ high-security partner instances.",
        tags: ["Strategic Architecture", "Multi-Tenancy", "Data Sovereignty", "Middleware"],
        category: "Orchestration",
        featured: true,
        link: "/projects/multi-tenant-db-orchestration",
        className: "md:col-span-1",
        hasBlueprint: true,
        clientType: "Managed Security Service Providers (MSSPs)",
        role: "Systems Architect & Lead",
        period: "2024",
        technologies: ["PostgreSQL", "Django", "Custom Middleware", "Python", "Redis"],
        sections: {
            mission: "The organization maintained 8 standalone projects that needed to be consolidated for Managed Security Service Providers (MSSPs). The critical requirement was absolute data sovereignty: each MSSP and their respective clients required a physically separate database instance to ensure zero data leakage and meet strict compliance standards.",
            architecture: "Designed a 'Shared-Application, Isolated-Database' architecture. I developed a routing strategy utilizing a unique 'Ref-ID' passed through request headers. This identifier was intercepted by a custom backend middleware that dynamically routed database queries to the appropriate tenant-specific instance.",
            execution: "Led a cross-functional team of developers through the research and implementation phases. While focusing on the database schema orchestration, I collaborated closely with the middleware engineers to ensure the 'hooking' logic was performant and secure. We successfully migrated all 8 existing modules to this new architecture, ensuring that every database operation was context-aware and isolated by default.",
            baseline: "Successfully unified 8 fragmented projects into a single, scalable ecosystem. The platform now supports high-security enterprise and government clients with 100% verifiable data isolation, significantly reducing operational overhead for multi-tenant management.",
        },
    },
    {
        slug: "risk-management-v2",
        title: "Risk Management V2: Dynamic Risk Quantification",
        description: "Architected a next-generation risk management engine that calculates residual risk in real-time by orchestrating live telemetry from engineering task-management systems.",
        problem: "Enterprise risk assessments were static, synchronous, and disconnected from the real-time engineering task lifecycle.",
        solution: "Engineered a 'Real-Time Telemetry' risk engine using Django Service Patterns; orchestrated live data synchronization with external Task APIs to calculate 'Actual' residual risk.",
        impact: "Shifted organization from manual quarterly reviews to continuous, live risk monitoring; automated the scoring of 1000+ dynamic security controls.",
        tags: ["Service Patterns", "Dynamic Scoring", "API Orchestration", "Enterprise SaaS", "PostgreSQL"],
        category: "Backend",
        featured: true,
        link: "/projects/risk-management-v2",
        className: "md:col-span-1",
        hasBlueprint: true,
        clientType: "Enterprise GRC / Cyber Security",
        role: "Lead Software Engineer | Architect",
        period: "2025 - Present",
        technologies: ["Django 5", "Service Patterns", "Redis", "Celery", "PostgreSQL"],
        sections: {
            mission: "The project began as a high-stakes architectural rescue. The existing Risk Register (V1) was a static spreadsheet-mimic: synchronous, monolithic, and disconnected from reality. My mission was to architect a 'Dynamic Quantification Engine' capable of reflecting risk based on actual implementation status, not just promises.",
            architecture: "I engineered a 'Service-Oriented Core' where risk logic was decoupled from database models. The primary achievement was the 'Live Sync Orchestrator'—a specialized layer that reaches out to external Task APIs to verify the completion of security controls before calculating a 'Projected' vs 'Actual' residual risk score.",
            execution: "I spearheaded the move from V1's legacy views to a robust Service Pattern. This involved designing an 'Asynchronous Synthesis' pipeline using Celery and Redis to handle complex risk recalculations across 1000+ controls without locking the user interface. I also enforced strict Tenant Isolation via a custom Ref-ID routing middleware.",
            baseline: "Automated the calculation of 'Live Risk Gauges' for executive leadership. The platform now provides a deterministic, real-time security posture that is 100% verifiable through engineering audit trails, reducing manual review overhead by 85%.",
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
                    { from: "Service Layer", to: "Telemetry Store", action: "Commit Score Synthesis" },
                ],
            },
            signatureSnippet: {
                language: "python",
                code: `class ResidualRiskService:\n    def calculate_actual_risk(self, risk_id: int):\n        risk = Risk.objects.get(id=risk_id)\n        # Orchestration: Fetching live task data from external system\n        task_data = workplan_api.fetch_verification_status(risk.control_ids)\n        \n        # Quantification: Only count controls with 100% task completion\n        completed_eff = [\n            c.effectiveness for c in task_data \n            if c.status == "COMPLETED" and not c.has_staged_tasks\n        ]\n        \n        # Synthesis: Capped reduction based on live implementation status\n        final_effectiveness = sum(completed_eff) / len(completed_eff)\n        return risk.inherent_score * (1 - (final_effectiveness * 0.8))`,
                annotation: "Orchestrates live verification by reaching out to the Task Management system before committing a risk score reduction.",
            },
            reflections: {
                title: "Architectural Evolution Trade-offs",
                tradeOffs: [
                    { outcome: "Eventual Consistency", impact: "Risk scores update after background sync, required UX Skeletons." },
                    { outcome: "Decoupled Scalability", impact: "Moving logic to Services enabled industrial-scale simulations." },
                    { outcome: "Verification Rigor", impact: "Actual risk is lower but 100% verifiable vs. non-monitored states." },
                ],
            },
        },
    },
    {
        slug: "cram-business-risk-mapping",
        title: "C4I CRAM: Business-Driven Cyber Risk Mapping",
        description: "Turned the C4I edition's cyber risk mapping (CRAM) from static screens into a working feature: business mapping, posture intake, assessments and a revenue-at-risk view, with ownership moved to the edition that should hold it.",
        problem: "CRAM screens existed but saved nothing real, the data was editable from the wrong edition (GRC), and several C4I backend routes had no authentication.",
        solution: "Built the CRAM backend and frontend end to end, added Keycloak JWT authentication and trusted service-to-service reads, and made GRC a read-only consumer of CRAM data.",
        impact: "Tenants can map processes to business value and see revenue at risk; GRC risks and assets carry CRAM traceability; the annual posture intake lock is enforced across the whole app shell.",
        tags: ["Risk Quantification", "FastAPI", "Keycloak", "React", "Service-to-Service Auth"],
        category: "SaaS",
        featured: true,
        link: "/projects/cram-business-risk-mapping",
        className: "md:col-span-1",
        clientType: "Enterprise Cyber Security Platform (C4I)",
        role: "Lead Full-Stack Engineer",
        period: "2026",
        technologies: ["FastAPI", "psycopg 3", "PostgreSQL", "Keycloak", "React", "TypeScript", "TanStack Query"],
        sections: {
            mission: "CRAM links an organisation's business processes and revenue to its cyber landscape, so risk can be discussed in business terms. The UI had been built ahead of the data. The mission was to make it real, put it in the edition that owns it, and let other editions read it safely.",
            architecture: "CRAM lives in the C4I backend, a FastAPI service using raw SQL over psycopg 3: onboarding capture, business mapping (processes, functions, countries, critical business fundamentals), cyber landscape, risk tolerance, assessments with history, and an annual posture intake that locks once submitted. Keycloak JWT authentication protects every router, and trusted service callers let GRC read CRAM server-to-server instead of keeping its own copy.",
            execution: "Built the backend endpoints and the React screens together, including the onboarding wizard, the CRAM View graph and a Revenue-at-Risk component that includes processes without tracked revenue. Retired GRC's write path for business mapping, repointed the frontend stores at the C4I backend, added CRAM phase and domain tagging to GRC risks and assets, and wrote a drift-guard test that keeps the backend's valid view nodes in step with the frontend.",
            baseline: "CRAM became a single source of truth for business-impact context, readable by other editions through authenticated service calls, with the posture intake lock enforced in the backend and the app shell alike.",
        },
    },
    {
        slug: "white-label-replication",
        title: "The 'Trial by Fire' White-Label Replication",
        description: "Assumed extreme ownership of enterprise SaaS infrastructure during a critical resource transition, architecting pragmatic CI/CD pipelines to meet strict client go-live deadlines.",
        problem: "Critical replication project stalled after specialist transition; required immediate ownership to meet enterprise deadlines.",
        solution: "Assumed full-stack ownership of infrastructure orchestration, architecting pragmatic CI/CD pipelines to ensure system existence.",
        impact: "Secured major enterprise partnership under crisis conditions; demonstrated extreme ownership and strategic infrastructure rescue.",
        tags: ["Extreme Ownership", "Strategic Rescue", "Infrastructure", "DevOps", "White-Label"],
        category: "SaaS",
        featured: true,
        link: "/projects/white-label-replication",
        className: "md:col-span-1",
        clientType: "Strategic Enterprise Partner",
        role: "Lead Software Engineer | Infrastructure",
        period: "2025",
        technologies: ["GitLab CI", "Jenkins", "Docker", "SaaS White-Labeling"],
        sections: {
            mission: "A critical white-label replication project stalled after the lead DevOps engineer transitioned unexpectedly. With a major enterprise client deadline looming and progress at zero, I was tasked with orchestrating the entire infrastructure setup from scratch while maintaining my primary leadership responsibilities.",
            architecture: "Designed a 'Pragmatic Infrastructure' framework. The priority was system existence and deployment stability over aesthetic perfection. Utilized GitLab CI for core orchestration and Jenkins for environment synchronization across the partner's VPC.",
            execution: "Following the 'Trial by Fire' mandate that eventually led to my promotion to Director, I audited the existing technical debt and implemented a 'bare-bones' but rock-solid CI/CD pipeline. By focusing on essential environment parity and automated secret management, I successfully bypassed the initial bottleneck and established a functional deployment lifecycle in record time.",
            baseline: "Achieved 100% go-live success within the aggressive client window. The 'bare-bones' pipeline proved so stable it continues to power the partner's production environment, securing a key strategic partnership and demonstrating my ability to lead technical execution under extreme crisis conditions.",
        },
    },
    {
        slug: "enterprise-grc",
        title: "Enterprise GRC Core: Automated Regulatory Intelligence",
        description: "Engineered a high-performance GRC platform that automates the mapping of complex cybersecurity frameworks using advanced data engineering.",
        problem: "Automating the mapping of massive SCF (Secure Controls Framework) datasets.",
        solution: "Leveraged AI-driven data analysis and high-performance Pandas pipelines to reverse-engineer 8MB+ legacy datasets.",
        impact: "Automated 1000+ control mappings; replaced fragmented Excel workflows with a unified regulatory intelligence platform.",
        tags: ["Data Engineering", "Pandas", "Django", "Reverse-Engineering", "Celery"],
        category: "SaaS",
        featured: true,
        link: "/projects/enterprise-grc",
        className: "md:col-span-1",
        hasBlueprint: true,
        clientType: "FinTech / Cyber Security",
        role: "Lead Backend Architect",
        period: "2024 - 2025",
        technologies: ["Django REST", "SCF 2024.1.1", "Pandas", "RapidFuzz", "Celery"],
        sections: {
            mission: "The project began as a high-stakes 'Genesis' phase where the mission was to move from a .NET/HTML background to build a complex GRC system in a completely new stack (React/Django) in just weeks. The domain was entirely unknown, and the only requirements were locked within a massive, contextless, and unreferenced SCF Excel dataset that required manual decoding to even begin architectural planning.",
            architecture: "I spearheaded the V1 domain-driven rebuild after a failed initial prototype, moving from manual concepts to a functional scalable schema. This evolved into a 'Multi-Surface Architectural Strategy' centered around a custom Pandas-based ingestion engine capable of reverse-engineering 8MB+ legacy SCF datasets into a scalable and deterministic Universal Control Blueprint (UCB).",
            execution: "Developed a high-performance data pipeline utilizing Pandas for industrial-scale processing and advanced fuzzy matching for resilient control mapping. Implemented **Imperative APIViews** for complex 'manual' frontend interactions and **Declarative ViewSets** to optimize high-volume data orchestration, ensuring a seamless experience despite the underlying data complexity.",
            baseline: "Successfully transitioned the organization from fragmented Excel files to a unified regulatory intelligence platform. Reduced audit preparation time and enabled the team to ship production features autonomously using established architectural patterns.",
        },
        technicalDeepDive: {
            blueprint: {
                title: "Legacy Monolithic Orchestration (V1)",
                description: "Synchronous data pipeline optimized for rapid ingestion of unreferenced legacy datasets.",
                participants: ["UI Layer", "Ingestion Script", "Central Database"],
                flow: [
                    { from: "UI Layer", to: "Ingestion Script", action: "Trigger Import" },
                    { from: "Ingestion Script", to: "Central Database", action: "Pandas Bulk Upsert" },
                    { from: "Central Database", to: "UI Layer", action: "Return Full Dataset" },
                ],
            },
            signatureSnippet: {
                language: "python",
                code: `class IngestionEngine:\n    def process_csv(self, file_path):\n        df = pd.read_csv(file_path)\n        df['norm'] = df['raw'].apply(normalize)\n        return CorporateMetric.objects.bulk_create(df.to_dict('records'))`,
                annotation: "Focused on high-speed data normalization from unstructured sources via in-memory vectorized operations.",
            },
            reflections: {
                title: "V1 Technical Trade-offs",
                tradeOffs: [
                    { outcome: "Immediate Consistency", impact: "Zero lag but caused UI lockups during 8MB+ ingestion." },
                    { outcome: "Monolithic Coupling", impact: "Faster development but localized to single-module usage." },
                    { outcome: "Manual Partitioning", impact: "Used basic DB filtering instead of true multi-tenant routing." },
                ],
            },
        },
    },
    {
        slug: "sma-benchmarking",
        title: "Project SMA: Security Management Assessment",
        description: "Architected the Security Management Assessment (SMA) benchmarking tool, utilizing JSONField optimizations to map 35k+ industry data points; leveraged AI-augmented analysis to reverse-engineer and restructure unstructured legacy 'brain-dumps' into a clean, hierarchical API logic",
        problem: "Benchmarking engine required reverse-engineering unstructured legacy 'brain-dumps' into a high-performance logic.",
        solution: "Utilized JSONField optimizations and AI-augmented analysis to map 35k+ industry data points into a clean API logic.",
        impact: "Optimized contextual scoring into sub-millisecond lookups; automated strategic maturity roadmaps via real-time logic.",
        tags: ["Architecture", "Django 5", "JSONField", "Strategic Logic", "Pydantic"],
        category: "Backend",
        featured: true,
        link: "/projects/sma-benchmarking",
        className: "md:col-span-1",
        clientType: "FinTech / SaaS",
        role: "Lead Architect",
        period: "2025 - Present",
        technologies: ["Django 5", "Pandas", "ReportLab", "JSONField Optimization", "Pydantic"],
        sections: {
            mission: "Security assessments often lack industry-specific context, and the client's existing assets were unstructured 'brain dumps' of complex calculations. The mission was to reverse-engineer these legacy assets into a clean, hierarchical diagnostic platform.",
            architecture: "Engineered a high-performance benchmarking engine utilizing a hierarchical industry lookup system. Optimized 35,000+ benchmark rows into a lean 'JSONField Answer Key' system to avoid unmanageable database growth while enabling sub-millisecond lookups.",
            execution: "Spearheaded an 'AI-Augmented Discovery' phase to decipher and restructure a high-complexity 'brain dump' spreadsheet of unstructured legacy calculations. This enabled the design of a clean, hierarchical data model and a high-performance benchmarking engine. Utilizing JSONField optimizations, I ensured the system could scale to handle massive datasets without compromising on query performance or diagnostic accuracy.",
            baseline: "Successfully transitioned the assessment process from static, 'messed-up' spreadsheets to a dynamic, comparison-driven diagnostic tool. Organizations now receive strategic roadmaps based on real-world peer performance rather than generic checklists.",
        },
    },
    {
        slug: "secure-auth-gateway",
        title: "SOC2 Compliance & Zero-Trust Authentication",
        description: "Overhauled the authentication pipeline to meet strict SOC2 compliance requirements for a sensitive data firm.",
        problem: "Inconsistent deployment security across automated workflows.",
        solution: "Standardized reference pipelines into zero-trust templates with integrated secret management (Infisical).",
        impact: "Ensured 100% environment parity; reduced onboarding friction from weeks to days for technical teams.",
        tags: ["Orchestration", "GitLab CI", "Docker", "Security", "Team Enablement"],
        category: "Orchestration",
        featured: true,
        link: "/projects/secure-auth-gateway",
        className: "md:col-span-1",
        clientType: "FinTech Startup",
        role: "Lead Software Engineer | Security Focus",
        period: "2023 - 2024",
        technologies: ["Next.js", "Django REST", "Redis", "Zod", "GitLab CI"],
        sections: {
            mission: "The client was facing an impending SOC2 audit and needed a complete overhaul of their authentication and authorization workflows. Existing systems relied on predictable, auto-incrementing database IDs and weak session management, presenting a massive attack surface.",
            architecture: "Architected a 'Secure by Design' Zero-Trust framework. Migrated all public-facing identifiers to ULIDs to prevent enumeration attacks. Implemented rigorous session invalidation strategies and a centralized Governance, Risk, and Compliance (GRC) logging system.",
            execution: "On the frontend, implemented strict Zod schema validation to sanitize all user inputs before they ever hit the wire. On the backend, Django REST Framework was heavily customized to enforce granular, resource-level RBAC. Every 'write' operation automatically triggered an immutable audit log sent to a secure storage bucket.",
            baseline: "The client passed their SOC2 Type II audit with zero exceptions related to software architecture. The new auth gateway effectively mitigated 100% of automated credential stuffing attempts during the first quarter post-launch.",
        },
    },
    {
        slug: "exodus-migration",
        title: "Project Exodus: Zero-Downtime Legacy Migration",
        description: "Orchestrated the migration of a monolithic legacy system to a highly available, microservices-based API gateway.",
        problem: "Monolithic backend architecture struggled to handle peak load, causing data consistency issues and requiring scheduled downtime for deployments.",
        solution: "Designed a strangler fig pattern with an API Gateway routing between legacy systems and new FastAPI microservices.",
        impact: "Achieved 99.99% uptime post-migration; API response times reduced by 45% during peak load.",
        tags: ["Migration", "FastAPI", "Docker", "Microservices", "PostgreSQL"],
        category: "Infrastructure",
        featured: false,
        link: "/projects/exodus-migration",
        className: "md:col-span-1",
        clientType: "Enterprise SaaS",
        role: "Lead Systems Architect",
        period: "2024 - 2025",
        technologies: ["FastAPI", "PostgreSQL", "Docker", "AWS ECR", "Jenkins"],
        sections: {
            mission: "The organization was constrained by a monolithic backend architecture that struggled to handle peak load. Data consistency issues were frequent, and deployments required scheduled downtime, significantly impacting the client's ability to scale rapidly in a competitive market.",
            architecture: "Designed a strangler fig pattern to incrementally migrate high-risk modules. Implemented an API Gateway to route traffic intelligently between legacy systems and new FastAPI microservices. Enforced strict Role-Based Access Control (RBAC) at the gateway level.",
            execution: "Utilized Pydantic for rigid request validation, ensuring zero malformed payloads reached the database. Replaced synchronous email delivery with asynchronous Celery background workers, offloading UI-blocking tasks. Containerized the entire ecosystem via Docker for consistent staging-to-production deployments.",
            baseline: "Achieved 99.99% uptime post-migration. API response times plummeted by 45% during peak load. CI/CD pipeline optimization reduced deployment lead times from hours to under 15 minutes, enabling daily feature releases without service interruption.",
        },
    },
    {
        slug: "kakeibo-adventures",
        title: "Kakeibo Adventures: Gamified Mindful Budgeting",
        description: "A personal finance app that brings the Japanese kakeibo ledger online and adds RPG mechanics: overspending deals damage, a written reflection heals it, and reaching the monthly savings target unlocks a Bonus Wallet.",
        problem: "Budgeting apps compete on automation, which removes the slow, manual reflection that makes the paper kakeibo method work.",
        solution: "Built a deliberately manual ledger around the kakeibo questions, with an RPG layer (XP, levels, badges, streaks, quests) that rewards saving and makes every overspend felt.",
        impact: "Personal project shipped end to end: auth, onboarding, ledger engine, treasury vault, scheduled expenses and gamification, with idempotent writes and decimal-safe money handling.",
        tags: ["Personal Project", "Django REST", "Next.js 16", "Gamification", "Fintech"],
        category: "R&D",
        featured: true,
        link: "/projects/kakeibo-adventures",
        className: "md:col-span-1",
        hasBlueprint: true,
        clientType: "Personal Project",
        role: "Solo Developer (Product, Backend & Frontend)",
        period: "2026",
        technologies: ["Django 5", "Django REST Framework", "Djoser + SimpleJWT", "PostgreSQL", "Redis", "Next.js 16", "React 19", "Tailwind CSS 4", "decimal.js"],
        sections: {
            mission: "The paper kakeibo works because it is slow: you write every expense by hand, set a savings goal at the start of the period and reflect at the end. Most finance apps automate that away. The goal was a digital version that keeps the friction on purpose and gives people a reason to come back every day.",
            architecture: "A Django REST backend owns the money. Each period is a ledger built around the kakeibo questions (what do you have, what will you save, what did you spend, how will you improve), with transactions in four pillars (needs, wants, culture, unexpected), an audit trail of edits, a treasury vault and scheduled expenses. A separate gamification app holds levels, badges, streaks and a sanity fund. The Next.js frontend handles every amount as a string through decimal.js, so no value ever passes through a float.",
            execution: "Added an idempotency layer so a double-tapped submit never records an expense twice, throttled the JWT login endpoint, stored user time zones so streaks roll over at the right midnight, and built an onboarding stepper, batch transaction queuing, global error boundaries and consistent toast-based error handling. Finished with an end-to-end wire check of every feature to remove stub data and dead code.",
            baseline: "A working, mobile-first app in English and Tagalog where saving is the game: overspending deals damage, a written reflection is the only way to heal, and hitting the savings target unlocks guilt-free spending.",
        },
        technicalDeepDive: {
            blueprint: {
                title: "Idempotent Expense Entry",
                description: "Every write carries a client-generated key, so retries and double taps are safe.",
                participants: ["Client", "Idempotency Layer", "Ledger Engine", "Gamification"],
                flow: [
                    { from: "Client", to: "Idempotency Layer", action: "POST with Idempotency-Key" },
                    { from: "Idempotency Layer", to: "Ledger Engine", action: "Lock Key, Record Transaction" },
                    { from: "Ledger Engine", to: "Gamification", action: "Apply Damage or Reward" },
                    { from: "Idempotency Layer", to: "Client", action: "Store and Replay Response on Retry" },
                ],
            },
            signatureSnippet: {
                language: "python",
                code: `with transaction.atomic():\n    record, created = IdempotencyRecord.objects.select_for_update().get_or_create(\n        user=user, key=key, defaults={"path": path, "status": "processing"}\n    )\n    if not created:\n        if record.status == "processing":\n            return Response({"detail": "Already being processed."}, status=409)\n        if record.status == "completed":\n            # A retry gets the original answer, not a second expense.\n            return Response(record.response_body, status=record.response_code)`,
                annotation: "From the idempotency decorator: a row lock on the key makes concurrent retries wait, and a completed key replays the stored response.",
            },
            reflections: {
                title: "Design Trade-offs",
                tradeOffs: [
                    { outcome: "Friction by Design", impact: "Manual entry is slower, and that is the point of kakeibo." },
                    { outcome: "Money as Strings", impact: "decimal.js end to end removes floating-point rounding errors." },
                    { outcome: "Key Retention", impact: "Stored keys need a cleanup command to keep the table small." },
                ],
            },
        },
    },
    {
        slug: "bastion-grc",
        title: "Bastion: Multi-Tenant GRC Platform",
        description: "A personal rebuild of a compliance platform on Django and Next.js 16, with schema-per-tenant isolation selected from the user's token instead of the subdomain. Work in progress.",
        problem: "Subdomain-based tenant routing ties every customer to DNS and certificates, while a GRC tool still needs each customer's evidence strictly isolated.",
        solution: "Middleware selects the tenant's PostgreSQL schema from the bearer token's tenant claim; the Keycloak authentication layer then verifies the signature and checks that the verified tenant matches the selected schema.",
        impact: "Multi-tenant backend and tenant provisioning command built; framework dashboard, readiness assessment, evidence vault and integration screens prototyped.",
        tags: ["Personal Project", "django-tenants", "Keycloak", "Next.js 16", "GRC"],
        category: "R&D",
        featured: true,
        link: "/projects/bastion-grc",
        className: "md:col-span-1",
        hasBlueprint: true,
        clientType: "Personal Project",
        role: "Solo Developer",
        period: "2026 - Present",
        technologies: ["Django 5", "Django REST Framework", "django-tenants", "PyJWT", "Keycloak", "PostgreSQL", "Next.js 16", "React 19", "TanStack Query", "Tailwind CSS 4"],
        sections: {
            mission: "After years of building GRC software at work, Bastion is a clean-slate version built on my own time: what a compliance platform looks like when isolation, evidence and readiness are designed in from the first commit.",
            architecture: "Each customer gets its own PostgreSQL schema through django-tenants. Instead of resolving the tenant from the subdomain, a middleware reads the tenant claim from the bearer token and sets the search path. Keycloak-issued RS256 tokens are then fully verified by the API's authentication class, which rejects the request if the verified tenant does not match the schema the middleware chose.",
            execution: "Built the tenant middleware, the Keycloak JWT authentication and a provision_tenant management command on the backend. On the frontend, prototyped the framework dashboard with a searchable control table, an active-framework view with readiness assessment and a data-room generator, an evidence vault, control and requirement slide-outs with comments and assignees, SCF control mapping and an integrations settings modal.",
            baseline: "The isolation model is in place on the backend; the screens are prototyped on sample data and are being wired to the API one at a time.",
        },
        technicalDeepDive: {
            blueprint: {
                title: "Token-Based Tenant Resolution",
                description: "The schema is chosen from the token, then the token is verified before anything is written.",
                participants: ["Client", "Tenant Middleware", "Tenant Registry", "Keycloak Auth", "Tenant Schema"],
                flow: [
                    { from: "Client", to: "Tenant Middleware", action: "Request with Bearer JWT" },
                    { from: "Tenant Middleware", to: "Tenant Registry", action: "Look Up tenant_id Claim" },
                    { from: "Tenant Middleware", to: "Tenant Schema", action: "Set search_path" },
                    { from: "Keycloak Auth", to: "Tenant Schema", action: "Verify Signature, Cross-Check Tenant" },
                ],
            },
            signatureSnippet: {
                language: "python",
                code: `def __call__(self, request):\n    connection.set_schema_to_public()\n    if self._is_public_path(request.path):\n        return self.get_response(request)\n\n    # Peek only: the signature is verified later by KeycloakJWTAuthentication,\n    # which also rejects a token whose tenant does not match this schema.\n    tenant_id = self._extract_tenant_id_from_jwt(request)\n    if not tenant_id:\n        return self.get_response(request)\n\n    tenant = self._resolve_tenant(tenant_id)\n    if tenant is None:\n        return JsonResponse({"detail": "Tenant not found or inactive."}, status=404)\n    connection.set_tenant(tenant)\n    return self.get_response(request)`,
                annotation: "The middleware never trusts the claim on its own: a forged tenant can at worst reach an empty schema, and the authentication layer refuses it before any write.",
            },
            reflections: {
                title: "Isolation Trade-offs",
                tradeOffs: [
                    { outcome: "No Subdomain Coupling", impact: "Tenants need no DNS records or per-tenant certificates." },
                    { outcome: "Two-Step Trust", impact: "Unverified peek for routing, full verification before data access." },
                    { outcome: "Schema per Tenant", impact: "Strong isolation, at the cost of running migrations per schema." },
                ],
            },
        },
    },
];

export function getCaseStudyData(slug: string): CaseStudy | undefined {
    return caseStudies.find((study) => study.slug === slug);
}
