import WorkList from "@/components/WorkList";
import { education, experience, profile, siteStack, skillGroups } from "@/lib/content";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <a href="#top" className="text-sm tracking-[0.18em] uppercase">
            {profile.name}
          </a>
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted sm:justify-end sm:gap-x-5">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-xs tracking-[0.28em] text-muted uppercase">
          {profile.title} · Jakarta · 2026
        </p>
        <h1 className="mt-5 max-w-5xl font-serif text-[clamp(3rem,8vw,6.75rem)] leading-[0.9] tracking-tight">
          {profile.first}
          <span className="block italic text-accent">{profile.last}</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/90">{profile.lede}</p>

        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
          {[
            ["10", "live sites"],
            ["4", "roles"],
            [profile.gpa, "GPA"],
            ["Head of IT", "latest role"],
          ].map(([value, label]) => (
            <div key={label} className="bg-paper px-4 py-5 sm:px-6">
              <dt className="text-xs tracking-[0.16em] text-muted uppercase">{label}</dt>
              <dd className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">{value}</dd>
            </div>
          ))}
        </dl>

        <section id="work" className="scroll-mt-8 pt-20">
          <WorkList />
          <div className="mt-8 rounded-2xl border border-line bg-chip/60 px-5 py-5 sm:px-6">
            <p className="text-xs tracking-[0.22em] text-muted uppercase">Stack of this site</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/85">
              This portfolio is built with the stack below and is ready to deploy on Vercel. The
              stack on each project was read from the public page that is live today.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {siteStack.map((item) => (
                <li key={item} className="rounded-full bg-ink px-3 py-1 text-xs text-paper">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="experience" className="scroll-mt-8 pt-20">
          <p className="text-xs tracking-[0.22em] text-muted uppercase">Experience</p>
          <h2 className="mt-2 font-serif text-4xl tracking-tight sm:text-5xl">Work</h2>
          <div className="mt-8 space-y-12">
            {experience.map((job) => (
              <article key={job.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-3">
                  <h3 className="font-serif text-3xl tracking-tight">{job.company}</h3>
                  <p className="text-sm text-muted">{job.place}</p>
                </div>
                <div className="divide-y divide-line">
                  {job.roles.map((role) => (
                    <div key={role.title} className="grid gap-3 py-6 sm:grid-cols-[14rem_minmax(0,1fr)]">
                      <div>
                        <p className="font-medium">{role.title}</p>
                        <p className="mt-1 text-sm text-muted">{role.period}</p>
                      </div>
                      <ul className="space-y-2 text-[15px] leading-relaxed text-ink/85">
                        {role.points.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="text-accent" aria-hidden="true">
                              –
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="scroll-mt-8 grid gap-12 pt-20 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs tracking-[0.22em] text-muted uppercase">Education</p>
            <h2 className="mt-2 font-serif text-4xl tracking-tight sm:text-5xl">Study</h2>
            <div className="mt-6 space-y-6">
              {education.map((item) => (
                <article key={item.school}>
                  <p className="font-serif text-3xl leading-tight tracking-tight">{item.school}</p>
                  <p className="mt-2 text-muted">
                    {item.detail} · {item.period}
                  </p>
                  {item.note ? <p className="mt-2 text-[15px]">{item.note}</p> : null}
                </article>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.22em] text-muted uppercase">Skills</p>
            <h2 className="mt-2 font-serif text-4xl tracking-tight sm:text-5xl">What I use</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.label} className="rounded-2xl border border-line p-5">
                  <h3 className="text-sm tracking-[0.16em] text-muted uppercase">{group.label}</h3>
                  <ul className="mt-3 space-y-1.5 text-[15px]">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-8 pt-20">
          <p className="text-xs tracking-[0.22em] text-muted uppercase">Contact</p>
          <h2 className="mt-2 max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-6xl">
            For work, reach out by email or phone.
          </h2>
          <div className="mt-8 flex flex-col gap-3 text-lg sm:text-xl">
            <a className="w-fit underline-offset-4 hover:underline" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="w-fit underline-offset-4 hover:underline" href={`tel:${profile.phoneHref}`}>
              {profile.phone}
            </a>
            <p className="text-base text-muted">{profile.location}</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>{siteStack.join(" · ")}</p>
        </div>
      </footer>
    </div>
  );
}
