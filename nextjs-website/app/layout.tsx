import type { Metadata } from "next";
import "../styles/globals.scss";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: {
    default: `${brand.shortName} | Software Technology & Product Engineering`,
    template: "%s",
  },
  description:
    "Axon Future builds scalable software products, SaaS platforms, enterprise systems, and digital solutions for modern businesses.",
  icons: {
    icon: "/assets/favicon.svg",
    apple: "/assets/favicon.svg",
  },
  metadataBase: new URL("https://www.axonfuture.com"),
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.axonfuture.com/#org",
  name: brand.legalName,
  alternateName: brand.shortName,
  url: "https://www.axonfuture.com/",
  logo: {
    "@type": "ImageObject",
    url: "https://www.axonfuture.com/assets/favicon.svg",
  },
  description:
    "Axon Future is a software technology company that designs and builds scalable digital products, SaaS platforms, enterprise systems, and modern web applications.",
  email: brand.email,
  sameAs: [
    "https://github.com/axonfuture",
    "https://linkedin.com/company/axonfuture",
  ],
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

