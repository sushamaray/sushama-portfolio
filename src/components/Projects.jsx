
import {
  FiArrowUpRight,
  FiCode,
  FiLayers,
  FiExternalLink,
} from 'react-icons/fi'

import { projectsData } from '../data/projectsData'

const categoryIcons = {
  'Full Stack Development': FiLayers,
  'Frontend Development': FiCode,
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#A78BFA]">
            Selected work
          </p>

          <h2
            id="projects-title"
            className="font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-[#F5F3FF] sm:text-4xl lg:text-5xl"
          >
            Projects &{' '}
            <span className="text-[#A78BFA]">Experiments</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A1A1B5] sm:text-base sm:leading-8">
            A selection of my work in web development, software
            engineering, and practical problem-solving.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectsData.map((project, index) => {
            const CategoryIcon =
              categoryIcons[project.category] ?? FiCode

            return (
              <article
                key={project.id}
                className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#2B2B3D] bg-[#12121C] transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/60 hover:shadow-xl hover:shadow-[#8B5CF6]/5"
              >
                {/* Decorative project header */}
                <div className="relative flex min-h-40 items-center justify-center overflow-hidden border-b border-[#2B2B3D] bg-gradient-to-br from-[#1B1B2A] via-[#12121C] to-[#0B0B12] p-6">
                  <div
                    aria-hidden="true"
                    className="absolute h-36 w-36 rounded-full bg-[#8B5CF6]/10 blur-3xl transition-colors duration-300 group-hover:bg-[#8B5CF6]/20"
                  />

                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-[#A78BFA] transition-transform duration-300 group-hover:scale-105">
                    <CategoryIcon size={36} aria-hidden="true" />
                  </div>

                  <span className="absolute right-5 top-5 rounded-full border border-[#2B2B3D] bg-[#0B0B12]/80 px-3 py-1 text-xs font-medium text-[#A1A1B5]">
                    {project.year}
                  </span>

                  <span className="absolute bottom-4 left-5 text-xs font-medium uppercase tracking-wider text-[#A78BFA]">
                    Project {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Project information */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#A78BFA]">
                    {project.category}
                  </p>

                  <h3 className="mt-2 font-['Space_Grotesk'] text-xl font-bold text-[#F5F3FF] sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-[#C4B5FD]">
                    {project.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-[#A1A1B5]">
                    {project.description}
                  </p>

                  {/* Project highlights */}
                  <div className="mt-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D8D4E8]">
                      Highlights
                    </h4>

                    <ul className="mt-3 space-y-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm leading-6 text-[#A1A1B5]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A78BFA]"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology tags */}
                  <div className="mt-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D8D4E8]">
                      Technologies
                    </h4>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-[#2B2B3D] bg-[#0B0B12] px-2.5 py-1.5 text-xs text-[#D8D4E8] transition-colors group-hover:border-[#8B5CF6]/25"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project links */}
                  <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-[#2B2B3D] pt-6 mt-6">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-[#8B5CF6]/40 px-3 py-2 text-sm font-medium text-[#F5F3FF] transition-colors hover:border-[#A78BFA] hover:bg-[#8B5CF6]/10"
                      >
                        <FiCode size={16} aria-hidden="true" />
                        GitHub
                        <FiArrowUpRight
                          size={15}
                          aria-hidden="true"
                        />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#8B5CF6] px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#6D28D9]"
                      >
                        <FiExternalLink
                          size={15}
                          aria-hidden="true"
                        />
                        Live Demo
                        <FiArrowUpRight
                          size={15}
                          aria-hidden="true"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
