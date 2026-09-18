/**
 * Axio Future — Business & Trust Icons
 * 19 purpose-built SVGs for strategy, reliability, trust, and business communication.
 */

import React from "react";

type SvgProps = React.SVGProps<SVGSVGElement> & { strokeWidth?: number };

export function BusinessIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 21H21" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="5" y="12" width="4" height="9" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="15" y="8" width="4" height="13" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="10" y="5" width="4" height="16" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function StrategyIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3L21 9L18 21H6L3 9L12 3Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray="2 1.5" />
      <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ConsultationIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21 15C21 16.1 20.1 17 19 17H7L3 21V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V15Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="8.5" cy="9" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="9" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="9" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PartnershipIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="7" cy="8" r="3" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="17" cy="8" r="3" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M4 21C4 18 5.3 16 7 16" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M20 21C20 18 18.7 16 17 16" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="7" y1="16" x2="17" y2="16" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M10 19L12 21L14 19" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function DeliveryIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 7H17L21 11V17H3V7Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="8" cy="19.5" r="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="16" cy="19.5" r="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="17" y1="7" x2="17" y2="17" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M7 12L9 14L13 10" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ReliabilityIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 2L3 6V11C3 16 6.5 20.7 12 22C17.5 20.7 21 16 21 11V6L12 2Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M8 12L10.5 14.5L16 9.5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function TrustIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M4 20C4 17.2 7.6 15 12 15C16.4 15 20 17.2 20 20" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 4L13.2 7H16.5L13.9 8.9L14.8 12L12 10.2L9.2 12L10.1 8.9L7.5 7H10.8L12 4Z" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function TransparencyIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M2 12C2 12 5.5 6 12 6C18.5 6 22 12 22 12" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3" y1="19" x2="21" y2="19" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray="2 1.5" />
    </svg>
  );
}

export function EnterpriseIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="10" width="18" height="12" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M7 10V7C7 4.8 9.2 3 12 3C14.8 3 17 4.8 17 7V10" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3" y1="15" x2="21" y2="15" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="10" y="16" width="4" height="6" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function StartupIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3C10 7 10 10 14 12" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 3C14 7 14 10 10 12" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 12L12 21" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M8 21L16 21" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="3" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M6 16L8 18" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M18 16L16 18" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function SmbIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 21H21" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M3 10L12 4L21 10" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="5" y="10" width="14" height="11" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="9" y="15" width="6" height="6" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function GrowthIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="3" y1="21" x2="21" y2="21" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3" y1="3" x2="3" y2="21" stroke="currentColor" strokeWidth={strokeWidth} />
      <polyline points="5,18 9,13 13,15 20,6" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M17 6H21V10" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function RoiIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M9 9L12 7L15 9" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function EfficiencyIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M13 3L4 14H12L11 21L20 10H12L13 3Z" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ProcessIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="10" y="5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="17" y="5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="7" y="14" width="5" height="5" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="14" y="14" width="5" height="5" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="7.5" x2="10" y2="7.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="15" y1="7.5" x2="17" y2="7.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="9.5" y1="10" x2="9.5" y2="14" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="16.5" y1="10" x2="16.5" y2="14" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function WorkflowIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="3" width="7" height="6" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="15" y="9" width="7" height="6" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="2" y="15" width="7" height="6" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M9 6H15V12H9" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M9 18H13V12" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function SupportIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3.5" y1="8.5" x2="8.5" y2="9.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="20.5" y1="8.5" x2="15.5" y2="9.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3.5" y1="15.5" x2="8.5" y2="14.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="20.5" y1="15.5" x2="15.5" y2="14.5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function MaintenanceIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function LongtermPartnershipIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="7" cy="8" r="3" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="17" cy="8" r="3" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M7 11V21" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray="2 1.5" />
      <path d="M17 11V21" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray="2 1.5" />
      <path d="M4 21H10M14 21H20" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="10" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="8" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
