import { ImageResponse } from "next/og";
import { cvData } from "@/data/cv-data";
import { OG_SIZE, OgCard } from "@/lib/og-card";

export const alt = "Zandro E. Narvaza, Director of Cyber R&D and Systems Architect";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Director of Cyber R&D · Systems Architect"
        title={cvData.personal.name}
        subtitle="Secure, multi-tenant cyber security platforms built with Django, FastAPI, Next.js and Kubernetes."
        footer={cvData.personal.location}
      />
    ),
    size
  );
}
