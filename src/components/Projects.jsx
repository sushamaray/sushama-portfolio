
import { Link } from 'react-router-dom'
import {
  FiArrowUpRight,
  FiCode,
  FiExternalLink,
  FiLayers,
} from 'react-icons/fi'
import {projectsData} from '../data/projectsData'

const categoryIcons = {
  Web: FiCode,
  Fullstack: FiLayers,
  default: FiCode,
}

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0B0B12] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#A78BFA]">
            My Work
          </p>

          <h2 className="mb-5 text-3xl font-bold tracking-tight text-[#F5F3FF] sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>

          <p className="text-base leading-7 text-[#A1A1B5] sm:text-lg">
            A selection of projects where I turn ideas into practical,
            user-focused digital experiences.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => {
            const CategoryIcon =
              categoryIcons[project.category] || categoryIcons.default

            return (
              <article
                key={project.id}
                className="group flex h-full flex-col rounded-2xl border border-[#2B2B3D] bg-[#12121C] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/60 hover:bg-[#1B1B2A]"
              >
                {/* Project header */}
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-[#A78BFA]">
                    <CategoryIcon size={23} aria-hidden="true" />
                  </div>

                  <span className="rounded-full border border-[#2B2B3D] px-3 py-1 text-xs font-medium text-[#A1A1B5]">
                    {project.year}
                  </span>
                </div>

                {/* Project information */}
                <div className="mb-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#A78BFA]">
                    {project.category}
                  </p>

                  <h3 className="mb-2 text-xl font-bold text-[#F5F3FF] transition-colors group-hover:text-[#A78BFA]">
                    {project.title}
                  </h3>

                  <p className="text-sm font-medium text-[#A1A1B5]">
                    {project.subtitle}
                  </p>
                </div>

                <p className="mb-6 text-sm leading-7 text-[#A1A1B5]">
                  {project.description}
                </p>

                {/* Key features */}
                {project.features?.length > 0 && (
                  <div className="mb-6">
                    <h4 className="mb-3 text-sm font-semibold text-[#F5F3FF]">
                      Key Features
                    </h4>

                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li
                          key={`${project.id}-feature-${index}`}
                          className="flex items-start gap-2 text-sm leading-6 text-[#A1A1B5]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B5CF6]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {project.technologies?.length > 0 && (
                  <div className="mb-6">
                    <h4 className="mb-3 text-sm font-semibold text-[#F5F3FF]">
                      Technologies
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={`${project.id}-${technology}`}
                          className="rounded-lg border border-[#2B2B3D] bg-[#0B0B12] px-2.5 py-1.5 text-xs font-medium text-[#A1A1B5]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project links */}
                <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-[#2B2B3D] pt-5">
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#8B5CF6] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6D28D9]"
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
                      className="inline-flex items-center gap-2 rounded-lg border border-[#2B2B3D] px-3 py-2.5 text-sm font-medium text-[#F5F3FF] transition-colors hover:border-[#8B5CF6] hover:text-[#A78BFA]"
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
                      className="inline-flex items-center gap-2 rounded-lg border border-[#2B2B3D] px-3 py-2.5 text-sm font-medium text-[#F5F3FF] transition-colors hover:border-[#8B5CF6] hover:text-[#A78BFA]"
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
      </div>
    </section>
  )
}

export default Projects
