import { SERVICES } from "../data.js";
import { Img, Reveal, Stagger } from "../lib/anim.jsx";
import { scrollToSection } from "../lib/lenis.js";

export default function Services() {
  return (
    <section id="services" className="bg-bg text-cream">
      <div className="border-t border-cream/[0.06]">

        {/* Eyebrow */}
        <div className="mx-auto max-w-[1400px] px-6 pt-16 md:px-10 md:pt-20">
          <Reveal>
            <p className="label text-accent">What we do</p>
          </Reveal>
        </div>

        {/* ── Mega heading ── */}
        <div className="overflow-hidden px-5 md:px-10">
          <Reveal y={70} delay={0.05}>
            <h2 className="mega text-cream">Services</h2>
          </Reveal>
        </div>
      </div>

      {/* ── Editorial numbered rows ── */}
      <div className="mx-auto max-w-[1400px] px-6 pb-20 md:px-10 md:pb-28">
        <Stagger className="divide-y divide-cream/[0.06]" y={24} gap={0.07}>
          {SERVICES.map((s) => (
            <button
              key={s.id}
              data-stagger
              onClick={() => scrollToSection("#contact")}
              className="group w-full text-left"
            >
              {/* Desktop: 4-col grid  /  Mobile: 2-col + photo below */}
              <div className="grid grid-cols-[3.5rem_1fr] gap-x-5 gap-y-5 py-8 md:grid-cols-[5rem_1.3fr_1.8fr_14rem] md:items-center md:gap-x-10 md:py-10">

                {/* [01] */}
                <span className="label self-start pt-1 text-cream/25">[{s.id}]</span>

                {/* Title */}
                <h3 className="display text-[clamp(1.3rem,2.2vw,1.9rem)] text-cream transition-colors duration-300 group-hover:text-cream/60">
                  {s.title}
                </h3>

                {/* Description — desktop only */}
                <p className="hidden self-center text-[0.9rem] leading-[1.85] text-cream/35 md:block">
                  {s.desc}
                </p>

                {/* Photo — spans 2 cols on mobile */}
                <div className="col-span-2 overflow-hidden md:col-auto">
                  <Img
                    src={s.img}
                    alt={s.title}
                    className="h-36 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] md:h-[6.5rem]"
                  />
                </div>
              </div>
            </button>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
