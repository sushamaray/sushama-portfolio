
import { skillCategories } from '../data/skillsData'

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#A78BFA]">
            My technical toolkit
          </p>

          <h2
            id="skills-title"
            className="font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-[#F5F3FF] sm:text-4xl lg:text-5xl"
          >
            Skills & <span className="text-[#A78BFA]">Technologies</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#A1A1B5] sm:text-base sm:leading-8">
            Technologies I have studied or worked with as I build my
            foundation in software development, AI/ML, and related fields.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map(({ title, description, skills }) => (
            <article
              key={title}
              className="rounded-2xl border border-[#2B2B3D] bg-[#12121C] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/50 hover:bg-[#1B1B2A] sm:p-7"
            >
              <div className="mb-6">
                <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-[#F5F3FF]">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#A1A1B5]">
                  {description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {skills.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    title={name}
                    className="group flex min-w-[88px] flex-1 flex-col items-center justify-center gap-3 rounded-xl border border-[#2B2B3D] bg-[#0B0B12] px-3 py-4 text-center transition duration-200 hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/10"
                  >
                    <Icon
                      size={27}
                      aria-hidden="true"
                      className="text-[#A78BFA] transition-transform duration-200 group-hover:scale-110"
                    />

                    <span className="text-xs font-medium text-[#D8D4E8]">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs leading-6 text-[#77778D]">
          This toolkit reflects my learning journey and is not a ranking of
          proficiency.
        </p>
      </div>
    </section>
  )
}
