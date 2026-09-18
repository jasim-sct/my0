import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";
import { ProjectIframeViewer } from "@/components/projects/ProjectIframeViewer";
import {
  isKnownProjectSlug,
  listProjectSlugs,
  projectIframeSrc,
} from "@/lib/projects";
import { getProjectStudy } from "@/content/project-studies";
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
  const study = getProjectStudy(slug);
  const name = study?.name || slug;
  const desc = study?.tagline || `Technical architecture and interactive build demonstration for ${name}.`;

  return {
    title: `${name} | Case Study & Interactive Build | ${brand.shortName}`,
    description: desc,
    alternates: {
      canonical: `https://www.axonfuture.com/projects/${slug}`,
    },
    openGraph: {
      title: `${name} | Axon Future`,
      description: desc,
      url: `https://www.axonfuture.com/projects/${slug}`,
      type: "website",
    },
  };
}

export default async function ProjectViewerPage({ params }: Props) {
  const { slug } = await params;
  if (!isKnownProjectSlug(slug)) notFound();

  const study = getProjectStudy(slug);
  const iframeSrc = projectIframeSrc(slug);

  return (
    <SiteShell showCta={true}>
      <main id="main">
        {/* Project Header */}
        <section className="phero">
          <div className="wrap">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link> / <Link href="/projects">Selected Work</Link> /{" "}
              <span aria-current="page">{study?.name || slug}</span>
            </nav>
            <div className="hero-grid">
              <div>
                <div className="eyebrow" data-anim>
                  {study?.category || "Interactive Demonstration"} · <span style={{ color: "var(--accent)" }}>EXPERIMENTAL BUILD</span>
                </div>
                <h1 className="kin-h">{study?.name || slug}</h1>
              </div>
              <div>
                <p className="lead" data-anim data-delay="120">
                  {study?.tagline || "Working software build engineered by Axon Future to verify architecture, performance, and interaction models."}
                </p>
                <div className="hero-cta" data-anim data-delay="180">
                  <a className="btn btn-primary" href="#interactive-demo">
                    <span>Test interactive build</span>
                    <span className="gt">&rsaquo;</span>
                  </a>
                  <Link className="btn" href={study?.relatedCapability.href || "/services"}>
                    <span>Related capability: {study?.relatedCapability.name || "Services"}</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            {study?.stats && (
              <div className="grid g4" style={{ marginTop: "2rem" }}>
                {study.stats.map((s, idx) => (
                  <div key={idx} className="glass card" style={{ padding: "1rem 1.2rem", textAlign: "center" }}>
                    <b style={{ fontSize: "1.4rem", display: "block", color: "var(--txt)" }}>{s.value}</b>
                    <small style={{ color: "var(--txt-dim)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</small>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Interactive Demonstration Stage */}
        <section id="interactive-demo" style={{ paddingTop: "0.5rem" }}>
          <div className="wrap">
            <div className="s-head" style={{ marginBottom: "0.5rem" }}>
              <div>
                <div className="eyebrow">Visual Proof</div>
                <h2 className="kin-h">Live Interactive Demonstration</h2>
              </div>
              <div>
                <p className="lead">
                  This is not a mockup or static screenshot. Interact directly with the application below to test navigation, data filtering, and responsive states.
                </p>
              </div>
            </div>

            <ProjectIframeViewer slug={slug} iframeSrc={iframeSrc} isEmbedded={true} />
          </div>
        </section>

        {/* Structured Case Study Depth */}
        {study && (
          <section className="band">
            <div className="wrap narrow">
              <div className="eyebrow" data-anim>Case Study Context</div>
              <h2 className="kin-h" data-anim style={{ marginBottom: "2rem" }}>Engineering Specifications &amp; Architecture</h2>

              <div className="prose" data-anim>
                {/* 1. Concept */}
                <h3>01 / Concept</h3>
                <p>{study.concept}</p>

                {/* 2. Problem */}
                <h3>02 / Problem</h3>
                <p>{study.problem}</p>

                {/* 3. System */}
                <h3>03 / System</h3>
                <p>{study.system}</p>

                {/* 4. Architecture */}
                <h3>04 / Architecture</h3>
                <p>{study.architecture}</p>

                {/* 5. Implementation */}
                <h3>05 / Implementation</h3>
                <p>{study.implementation}</p>

                {/* 6. Outcome / Current Status */}
                <h3>06 / Current Status</h3>
                <p>
                  <strong>{study.statusLabel}:</strong> {study.currentStatus}
                </p>
              </div>

              {/* Technologies Used */}
              <div className="box" style={{ marginTop: "2.5rem" }} data-anim>
                <div className="eyebrow">Technology Stack</div>
                <h3 style={{ margin: "0.5rem 0 1rem" }}>Core Technologies &amp; Standards</h3>
                <div className="mk-row" style={{ marginTop: "0.5rem" }}>
                  {study.technology.map((tech, i) => (
                    <span key={i} className="mk-chip">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Contextual Next Step */}
              <div className="glass card" style={{ marginTop: "2rem", padding: "2rem" }} data-anim>
                <div className="eyebrow">Next Step</div>
                <h3 style={{ margin: "0.5rem 0 0.75rem" }}>Need a system engineered around your business?</h3>
                <p style={{ color: "var(--txt-dim)", marginBottom: "1.2rem" }}>
                  We engineer production-grade systems tailored to your specific workflows, APIs, and data models.
                </p>
                <div className="hero-cta">
                  <Link className="btn btn-primary" href="/contact">
                    <span>{study.ctaText}</span>
                    <span className="gt">&rsaquo;</span>
                  </Link>
                  <Link className="btn" href={study.relatedCapability.href}>
                    <span>Explore {study.relatedCapability.name} →</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </SiteShell>
  );
}
