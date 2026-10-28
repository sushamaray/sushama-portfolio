
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
    href: 'https://www.linkedin.com/',
    Icon: FiLinkedin,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    Icon: FiInstagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    Icon: FiFacebook,
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
      className="relative isolate flex min-h-[calc(100svh-72px)] items-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-12rem] top-1/4 -z-10 h-80 w-80 rounded-full bg-[#6D28D9]/15 blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-10 lg:py-24">
        <div className="order-2 text-center lg:order-1 lg:text-left">

          <h1
            id="hero-title"
            className="font-['Space_Grotesk'] text-4xl font-bold leading-tight tracking-tight text-[#F5F3FF] sm:text-5xl md:text-6xl xl:text-7xl"
          >
            Hi, I&apos;m
            <span className="mt-1 block bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C4B5FD] bg-clip-text text-transparent">
              Sushama Ray.
            </span>
          </h1>

          <div
            className="mt-6 min-h-[3.5rem] text-lg font-semibold text-[#F5F3FF] sm:text-xl md:text-2xl"
            aria-label={`Aspiring Full Stack Developer, AI/ML Enthusiast, Computer Science Student`}
          >
            <span aria-hidden="true">{displayedRole}</span>
            <span
              aria-hidden="true"
              className="ml-1 inline-block h-6 w-[2px] translate-y-1 animate-pulse bg-[#A78BFA] sm:h-7"
            />
          </div>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#A1A1B5] sm:text-base sm:leading-8 lg:mx-0">
            I&apos;m a Computer Science undergraduate building my foundation
            in software development, exploring AI/ML and Cyber Security,
            and turning what I learn into practical projects.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="/resume.pdf"
              download="Sushama-Ray-Resume.pdf"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#6D28D9]/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#6D28D9]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B12]"
            >
              <FiDownload size={18} aria-hidden="true" />
              Download Resume
            </a>

            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#2B2B3D] px-6 py-3 text-sm font-semibold text-[#F5F3FF] transition duration-200 hover:border-[#8B5CF6]/70 hover:bg-[#8B5CF6]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]"
            >
              Explore My Work
              <FiArrowDown size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <span className="mr-1 text-sm text-[#A1A1B5]">
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
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#2B2B3D] bg-[#12121C] text-[#A1A1B5] transition duration-200 hover:-translate-y-1 hover:border-[#8B5CF6]/60 hover:bg-[#8B5CF6]/10 hover:text-[#C4B5FD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]"
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
              className="absolute inset-8 rounded-full bg-[#8B5CF6]/25 blur-[70px]"
            />

            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] border border-[#8B5CF6]/20 rotate-6"
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#A78BFA]/40 bg-gradient-to-br from-[#8B5CF6]/25 via-[#1B1B2A] to-[#6D28D9]/30 p-2 shadow-[0_0_60px_rgba(139,92,246,0.15)]">
              <img
                src="/sushama.png"
                alt="Portrait of Sushama Ray"
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center"
                fetchPriority="high"
              />
            </div>

            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[#8B5CF6]/30 bg-[#12121C]/95 px-4 py-3 shadow-xl backdrop-blur sm:-left-8 sm:px-5">
              <p className="text-xs text-[#A1A1B5]">Currently exploring</p>
              <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-[#F5F3FF]">
                AI/ML & Software Development
                <FiArrowUpRight
                  className="shrink-0 text-[#A78BFA]"
                  aria-hidden="true"
                />
              </p>
            </div>

            <div
              aria-hidden="true"
              className="absolute -right-2 top-8 h-4 w-4 rounded-full bg-[#A78BFA] shadow-[0_0_24px_#8B5CF6] sm:-right-5"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
