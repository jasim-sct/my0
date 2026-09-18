import type { Metadata } from "next";
import { SiteShell } from "@/components/site/SiteShell";
import { HtmlContent } from "@/components/site/HtmlContent";
import { html, title, description } from "@/content/pages/services/software-infrastructure";

export const metadata: Metadata = {
  title,
  description,
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