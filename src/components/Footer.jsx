
import { Link } from 'react-router-dom'
import {
  FiArrowUp,
  FiGithub,
  FiLinkedin,
  FiFacebook,
} from 'react-icons/fi'

const quickLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Education', href: '/#education' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
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
    href: 'https://www.facebook.com/Ssushamaray',
    Icon: FiFacebook,
  },
  {
      label: 'Instagram',
      href: 'https://www.instagram.com/_sushama.ray_',
      Icon: FiInstagram,
    },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#2B2B3D] bg-[#0B0B12] px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link
              to="/#home"
              className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight text-[#F5F3FF]"
            >
              Sushama<span className="text-[#A78BFA]">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[#A1A1B5]">
              Computer Science undergraduate exploring software
              development, AI/ML, and Cyber Security through practical
              projects and continuous learning.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#F5F3FF]">
              Quick Links
            </h2>

            <nav
              aria-label="Footer navigation"
              className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3"
            >
              {quickLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-fit text-sm text-[#A1A1B5] transition-colors hover:text-[#A78BFA]"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#F5F3FF]">
              Connect
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#A1A1B5]">
              Let&apos;s connect and explore opportunities to collaborate.
            </p>

            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${label} profile`}
                  title={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#2B2B3D] bg-[#12121C] text-[#A1A1B5] transition-colors hover:border-[#8B5CF6]/60 hover:text-[#A78BFA]"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#2B2B3D] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-[#A1A1B5]">
            © {currentYear} Sushama Ray. All rights reserved.
          </p>

          <a
            href="#home"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-[#A78BFA] transition-colors hover:text-[#F5F3FF]"
          >
            Back to top
            <FiArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
