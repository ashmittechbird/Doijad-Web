import { useState } from "react";
import { Linkedin, Instagram, Facebook, Youtube, ArrowRight, Check } from "lucide-react";
import { CONTACT, NAV_LINKS } from "../data.js";
import { Reveal } from "../lib/anim.jsx";
import { scrollToSection } from "../lib/lenis.js";

const SOCIALS = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer id="contact" className="bg-bg px-4 pb-4 md:px-6 md:pb-6">
      {/* Floating rounded card — light, so it pops off the dark page */}
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] bg-paper text-charcoal">
        <div className="px-6 py-14 md:px-12 md:py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* Company */}
            <Reveal delay={0.04}>
              <p className="font-display text-lg font-bold text-accent">Company</p>
              <ul className="mt-4 space-y-2.5">
                {[
                  { label: "Home", href: "#top" },
                  { label: "About Us", href: "#about" },
                  { label: "Contact Us", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-sm text-charcoal/55 transition-colors hover:text-charcoal"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Solutions */}
            <Reveal delay={0.08}>
              <p className="font-display text-lg font-bold text-accent">Solutions</p>
              <ul className="mt-4 space-y-2.5">
                {NAV_LINKS.filter((l) => l.label !== "About").map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-sm text-charcoal/55 transition-colors hover:text-charcoal"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Social */}
            <Reveal delay={0.12}>
              <p className="font-display text-lg font-bold text-accent">Social</p>
              <ul className="mt-4 space-y-2.5">
                {SOCIALS.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="flex items-center gap-2 text-sm text-charcoal/55 transition-colors hover:text-charcoal"
                    >
                      <Icon className="size-4" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Subscribe */}
            <Reveal delay={0.16}>
              <p className="font-display text-lg font-bold text-accent">Subscribe</p>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/55">
                Join our newsletter to stay up to date on automation projects and updates.
              </p>
              <form
                className="mt-4 flex gap-2"
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
                  placeholder="Enter your email"
                  className="w-full rounded-md bg-paper-2 px-4 py-2.5 text-sm text-charcoal outline-none placeholder:text-charcoal/40"
                />
                <button
                  type="submit"
                  className="flex shrink-0 items-center justify-center gap-2 rounded-md bg-charcoal px-5 py-2.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03]"
                >
                  {subscribed ? <Check className="size-4" /> : <ArrowRight className="size-4" />}
                  {subscribed ? "Subscribed" : "Subscribe"}
                </button>
              </form>
              <p className="mt-3 text-xs leading-relaxed text-charcoal/40">
                By subscribing you agree to receive updates from Doijad Automation and Robotics.
              </p>
              <p className="mt-6 text-sm font-medium text-charcoal">
                © {new Date().getFullYear()} Doijad Automation and Robotics. All rights reserved.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </footer>
  );
}
