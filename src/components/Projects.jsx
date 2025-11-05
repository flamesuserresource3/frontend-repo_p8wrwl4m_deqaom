import React from 'react';
import { ExternalLink } from 'lucide-react';

const items = [
  {
    title: 'Neon Commerce — Product Detail Experience',
    desc: 'High-fidelity product page with subtle 3D interactions, real-time variants, and buttery scrolling.',
    tags: ['React', 'Three.js', 'Tailwind'],
    href: '#',
    accent: 'from-cyan-400/20 to-fuchsia-500/20',
  },
  {
    title: 'Sense OS — Design System',
    desc: 'A cohesive component library with tokens, motion guidelines, and accessibility baked in.',
    tags: ['Design System', 'Storybook', 'Accessibility'],
    href: '#',
    accent: 'from-emerald-400/20 to-cyan-400/20',
  },
  {
    title: 'Pulse Analytics — Dashboard',
    desc: 'Clean analytics dashboard with live data, crisp typography, and responsive charts.',
    tags: ['Data Viz', 'API', 'UX'],
    href: '#',
    accent: 'from-amber-300/20 to-rose-400/20',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Selected Work</h2>
            <p className="mt-2 text-white/60 max-w-2xl">A curation of projects focused on clarity, performance, and polish.</p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            Let’s collaborate
          </a>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:to-white/[0.06] transition shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            >
              <div className={`absolute -inset-1 opacity-0 group-hover:opacity-100 transition blur-2xl bg-gradient-to-br ${item.accent}`} />
              <div className="relative p-6 sm:p-7">
                <div className="h-36 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-inset ring-white/10 flex items-center justify-center text-white/60">
                  <span className="text-xs uppercase tracking-widest">Case Study</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">{item.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
                  >
                    View project
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
