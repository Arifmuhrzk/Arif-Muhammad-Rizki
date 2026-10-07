"use client";

import { useMemo, useState } from "react";
import { projects } from "@/lib/content";

export default function WorkList() {
  const [active, setActive] = useState("All");

  const filters = useMemo(() => {
    const seen = new Set();
    projects.forEach((project) => {
      project.stack.forEach((item) => seen.add(item));
    });
    return ["All", ...seen];
  }, []);

  const visible =
    active === "All"
      ? projects
      : projects.filter((project) => project.stack.includes(active));

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs tracking-[0.22em] text-muted uppercase">Work</p>
          <h2 className="mt-2 font-serif text-4xl tracking-tight sm:text-5xl">Live sites</h2>
        </div>
        <p className="text-sm text-muted">
          {visible.length} of {projects.length} sites
          {active !== "All" ? ` · ${active}` : ""}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2" role="toolbar" aria-label="Filter by stack">
        {filters.map((filter) => {
          const selected = filter === active;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(filter)}
              className={`rounded-full border px-3 py-1.5 text-xs tracking-wide transition-colors ${
                selected
                  ? "border-ink bg-ink text-paper"
                  : "border-line bg-transparent text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <ol className="mt-8 divide-y divide-line border-y border-line">
        {visible.map((project) => {
          const index = String(projects.indexOf(project) + 1).padStart(2, "0");
          return (
            <li key={project.url} className="group py-7 sm:py-8">
              <div className="grid gap-4 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-6">
                <p className="font-serif text-2xl text-accent tabular-nums">{index}</p>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-serif text-3xl tracking-tight underline-offset-4 hover:underline sm:text-4xl"
                      >
                        {project.name}
                      </a>
                      <p className="mt-1 text-sm text-muted">{project.domain}</p>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-accent underline-offset-4 hover:underline"
                    >
                      Open site
                    </a>
                  </div>

                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink/85">
                    {project.summary}
                  </p>

                  {project.status ? (
                    <p className="mt-3 inline-flex rounded-full bg-chip px-2.5 py-1 text-[11px] tracking-[0.14em] text-muted uppercase">
                      {project.status}
                    </p>
                  ) : null}

                  {project.stack.length > 0 ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <li key={item}>
                          <button
                            type="button"
                            onClick={() => setActive(item)}
                            className={`rounded-full px-2.5 py-1 text-xs transition-colors ${
                              active === item
                                ? "bg-ink text-paper"
                                : "bg-chip text-ink hover:bg-ink hover:text-paper"
                            }`}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-4 text-sm text-muted">Stack could not be read.</p>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
