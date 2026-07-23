import { ABOUT } from "../data.js";
import { Reveal } from "../lib/anim.jsx";
import { scrollToSection } from "../lib/lenis.js";

export default function Mission() {
  return (
    <section id="about" className="bg-bg text-cream">
      <div className="mx-auto w-full max-w-[1400px] border-t border-cream/[0.06] px-6 py-20 md:px-10 md:py-28">

        {/* Photo banner — full width to the page padding, plus an angled "About Us"
            badge breaking past the frame at the bottom-left */}
        <Reveal>
          <div className="relative pt-3 md:pt-4">
            <div className="overflow-hidden">
              <img
                src={ABOUT.img}
                alt="Industrial facility in operation"
                loading="lazy"
                className="h-[46vh] w-full object-cover md:h-[62vh]"
              />
            </div>
            <div
              className="absolute -bottom-7 left-0 bg-bg py-5 pl-6 pr-14 sm:pl-10 sm:pr-20"
              style={{ clipPath: "polygon(0 0, 78% 0, 100% 100%, 0 100%)" }}
            >
              <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold tracking-[-0.03em] text-cream">
                {ABOUT.heading}
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Body copy */}
        <Reveal delay={0.1} className="mt-16 md:mt-20">
          <p className="max-w-3xl font-body text-[1.1rem] leading-[1.85] text-cream/70">
            {ABOUT.paragraph}
          </p>
          <button
            onClick={() => scrollToSection("#contact")}
            className="mt-8 inline-flex items-center gap-2 border-b border-cream/20 pb-0.5 font-sans text-sm font-semibold text-cream transition-all duration-300 hover:border-accent hover:text-accent"
          >
            Start a project →
          </button>
        </Reveal>
      </div>
    </section>
  );
}
