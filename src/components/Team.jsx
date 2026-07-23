import { TEAM } from "../data.js";
import { Img, Reveal, Stagger } from "../lib/anim.jsx";

export default function Team() {
  return (
    <section id="team" className="bg-paper text-charcoal">
      <div className="border-t border-charcoal/[0.08]">

        {/* Eyebrow + Heading — compact row */}
        <div className="mx-auto max-w-[1400px] px-6 pt-12 md:px-10 md:pt-14">
          <Reveal>
            <p className="label text-accent">Leadership</p>
          </Reveal>
        </div>

        <div className="overflow-hidden px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-0">
            <Reveal y={70} delay={0.05}>
              <h2 className="mega leading-[0.88] text-charcoal">
                A Culture<br />
                <span className="text-charcoal/40">of—&nbsp;Care</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="max-w-[280px] md:mb-3 font-body text-[0.95rem] leading-[1.85] text-charcoal/65">
                Decades of forging, automotive and automation experience —
                leading every project personally from concept to commissioning.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-[1400px] px-6 pb-14 pt-4 md:px-10 md:pb-20 md:pt-8">

        {/* Team cards */}
        <Stagger className="mt-8 grid gap-5 md:mt-10 md:grid-cols-3" y={48} gap={0.12}>
          {TEAM.map((person) => (
            <div key={person.name} data-stagger className="group">
              {/* Photo */}
              <div className="relative aspect-[3/3.2] overflow-hidden bg-paper-2">
                <Img
                  src={person.photo}
                  alt={`${person.name} — ${person.role}`}
                  className="h-full w-full object-cover object-[center_10%] transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {/* Role badge */}
                <span className="absolute left-3 top-3 bg-charcoal px-3 py-1 label text-paper/85">
                  {person.role}
                </span>
              </div>

              {/* Info */}
              <div className="mt-3 border-t border-charcoal/[0.08] pt-3">
                <h3 className="display text-[1.4rem] text-charcoal">{person.name}</h3>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-charcoal/45">
                  {person.note}
                </p>
              </div>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
