import { useRef } from "react";
import { Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TRAINING } from "../data.js";
import { Img } from "../lib/anim.jsx";
import { scrollToSection } from "../lib/lenis.js";

gsap.registerPlugin(ScrollTrigger);

export default function Training() {
  const wrapRef = useRef(null);
  const imgWrapRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const wrap = wrapRef.current;
        const imgWrap = imgWrapRef.current;
        const content = contentRef.current;
        const img = imgWrap.querySelector("[data-img]");

        /* Hide content initially */
        gsap.set(content, { opacity: 0, x: 60 });

        /* Phase 1: Image shrinks from full-width to left half */
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrap,
            start: "top top",
            end: "+=600",
            scrub: 1,
            pin: true,
            pinSpacing: true,
          },
        });

        tl.to(imgWrap, {
          width: "50%",
          duration: 1,
          ease: "power2.inOut",
        })
          .to(
            img,
            {
              scale: 1,
              duration: 1,
              ease: "power2.inOut",
            },
            0
          )
          .to(
            content,
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: "power2.out",
            },
            0.5
          );

        /* Phase 2: After unpin, animate content items on scroll */
        const items = content.querySelectorAll("[data-anim]");
        items.forEach((item) => {
          gsap.set(item, { opacity: 0, y: 40 });
          ScrollTrigger.create({
            trigger: item,
            start: "top 85%",
            once: true,
            onEnter: () => {
              gsap.to(item, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "expo.out",
              });
            },
          });
        });
      });

      /* Mobile fallback — simple reveal */
      mm.add("(max-width: 767px)", () => {
        const items = wrapRef.current.querySelectorAll("[data-anim]");
        items.forEach((item) => {
          gsap.set(item, { opacity: 0, y: 30 });
          ScrollTrigger.create({
            trigger: item,
            start: "top 88%",
            once: true,
            onEnter: () => {
              gsap.to(item, { opacity: 1, y: 0, duration: 0.9, ease: "expo.out" });
            },
          });
        });
      });
    },
    { scope: wrapRef }
  );

  return (
    <section id="training" className="bg-bg text-cream">
      <div className="border-t border-cream/[0.06]" />

      {/* Eyebrow */}
      <div className="mx-auto max-w-[1400px] px-6 pt-16 md:px-10 md:pt-20 pb-8 md:pb-12">
        <p className="label text-accent">Training</p>
      </div>

      {/* ── Pinned split reveal ── */}
      <div ref={wrapRef} className="relative overflow-hidden">
        {/* Full-width container that becomes the pinned frame */}
        <div className="relative flex h-screen items-stretch mx-auto max-w-[1400px] px-6 md:px-10">
          {/* Image — starts full width, shrinks to 50% on scroll */}
          <div
            ref={imgWrapRef}
            className="relative h-full w-full shrink-0 overflow-hidden md:w-full"
          >
            <Img
              data-img
              src={TRAINING.img}
              alt="Robotics training"
              className="h-full w-full object-cover scale-110 will-change-transform"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Badge on image */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 max-w-[16rem] bg-accent p-5">
              <p className="display text-xl text-cream">Training</p>
              <p className="mt-1.5 text-xs font-medium leading-relaxed text-cream/70">
                Students, engineers &amp; professionals — bridging academia and the shop floor.
              </p>
            </div>
          </div>

          {/* Content — all in one panel, revealed after image shrinks */}
          <div
            ref={contentRef}
            className="absolute right-0 top-0 h-full w-1/2 hidden md:flex items-center overflow-y-auto"
          >
            <div className="px-10 lg:px-14 max-w-[520px] py-10">
              <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.03em] text-cream">
                We train the people who{" "}
                <span className="text-cream/35">run the robots.</span>
              </h2>

              <div className="mt-5 mb-5 h-px bg-cream/[0.08]" />

              {TRAINING.outcomes.map((item) => (
                <div key={item} className="mb-3 flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center bg-accent/15 border border-accent/30 rounded-sm text-accent">
                    <Check className="size-3.5" />
                  </span>
                  <span className="font-body text-[0.88rem] leading-relaxed text-cream/65">
                    {item}
                  </span>
                </div>
              ))}

              <button
                onClick={() => scrollToSection("#contact")}
                className="group mt-8 inline-flex items-center gap-3 text-cream font-sans text-sm font-semibold transition-all duration-300 hover:text-accent"
              >
                <span>Enquire about training</span>
                <span className="flex size-8 items-center justify-center rounded-full bg-accent text-cream transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-only content (hidden on desktop) */}
      <div className="md:hidden mx-auto max-w-[1400px] px-6 pb-16">
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.03em] text-cream">
          We train the people who{" "}
          <span className="text-cream/35">run the robots.</span>
        </h2>
        <div className="mt-5 mb-5 h-px bg-cream/[0.08]" />
        {TRAINING.outcomes.map((item) => (
          <div key={item} className="mb-3 flex items-start gap-3">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center bg-accent/15 border border-accent/30 rounded-sm text-accent">
              <Check className="size-3.5" />
            </span>
            <span className="font-body text-[0.88rem] leading-relaxed text-cream/65">
              {item}
            </span>
          </div>
        ))}
        <button
          onClick={() => scrollToSection("#contact")}
          className="group mt-6 inline-flex items-center gap-3 text-cream font-sans text-sm font-semibold transition-all duration-300 hover:text-accent"
        >
          <span>Enquire about training</span>
          <span className="flex size-8 items-center justify-center rounded-full bg-accent text-cream transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
