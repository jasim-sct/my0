import type { Metadata } from "next";
import { SiteShell } from "@/components/site/SiteShell";
import { HtmlContent } from "@/components/site/HtmlContent";
import { html } from "@/content/pages/cloud-infrastructure";

export const metadata: Metadata = {
  title: "cloud infrastructure | Axon Future",
  description: "Engineering services for cloud infrastructure",
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        <HtmlContent html={html} />
      </main>
    </SiteShell>
  );
}
