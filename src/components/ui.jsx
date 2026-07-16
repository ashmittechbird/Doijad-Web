import { ArrowUpRight } from "lucide-react";
import { scrollToSection } from "../lib/lenis.js";

/**
 * Minimal text link with arrow — editorial style CTA used throughout.
 */
export function ArrowLink({ children, href, onClick, className = "" }) {
  const handle = (e) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      scrollToSection(href);
    }
    onClick?.(e);
  };
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      onClick={handle}
      className={`group inline-flex items-center gap-2 border-b border-cream/20 pb-0.5 font-sans text-sm font-semibold text-cream transition-all duration-300 hover:border-accent hover:text-accent ${className}`}
    >
      {children}
      <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Tag>
  );
}

/**
 * Rectangular editorial button — cream on dark bg (default), or bordered ghost.
 * Variants: light | ghost | accent
 */
export function PillButton({
  children,
  href,
  onClick,
  variant = "light",
  icon: Icon = ArrowUpRight,
  className = "",
}) {
  const styles = {
    light: {
      bar:   "bg-cream text-bg hover:bg-cream-2",
      badge: "bg-bg text-accent",
    },
    ghost: {
      bar:   "bg-transparent text-cream ring-1 ring-cream/20 hover:bg-cream/5",
      badge: "bg-cream/10 text-cream/60 group-hover:bg-accent group-hover:text-cream",
    },
    dark: {
      bar:   "bg-bg text-cream ring-1 ring-cream/10 hover:ring-cream/20",
      badge: "bg-accent text-cream",
    },
    accent: {
      bar:   "bg-accent text-cream hover:bg-accent-2",
      badge: "bg-cream text-accent",
    },
  }[variant] ?? {
    bar: "bg-cream text-bg hover:bg-cream-2",
    badge: "bg-bg text-accent",
  };

  const handle = (e) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      scrollToSection(href);
    }
    onClick?.(e);
  };

  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      onClick={handle}
      className={`group inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 font-sans text-sm font-semibold transition-all duration-300 ${styles.bar} ${className}`}
    >
      <span>{children}</span>
      <span
        className={`flex size-9 items-center justify-center rounded-full transition-all duration-300 ${styles.badge}`}
      >
        <Icon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Tag>
  );
}

/**
 * Small uppercase pill eyebrow label.
 */
export function Eyebrow({ children, className = "", tone = "accent" }) {
  const color =
    tone === "cream"
      ? "text-cream/50"
      : "text-accent";
  return (
    <span className={`label inline-block ${color} ${className}`}>
      {children}
    </span>
  );
}
