import { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyData } from "@/data/case-studies";
import { CaseStudyHeader } from "@/components/work/CaseStudyHeader";
import { CaseStudyContent } from "@/components/work/CaseStudyContent";
import { TechnicalDeepDive } from "@/components/work/TechnicalDeepDive";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const study = getCaseStudyData(slug);
    if (!study) return { title: "Not Found" };

    return {
        title: `${study.title} | Case Study | Zandro`,
        description: study.description,
    };
}

export function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

export default async function CaseStudyPage({ params }: Props) {
    const { slug } = await params;
    const study = getCaseStudyData(slug);

    if (!study) {
        notFound();
    }

    return (
        <div className="w-full h-full space-y-6 animate-fade-in-up pb-8">
            <CaseStudyHeader study={study} backHref="/projects" backLabel="Back to Projects" />
            <CaseStudyContent study={study} />
            {study.technicalDeepDive && <TechnicalDeepDive data={study.technicalDeepDive} />}
        </div>
    );
}
