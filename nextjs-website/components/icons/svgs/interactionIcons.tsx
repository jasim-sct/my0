/**
 * Axio Future — User Interaction & Navigation Icons
 * 36 precision-crafted SVGs for viewing, navigation, interaction, and control.
 */

import React from "react";

type SvgProps = React.SVGProps<SVGSVGElement> & { strokeWidth?: number };

export function ViewIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M2 12C2 12 5.5 6 12 6C18.5 6 22 12 22 12C22 12 18.5 18 12 18C5.5 18 2 12 2 12Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function PreviewIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="2" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="5" cy="6" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="8" cy="6" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="14" y1="20" x2="10" y2="20" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="18" x2="12" y2="20" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ExploreIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />
      <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" opacity="0.6" />
    </svg>
  );
}

export function DiscoverIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="11" y1="8" x2="11" y2="14" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="11" cy="7.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ReadIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M2 6C2 5 2.9 4 4 4L12 6L20 4C21.1 4 22 5 22 6V18C22 19 21.1 20 20 20L12 18L4 20C2.9 20 2 19 2 18V6Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="6" x2="12" y2="18" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function LearnIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M2 10L12 4L22 10L12 16L2 10Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M6 12.5V18C6 18 8 20 12 20C16 20 18 18 18 18V12.5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ExpandIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M15 3H21V9" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M9 21H3V15" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="21" y1="3" x2="14" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3" y1="21" x2="10" y2="14" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function CollapseIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M14 3H20V9" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M10 21H4V15" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="20" y1="3" x2="14" y2="9" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="4" y1="21" x2="10" y2="15" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function OpenIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3" y1="8" x2="21" y2="8" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="13" x2="12" y2="18" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M9 16L12 13L15 16" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function CloseIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function NavigateIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polygon points="12,3 21,20 12,17 3,20" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ArrowUpIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="12" y1="19" x2="12" y2="5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M5 12L12 5L19 12" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ArrowDownIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ArrowLeftIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="19" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 5L5 12L12 19" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ArrowRightIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ChevronUpIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ChevronDownIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ChevronLeftIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ChevronRightIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ScrollIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="9" y="2" width="6" height="18" rx="3" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="6" x2="12" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function MoreIcon({ strokeWidth: _strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="6" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="18" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MenuIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="3" y1="7" x2="21" y2="7" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3" y1="17" x2="21" y2="17" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function FilterIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="3" y1="7" x2="21" y2="7" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="6" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="9" y1="17" x2="15" y2="17" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function SortIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="3" y1="7" x2="21" y2="7" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M18 9L21 12L18 15" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function CopyIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M5 15H4C2.9 15 2 14.1 2 13V4C2 2.9 2.9 2 4 2H13C14.1 2 15 2.9 15 4V5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ExternalLinkIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M18 13V19C18 20.1 17.1 21 16 21H5C3.9 21 3 20.1 3 19V8C3 6.9 3.9 6 5 6H11" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M15 3H21V9" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ShareIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8.7" y1="10.7" x2="15.3" y2="6.3" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8.7" y1="13.3" x2="15.3" y2="17.7" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function DownloadIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="12" y1="3" x2="12" y2="15" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M3 17V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V17" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function OpenProjectIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="3" width="20" height="16" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="2" y1="7" x2="22" y2="7" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M9 13H13M11 11L13 13L11 15" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="5" y1="5" x2="5" y2="5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <line x1="8" y1="5" x2="8" y2="5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

export function ViewCaseStudyIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M14 2V8H20" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M8 13H14M11 10L14 13L11 16" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ViewArchitectureIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="10" width="5" height="4" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="10" y="5" width="5" height="4" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="10" y="15" width="5" height="4" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="17" y="10" width="5" height="4" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="12" x2="10" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="10" y1="9" x2="10" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="10" y1="15" x2="10" y2="14" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="15" y1="7.5" x2="17" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="15" y1="17" x2="17" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ViewDetailsIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="11" cy="11" r="5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="14.9" y1="14.9" x2="21" y2="21" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="9" y1="11" x2="13" y2="11" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="11" y1="9" x2="11" y2="13" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function CompareIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="4" width="8" height="16" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="14" y="4" width="8" height="16" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="11" y1="12" x2="13" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function TimelineIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="18" cy="12" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="6" y1="12" x2="6" y2="7" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="12" x2="12" y2="17" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="18" y1="12" x2="18" y2="7" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function PlayIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polygon points="5,3 19,12 5,21" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function PauseIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="6" y="4" width="4" height="16" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="14" y="4" width="4" height="16" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}
