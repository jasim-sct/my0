import type { Metadata } from "next";
import { SiteShell } from "@/components/site/SiteShell";
import { HtmlContent } from "@/components/site/HtmlContent";
import { html } from "@/content/pages/product-engineering";

export const metadata: Metadata = {
  title: "product engineering | Axon Future",
  description: "Engineering services for product engineering",
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
