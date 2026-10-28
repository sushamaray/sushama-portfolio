
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
      <section className="flex min-h-[70vh] flex-col items-center justify-center bg-[#0B0B12] px-6 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#A78BFA]">
          404 Error
        </p>

        <h1 className="mb-4 text-3xl font-bold text-[#F5F3FF] sm:text-4xl">
          Project Not Found
        </h1>

        <p className="mb-8 max-w-md leading-7 text-[#A1A1B5]">
          The project you are looking for does not exist or may have been moved.
        </p>

        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 rounded-lg bg-[#8B5CF6] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#6D28D9]"
        >
          <FiArrowLeft size={18} aria-hidden="true" />
          Back to Projects
        </Link>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-[#0B0B12] px-6 py-14 sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-5xl">
        {/* Back navigation */}
        <Link
          to="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-[#A78BFA] transition-colors hover:text-[#F5F3FF]"
        >
          <FiArrowLeft size={17} aria-hidden="true" />
          Back to Projects
        </Link>

        {/* Project hero */}
        <header className="mb-12 border-b border-[#2B2B3D] pb-10">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#8B5CF6]/40 bg-[#8B5CF6]/10 px-3 py-1.5 text-xs font-semibold text-[#A78BFA]">
              {project.category}
            </span>

            <span className="text-sm text-[#A1A1B5]">
              {project.year}
            </span>
          </div>

          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#F5F3FF] sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>

          <p className="mb-6 text-lg font-medium text-[#A78BFA] sm:text-xl">
            {project.subtitle}
          </p>

          <div className="max-w-3xl">
            <p className="text-base leading-8 text-[#A1A1B5]">
              {project.description}
            </p>
          </div>

          {/* Project links */}
          {(project.githubUrl || project.liveUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#8B5CF6] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6D28D9]"
                >
                  <FiExternalLink size={17} aria-hidden="true" />
                  Live Demo
                  <FiArrowUpRight size={15} aria-hidden="true" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#2B2B3D] px-5 py-3 text-sm font-semibold text-[#F5F3FF] transition-colors hover:border-[#8B5CF6] hover:text-[#A78BFA]"
                >
                  <FiCode size={17} aria-hidden="true" />
                  View Source Code
                  <FiArrowUpRight size={15} aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </header>

        {/* Main content */}
        <div className="grid gap-8 md:grid-cols-[1.6fr_1fr]">
          {/* Project overview and features */}
          <div className="space-y-8">
            <section className="rounded-2xl border border-[#2B2B3D] bg-[#12121C] p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8B5CF6]/10 text-[#A78BFA]">
                  <FiFolder size={20} aria-hidden="true" />
                </div>

                <h2 className="text-xl font-bold text-[#F5F3FF]">
                  Project Overview
                </h2>
              </div>

              <p className="text-sm leading-8 text-[#A1A1B5]">
                {project.description}
              </p>
            </section>

            <section className="rounded-2xl border border-[#2B2B3D] bg-[#12121C] p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8B5CF6]/10 text-[#A78BFA]">
                  <FiLayers size={20} aria-hidden="true" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#F5F3FF]">
                    Key Features
                  </h2>

                  <p className="mt-1 text-sm text-[#A1A1B5]">
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
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8B5CF6]" />

                      <p className="text-sm leading-7 text-[#A1A1B5]">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm leading-7 text-[#A1A1B5]">
                  Feature details will be added soon.
                </p>
              )}
            </section>
          </div>

          {/* Technology stack */}
          <aside>
            <section className="rounded-2xl border border-[#2B2B3D] bg-[#12121C] p-6 sm:p-8 md:sticky md:top-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8B5CF6]/10 text-[#A78BFA]">
                  <FiCode size={20} aria-hidden="true" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#F5F3FF]">
                    Technology Stack
                  </h2>

                  <p className="mt-1 text-sm text-[#A1A1B5]">
                    Tools and technologies
                  </p>
                </div>
              </div>

              {project.technologies?.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={`${project.id}-${technology}`}
                      className="rounded-lg border border-[#2B2B3D] bg-[#0B0B12] px-3 py-2 text-sm font-medium text-[#A1A1B5] transition-colors hover:border-[#8B5CF6]/60 hover:text-[#F5F3FF]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-[#A1A1B5]">
                  Technology information will be added soon.
                </p>
              )}

              <div className="mt-8 border-t border-[#2B2B3D] pt-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A78BFA]">
                  Project
                </p>

                <p className="text-base font-semibold text-[#F5F3FF]">
                  {project.title}
                </p>

                <p className="mt-1 text-sm text-[#A1A1B5]">
                  {project.year} · {project.category}
                </p>
              </div>
            </section>
          </aside>
        </div>

        {/* Bottom navigation */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#2B2B3D] pt-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#A78BFA] transition-colors hover:text-[#F5F3FF]"
          >
            <FiArrowLeft size={17} aria-hidden="true" />
            Explore More Projects
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#A1A1B5] transition-colors hover:text-[#F5F3FF]"
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
