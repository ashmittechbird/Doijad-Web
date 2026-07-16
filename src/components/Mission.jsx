import { ABOUT } from "../data.js";
import { Reveal } from "../lib/anim.jsx";
import { scrollToSection } from "../lib/lenis.js";

export default function Mission() {
  return (
    <section id="about" className="bg-bg text-cream">
      <div className="mx-auto w-full max-w-[1400px] border-t border-cream/[0.06] px-6 py-20 md:px-10 md:py-28">

        {/* Eyebrow */}
        <Reveal>
          <p className="label text-accent">About us</p>
        </Reveal>

        {/* 2-column statement */}
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Left — large statement */}
          <Reveal delay={0.05}>
            <p className="font-display text-[clamp(1.5rem,2.8vw,2.3rem)] font-semibold leading-[1.22] tracking-[-0.025em] text-cream">
              At Doijad Automation &amp; Robotics, we leverage our experience to{" "}
              <span className="text-cream/40">
                advance the industrial capabilities of our clients.
              </span>
            </p>
          </Reveal>

          {/* Right — body + CTA */}
          <Reveal delay={0.1}>
            <div className="md:pt-1">
              <p className="font-body text-[0.95rem] leading-[1.85] text-cream/45">
                {ABOUT.paragraphs[0]}
              </p>
              <p className="mt-5 font-body text-[0.95rem] leading-[1.85] text-cream/45">
                {ABOUT.paragraphs[1]}
              </p>
              <button
                onClick={() => scrollToSection("#contact")}
                className="mt-8 inline-flex items-center gap-2 border-b border-cream/20 pb-0.5 font-sans text-sm font-semibold text-cream transition-all duration-300 hover:border-accent hover:text-accent"
              >
                Start a project →
              </button>
            </div>
          </Reveal>
        </div>

        {/* Full-width editorial photo */}
        <Reveal delay={0.15} className="mt-14 md:mt-20">
          <div className="overflow-hidden">
            <img
              src="/about.jpg"
              alt="Laser cutting machine in operation"
              loading="lazy"
              className="h-[40vh] w-full object-cover transition-transform duration-700 hover:scale-[1.02] md:h-[54vh]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
