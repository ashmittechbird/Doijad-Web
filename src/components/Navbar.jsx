import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data.js";
import { scrollToSection } from "../lib/lenis.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-cream/[0.06] bg-bg/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => go(e, "#top")}
          aria-label="Doijad Automation Home"
          className="transition-opacity hover:opacity-50"
        >
          <img
            src="/doijad-logo.png"
            alt="DOIJAD Automation & Robotics"
            className="h-7 w-auto brightness-0 invert md:h-8"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => go(e, link.href)}
                className="label text-cream/35 transition-colors duration-300 hover:text-cream"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <a
            href="#contact"
            onClick={(e) => go(e, "#contact")}
            className="label hidden text-cream/35 transition-colors duration-300 hover:text-cream sm:block"
          >
            Contact →
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex size-8 items-center justify-center text-cream/40 transition-colors hover:text-cream lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-bg lg:hidden">
          <div className="flex items-center justify-between border-b border-cream/[0.06] px-6 py-5">
            <img
              src="/doijad-logo.png"
              alt="DOIJAD"
              className="h-7 w-auto brightness-0 invert"
            />
            <button
              onClick={() => setOpen(false)}
              className="text-cream/40 transition-colors hover:text-cream"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center px-8">
            {[...NAV_LINKS, { label: "Contact", href: "#contact" }].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => go(e, link.href)}
                className="display border-b border-cream/[0.06] py-5 text-[2.4rem] text-cream/60 transition-colors hover:text-cream sm:text-5xl"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
