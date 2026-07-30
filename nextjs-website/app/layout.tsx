import type { Metadata } from "next";
import "../styles/globals.scss";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: {
    default: `${brand.shortName} | Web, Brand, Marketing, AI & Automation Agency`,
    template: "%s",
  },
  description:
    "Websites, e-commerce, brand, SEO, paid ads, content, AI automation and Amazon — 24 services across 8 markets, all priced publicly. Free audit in 24 hours.",
  icons: {
    icon: "/assets/favicon.svg",
    apple: "/assets/favicon.svg",
  },
  metadataBase: new URL("https://www.screenarts.com"),
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.screenarts.com/#org",
  name: brand.legalName,
  alternateName: brand.shortName,
  url: "https://www.screenarts.com/",
  logo: {
    "@type": "ImageObject",
    url: "https://www.screenarts.com/assets/favicon.svg",
  },
  description:
    "Full-service digital agency delivering web, brand, marketing, content, operations, AI and emerging-tech services to clients worldwide.",
  email: brand.email,
  telephone: brand.phoneDisplay,
  foundingDate: "2019",
  priceRange: "$$",
  founder: {
    "@type": "Person",
    name: brand.founder.name,
    jobTitle: brand.founder.title,
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Inter+Tight:wght@500;600&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
