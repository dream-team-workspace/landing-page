import type { ReactNode } from "react";
import {
  IcoBrain, IcoChip, IcoCloudOff, IcoCompass, IcoDevice, IcoEye, IcoGlobe, IcoGrid,
  IcoHand, IcoKey, IcoLayers, IcoLock, IcoRoute,
} from "./components/Icons";

/* --------------------------------------------------------------------- apps */

export type AppCard = {
  id: string; name: string; url: string; icon: string; tagline: string; price: string;
  spec: string[]; features: string[]; featured?: boolean; cta: string;
};

export const APPS: AppCard[] = [
  {
    id: "memechat", name: "MemeChat AI", url: "https://memechat.dream-team.works",
    icon: "assets/img/app-memechat-home.webp", tagline: "Meme intelligence for Android",
    price: "Free", spec: ["Android 8+", "504 MB", "No account"],
    features: ["Meme Vision on-device", "Private memory of your bits", "Works in airplane mode", "Retrieval with real sources"],
    cta: "Get MemeChat"
  },
  {
    id: "zeta", name: "Zeta AI Assistant", url: "https://zeta.dream-team.works",
    icon: "assets/img/app-zeta-portrait.jpg", tagline: "Your offline companion", featured: true,
    price: "Free", spec: ["macOS", "Windows", "Linux", "iOS", "Android"],
    features: ["Local chat and voice", "Interactive avatar", "Private by default", "No account, no sync"],
    cta: "Get ZetaAI"
  },
  {
    id: "cobatik", name: "CoBatik", url: "https://cobatik.dream-team.works",
    icon: "assets/img/app-cobatik.webp", tagline: "Batik virtual try-on",
    price: "Free", spec: ["Android 7.0+", "Bahasa & English", "No account"],
    features: ["Archive of hand-drawn batik", "Four garment styles", "Guided four-step flow", "Stories behind each motif"],
    cta: "Get CoBatik"
  }
];

/* -------------------------------------------------------------------- cases */

export type CaseItem = {
  id: string; brand: string; title: string; body: string; art: string; alt: string;
  metrics: [string, string][];
};

export const CASES: CaseItem[] = [
  {
    id: "case-memechat", brand: "MemeChat AI", title: "Meme Smarter, Not Harder",
    body: "An offline-first AI chat that actually knows memes. Vision, memory and retrieval ship inside a 504 MB model running entirely on the phone — ask, roast, caption and translate without a single upload.",
    art: "assets/img/case-memechat.jpg",
    alt: "Abstract white floral burst on black, the MemeChat case study artwork",
    metrics: [["504 MB", "Model on device"], ["0", "Uploads, ever"], ["100%", "On-device inference"]]
  },
  {
    id: "case-zeta", brand: "Zeta AI Assistant", title: "Offline AI Companion",
    body: "Chat, voice and an interactive avatar that run entirely on your own machine. ZetaAI keeps its personality between sessions, needs no account, and keeps working when the network does not.",
    art: "assets/img/case-zeta.jpg",
    alt: "Liquid metal cross form on black, the Zeta AI Assistant case study artwork",
    metrics: [["5", "Platforms shipped"], ["0", "Accounts, no telemetry"], ["3", "Steps to set up"]]
  },
  {
    id: "case-cobatik", brand: "CoBatik", title: "Kenakan arsipnya",
    body: "A batik virtual try-on studio for Android. Browse a real archive of hand-drawn cloth from Cirebon, Yogyakarta, Pekalongan and Lasem, then see the motif drawn onto your own portrait.",
    art: "assets/img/case-cobatik.jpg",
    alt: "Polished black droplet on a dark surface, the CoBatik case study artwork",
    metrics: [["6+", "Catalogued motifs"], ["4", "Cities in the archive"], ["4", "Steps, one portrait"]]
  }
];

/* ------------------------------------------------------- inside-the-apps copy */

export type Quote = { id: string; tag: string; brand: string; text: string };

export const QUOTES: Quote[] = [
  { id: "q-vision", tag: "Meme Vision", brand: "MemeChat AI", text: "Point the camera at any meme and get the joke, the context and the right reply — analysed on-device in seconds." },
  { id: "q-memory", tag: "It Remembers", brand: "MemeChat AI", text: "Running jokes, names, bits. MemeChat keeps a private memory of your conversation so you never repeat yourself twice." },
  { id: "q-offline", tag: "Truly Offline", brand: "MemeChat AI", text: "No signal, no problem. Chat, roast, translate and caption even in airplane mode. Nothing is ever uploaded." },
  { id: "q-sources", tag: "Answers With Receipts", brand: "MemeChat AI", text: "When a joke needs a fact, MemeChat searches the web and your own photo roll, then grounds the reply in real sources." },
  { id: "q-avatar", tag: "Interactive Avatar", brand: "Zeta AI Assistant", text: "An animated companion that reacts, emotes and talks with you while you work — built from local models, not a render farm." },
  { id: "q-platforms", tag: "Every Platform", brand: "Zeta AI Assistant", text: "One companion across macOS, Windows, Linux, iOS and Android, with the same personality on each." }
];

/* -------------------------------------------------------------- studio rules */

