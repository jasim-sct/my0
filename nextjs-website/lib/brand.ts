/** Canonical brand identity for Axon Future */

export const brand = {
  legalName: "Axon Future",
  shortName: "Axon Future",
  tagline: "Software Technology & Product Engineering",
  email: "hello@axonfuture.com",
  url: "https://www.axonfuture.com",
} as const;

export const brandTitle = (page?: string) =>
  page ? `${page} | ${brand.shortName}` : `${brand.shortName} | Software Technology & Product Engineering`;
