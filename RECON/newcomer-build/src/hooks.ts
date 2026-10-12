import { useEffect } from "react";

/** Adds `.in` to `.reveal` nodes as they enter the viewport (reference-style
 *  fade-up on scroll, 40px offset). */
export function useRevealOnScroll(): void {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}