export const PRINCIPLES = [
  { id: "p-1", n: "01", title: "On-device first", text: "If a phone can run it, a phone should run it. Latency, privacy and cost all point the same direction." },
  { id: "p-2", n: "02", title: "Local-friendly", text: "Software that respects where you are: cheap data, weak signal, mid-range hardware, older Android." },
  { id: "p-3", n: "03", title: "AI-driven", text: "The model is the product, not a chatbot bolted onto a form. Every screen exists because of what the model can do." },
  { id: "p-4", n: "04", title: "Craft over templates", text: "No store template, no stock flow. Each app is designed around one job and shipped when it does it well." }
];

/* -------------------------------------------------------------------- faq */

export const FAQS = [
  { q: "Which platforms do you build for?", a: "Android and iOS are the default, and our own apps ship on both. Zeta AI Assistant also runs on macOS, Windows and Linux because it started life as a desktop companion." },
  { q: "Do the apps need an internet connection?", a: "MemeChat AI and Zeta AI Assistant are offline-first: the model ships inside the app, so chat, vision and voice keep working in airplane mode. CoBatik needs a connection for the try-on render, which runs on our server." },
  { q: "Is my data uploaded anywhere?", a: "For MemeChat AI and Zeta AI Assistant, no. Inference happens on your device and there is no account, no sync and no telemetry. CoBatik straightens and compresses the portrait you take before sending it, and returns only the preview." },
  { q: "Are the apps free?", a: "Yes. All three apps are free to download, and none of them ask you to create an account." },
  { q: "Can you build a custom app for us?", a: "Yes — that is most of what the studio does. Bring the job to be done and we will tell you honestly what fits on a device and what still needs a server." }
];

/* ------------------------------------------------------------------- stack */

export type TechItem = { id: string; label: string; icon: ReactNode };

export const TECH: TechItem[] = [
  { id: "t-1", label: "On-device LLM", icon: <IcoBrain size={15} /> },
  { id: "t-2", label: "Vision models", icon: <IcoEye size={15} /> },
  { id: "t-3", label: "On-device RAG", icon: <IcoLayers size={15} /> },
  { id: "t-4", label: "Camera pipeline", icon: <IcoChip size={15} /> },
  { id: "t-5", label: "Quantisation", icon: <IcoGrid size={15} /> },
  { id: "t-6", label: "Offline sync", icon: <IcoCloudOff size={15} /> },
  { id: "t-7", label: "No-account auth", icon: <IcoKey size={15} /> },
  { id: "t-8", label: "Edge inference", icon: <IcoRoute size={15} /> },
  { id: "t-9", label: "Store release", icon: <IcoDevice size={15} /> },
  { id: "t-10", label: "Mobile UX", icon: <IcoHand size={15} /> },
  { id: "t-11", label: "Cross-platform", icon: <IcoGlobe size={15} /> },
  { id: "t-12", label: "Offline-first", icon: <IcoCompass size={15} /> }
];

/* ------------------------------------------------------------------ process */

export const STEPS = [
  { n: "01", title: "Discover & Scope", text: "We map the job to be done and what the device can realistically run." },
  { n: "02", title: "Model & Data Plan", text: "Pick the model, the size budget, the quantisation and the fallbacks." },
  { n: "03", title: "Build the App", text: "One codebase, two stores — native-feel UI wired to on-device inference." },
  { n: "04", title: "Test on Real Devices", text: "Thermals, memory, battery and offline edge cases, measured on mid-range hardware." },
  { n: "05", title: "Ship & Iterate", text: "Store release, crash loops, model updates and the next version." }
];

/* ------------------------------------------------------------------- values */

export type ValueItem = { n: string; title: string; text: string; icon: ReactNode };

export const VALUES: ValueItem[] = [
  { n: "01", title: "AI-Driven by Default", text: "Every app ships with a model on the device, not an API key in the cloud.", icon: <IcoBrain size={26} stroke={1.5} /> },
  { n: "02", title: "Local-Friendly Architecture", text: "Offline-first by design. No accounts, no sync, no telemetry — your data stays where it belongs.", icon: <IcoCloudOff size={26} stroke={1.5} /> },
  { n: "03", title: "Built for Real Phones", text: "Small binaries, fast cold starts, honest battery use — tuned for mid-range Android and iOS.", icon: <IcoDevice size={26} stroke={1.5} /> }
];

/* ------------------------------------------------------------- secure tiles */

export type SecureItem = { id: string; label: string; icon: ReactNode };

export const SECURE: SecureItem[] = [
  { id: "s-1", label: "On-Device Inference", icon: <IcoChip size={19} /> },
  { id: "s-2", label: "No Account Needed", icon: <IcoKey size={19} /> },
  { id: "s-3", label: "Private by Default", icon: <IcoLock size={19} /> },
  { id: "s-4", label: "Works Offline", icon: <IcoCloudOff size={19} /> }
];

/* --------------------------------------------------------------------- nav */

export const NAV_ITEMS = [
  { id: "studio", label: "Studio", n: "001" },
  { id: "apps", label: "Apps", n: "002" },
  { id: "process", label: "Process", n: "003" },
  { id: "work", label: "Work", n: "004" },
  { id: "download", label: "Download", n: "005" },
  { id: "faq", label: "FAQ", n: "006" },
  { id: "contact", label: "Contact", n: "007" }
];
