
import {
  FiCode,
  FiCpu,
  FiShield,
  FiBookOpen,
  FiArrowUpRight,
} from 'react-icons/fi'

const interests = [
  {
    icon: FiCode,
    title: 'Software Development',
    description:
      'Building a strong foundation in full stack development and learning to turn ideas into useful applications.',
  },
  {
    icon: FiCpu,
    title: 'AI & Machine Learning',
    description:
      'Exploring machine learning, practical ML pipelines, and computer vision to understand how intelligent systems work.',
  },
  {
    icon: FiShield,
    title: 'Cyber Security',
    description:
      'Developing an understanding of security fundamentals and exploring ways to build more secure systems.',
  },
  {
    icon: FiBookOpen,
    title: 'Research & Learning',
    description:
      'Connecting academic concepts with practical experiments, including research related to IoT security.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative scroll-mt-24 overflow-hidden bg-[var(--color-background)] py-20 transition-colors duration-300 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10rem] top-20 -z-10 h-72 w-72 rounded-full bg-[var(--color-primary)]/10 blur-[110px]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary-light)]">
            Get to know me
          </p>

          <h2
            id="about-title"
            className="font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl"
          >
            About Me
          </h2>

          <p className="mt-5 text-sm leading-7 text-[var(--color-text-muted)] sm:text-base sm:leading-8">
            A computer science student, an aspiring developer, and a
            curious learner exploring the intersection of software,
            intelligent systems, and security.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative">
            <div className="absolute -inset-3 rotate-2 rounded-3xl border border-[var(--color-primary)]/20" />

            <div className="relative rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors duration-300 sm:p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]">
                <FiCode size={23} aria-hidden="true" />
              </div>

              <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-[var(--color-text)] sm:text-2xl">
                Learning by building
              </h3>

              <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--color-text-muted)] sm:text-base sm:leading-8">
                <p>
                  I&apos;m Sushama Ray, a Computer Science and Engineering
                  undergraduate from Bangladesh. I&apos;m building my
                  foundation in software development while working toward
                  becoming a full stack developer.
                </p>

                <p>
                  I enjoy understanding how things work, experimenting with
                  new technologies, and turning what I learn into small,
                  practical projects. For me, building something is a way
                  to test my understanding and discover what I still need
                  to learn.
                </p>

                <p>
                  Alongside web development, I&apos;m exploring AI/ML,
                  computer vision, and Cyber Security. My IoT-focused
                  research background has also encouraged me to think
                  about how technology can be both useful and secure.
                </p>
              </div>

              <div className="mt-7 border-t border-[var(--color-border)] pt-6">
                <p className="text-sm font-medium text-[var(--color-text)]">
                  My approach
                </p>

                <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
                  Learn the fundamentals. Build practical solutions.
                  Improve through testing, feedback, and iteration.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-[var(--color-text)] sm:text-2xl">
                What I&apos;m interested in
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                I&apos;m developing my skills across these areas while
                continuing to strengthen my core computer science
                knowledge.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {interests.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-card)] sm:p-6"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-primary)]/25 bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] transition-colors group-hover:bg-[var(--color-primary)]/20">
                    <Icon size={21} aria-hidden="true" />
                  </div>

                  <h4 className="flex items-start justify-between gap-2 font-['Space_Grotesk'] text-base font-semibold text-[var(--color-text)]">
                    {title}
                    <FiArrowUpRight
                      className="mt-1 shrink-0 text-[var(--color-primary-light)] opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                    {description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-dashed border-[var(--color-primary)]/40 bg-[var(--color-primary)]/5 p-5 sm:p-6">
              <p className="text-sm font-semibold text-[var(--color-primary-light)]">
                Beyond programming
              </p>

              <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
                Beyond technology, I enjoy exploring creative ideas through graphic design and UI/UX design, learning new skills, and sharing knowledge with others. I love combining creativity with technology to create meaningful digital experiences. I believe in patience, continuous learning, and personal growth throughout my journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
