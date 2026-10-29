import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiArrowUpRight,
  FiMessageCircle,
} from 'react-icons/fi'

const contactLinks = [
  {
    label: 'LinkedIn',
    value: 'Connect professionally',
    href: 'https://www.linkedin.com/in/sushamaray',
    Icon: FiLinkedin,
  },
  {
    label: 'GitHub',
    value: 'Explore my projects',
    href: 'https://github.com/sushamaray',
    Icon: FiGithub,
  },
  {
    label: 'Facebook',
    value: 'Connect with me',
    href: 'https://www.facebook.com/Ssushamaray',
    Icon: FiFacebook,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-[var(--color-background)] px-5 py-20 transition-colors duration-300 sm:px-8 sm:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-light)]">
            Get in touch
          </p>

          <h2
            id="contact-title"
            className="font-['Space_Grotesk'] text-3xl font-bold text-[var(--color-text)] sm:text-4xl lg:text-5xl"
          >
            Let&apos;s Connect
          </h2>

          <p className="mt-5 text-sm leading-7 text-[var(--color-text-muted)] sm:text-base sm:leading-8">
            I&apos;m open to discussing opportunities, collaborating on
            projects, and connecting with people in software development
            and AI/ML.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <a
            href="mailto:contact.sushamaray@gmail.com"
            className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition duration-200 hover:-translate-y-1 hover:border-[var(--color-primary)]/60 sm:p-8"
          >
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]">
              <FiMail size={23} aria-hidden="true" />
            </span>

            <h3 className="text-xl font-bold text-[var(--color-text)]">
              Email Me
            </h3>

            <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
              Have an opportunity or an idea? Let&apos;s talk.
            </p>

            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-light)]">
              Send an email
              <FiArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              />
            </span>
          </a>

          {contactLinks.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition duration-200 hover:-translate-y-1 hover:border-[var(--color-primary)]/60 sm:p-8"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]">
                <Icon size={23} aria-hidden="true" />
              </span>

              <h3 className="text-xl font-bold text-[var(--color-text)]">
                {label}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                {value}
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-light)]">
                Visit {label}
                <FiArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-[var(--color-text-muted)]">
          <FiMessageCircle
            size={17}
            className="text-[var(--color-primary-light)]"
            aria-hidden="true"
          />
          Looking forward to connecting with you.
        </div>
      </div>
    </section>
  )
}
