import type { ReactNode } from "react";
import { IcoAndroid, IcoApple, IcoChip, IcoDevice, IcoLinux, IcoWindows } from "./components/Icons";

/* --------------------------------------------------------------------- nav */

export const NAV_ITEMS = [
  { id: "apps", label: "Apps" },
  { id: "platforms", label: "Platforms" },
  { id: "studio", label: "Studio" },
  { id: "inside", label: "Inside" },
];

/* -------------------------------------------------------------------- apps */

export type AppLink = { id: string; name: string; url: string; tagline: string };

export const APPS: AppLink[] = [
  { id: "memechat", name: "MemeChat AI", url: "https://memechat.dream-team.works", tagline: "Meme intelligence for Android" },
  { id: "zeta", name: "Zeta AI Assistant", url: "https://zeta.dream-team.works", tagline: "Your offline companion" },
  { id: "cobatik", name: "CoBatik", url: "https://cobatik.dream-team.works", tagline: "Batik virtual try-on" },
];

/* ----------------------------------------------------------------- avatars */

export type Avatar = { src: string; alt: string };

export const HERO_AVATARS: Avatar[] = [
  { src: "assets/img/memechat-mascot.png", alt: "MemeChat AI mascot" },
  { src: "assets/img/app-zeta-portrait.jpg", alt: "Zeta AI avatar" },
  { src: "assets/img/batik-women.jpg", alt: "Batik artisan" },
  { src: "assets/img/portrait-3.jpg", alt: "" },
];

/* --------------------------------------------------------------- platforms */

export type PlatformItem = { id: string; label: string; icon: ReactNode };

export const PLATFORMS: PlatformItem[] = [
  { id: "android", label: "Android", icon: <IcoAndroid size={16} /> },
  { id: "ios", label: "iOS", icon: <IcoDevice size={16} /> },
  { id: "macos", label: "macOS", icon: <IcoApple size={16} /> },
  { id: "windows", label: "Windows", icon: <IcoWindows size={16} /> },
  { id: "linux", label: "Linux", icon: <IcoLinux size={16} /> },
  { id: "on-device", label: "On-device", icon: <IcoChip size={16} /> },
];

/* ------------------------------------------------------------------ studio */

export type Principle = { n: string; meta: string; title: string; text: string };

export const PRINCIPLES: Principle[] = [
  { n: "01", meta: "On-device", title: "On-device by default", text: "Every app ships with a model on the device, not an API key in the cloud." },
  { n: "02", meta: "Offline-first", title: "Local-friendly", text: "Software that respects where you are: cheap data, weak signal, mid-range hardware, older Android." },
  { n: "03", meta: "Android & iOS", title: "Built for real phones", text: "Small binaries, fast cold starts, honest battery use — tuned for mid-range hardware." },
  { n: "04", meta: "One job each", title: "Craft over templates", text: "No store template, no stock flow. Each app is designed around one job and shipped when it does it well." },
];

/* ------------------------------------------------------------------ inside */

export type AppQuote = {
  id: string; avatar: string; name: string; handle: string; text: string; meta: string; url: string;
};

export const QUOTES: AppQuote[] = [
  {
    id: "q-memechat", avatar: "assets/img/memechat-mascot.png", name: "MemeChat AI", handle: "@memechat",
    text: "Point the camera at any meme and get the joke, the context and the right reply — analysed on-device in seconds.",
    meta: "Meme Vision · on device", url: "https://memechat.dream-team.works",
  },
  {
    id: "q-zeta", avatar: "assets/img/app-zeta-portrait.jpg", name: "Zeta AI Assistant", handle: "@zeta",
    text: "One companion across macOS, Windows, Linux, iOS and Android, with the same personality on each.",
    meta: "Every platform", url: "https://zeta.dream-team.works",
  },
];
