import { ImageResponse } from "next/og";
import { caseStudies, getCaseStudyData } from "@/data/case-studies";
import { OG_SIZE, OgCard, truncate } from "@/lib/og-card";

export const alt = "Case study by Zandro E. Narvaza";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudyData(slug);

  return new ImageResponse(
    (
      <OgCard
        eyebrow={study?.clientType === "Personal Project" ? "Personal Project" : `Case Study · ${study?.category ?? "Project"}`}
        title={study?.title ?? "Case Study"}
        subtitle={truncate(study?.problem ?? study?.description ?? "", 150)}
        footer={`Zandro E. Narvaza · ${study?.role ?? ""}`}
      />
    ),
    size
  );
}
