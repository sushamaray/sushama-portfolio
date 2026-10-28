
import { FiBookOpen, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi'
import { educationData } from '../data/educationData'

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        <div className="mb-14 text-center sm:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#A78BFA]">
            Academic background
          </p>

          <h2
            id="education-title"
            className="font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-[#F5F3FF] sm:text-4xl lg:text-5xl"
          >
            My Education
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A1A1B5] sm:text-base sm:leading-8">
            My academic journey and the foundation behind my interest in
            technology.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-5 top-8 w-px bg-gradient-to-b from-[#A78BFA] via-[#8B5CF6]/50 to-transparent sm:left-7"
          />

          {educationData.map((education) => (
            <article
              key={education.institution}
              className="relative pl-14 sm:pl-20"
            >
              <div
                aria-hidden="true"
                className="absolute left-[9px] top-7 flex h-6 w-6 items-center justify-center rounded-full border-4 border-[#0B0B12] bg-[#8B5CF6] shadow-[0_0_20px_rgba(139,92,246,0.45)] sm:left-[17px]"
              />

              <div className="rounded-2xl border border-[#2B2B3D] bg-[#12121C] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/50 sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-3 py-1.5 text-xs font-medium text-[#C4B5FD]">
                      <FiBookOpen size={14} aria-hidden="true" />
                      {education.status}
                    </div>

                    <h3 className="font-['Space_Grotesk'] text-xl font-bold leading-snug text-[#F5F3FF] sm:text-2xl">
                      {education.institution}
                    </h3>

                    <p className="mt-2 text-sm font-medium leading-6 text-[#A78BFA] sm:text-base">
                      {education.degree}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2 self-start rounded-xl border border-[#2B2B3D] bg-[#0B0B12] px-3 py-2 text-sm text-[#D8D4E8]">
                    <FiCalendar
                      size={16}
                      className="text-[#A78BFA]"
                      aria-hidden="true"
                    />
                    <span>
                      {education.startDate} – {education.endDate}
                    </span>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-[#A1A1B5]">
                  {education.description}
                </p>

                <div className="mt-6 grid gap-3 border-t border-[#2B2B3D] pt-5 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-xl bg-[#0B0B12] p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#8B5CF6]/10 text-[#A78BFA]">
                      <FiMapPin size={19} aria-hidden="true" />
                    </div>

                    <div>
                      <p className="text-xs text-[#A1A1B5]">Institution</p>
                      <p className="mt-1 text-sm font-medium text-[#F5F3FF]">
                        United International University, Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-[#0B0B12] p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#8B5CF6]/10 text-[#A78BFA]">
                      <FiAward size={19} aria-hidden="true" />
                    </div>

                    <div>
                      <p className="text-xs text-[#A1A1B5]">CGPA</p>
                      <p className="mt-1 text-sm font-semibold text-[#F5F3FF]">
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
