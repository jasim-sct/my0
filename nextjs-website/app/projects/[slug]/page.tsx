import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectIframeViewer } from "@/components/projects/ProjectIframeViewer";
import {
  isKnownProjectSlug,
  listProjectSlugs,
  projectIframeSrc,
} from "@/lib/projects";
import { brand } from "@/lib/brand";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return listProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug} | ${brand.shortName}`,
    robots: { index: false, follow: false },
  };
}

export default async function ProjectViewerPage({ params }: Props) {
  const { slug } = await params;
  if (!isKnownProjectSlug(slug)) notFound();

  return (
    <ProjectIframeViewer slug={slug} iframeSrc={projectIframeSrc(slug)} />
  );
}
