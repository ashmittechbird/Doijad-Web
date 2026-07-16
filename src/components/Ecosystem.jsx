import { useState, useRef, useCallback } from "react";
import { ECOSYSTEM, SERVICES } from "../data.js";
import { Reveal } from "../lib/anim.jsx";
import { scrollToSection } from "../lib/lenis.js";

export default function Ecosystem() {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const rightRef = useRef(null);
  const current = SERVICES[active];

  const handleTabChange = useCallback((i) => {
    if (i === active) return;
    setTransitioning(true);
    setTimeout(() => {
      setActive(i);
      setTimeout(() => setTransitioning(false), 30);
    }, 250);
  }, [active]);

  return (
    <section id="ecosystem" className="bg-bg text-cream">
      <div className="border-t border-cream/[0.06]" />

      {/* ── Tab-based expertise section ── */}
      <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-10 md:py-16">
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-14 lg:gap-18">

          {/* ── Left column ── */}
          <div>
            {/* Eyebrow */}
            <Reveal>
              <p className="label text-accent">(Our Expertise)</p>
            </Reveal>

            {/* Heading */}
            <Reveal y={40} delay={0.05}>
              <h2 className="mt-5 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.08] tracking-[-0.03em] text-cream">
                Expert Solutions for Your{" "}
                <span className="text-cream/35">Specific Needs</span>
              </h2>
            </Reveal>

            {/* ── Service tabs ── */}
            <div className="mt-8 flex flex-col">
              {SERVICES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => handleTabChange(i)}
                  className={`w-full border-t border-cream/[0.06] py-3.5 text-left font-display text-[0.95rem] tracking-[-0.01em] transition-all duration-300 ${
                    i === active
                      ? "text-cream font-bold"
                      : "text-cream/30 hover:text-cream/60"
                  }`}
                >
                  {s.title}
                </button>
              ))}
              <div className="border-t border-cream/[0.06]" />
            </div>
          </div>

          {/* ── Right column ── */}
          <div
            ref={rightRef}
            className={`flex flex-col transition-all duration-300 ease-in-out ${
              transitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
            }`}
          >
            {/* Image */}
            <div className="relative aspect-[16/8] overflow-hidden rounded-lg bg-surface">
              <img
                key={current.id}
                src={current.img}
                alt={current.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Title + CTA buttons */}
            <div className="mt-5">
              <h3 className="font-display text-[clamp(1.1rem,1.8vw,1.4rem)] font-bold leading-[1.15] tracking-[-0.02em] text-cream">
                {current.title}
              </h3>
              <p className="mt-2 font-body text-[0.85rem] leading-[1.75] text-cream/50">
                {current.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream px-5 py-2.5 text-[0.8rem] font-semibold text-bg transition-all duration-300 hover:bg-accent hover:text-cream hover:border-accent"
                >
                  Detail Services
                </button>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-5 py-2.5 text-[0.8rem] font-semibold text-cream transition-all duration-300 hover:bg-cream/10"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Partner logos — compact horizontal scrolling belts ── */}
      <div className="mx-auto max-w-[1400px] border-t border-cream/[0.06] px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-20">
        <Reveal>
          <h2 className="font-display text-[clamp(1.4rem,2.5vw,2rem)] font-bold tracking-[-0.03em] text-cream">
            Robots · PLCs · Clients <span className="text-cream/35">we work with</span>
          </h2>
        </Reveal>
        <div className="mt-12 space-y-12">
          {ECOSYSTEM.map((lane, idx) => {
            const row = [...lane.logos, ...lane.logos];
            return (
              <Reveal key={lane.key} delay={idx * 0.07}>
                <div className="flex items-center justify-between border-b border-cream/[0.06] pb-4">
                  <h3 className="font-display text-[1rem] font-semibold tracking-[-0.01em] text-cream/70">{lane.label}</h3>
                  <span className="label text-cream/30">
                    {String(lane.logos.length).padStart(2, "0")}
                  </span>
                </div>
                <div
                  className="belt-mask marquee-paused mt-5 overflow-hidden"
                  style={{ "--marquee-speed": lane.speed }}
                >
                  <div
                    className={`marquee-track items-center ${lane.reverse ? "marquee-reverse" : ""}`}
                  >
                    {row.map((logo, i) => (
                      <div
                        key={i}
                        aria-hidden={i >= lane.logos.length}
                        className="mx-3 flex h-16 w-32 shrink-0 items-center justify-center border border-cream/[0.06] bg-surface px-5 transition-all duration-300 hover:border-cream/20"
                      >
                        <img
                          src={`/logos/${logo.file}.png`}
                          alt={i < lane.logos.length ? logo.name : ""}
                          loading="lazy"
                          className="max-h-9 w-auto max-w-full object-contain opacity-70 transition-opacity hover:opacity-100"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
