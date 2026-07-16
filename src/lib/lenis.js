import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis = null;

/**
 * Boots Lenis smooth scrolling and wires it to GSAP's ticker + ScrollTrigger
 * so every scroll-driven animation stays perfectly in sync with the eased
 * scroll position. Falls back to native scrolling when reduced-motion is on.
 */
export function useLenis() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      ScrollTrigger.refresh();
      return;
    }

    lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });
    window.__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    // Recalculate trigger positions once paint, fonts and images settle —
    // web-font swap and late images shift layout and would otherwise leave
    // scroll triggers with stale start/end positions.
    const refresh = () => ScrollTrigger.refresh();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
    window.addEventListener("load", refresh);
    const timers = [setTimeout(refresh, 400), setTimeout(refresh, 1200)];

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(onTick);
      lenis.destroy();
      lenis = null;
    };
  }, []);
}

export function scrollToSection(target) {
  if (lenis) {
    lenis.scrollTo(target, { offset: 0, duration: 1.4 });
  } else {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  }
}
