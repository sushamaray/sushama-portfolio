
import {
  FiBriefcase,
  FiBookOpen,
  FiAward,
  FiUsers,
  FiCheckCircle,
} from 'react-icons/fi'

import {
  researchData,
  achievementData,
  certificationData,
  experienceData,
} from '../data/experienceData'

const cardClass =
  'rounded-2xl border border-[#2B2B3D] bg-[#12121C] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/50 sm:p-7'

function SectionHeading({ icon: Icon, title }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-[#A78BFA]">
        <Icon size={21} aria-hidden="true" />
      </div>
      <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#F5F3FF] sm:text-2xl">
        {title}
      </h3>
    </div>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#A78BFA]">
            My journey so far
          </p>

          <h2
            id="experience-title"
            className="font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-[#F5F3FF] sm:text-4xl lg:text-5xl"
          >
            Experience, Research{' '}
            <span className="text-[#A78BFA]">& Achievements</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A1A1B5] sm:text-base sm:leading-8">
            A snapshot of my research interests, leadership experience,
            community involvement, and continuous learning.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading
              icon={FiBriefcase}
              title="Experience & Leadership"
            />

            <div className="space-y-4">
              {experienceData.map((item) => (
                <article key={item.organization} className={cardClass}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#A78BFA]">
                    {item.period}
                  </p>

                  <h4 className="mt-3 font-['Space_Grotesk'] text-lg font-semibold text-[#F5F3FF]">
                    {item.role}
                  </h4>

                  <p className="mt-1 text-sm font-medium text-[#C4B5FD]">
                    {item.organization}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-[#A1A1B5]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <SectionHeading icon={FiBookOpen} title="Research" />

              {researchData.map((item) => (
                <article key={item.title} className={cardClass}>
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-3 py-1 text-xs font-medium text-[#C4B5FD]">
                      {item.category}
                    </span>

                    <span className="inline-flex items-center gap-2 text-xs font-medium text-[#A78BFA]">
                      <span
                        className="h-2 w-2 rounded-full bg-[#A78BFA]"
                        aria-hidden="true"
                      />
                      {item.status}
                    </span>
                  </div>

                  <h4 className="font-['Space_Grotesk'] text-lg font-semibold leading-7 text-[#F5F3FF]">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-[#A1A1B5]">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-[#2B2B3D] bg-[#0B0B12] px-3 py-1.5 text-xs text-[#D8D4E8]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div>
              <SectionHeading icon={FiAward} title="Achievements" />

              
              {achievementData.map((item) => (
                <article key={item.title} className={cardClass}>
                  <div className="flex items-start gap-4">
                    <FiCheckCircle
                      size={22}
                      className="mt-1 shrink-0 text-[#A78BFA]"
                      aria-hidden="true"
                    />

                    <div>
                      <h4 className="font-semibold text-[#F5F3FF]">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm text-[#A78BFA]">
                        {item.organization}
                      </p>

                      <p className="mt-3 text-sm leading-6 text-[#A1A1B5]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div>
              <SectionHeading
                icon={FiUsers}
                title="Certifications & Learning"
              />

              <div className={`${cardClass} flex flex-wrap gap-3`}>
                {certificationData.map((certification) => (
                  <span
                    key={certification}
                    className="rounded-xl border border-[#2B2B3D] bg-[#0B0B12] px-3 py-2.5 text-sm text-[#D8D4E8] transition-colors hover:border-[#8B5CF6]/50 hover:text-[#F5F3FF]"
                  >
                    {certification}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
