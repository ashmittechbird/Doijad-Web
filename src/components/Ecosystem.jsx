import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { ECOSYSTEM, SERVICES } from "../data.js";
import { Img, Reveal, Stagger } from "../lib/anim.jsx";
import { scrollToSection } from "../lib/lenis.js";

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Bento placement + text scale per card — one featured cell, mixed sizes. */
const BENTO = [
  { span: "lg:col-span-2 lg:row-span-2", size: "text-[clamp(1.6rem,2.6vw,2.4rem)]" }, // 0 — featured
  { span: "lg:col-start-3 lg:col-span-2 lg:row-start-1", size: "text-[clamp(1.2rem,1.8vw,1.6rem)]" }, // 1 — wide
  { span: "lg:col-start-3 lg:row-start-2", size: "text-[clamp(1rem,1.4vw,1.2rem)]" }, // 2 — small
  { span: "lg:col-start-4 lg:row-start-2", size: "text-[clamp(1rem,1.4vw,1.2rem)]" }, // 3 — small
  { span: "lg:col-span-2 lg:row-start-3", size: "text-[clamp(1.2rem,1.8vw,1.6rem)]" }, // 4 — wide
  { span: "lg:col-start-3 lg:col-span-2 lg:row-start-3", size: "text-[clamp(1.2rem,1.8vw,1.6rem)]" }, // 5 — wide
];

/* Autoplaying muted clip with a graceful fallback to the still image (broken source, or reduced-motion). */
function CardMedia({ service }) {
  const [failed, setFailed] = useState(false);
  const mediaClass =
    "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]";

  if (failed || !service.video || reduced()) {
    return <Img src={service.img} alt={service.title} className={mediaClass} />;
  }

  return (
    <video
      src={service.video}
      poster={service.img}
      autoPlay
      loop
      muted
      playsInline
      onError={() => setFailed(true)}
      className={mediaClass}
    />
  );
}

function BentoCard({ service, span, size }) {
  return (
    <div data-stagger className={`group relative aspect-[4/3] overflow-hidden lg:aspect-auto ${span}`}>
      <button onClick={() => scrollToSection("#contact")} className="absolute inset-0 h-full w-full text-left">
        <CardMedia service={service} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <h3 className={`font-display font-bold leading-[1.08] tracking-[-0.02em] text-cream ${size}`}>
            {service.title}
          </h3>
        </div>
      </button>

      {/* Redirect to the full Services section for this discipline */}
      <button
        onClick={() => scrollToSection("#services")}
        aria-label={`See ${service.title} in Services`}
        className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-cream/10 text-cream backdrop-blur-md transition-all duration-300 hover:bg-accent hover:text-cream"
      >
        <ArrowUpRight className="size-4" />
      </button>
    </div>
  );
}

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="bg-bg text-cream">
      <div className="border-t border-cream/[0.06]" />

      {/* ── Expertise bento ── */}
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <Reveal>
          <p className="label text-accent">(Our Expertise)</p>
        </Reveal>

        <Reveal y={40} delay={0.05}>
          <h2 className="mt-5 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.08] tracking-[-0.03em] text-cream">
            Expert Solutions for Your{" "}
            <span className="text-cream/35">Specific Needs</span>
          </h2>
        </Reveal>

        <Stagger
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 lg:h-[760px] lg:grid-cols-4 lg:grid-rows-3 lg:gap-4"
          y={28}
          gap={0.08}
        >
          {SERVICES.map((s, i) => (
            <BentoCard key={s.id} service={s} span={BENTO[i].span} size={BENTO[i].size} />
          ))}
        </Stagger>
      </div>

      {/* ── Partner logos — light panel so it doesn't blend into the dark bento above ── */}
      <div className="bg-paper text-charcoal">
        <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-20">
          <Reveal>
            <p className="label text-accent">(Our Network)</p>
          </Reveal>
          <Reveal y={30} delay={0.05} className="mt-5">
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.08] tracking-[-0.03em] text-charcoal">
              Robots · PLCs · Clients <span className="text-charcoal/40">we work with</span>
            </h2>
          </Reveal>
          <div className="mt-12 space-y-12">
            {ECOSYSTEM.map((lane, idx) => {
              const row = [...lane.logos, ...lane.logos];
              return (
                <Reveal key={lane.key} delay={idx * 0.07}>
                  <div className="flex items-center justify-between border-b border-charcoal/[0.08] pb-4">
                    <h3 className="font-display text-[1rem] font-semibold tracking-[-0.01em] text-charcoal/70">{lane.label}</h3>
                    <span className="label text-charcoal/30">
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
                          className="mx-3 flex h-16 w-32 shrink-0 items-center justify-center border border-charcoal/10 bg-paper-2 px-5 transition-all duration-300 hover:border-charcoal/25"
                        >
                          <img
                            src={`/logos/${logo.file}.png`}
                            alt={i < lane.logos.length ? logo.name : ""}
                            loading="lazy"
                            className="max-h-9 w-auto max-w-full object-contain opacity-95 transition-opacity hover:opacity-100"
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
      </div>
    </section>
  );
}
