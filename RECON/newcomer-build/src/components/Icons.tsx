import type { ReactNode } from "react";

export type IconProps = { size?: number; stroke?: number };

export const Svg = ({ size = 20, stroke = 1.7, children }: IconProps & { children: ReactNode }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);

export const IcoArrowR = (p: IconProps) => (<Svg {...p}><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></Svg>);
export const IcoMenu = (p: IconProps) => (<Svg {...p}><path d="M4 8h16" /><path d="M4 16h16" /></Svg>);
export const IcoClose = (p: IconProps) => (<Svg {...p}><path d="M6 6l12 12" /><path d="M18 6L6 18" /></Svg>);
export const IcoCheck = (p: IconProps) => (<Svg {...p}><path d="M4 12.5l5 5L20 6.5" /></Svg>);

/* platform glyphs */
export const IcoAndroid = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5.5 15.5a6.5 6.5 0 0113 0z" />
    <path d="M8.2 9.9L6.9 7.8" /><path d="M15.8 9.9l1.3-2.1" />
    <circle cx="9.6" cy="13.2" r=".9" fill="currentColor" stroke="none" />
    <circle cx="14.4" cy="13.2" r=".9" fill="currentColor" stroke="none" />
  </Svg>
);
export const IcoApple = (p: IconProps) => (
  <Svg {...p}>
    <path fill="currentColor" stroke="none" d="M15.4 12.1c0-2 1.6-2.9 1.7-3-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.7-.7-1.4 0-2.7.8-3.4 2-1.4 2.5-.4 6.2 1 8.2.7 1 1.5 2.1 2.6 2.1 1 0 1.4-.7 2.7-.7s1.6.7 2.7.7c1.1 0 1.8-1 2.5-2 .8-1.1 1.1-2.3 1.1-2.3s-2.2-.9-2.3-3.4z" />
    <path fill="currentColor" stroke="none" d="M13.6 6.3c.5-.7.9-1.6.8-2.6-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.5 1 .1 2-.5 2.6-1.2z" />
  </Svg>
);
export const IcoWindows = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4" y="5" width="7" height="6.4" rx="1" />
    <rect x="13" y="5" width="7" height="6.4" rx="1" />
    <rect x="4" y="12.6" width="7" height="6.4" rx="1" />
    <rect x="13" y="12.6" width="7" height="6.4" rx="1" />
  </Svg>
);
export const IcoLinux = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="5" width="17" height="14" rx="3" />
    <path d="M7.5 10l3 2.5-3 2.5" />
    <path d="M13 15h3.5" />
  </Svg>
);
export const IcoChip = (p: IconProps) => (
  <Svg {...p}>
    <rect x="7" y="7" width="10" height="10" rx="2.5" />
    <path d="M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3" />
  </Svg>
);
export const IcoDevice = (p: IconProps) => (
  <Svg {...p}>
    <rect x="7" y="3" width="10" height="18" rx="3" />
    <path d="M11 17.5h2" />
  </Svg>
);
