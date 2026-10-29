
import { Link } from 'react-router-dom'

import {
  FiArrowUpRight,
  FiCode,
  FiExternalLink,
  FiLayers,
} from 'react-icons/fi'

import {
  projectsData,
  otherProjectsData,
} from '../data/projectsData'

const categoryIcons = {
  Web: FiCode,
  Fullstack: FiLayers,
  'Algorithm Visualization': FiLayers,
  'Software Development': FiCode,
  'Game Development': FiCode,
  default: FiCode,
}

function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-24 bg-[var(--color-background)] px-6 py-24 transition-colors duration-300 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Featured Projects */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-primary-light)]">
            My Work
          </p>

          <h2
            id="projects-title"
            className="mb-5 font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl"
          >
            Featured Projects
          </h2>

          <p className="text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
            A selection of projects where I turn ideas into practical,
            user-focused digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => {
            const CategoryIcon =
              categoryIcons[project.category] || categoryIcons.default

            return (
              <article
                key={project.id}
                className="group flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/60 hover:bg-[var(--color-card)]"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]">
                    <CategoryIcon size={23} aria-hidden="true" />
                  </div>

                  <span className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]">
                    {project.year}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-light)]">
                    {project.category}
                  </p>

                  <h3 className="mb-2 font-['Space_Grotesk'] text-xl font-bold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary-light)]">
                    {project.title}
                  </h3>

                  <p className="text-sm font-medium text-[var(--color-text-muted)]">
                    {project.subtitle}
                  </p>
                </div>

                <p className="mb-6 text-sm leading-7 text-[var(--color-text-muted)]">
                  {project.description}
                </p>

                {project.features?.length > 0 && (
                  <div className="mb-6">
                    <h4 className="mb-3 text-sm font-semibold text-[var(--color-text)]">
                      Key Features
                    </h4>

                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li
                          key={`${project.id}-feature-${index}`}
                          className="flex items-start gap-2 text-sm leading-6 text-[var(--color-text-muted)]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.technologies?.length > 0 && (
                  <div className="mb-6">
                    <h4 className="mb-3 text-sm font-semibold text-[var(--color-text)]">
                      Technologies
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={`${project.id}-${technology}`}
                          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-2.5 py-1.5 text-xs font-medium text-[var(--color-text-muted)]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-[var(--color-border)] pt-5">
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
                  >
                    View Details
                    <FiArrowUpRight size={16} aria-hidden="true" />
                  </Link>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-3 py-2.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary-light)]"
                    >
                      <FiCode size={16} aria-hidden="true" />
                      GitHub
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live ${project.title} website`}
                      className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-3 py-2.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary-light)]"
                    >
                      <FiExternalLink size={16} aria-hidden="true" />
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>

        {/* Other Projects */}
        <div className="mb-10 mt-24 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-primary-light)]">
            More from my work
          </p>

          <h2
            id="other-projects-title"
            className="mb-5 font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl"
          >
            Other Projects
          </h2>

          <p className="text-base leading-7 text-[var(--color-text-muted)]">
            More experiments and projects that reflect my learning,
            problem-solving, and exploration of software development.
          </p>
        </div>

        <div
          aria-labelledby="other-projects-title"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {otherProjectsData.map((project) => {
            const CategoryIcon =
              categoryIcons[project.category] || categoryIcons.default

            return (
              <article
                key={project.id}
                className="group flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/60 hover:bg-[var(--color-card)] sm:p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]">
                  <CategoryIcon size={21} aria-hidden="true" />
                </div>

                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-primary-light)]">
                  {project.category}
                </p>

                <h3 className="mb-3 font-['Space_Grotesk'] text-lg font-bold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary-light)]">
                  {project.title}
                </h3>

                <p className="mb-5 text-sm leading-6 text-[var(--color-text-muted)]">
                  {project.description}
                </p>

                {project.technologies?.length > 0 && (
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={`${project.id}-${technology}`}
                        className="rounded-md border border-[var(--color-border)] bg-[var(--color-background)] px-2 py-1 text-xs text-[var(--color-text-muted)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-auto border-t border-[var(--color-border)] pt-4">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-light)] transition-colors hover:text-[var(--color-text)]"
                    >
                      <FiCode size={16} aria-hidden="true" />
                      View on GitHub
                      <FiArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)]">
                      <FiLayers size={16} aria-hidden="true" />
                      Project showcase
                    </span>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
