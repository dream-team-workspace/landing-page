import type { ReactNode } from "react";

export type IconProps = { size?: number; stroke?: number };

export const Svg = ({ size = 20, stroke = 1.7, children }: IconProps & { children: ReactNode }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);

export const IcoSpark = (p: IconProps) => (<Svg {...p}><path d="M12 3l1.9 4.7L18.6 9.6l-4.7 1.9L12 16.2l-1.9-4.7L5.4 9.6l4.7-1.9z" /><path d="M18.5 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" /></Svg>);
export const IcoArrowR = (p: IconProps) => (<Svg {...p}><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></Svg>);
export const IcoArrowL = (p: IconProps) => (<Svg {...p}><path d="M19 12H5" /><path d="M11 18l-6-6 6-6" /></Svg>);
export const IcoCheck = (p: IconProps) => (<Svg {...p}><path d="M4 12.5l5 5L20 6.5" /></Svg>);
export const IcoPlus = (p: IconProps) => (<Svg {...p}><path d="M12 5v14" /><path d="M5 12h14" /></Svg>);
export const IcoMenu = (p: IconProps) => (<Svg {...p}><path d="M4 8h16" /><path d="M4 16h16" /></Svg>);
export const IcoClose = (p: IconProps) => (<Svg {...p}><path d="M6 6l12 12" /><path d="M18 6L6 18" /></Svg>);
export const IcoChip = (p: IconProps) => (<Svg {...p}><rect x="7" y="7" width="10" height="10" rx="2.5" /><path d="M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3" /></Svg>);
export const IcoEye = (p: IconProps) => (<Svg {...p}><path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="3" /></Svg>);
export const IcoBrain = (p: IconProps) => (<Svg {...p}><path d="M12 5.5a3 3 0 00-5.7 1.3A2.8 2.8 0 005 9.6c0 1 .5 1.9 1.3 2.4A2.9 2.9 0 007.5 17c.6.6 1.4.9 2.3.9H12z" /><path d="M12 5.5a3 3 0 015.7 1.3A2.8 2.8 0 0119 9.6c0 1-.5 1.9-1.3 2.4A2.9 2.9 0 0116.5 17c-.6.6-1.4.9-2.3.9H12z" /><path d="M12 5.5v12.4" /></Svg>);
export const IcoShield = (p: IconProps) => (<Svg {...p}><path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6z" /><path d="M9.2 12.2l2 2 3.6-3.9" /></Svg>);
export const IcoKey = (p: IconProps) => (<Svg {...p}><circle cx="8" cy="15" r="3.4" /><path d="M10.5 12.5L20 3" /><path d="M17 6l2 2" /><path d="M14.5 8.5l2 2" /></Svg>);
export const IcoLock = (p: IconProps) => (<Svg {...p}><rect x="4.5" y="10.5" width="15" height="10" rx="3" /><path d="M8 10.5V8a4 4 0 018 0v2.5" /></Svg>);
export const IcoCloudOff = (p: IconProps) => (<Svg {...p}><path d="M7.5 18.5h9.2a3.3 3.3 0 001-6.5 4.6 4.6 0 00-1.2-3.1" /><path d="M10.4 6.2A4.5 4.5 0 0116 9.1" /><path d="M4 5.5l15 14" /><path d="M6.4 10.3A3.6 3.6 0 006.2 18.5h1.3" /></Svg>);
export const IcoWallet = (p: IconProps) => (<Svg {...p}><rect x="3.5" y="6.5" width="17" height="11" rx="3" /><path d="M3.5 10.5h17" /><circle cx="16.5" cy="14" r="1.1" fill="currentColor" stroke="none" /></Svg>);
export const IcoChat = (p: IconProps) => (<Svg {...p}><path d="M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v7A2.5 2.5 0 0117.5 16H9l-5 4z" /></Svg>);
export const IcoDevice = (p: IconProps) => (<Svg {...p}><rect x="7" y="3" width="10" height="18" rx="3" /><path d="M11 17.5h2" /></Svg>);
export const IcoRoute = (p: IconProps) => (<Svg {...p}><circle cx="6" cy="6.5" r="2.5" /><circle cx="18" cy="17.5" r="2.5" /><path d="M8.5 6.5H14a3.5 3.5 0 010 7h-4a3.5 3.5 0 000 7h.5" /></Svg>);
export const IcoHand = (p: IconProps) => (<Svg {...p}><path d="M8 11V5.5a1.6 1.6 0 013.2 0V11" /><path d="M11.2 10.5V4.8a1.6 1.6 0 013.2 0v5.7" /><path d="M14.4 11V6.6a1.6 1.6 0 013.2 0V14a7 7 0 01-7 7h-.6a6 6 0 01-5-2.7L4 15.6a1.7 1.7 0 012.6-2.1L8 15" /></Svg>);
export const IcoCompass = (p: IconProps) => (<Svg {...p}><circle cx="12" cy="12" r="8.5" /><path d="M14.8 9.2l-1.5 4-4 1.6 1.5-4z" /></Svg>);
export const IcoGrid = (p: IconProps) => (<Svg {...p}><rect x="4" y="4" width="7" height="7" rx="2" /><rect x="13" y="4" width="7" height="7" rx="2" /><rect x="4" y="13" width="7" height="7" rx="2" /><rect x="13" y="13" width="7" height="7" rx="2" /></Svg>);
export const IcoGlobe = (p: IconProps) => (<Svg {...p}><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17" /><path d="M12 3.5c2.4 2.4 3.6 5.3 3.6 8.5S14.4 18.1 12 20.5C9.6 18.1 8.4 15.2 8.4 12S9.6 5.9 12 3.5z" /></Svg>);
export const IcoLayers = (p: IconProps) => (<Svg {...p}><path d="M12 3.5l8 4.2-8 4.2-8-4.2z" /><path d="M4 12.2l8 4.2 8-4.2" /><path d="M4 16.4l8 4.2 8-4.2" /></Svg>);
