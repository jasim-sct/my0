import type { Metadata } from "next";
import { SiteShell } from "@/components/site/SiteShell";
import { HtmlContent } from "@/components/site/HtmlContent";
import { html } from "@/content/pages/enterprise-software";

export const metadata: Metadata = {
  title: "enterprise software | Axon Future",
  description: "Engineering services for enterprise software",
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
