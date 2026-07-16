import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { CONTACT, NAV_LINKS } from "../data.js";
import { Reveal, Lines } from "../lib/anim.jsx";
import { scrollToSection } from "../lib/lenis.js";

const SOCIALS = [
  { icon: Linkedin,  label: "LinkedIn",  href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook,  label: "Facebook",  href: "#" },
  { icon: Youtube,   label: "YouTube",   href: "#" },
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer id="contact" className="bg-bg text-cream">

      {/* ── CTA Block ── */}
      <div className="border-t border-cream/[0.06]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">

          <Reveal>
            <p className="label text-accent">Let&apos;s talk</p>
          </Reveal>

          {/* "Materialise your vision" equivalent */}
          <Lines
            as="h2"
            className="display mt-7 text-[clamp(2.4rem,7vw,6rem)] leading-[0.95]"
            lines={["Automate your", "production."]}
          />

          <div className="mt-12 grid gap-14 border-t border-cream/[0.06] pt-12 md:grid-cols-2 md:gap-20">

            {/* Left — contact info */}
            <Reveal delay={0.08}>
              <p className="font-body text-[0.95rem] leading-[1.85] text-cream/40 max-w-sm">
                Share your part, your process and your target — we&apos;ll
                respond with a feasibility view within 24 hours.
              </p>
              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group flex items-center gap-2 font-sans text-sm font-semibold text-cream transition-colors hover:text-accent"
                >
                  {CONTACT.email}
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={`tel:${CONTACT.phoneHref}`}
                  className="block font-sans text-sm font-semibold text-cream/50 transition-colors hover:text-cream"
                >
                  {CONTACT.phone}
                </a>
              </div>
              <p className="label mt-6 max-w-xs leading-relaxed text-cream/20">
                {CONTACT.address}
              </p>
              {/* Socials */}
              <div className="mt-8 flex gap-3">
                {SOCIALS.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex size-9 items-center justify-center border border-cream/[0.08] text-cream/35 transition-all duration-300 hover:border-cream/30 hover:text-cream"
                  >
                    <Icon className="size-3.5" />
                  </a>
                ))}
              </div>
            </Reveal>

            {/* Right — newsletter + nav links */}
            <Reveal delay={0.12}>
              <p className="label text-cream/30">Newsletter</p>
              <form
                className="mt-4 flex border-b border-cream/15 focus-within:border-accent"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Work email"
                  className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-cream/20"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex size-10 items-center justify-center text-cream/30 transition-colors hover:text-accent"
                >
                  {subscribed ? (
                    <Check className="size-4 text-accent" />
                  ) : (
                    <ArrowRight className="size-4" />
                  )}
                </button>
              </form>
              {subscribed && (
                <p className="mt-3 text-sm text-accent" role="status">
                  Thanks — you&apos;re on the list.
                </p>
              )}

              {/* Nav links grid */}
              <ul className="mt-10 grid grid-cols-2 gap-2.5">
                {[
                  { label: "Home", href: "#top" },
                  ...NAV_LINKS,
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-sm text-cream/30 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-cream/[0.06]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
          <p className="label text-cream/20">
            © {new Date().getFullYear()} Doijad Automation and Robotics Pvt. Ltd.
          </p>
          <p className="label text-cream/20">{CONTACT.website}</p>
        </div>
      </div>
    </footer>
  );
}
