import { PROCESS, WHY_US } from "../data.js";
import { Reveal, Stagger } from "../lib/anim.jsx";

export default function Process() {
  return (
    <section id="process" className="bg-bg text-cream">
      <div className="border-t border-cream/[0.06]">

        {/* Eyebrow */}
        <div className="mx-auto max-w-[1400px] px-6 pt-16 md:px-10 md:pt-20">
          <Reveal>
            <p className="label text-accent">How we work</p>
          </Reveal>
        </div>

        {/* Mega heading */}
        <div className="overflow-hidden px-5 md:px-10">
          <Reveal y={70} delay={0.05}>
            <h2 className="mega leading-[0.88] text-cream">
              From concept<br />
              <span className="text-cream/35">to— commissioning</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-12 md:px-10 md:pb-28 md:pt-16">

        {/* Process cards */}
        <Stagger
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          y={20}
          gap={0.07}
        >
          {PROCESS.map((step) => (
            <div
              data-stagger
              key={step.id}
              className="group relative rounded-xl border border-cream/[0.08] bg-surface/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-cream/[0.18] hover:bg-surface/80"
            >
              <span className="label text-accent/70">[{step.id}]</span>
              <h3 className="display mt-3 text-[clamp(1.1rem,1.6vw,1.4rem)] text-cream">
                {step.title}
              </h3>
              <p className="mt-3 text-[0.85rem] leading-[1.8] text-cream/40">
                {step.desc}
              </p>
            </div>
          ))}
        </Stagger>

        {/* Why us — horizontal strip */}
        <div className="mt-20 border-t border-cream/[0.06] pt-14">
          <div className="flex flex-col md:flex-row md:items-start md:gap-16">
            {/* Left heading */}
            <Reveal>
              <h2 className="shrink-0 font-display text-[clamp(1.4rem,2.5vw,2rem)] font-bold tracking-[-0.03em] text-cream md:w-[260px]">
                Why Manufacturers{" "}
                <span className="text-cream/35">Choose Us</span>
              </h2>
            </Reveal>

            {/* Right — 2x2 grid with accent left borders */}
            <Stagger className="mt-8 md:mt-0 flex-1 grid gap-x-12 gap-y-0 sm:grid-cols-2" y={18} gap={0.07}>
              {WHY_US.map((item) => (
                <div
                  data-stagger
                  key={item.title}
                  className="group border-l-2 border-accent/20 py-5 pl-5 transition-all duration-300 hover:border-accent"
                >
                  <h3 className="font-display text-[0.95rem] font-bold text-cream group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.84rem] leading-[1.75] text-cream/40">
                    {item.desc}
                  </p>
                </div>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
