
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiArrowUpRight,
  FiMessageCircle,
} from 'react-icons/fi'

const socialLinks = [
  {
    label: 'Email Me',
    value: "Have an opportunity or an idea? Let's talk.",
    href: 'mailto:contact.sushamaray@gmail.com',
    action: 'Send an email',
    Icon: FiMail,
  },
  {
    label: 'LinkedIn',
    value: 'Connect professionally',
    href: 'https://www.linkedin.com/in/sushamaray',
    action: 'Visit LinkedIn',
    Icon: FiLinkedin,
  },
  {
    label: 'Facebook',
    value: 'Connect with me',
    href: 'https://www.facebook.com/Ssushamaray',
    action: 'Visit Facebook',
    Icon: FiFacebook,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-[var(--color-background)] px-4 py-14 transition-colors duration-300 sm:px-8 sm:py-16 lg:px-10"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-light)] sm:text-sm">
            Get in touch
          </p>

          <h2
            id="contact-title"
            className="font-['Space_Grotesk'] text-3xl font-bold text-[var(--color-text)] sm:text-4xl lg:text-5xl"
          >
            Let&apos;s Connect
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[var(--color-text-muted)] sm:text-base sm:leading-8">
            I&apos;m open to discussing opportunities, collaborating on
            projects, and connecting with people in software development
            and AI/ML.
          </p>
        </div>

        {/* Email, LinkedIn, Facebook */}
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {socialLinks.map(({ label, value, href, action, Icon }) => {
            const isEmail = href.startsWith('mailto:')

            return (
              <a
                key={label}
                href={href}
                target={isEmail ? undefined : '_blank'}
                rel={isEmail ? undefined : 'noopener noreferrer'}
                className="group flex min-w-0 flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-primary)]/60 sm:p-4"
              >
                <div className="flex min-w-0 flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] sm:h-9 sm:w-9">
                    <Icon size={18} aria-hidden="true" />
                  </span>

                  <h3 className="break-words text-xs font-semibold text-[var(--color-text)] sm:text-sm">
                    {label}
                  </h3>
                </div>

                <p className="mt-3 text-xs leading-5 text-[var(--color-text-muted)]">
                  {value}
                </p>

                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary-light)]">
                  <span>{action}</span>
                  <FiArrowUpRight
                    size={14}
                    className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </a>
            )
          })}

          {/* GitHub: fourth card on mobile, full-width row on desktop */}
          <a
            href="https://github.com/sushamaray"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-w-0 flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-primary)]/60 sm:col-span-3 sm:flex-row sm:items-center sm:gap-4 sm:p-3"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] sm:h-11 sm:w-11">
              <FiGithub size={22} aria-hidden="true" />
            </span>

            <span className="mt-2 min-w-0 flex-1 sm:mt-0">
              <span className="block text-xs font-semibold text-[var(--color-text)] sm:text-base">
                GitHub
              </span>
              <span className="mt-1 block text-xs leading-5 text-[var(--color-text-muted)] sm:text-sm">
                Explore my projects
              </span>
            </span>

            <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary-light)] sm:mt-0 sm:gap-1.5 sm:text-sm">
              <span>Visit GitHub</span>
              <FiArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </a>
        </div>

        <div className="mt-7 flex items-center justify-center gap-2 text-center text-xs text-[var(--color-text-muted)] sm:text-sm">
          <FiMessageCircle
            size={16}
            className="shrink-0 text-[var(--color-primary-light)]"
            aria-hidden="true"
          />
          Looking forward to connecting with you.
        </div>
      </div>
    </section>
  )
}
