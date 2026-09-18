"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { brand } from "@/lib/brand";

type Props = {
  slug: string;
  iframeSrc: string;
  isEmbedded?: boolean;
};

export function ProjectIframeViewer({ slug, iframeSrc, isEmbedded = false }: Props) {
  const [prevSrc, setPrevSrc] = useState(iframeSrc);
  const [checking, setChecking] = useState(true);
  const [frameReady, setFrameReady] = useState(false);

  if (prevSrc !== iframeSrc) {
    setPrevSrc(iframeSrc);
    setChecking(true);
    setFrameReady(false);
  }

  useEffect(() => {
    const t = window.setTimeout(() => setChecking(false), 400);
    return () => window.clearTimeout(t);
  }, [iframeSrc]);

  return (
    <div className={`project-frame ${isEmbedded ? "project-frame--embedded" : ""}`}>
      <header className="project-frame__bar">
        <Link className="project-frame__back" href="/projects">
          ← Selected Work
        </Link>
        <div className="project-frame__meta">
          <span className="project-frame__brand">{brand.shortName}</span>
          <span className="project-frame__sep" aria-hidden>
            /
          </span>
          <span className="project-frame__label">{slug}</span>
        </div>
        <span className="project-frame__badge">
          {checking || !frameReady ? "Checking…" : "EXPERIMENTAL BUILD"}
        </span>
        {isEmbedded && (
          <a
            href={iframeSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="project-frame__back"
            style={{ marginLeft: "0.5rem", fontSize: "0.78rem" }}
          >
            Open in new tab ↗
          </a>
        )}
      </header>

      <div className="project-frame__stage">
        <iframe
          className="project-frame__iframe"
          src={iframeSrc}
          title={`${slug} interactive demonstration`}
          referrerPolicy="same-origin"
          allow="fullscreen"
          onLoad={() => setFrameReady(true)}
        />
        {(checking || !frameReady) && (
          <div className="project-frame__checking" role="status">
            Preparing interactive build…
          </div>
        )}
      </div>
    </div>
  );
}
