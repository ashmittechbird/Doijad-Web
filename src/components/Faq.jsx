import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "../data.js";
import { Reveal } from "../lib/anim.jsx";
import { scrollToSection } from "../lib/lenis.js";

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="border-t border-cream/[0.06]">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-sans text-[0.95rem] font-semibold leading-snug text-cream md:text-[1.05rem]">
          {item.q}
        </span>
        <span
          className={`flex size-8 shrink-0 items-center justify-center border transition-all duration-300 ${
            open
              ? "border-accent bg-accent text-cream"
              : "border-cream/20 text-cream/40 group-hover:border-cream/40 group-hover:text-cream"
          }`}
        >
          {open ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-7 text-[0.9rem] leading-[1.85] text-cream/40">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-bg text-cream">
      <div className="border-t border-cream/[0.06]">

        {/* Eyebrow */}
        <div className="mx-auto max-w-[1400px] px-6 pt-16 md:px-10 md:pt-20">
          <Reveal>
            <p className="label text-accent">FAQ</p>
          </Reveal>
        </div>

        {/* Mega heading */}
        <div className="overflow-hidden px-5 md:px-10">
          <Reveal y={60} delay={0.05}>
            <h2 className="mega text-cream">Questions</h2>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-10 md:px-10 md:pb-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.8fr] md:gap-20">

          {/* Left — sub-heading + CTA */}
          <Reveal delay={0.06}>
            <p className="font-display text-[clamp(1.2rem,2.2vw,1.7rem)] font-semibold leading-[1.28] tracking-[-0.02em] text-cream">
              Common questions<br />
              <span className="text-cream/35">honestly answered.</span>
            </p>
            <p className="mt-6 text-[0.9rem] leading-[1.85] text-cream/35">
              Still weighing it up? Tell us about your part and your target
              cycle time — we&apos;ll come back with honest numbers.
            </p>
            <button
              onClick={() => scrollToSection("#contact")}
              className="mt-8 inline-flex items-center gap-2 border-b border-cream/20 pb-0.5 font-sans text-sm font-semibold text-cream transition-all duration-300 hover:border-accent hover:text-accent"
            >
              Ask us directly →
            </button>
          </Reveal>

          {/* Right — accordion */}
          <Reveal delay={0.1}>
            {FAQS.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
            <div className="border-t border-cream/[0.06]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
