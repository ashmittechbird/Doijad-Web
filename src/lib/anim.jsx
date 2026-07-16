import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* Signature easing — a long, confident settle used across the whole site. */
export const EASE = "power3.out";
export const EASE_EXPO = "expo.out";

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Reveal-on-view helper. Uses an IntersectionObserver to decide *when* to
 * reveal (rock-solid regardless of the smooth-scroll layer) and GSAP to do the
 * animation. `build(el)` returns { hide, play }; hide runs immediately, play
 * runs once when the element scrolls into view.
 */
function useReveal(build) {
  const ref = useRef(null);
  useGSAP(
    () => {
      if (reduced()) return;
      const el = ref.current;
      const { hide, play } = build(el);
      let io;
      // Only ever hide content when the tab is visible (so GSAP's rAF can
      // actually animate it back in). If the tab is hidden at mount, leave the
      // content fully visible and arm the reveal once it becomes visible —
      // content is never left invisible waiting on an animation that can't run.
      const arm = () => {
        hide();
        io = new IntersectionObserver(
          (entries) => {
            for (const e of entries) {
              if (e.isIntersecting) {
                play();
                io.disconnect();
                break;
              }
            }
          },
          { threshold: 0, rootMargin: "0px 0px -12% 0px" }
        );
        io.observe(el);
      };
      if (document.visibilityState === "visible") {
        arm();
        return () => io && io.disconnect();
      }
      const onVisible = () => {
        if (document.visibilityState === "visible") {
          document.removeEventListener("visibilitychange", onVisible);
          arm();
        }
      };
      document.addEventListener("visibilitychange", onVisible);
      return () => {
        document.removeEventListener("visibilitychange", onVisible);
        io && io.disconnect();
      };
    },
    { scope: ref }
  );
  return ref;
}

/* Fade + rise into view. Under reduced-motion the element simply stays put. */
export function Reveal({ children, as: Tag = "div", y = 44, delay = 0, duration = 1.1, className = "", ...rest }) {
  const ref = useReveal((el) => ({
    hide: () => gsap.set(el, { opacity: 0, y }),
    play: () => gsap.to(el, { opacity: 1, y: 0, duration, delay, ease: EASE }),
  }));
  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}

/* Masked line reveal — each line slides up from behind a clip on scroll-in. */
export function Lines({ lines, as: Tag = "h2", className = "", stagger = 0.12, delay = 0 }) {
  const ref = useReveal((el) => {
    const items = el.querySelectorAll("[data-line]");
    return {
      hide: () => gsap.set(items, { yPercent: 118 }),
      play: () => gsap.to(items, { yPercent: 0, duration: 1.15, delay, ease: EASE_EXPO, stagger }),
    };
  });
  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <span data-line className="block will-change-transform">
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}

/* Stagger direct children that carry a data-stagger attribute. */
export function Stagger({ children, as: Tag = "div", className = "", y = 36, gap = 0.09, ...rest }) {
  const ref = useReveal((el) => {
    const items = el.querySelectorAll("[data-stagger]");
    return {
      hide: () => gsap.set(items, { opacity: 0, y }),
      play: () => gsap.to(items, { opacity: 1, y: 0, duration: 0.95, ease: EASE, stagger: gap }),
    };
  });
  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}

/* Count-up number driven by scroll-into-view. */
export function Counter({ to, suffix = "", className = "" }) {
  const ref = useReveal((el) => {
    const obj = { v: 0 };
    return {
      hide: () => {
        el.textContent = `0${suffix}`;
      },
      play: () =>
        gsap.to(obj, {
          v: to,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${Math.round(obj.v)}${suffix}`;
          },
        }),
    };
  });
  return (
    <span ref={ref} className={className}>
      {reduced() ? `${to}${suffix}` : `0${suffix}`}
    </span>
  );
}

/* Subtle scroll parallax on the inner content of a clipped box (scrub). */
export function Parallax({ children, range = 12, className = "", scale = 1.18 }) {
  const ref = useRef(null);
  const inner = useRef(null);
  useGSAP(
    () => {
      if (reduced()) return;
      gsap.fromTo(
        inner.current,
        { yPercent: -range },
        {
          yPercent: range,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
        }
      );
    },
    { scope: ref }
  );
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div ref={inner} className="h-full w-full will-change-transform" style={{ scale }}>
        {children}
      </div>
    </div>
  );
}

/* Image with a blueprint fallback for broken/missing sources. */
export function Img({ src, alt = "", className = "", ...rest }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div role="img" aria-label={alt} className={`img-fallback ${className}`}>
        <span className="label flex h-full items-center justify-center text-copper/60">{alt || "DARPL"}</span>
      </div>
    );
  }
  return <img src={src} alt={alt} loading="lazy" className={className} onError={() => setFailed(true)} {...rest} />;
}

/* Pure-CSS marquee belt (pauses on hover). */
export function Marquee({ items, className = "", speed = "36s", reverse = false, render }) {
  const row = [...items, ...items];
  return (
    <div className={`marquee-paused overflow-hidden ${className}`} style={{ "--marquee-speed": speed }}>
      <div className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}>
        {row.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center" aria-hidden={i >= items.length}>
            {render ? render(item) : <span className="px-6">{item}</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
