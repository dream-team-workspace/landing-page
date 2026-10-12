import { useCallback, useEffect, useRef, useState, type RefObject } from "react";

/** Adds `.in` to `.reveal` / `.statement` nodes as they enter the viewport. */
export function useRevealOnScroll(): void {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal, .statement"));
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
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.12 });
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}

/** True once the page has scrolled past the threshold that solidifies the nav. */
export function useStickyNav(): boolean {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return solid;
}

export interface Scroller {
  ref: RefObject<HTMLDivElement>;
  page: number;
  pages: number;
  go: (dir: number) => void;
}

/** Native horizontal scroller with arrow controls; position is remembered. */
export function useScroller(storageKey: string): Scroller {
  const ref = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const size = el.clientWidth || 1;
    const total = Math.max(1, Math.round(el.scrollWidth / size));
    setPages(total);
    setPage(Math.min(total - 1, Math.round(el.scrollLeft / size)));
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    measure();
    const saved = Number(window.localStorage.getItem(storageKey) || "0");
    if (saved > 0) el.scrollLeft = saved * (el.clientWidth || 1);
    const onScroll = () => {
      const size = el.clientWidth || 1;
      const idx = Math.round(el.scrollLeft / size);
      setPage(idx);
      window.localStorage.setItem(storageKey, String(idx));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, [measure, storageKey]);

  const go = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const next = Math.min(pages - 1, Math.max(0, page + dir));
    el.scrollTo({ left: next * (el.clientWidth || 1), behavior: "smooth" });
  };

  return { ref, page, pages, go };
}
