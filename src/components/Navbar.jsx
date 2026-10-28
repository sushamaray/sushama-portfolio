
import { useEffect, useState } from 'react'
import {
  FiGithub,
  FiMenu,
  FiX,
  FiArrowUpRight,
} from 'react-icons/fi'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks
        .map(({ href }) => document.querySelector(href))
        .filter(Boolean)

      let currentSection = 'home'

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= 140) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-[#2B2B3D] bg-[#0B0B12]/95 shadow-lg shadow-black/10 backdrop-blur-xl'
          : 'border-transparent bg-[#0B0B12]/80 backdrop-blur-md'
      }`}
    >
      <nav
        className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          onClick={closeMenu}
          className="shrink-0 font-['Space_Grotesk'] text-2xl font-bold tracking-tight text-[#F5F3FF]"
          aria-label="Sushama Ray, home"
        >
          Sushama<span className="text-[#A78BFA]">.</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              aria-current={activeSection === href.slice(1) ? 'location' : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                activeSection === href.slice(1)
                  ? 'text-[#A78BFA]'
                  : 'text-[#A1A1B5] hover:text-[#F5F3FF]'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="https://github.com/sushamaray"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/50 px-4 py-2 text-sm font-semibold text-[#F5F3FF] transition-all duration-200 hover:border-[#A78BFA] hover:bg-[#8B5CF6]/10"
          >
            <FiGithub size={17} aria-hidden="true" />
            GitHub
            <FiArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-[#2B2B3D] text-[#F5F3FF] transition-colors hover:border-[#8B5CF6] lg:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX size={23} /> : <FiMenu size={23} />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#2B2B3D] bg-[#0B0B12] px-5 pb-6 pt-3 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                aria-current={activeSection === href.slice(1) ? 'location' : undefined}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  activeSection === href.slice(1)
                    ? 'bg-[#8B5CF6]/10 text-[#A78BFA]'
                    : 'text-[#A1A1B5] hover:bg-white/5 hover:text-[#F5F3FF]'
                }`}
              >
                {label}
              </a>
            ))}

            <a
              href="https://github.com/sushamaray"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-[#8B5CF6]/50 px-4 py-3 text-sm font-semibold text-[#F5F3FF] hover:bg-[#8B5CF6]/10"
            >
              <FiGithub size={17} aria-hidden="true" />
              Visit GitHub
              <FiArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
