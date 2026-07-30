"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { brand } from "@/lib/brand";

type Props = {
  slug: string;
  iframeSrc: string;
};

export function ProjectIframeViewer({ slug, iframeSrc }: Props) {
  const [checking, setChecking] = useState(true);
  const [frameReady, setFrameReady] = useState(false);

  useEffect(() => {
    setChecking(true);
    setFrameReady(false);
    const t = window.setTimeout(() => setChecking(false), 400);
    return () => window.clearTimeout(t);
  }, [iframeSrc]);

  return (
    <div className="project-frame">
      <header className="project-frame__bar">
        <Link className="project-frame__back" href="/portfolio">
          ← Portfolio
        </Link>
        <div className="project-frame__meta">
          <span className="project-frame__brand">{brand.shortName}</span>
          <span className="project-frame__sep" aria-hidden>
            /
          </span>
          <span className="project-frame__label">{slug}</span>
        </div>
        <span className="project-frame__badge">
          {checking || !frameReady ? "Checking…" : "Live preview"}
        </span>
      </header>

      <div className="project-frame__stage">
        <iframe
          className="project-frame__iframe"
          src={iframeSrc}
          title={`${slug} preview`}
          referrerPolicy="same-origin"
          allow="fullscreen"
          onLoad={() => setFrameReady(true)}
        />
        {(checking || !frameReady) && (
          <div className="project-frame__checking" role="status">
            Preparing secure preview…
          </div>
        )}
      </div>
    </div>
  );
}
