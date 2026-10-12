import type { MouseEvent } from "react";

/** Sticky-nav height the anchor jumps compensate for. */
const NAV_OFFSET = 80;

/** Smooth-scroll to an in-page section. */
export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}

/** Anchor click handler: prevent the hash jump, keep the smooth offset. */
export function onAnchorClick(e: MouseEvent, id: string): void {
  if (!document.getElementById(id)) return;
  e.preventDefault();
  scrollToId(id);
}

/** Back-to-top used by the brand link. */
export function scrollToTop(e: MouseEvent): void {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
