/**
 * Axio Future — Icon System Public API
 * Import from here — not from individual SVG files.
 *
 * Usage:
 *   import { AxioIcon } from "@/components/icons";
 *   <AxioIcon name="search" size={20} />
 */

export { AxioIcon } from "./AxioIcon";
export type { AxioIconProps, AxioIconName } from "./types";

// Individual category exports (for tree-shaking in heavy pages)
export * from "./svgs/brandIcons";
export * from "./svgs/techIcons";
export * from "./svgs/seoIcons";
export * from "./svgs/contentIcons";
export * from "./svgs/interactionIcons";
export * from "./svgs/businessIcons";
export * from "./svgs/caseStudyIcons";
