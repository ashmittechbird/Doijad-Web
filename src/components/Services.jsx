import { useEffect, useRef, useState } from "react";
import { SERVICES, SERVICES_INTRO } from "../data.js";
import { Img, Reveal } from "../lib/anim.jsx";
import { scrollToSection } from "../lib/lenis.js";

export default function Services() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;
        const mid = window.innerHeight / 2;
        const closest = visible.reduce((a, b) => {
          const da = Math.abs((a.boundingClientRect.top + a.boundingClientRect.bottom) / 2 - mid);
          const db = Math.abs((b.boundingClientRect.top + b.boundingClientRect.bottom) / 2 - mid);
          return db < da ? b : a;
        });
        setActive(Number(closest.target.dataset.index));
      },
      { threshold: 0, rootMargin: "-35% 0px -35% 0px" }
    );
    itemRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="services" className="bg-paper text-charcoal">
      {/* ── Sticky-intro scroll steps — left panel pinned, right column scrolls ── */}
      <div className="mx-auto max-w-[1400px] border-t border-charcoal/[0.08] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-y-14 lg:grid-cols-[minmax(0,440px)_4rem_minmax(0,1fr)] lg:gap-y-0">
          {/* Sticky intro — left column */}
          <div className="lg:sticky lg:top-28 lg:h-fit lg:self-start">
            <Reveal>
              <p className="label text-accent">What we do</p>
            </Reveal>
            <div className="mt-4 overflow-hidden">
              <Reveal y={70} delay={0.05}>
                <h2 className="mega text-charcoal">Services</h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-[1.1rem] leading-[1.75] text-charcoal/55">{SERVICES_INTRO}</p>
              <button
                onClick={() => scrollToSection("#contact")}
                className="mt-8 inline-flex items-center gap-2 text-[1.05rem] font-bold text-accent transition-all duration-300 hover:gap-3"
              >
                Start a project →
              </button>
            </Reveal>
          </div>

          {/* Progress dot rail — desktop only */}
          <div className="relative hidden lg:sticky lg:top-1/2 lg:-mt-28 lg:flex lg:h-56 lg:flex-col lg:items-center lg:justify-between">
            <span className="absolute inset-y-0 w-px bg-charcoal/[0.1]" aria-hidden />
            {SERVICES.map((_, i) => (
              <span
                key={i}
                className={`relative rounded-full transition-all duration-300 ${
                  i === active ? "h-2.5 w-2.5 bg-accent" : "h-1.5 w-1.5 bg-charcoal/20"
                }`}
              />
            ))}
          </div>

          {/* Scrolling items — right column */}
          <div className="flex flex-col">
            {SERVICES.map((s, i) => (
              <div
                key={s.id}
                data-index={i}
                ref={(el) => (itemRefs.current[i] = el)}
                className="border-t border-charcoal/[0.08] py-10 first:border-t-0 first:pt-0 lg:py-16 lg:first:pt-0"
              >
                <div className="overflow-hidden">
                  <Img
                    src={s.img}
                    alt={s.title}
                    className={`h-[42vh] w-full object-cover transition-all duration-700 ease-out lg:h-[50vh] ${
                      i === active ? "scale-100 opacity-100" : "scale-[1.03] opacity-40"
                    }`}
                  />
                </div>
                <h3
                  className={`mt-6 display text-[clamp(1.5rem,2.6vw,2.2rem)] transition-colors duration-500 ${
                    i === active ? "text-charcoal" : "text-charcoal/35"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`mt-3 max-w-[42rem] text-[1rem] leading-[1.85] transition-colors duration-500 ${
                    i === active ? "text-charcoal/60" : "text-charcoal/30"
                  }`}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
