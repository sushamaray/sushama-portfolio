
import { useEffect, useState } from 'react'
import {
  FiArrowDown,
  FiArrowUpRight,
  FiDownload,
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
} from 'react-icons/fi'

const roles = [
  'Aspiring Full Stack Developer',
  'AI/ML Enthusiast',
  'Computer Science Student',
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/sushamaray',
    Icon: FiGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sushamaray',
    Icon: FiLinkedin,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/ssushamaray',
    Icon: FiFacebook,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/_sushama.ray_',
    Icon: FiInstagram,
  },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedRole, setDisplayedRole] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let delay = deleting ? 35 : 75

    if (!deleting && displayedRole === currentRole) {
      delay = 1500
    } else if (deleting && displayedRole === '') {
      delay = 300
    }

    const timer = window.setTimeout(() => {
      if (!deleting && displayedRole === currentRole) {
        setDeleting(true)
        return
      }

      if (deleting && displayedRole === '') {
        setDeleting(false)
        setRoleIndex((index) => (index + 1) % roles.length)
        return
      }

      setDisplayedRole(
        currentRole.slice(
          0,
          displayedRole.length + (deleting ? -1 : 1),
        ),
      )
    }, delay)

    return () => window.clearTimeout(timer)
  }, [displayedRole, deleting, roleIndex])

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[calc(100svh-72px)] items-center overflow-hidden bg-[var(--color-background)] transition-colors duration-300"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-12rem] top-1/4 -z-10 h-80 w-80 rounded-full bg-[var(--color-primary)]/10 blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-10 lg:py-24">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <h1
            id="hero-title"
            className="font-['Space_Grotesk'] text-4xl font-bold leading-tight tracking-tight text-[var(--color-text)] sm:text-5xl md:text-6xl xl:text-7xl"
          >
            Hi, I&apos;m
            <span className="mt-1 block bg-gradient-to-r from-[var(--color-primary-light)] via-[var(--color-primary)] to-[#C4B5FD] bg-clip-text text-transparent">
              Sushama Ray.
            </span>
          </h1>

          <div
            className="mt-6 min-h-[3.5rem] text-lg font-semibold text-[var(--color-text)] sm:text-xl md:text-2xl"
            aria-label="Aspiring Full Stack Developer, AI/ML Enthusiast, Computer Science Student"
          >
            <span aria-hidden="true">{displayedRole}</span>
            <span
              aria-hidden="true"
              className="ml-1 inline-block h-6 w-[2px] translate-y-1 animate-pulse bg-[var(--color-primary-light)] sm:h-7"
            />
          </div>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--color-text-muted)] sm:text-base sm:leading-8 lg:mx-0">
            I&apos;m a Computer Science undergraduate building my foundation
            in software development, exploring AI/ML and Cyber Security,
            and turning what I learn into practical projects.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="/sushama-resume.pdf"
              download="Sushama-Ray-Resume.pdf"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary)] px-6 py-3 text-sm font-semibold !text-white shadow-lg shadow-[var(--color-primary)]/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[var(--color-primary)]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-light)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
            >
              <FiDownload
                size={18}
                aria-hidden="true"
                className="!text-white"
              />
              <span className="!text-white">Download Resume</span>
            </a>

            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition duration-200 hover:border-[var(--color-primary)]/70 hover:bg-[var(--color-primary)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-light)]"
            >
              Explore My Work
              <FiArrowDown size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <span className="mr-1 text-sm text-[var(--color-text-muted)]">
              Find me on
            </span>

            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${label} profile`}
                title={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] transition duration-200 hover:-translate-y-1 hover:border-[var(--color-primary)]/60 hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-light)]"
              >
                <Icon size={19} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px]">
            <div
              aria-hidden="true"
              className="absolute inset-8 rounded-full bg-[var(--color-primary)]/20 blur-[70px]"
            />

            <div
              aria-hidden="true"
              className="absolute -inset-3 rotate-6 rounded-[2rem] border border-[var(--color-primary)]/20"
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-primary-light)]/40 bg-gradient-to-br from-[var(--color-primary)]/20 via-[var(--color-card)] to-[var(--color-primary-dark)]/20 p-2 shadow-[0_0_60px_rgba(139,92,246,0.15)]">
              <img
                src="/sushama.png"
                alt="Portrait of Sushama Ray"
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center"
                fetchPriority="high"
              />
            </div>

            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[var(--color-primary)]/30 bg-[var(--color-surface)]/95 px-4 py-3 shadow-xl backdrop-blur sm:-left-8 sm:px-5">
              <p className="text-xs text-[var(--color-text-muted)]">
                Currently exploring
              </p>

              <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]">
                AI/ML &amp; Software Development
                <FiArrowUpRight
                  className="shrink-0 text-[var(--color-primary-light)]"
                  aria-hidden="true"
                />
              </p>
            </div>

            <div
              aria-hidden="true"
              className="absolute -right-2 top-8 h-4 w-4 rounded-full bg-[var(--color-primary-light)] shadow-[0_0_24px_#8B5CF6] sm:-right-5"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
