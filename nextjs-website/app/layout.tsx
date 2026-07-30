import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Freelancing Agency | Web, Brand, Marketing, AI & Automation Agency",
  description: "Websites, e-commerce, brand, SEO, paid ads, content, AI automation and Amazon — 24 services across 8 markets, all priced publicly. Free audit in 24 hours.",
  icons: {
    icon: "/assets/favicon.svg",
    apple: "/assets/favicon.svg",
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
      </head>
      <body>{children}</body>
    </html>
  );
}

