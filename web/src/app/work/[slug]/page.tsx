import { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyData } from "@/data/case-studies";
import { CaseStudyHeader } from "@/components/work/CaseStudyHeader";
import { CaseStudyContent } from "@/components/work/CaseStudyContent";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { NeuralNetwork } from "@/components/visuals/NeuralNetwork";

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
        <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
            <ScrollProgress />
            <NeuralNetwork />
            <div className="fixed inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-[0.05] pointer-events-none z-0" />

            <main className="relative z-10">
                <CaseStudyHeader study={study} />
                <CaseStudyContent study={study} />
            </main>
        </div>
    );
}
