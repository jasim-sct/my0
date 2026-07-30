/** Canonical brand identity for Screen Arts */

export const brand = {
  legalName: "Screen Arts Innovations Private Limited",
  shortName: "Screen Arts",
  founder: {
    name: "Muhammed Jasim M C",
    title: "Founder & Managing Director",
  },
  email: "hello@screenarts.com",
  phoneDisplay: "+92 300 0000000",
  whatsapp: "923000000000",
  locationLine: "India",
} as const;

export const brandTitle = (page?: string) =>
  page ? `${page} | ${brand.shortName}` : `${brand.shortName} | Web, Brand, Marketing, AI & Automation`;
