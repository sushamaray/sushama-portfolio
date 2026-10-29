
import { Link, useParams } from 'react-router-dom'
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiCode,
  FiExternalLink,
  FiLayers,
  FiFolder,
} from 'react-icons/fi'
import { projectsData } from '../data/projectsData'

function ProjectDetail() {
  const { id } = useParams()

  const project = projectsData.find((item) => item.id === id)

  if (!project) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center bg-[var(--color-background)] px-6 text-center transition-colors duration-300">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-primary-light)]">
          404 Error
        </p>

        <h1 className="mb-4 font-['Space_Grotesk'] text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
          Project Not Found
        </h1>

        <p className="mb-8 max-w-md leading-7 text-[var(--color-text-muted)]">
          The project you are looking for does not exist or may have been moved.
        </p>

        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-5 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
        >
          <FiArrowLeft size={18} aria-hidden="true" />
          Back to Projects
        </Link>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-[var(--color-background)] px-6 py-14 transition-colors duration-300 sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary-light)] transition-colors hover:text-[var(--color-text)]"
        >
          <FiArrowLeft size={17} aria-hidden="true" />
          Back to Projects
        </Link>

        <header className="mb-12 border-b border-[var(--color-border)] pb-10">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 px-3 py-1.5 text-xs font-semibold text-[var(--color-primary-light)]">
              {project.category}
            </span>

            <span className="text-sm text-[var(--color-text-muted)]">
              {project.year}
            </span>
          </div>

          <h1 className="mb-4 font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>

          <p className="mb-6 text-lg font-medium text-[var(--color-primary-light)] sm:text-xl">
            {project.subtitle}
          </p>

          <div className="max-w-3xl">
            <p className="text-base leading-8 text-[var(--color-text-muted)]">
              {project.description}
            </p>
          </div>

          {(project.githubUrl || project.liveUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold !text-white transition-colors hover:bg-[var(--color-primary-dark)]"
                >
                  <FiExternalLink
                    size={17}
                    aria-hidden="true"
                    className="!text-white"
                  />
                  <span className="!text-white">Live Demo</span>
                  <FiArrowUpRight
                    size={15}
                    aria-hidden="true"
                    className="!text-white"
                  />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-5 py-3 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary-light)]"
                >
                  <FiCode size={17} aria-hidden="true" />
                  View Source Code
                  <FiArrowUpRight size={15} aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </header>

        <div className="grid gap-8 md:grid-cols-[1.6fr_1fr]">
          <div className="space-y-8">
            <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]">
                  <FiFolder size={20} aria-hidden="true" />
                </div>

                <h2 className="font-['Space_Grotesk'] text-xl font-bold text-[var(--color-text)]">
                  Project Overview
                </h2>
              </div>

              <p className="text-sm leading-8 text-[var(--color-text-muted)]">
                {project.description}
              </p>
            </section>

            <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]">
                  <FiLayers size={20} aria-hidden="true" />
                </div>

                <div>
                  <h2 className="font-['Space_Grotesk'] text-xl font-bold text-[var(--color-text)]">
                    Key Features
                  </h2>

                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Core capabilities of the project
                  </p>
                </div>
              </div>

              {project.features?.length > 0 ? (
                <ul className="space-y-5">
                  {project.features.map((feature, index) => (
                    <li
                      key={`${project.id}-feature-${index}`}
                      className="flex items-start gap-3"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]"
                      />

                      <p className="text-sm leading-7 text-[var(--color-text-muted)]">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm leading-7 text-[var(--color-text-muted)]">
                  Feature details will be added soon.
                </p>
              )}
            </section>
          </div>

          <aside>
            <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 md:sticky md:top-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]">
                  <FiCode size={20} aria-hidden="true" />
                </div>

                <div>
                  <h2 className="font-['Space_Grotesk'] text-xl font-bold text-[var(--color-text)]">
                    Technology Stack
                  </h2>

                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    Tools and technologies
                  </p>
                </div>
              </div>

              {project.technologies?.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={`${project.id}-${technology}`}
                      className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-primary)]/60 hover:text-[var(--color-text)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-[var(--color-text-muted)]">
                  Technology information will be added soon.
                </p>
              )}

              <div className="mt-8 border-t border-[var(--color-border)] pt-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-light)]">
                  Project
                </p>

                <p className="text-base font-semibold text-[var(--color-text)]">
                  {project.title}
                </p>

                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {project.year} · {project.category}
                </p>
              </div>
            </section>
          </aside>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border)] pt-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-light)] transition-colors hover:text-[var(--color-text)]"
          >
            <FiArrowLeft size={17} aria-hidden="true" />
            Explore More Projects
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
          >
            Back to Home
            <FiArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail
