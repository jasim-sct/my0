import type { Metadata } from "next";
import { SiteShell } from "@/components/site/SiteShell";
import { HtmlContent } from "@/components/site/HtmlContent";
import { title, description, mainHtml, showCta } from "@/content/pages/engineering";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.axonfuture.com/engineering",
  },
  openGraph: {
    title,
    description,
    url: "https://www.axonfuture.com/engineering",
    type: "website",
  },
};

export default function EngineeringPage() {
  return (
    <SiteShell showCta={showCta}>
      <main id="main">
        <HtmlContent html={mainHtml} />
      </main>
    </SiteShell>
  );
}
