import type { Metadata } from "next";
import "../styles/globals.scss";
import { brand } from "@/lib/brand";
import { Inter, Inter_Tight, Instrument_Serif } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
  variable: "--font-inter-tight",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: {
    default: `${brand.shortName} | Software Technology & Product Engineering`,
    template: "%s",
  },
  description:
    "Axio Future builds scalable software products, SaaS platforms, enterprise systems, and digital solutions for modern businesses.",
  icons: {
    icon: "/assets/favicon.svg",
    apple: "/assets/favicon.svg",
  },
  metadataBase: new URL("https://www.axiofuture.com"),
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.axiofuture.com/#org",
      name: brand.legalName,
      alternateName: brand.shortName,
      url: "https://www.axiofuture.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.axiofuture.com/assets/favicon.svg",
      },
      description:
        "Axio Future is a software technology company building modern websites, digital products, business systems, platforms, and scalable software infrastructure.",
      email: brand.email,
      sameAs: [
        "https://github.com/axiofuture",
        "https://linkedin.com/company/axiofuture",
      ],
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "AdministrativeArea",
          name: "Worldwide",
        },
      ],
      knowsAbout: [
        "Software Engineering",
        "System Architecture",
        "Website Development",
        "Digital Products",
        "Custom Business Systems",
        "Web Application Development",
        "Software Platforms",
        "Software Infrastructure",
        "API Design",
        "Performance Optimization",
        "TypeScript",
        "React",
        "Next.js",
        "PostgreSQL",
        "Node.js",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.axiofuture.com/#website",
      url: "https://www.axiofuture.com/",
      name: "Axio Future",
      publisher: {
        "@id": "https://www.axiofuture.com/#org",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${instrumentSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

