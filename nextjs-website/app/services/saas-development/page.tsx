import type { Metadata } from "next";
import { SiteShell } from "@/components/site/SiteShell";
import { HtmlContent } from "@/components/site/HtmlContent";
import { html } from "@/content/pages/saas-development";

export const metadata: Metadata = {
  title: "saas development | Axon Future",
  description: "Engineering services for saas development",
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
