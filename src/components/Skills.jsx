
import { skillCategories } from '../data/skillsData'

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="scroll-mt-24 bg-[var(--color-background)] py-20 transition-colors duration-300 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary-light)]">
            My technical toolkit
          </p>

          <h2
            id="skills-title"
            className="font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl"
          >
            Skills & Technologies
          </h2>

          <p className="mt-5 text-sm leading-7 text-[var(--color-text-muted)] sm:text-base sm:leading-8">
            Technologies I have studied or worked with as I build my
            foundation in software development, AI/ML, and related fields.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map(({ title, description, skills }) => (
            <article
              key={title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-card)] sm:p-7"
            >
              <div className="mb-6">
                <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-[var(--color-text)]">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                  {description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {skills.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    title={name}
                    className="group flex min-w-[88px] flex-1 flex-col items-center justify-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-4 text-center transition duration-200 hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary)]/10"
                  >
                    <Icon
                      size={27}
                      aria-hidden="true"
                      className="text-[var(--color-primary-light)] transition-transform duration-200 group-hover:scale-110"
                    />

                    <span className="text-xs font-medium text-[var(--color-text)]">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
