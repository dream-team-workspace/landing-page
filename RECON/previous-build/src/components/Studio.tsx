import { useEffect, useRef } from "react";

export function Studio() {
  const words = "We build AI-driven, local-friendly mobile applications for Android and iOS — software that runs on your device, not in a data centre.".split(" ");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        el.querySelectorAll<HTMLElement>(".w").forEach((w, i) => {
          w.style.transitionDelay = Math.min(i * 34, 900) + "ms";
        });
        el.classList.add("in");
        io.disconnect();
      });
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="sec" id="studio" ref={ref} data-od-id="studio">
      <div className="wrap">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 26 }}>
          <span className="sec-badge" data-od-id="studio-badge"><b>001</b><i />Who we are</span>
          <p className="statement" data-od-id="studio-statement">
            {words.map((w, i) => <span className="w" key={w + i}>{w}{" "}</span>)}
          </p>
        </div>
      </div>
    </section>
  );
}
