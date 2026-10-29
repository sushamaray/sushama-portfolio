
import {
  FiBookOpen,
  FiCalendar,
  FiMapPin,
  FiAward,
} from 'react-icons/fi'
import { educationData } from '../data/educationData'

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="scroll-mt-24 bg-[var(--color-background)] py-20 transition-colors duration-300 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        <div className="mb-14 text-center sm:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary-light)]">
            Academic background
          </p>

          <h2
            id="education-title"
            className="font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl"
          >
            My Education
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--color-text-muted)] sm:text-base sm:leading-8">
            My academic journey and the foundation behind my interest in
            technology.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-5 top-8 w-px bg-gradient-to-b from-[var(--color-primary-light)] via-[var(--color-primary)]/50 to-transparent sm:left-7"
          />

          {educationData.map((education) => (
            <article
              key={education.institution}
              className="relative pl-14 sm:pl-20"
            >
              <div
                aria-hidden="true"
                className="absolute left-[9px] top-7 flex h-6 w-6 items-center justify-center rounded-full border-4 border-[var(--color-background)] bg-[var(--color-primary)] shadow-[0_0_20px_rgba(139,92,246,0.35)] sm:left-[17px]"
              />

              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/50 sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-3 py-1.5 text-xs font-medium text-[var(--color-primary-light)]">
                      <FiBookOpen size={14} aria-hidden="true" />
                      {education.status}
                    </div>

                    <h3 className="font-['Space_Grotesk'] text-xl font-bold leading-snug text-[var(--color-text)] sm:text-2xl">
                      {education.institution}
                    </h3>

                    <p className="mt-2 text-sm font-medium leading-6 text-[var(--color-primary-light)] sm:text-base">
                      {education.degree}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2 self-start rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-sm text-[var(--color-text)]">
                    <FiCalendar
                      size={16}
                      className="text-[var(--color-primary-light)]"
                      aria-hidden="true"
                    />
                    <span>
                      {education.startDate} – {education.endDate}
                    </span>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-[var(--color-text-muted)]">
                  {education.description}
                </p>

                <div className="mt-6 grid gap-3 border-t border-[var(--color-border)] pt-5 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-xl bg-[var(--color-background)] p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]">
                      <FiMapPin size={19} aria-hidden="true" />
                    </div>

                    <div>
                      <p className="text-xs text-[var(--color-text-muted)]">
                        Institution
                      </p>
                      <p className="mt-1 text-sm font-medium text-[var(--color-text)]">
                        United International University, Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-[var(--color-background)] p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]">
                      <FiAward size={19} aria-hidden="true" />
                    </div>

                    <div>
                      <p className="text-xs text-[var(--color-text-muted)]">
                        CGPA
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[var(--color-text)]">
                        {education.cgpa}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
