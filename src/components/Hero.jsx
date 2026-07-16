import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { HERO_STATS } from "../data.js";
import { Counter } from "../lib/anim.jsx";

export default function Hero() {
  const ref = useRef(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;

      const playIntro = () => {
        gsap.set(".hero-corner", { opacity: 0, y: 8 });
        gsap.set(".hero-line",   { yPercent: 115 });
        gsap.set(".hero-photo",  { opacity: 0 });
        gsap.set(".hero-subtext", { opacity: 0, y: 20 });
        gsap.set(".hero-stat",   { opacity: 0, y: 20 });

        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        tl.to(".hero-photo",  { opacity: 1, duration: 1.8 })
          .to(".hero-line",   { yPercent: 0, duration: 1.4, stagger: 0.07 }, 0.55)
          .to(".hero-subtext", { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
          .to(".hero-stat",   { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }, "-=0.5");
      };

      if (document.visibilityState === "visible") {
        playIntro();
      } else {
        const onVisible = () => {
          if (document.visibilityState === "visible") {
            document.removeEventListener("visibilitychange", onVisible);
            playIntro();
          }
        };
        document.addEventListener("visibilitychange", onVisible);
      }
    },
    { scope: ref }
  );

  return (
    <section id="top" ref={ref} className="relative overflow-hidden bg-bg">
      {/* Full-bleed video */}
      <div className="hero-photo relative h-[60vh] w-full overflow-hidden md:h-[68vh]">
        <video
          className="h-full w-full object-cover object-center"
          src="/160974-822391309_medium.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-bg/25" />
        {/* Gradient — blends photo into the dark bg below */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* ── Massive brand name + right-hand subtext ── */}
      <div className="-mt-4 overflow-hidden px-5 md:-mt-8 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-0">
          <h1 className="font-display font-bold tracking-[-0.04em] text-[clamp(5rem,16vw,14rem)] leading-[1] text-cream will-change-transform">
            <span className="block overflow-hidden pb-2">
              <span className="hero-line block">Doijad.</span>
            </span>
          </h1>
          <div className="hero-subtext md:max-w-[280px] md:mb-3">
            <p className="text-cream/70 text-base md:text-lg font-light leading-relaxed">
              Precision Engineering<br />
              & Robotics Solutions
            </p>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-6 border-t border-cream/[0.06] px-6 py-10 sm:grid-cols-4 md:px-10 md:py-14">
        {HERO_STATS.map((s) => (
          <div key={s.label} className="hero-stat">
            <Counter
              to={s.value}
              suffix={s.suffix}
              className="display block text-3xl text-cream md:text-4xl"
            />
            <span className="mt-2 block label text-cream/30">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
