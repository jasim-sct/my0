/** Canonical brand identity for Axio Future */

export const brand = {
  legalName: "Axio Future",
  shortName: "Axio Future",
  tagline: "Software Technology & Product Engineering",
  email: "hello@axiofuture.com",
  url: "https://www.axiofuture.com",
} as const;

export const brandTitle = (page?: string) =>
  page ? `${page} | ${brand.shortName}` : `${brand.shortName} | Software Technology & Product Engineering`;
