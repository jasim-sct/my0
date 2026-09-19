import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: brand.legalName,
    short_name: brand.shortName,
    description:
      "Axio Future builds scalable software products, SaaS platforms, enterprise systems, and digital solutions for modern businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0c0d",
    theme_color: "#0c0c0d",
    icons: [
      {
        src: "/assets/brand/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/assets/brand/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/assets/brand/axio-symbol.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
