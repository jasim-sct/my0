import type { Metadata } from "next";
import { SiteShell } from "@/components/site/SiteShell";
import { HtmlContent } from "@/components/site/HtmlContent";
import { title, description, mainHtml, showCta } from "@/content/pages/industries__saas-startups";

export const metadata: Metadata = {
  title,
  description,
};

export default function Page() {
  return (
    <SiteShell showCta={showCta}>
      <main id="main">
        <HtmlContent html={mainHtml} />
      </main>
    </SiteShell>
  );
}
