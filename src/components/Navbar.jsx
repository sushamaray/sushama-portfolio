
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  FiGithub,
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiSun,
  FiMoon,
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

export default function Navbar({ theme, toggleTheme }) {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      if (!isHomePage) {
        setActiveSection('')
        return
      }

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

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isHomePage, location.pathname])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const handleNavClick = (event, href) => {
    closeMenu()

    if (isHomePage) {
      event.preventDefault()

      const targetSection = document.querySelector(href)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })

        window.history.replaceState(null, '', href)
      }

      return
    }

    sessionStorage.setItem('portfolio-target-section', href)
  }

  const getNavHref = (href) => (isHomePage ? href : `/${href}`)

  const isActive = (href) =>
    isHomePage && activeSection === href.slice(1)

  const themeToggleButton = (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] transition-colors duration-200 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? (
        <FiSun size={19} aria-hidden="true" />
      ) : (
        <FiMoon size={19} aria-hidden="true" />
      )}
    </button>
  )

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-[var(--color-border)] bg-[var(--color-navbar)]/95 shadow-lg shadow-black/10 backdrop-blur-xl'
          : 'border-transparent bg-[var(--color-navbar)]/80 backdrop-blur-md'
      }`}
    >
      <nav
        className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-3 px-5 sm:px-8 lg:gap-4 lg:px-10"
        aria-label="Main navigation"
      >
        <Link
          to="/#home"
          onClick={closeMenu}
          className="shrink-0 font-['Space_Grotesk'] text-2xl font-bold tracking-tight text-[var(--color-text)]"
          aria-label="Sushama Ray, home"
        >
          Sushama
          <span className="text-[var(--color-primary-light)]">.</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={getNavHref(href)}
              onClick={(event) => handleNavClick(event, href)}
              aria-current={isActive(href) ? 'location' : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive(href)
                  ? 'text-[var(--color-primary-light)]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0">
          {themeToggleButton}

          <a
            href="https://github.com/sushamaray"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-[var(--color-primary)]/50 px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition-all duration-200 hover:border-[var(--color-primary-light)] hover:bg-[var(--color-primary)]/10 lg:inline-flex"
          >
            <FiGithub size={17} aria-hidden="true" />
            GitHub
            <FiArrowUpRight size={15} aria-hidden="true" />
          </a>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] lg:hidden"
            aria-label={
              menuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <FiX size={23} aria-hidden="true" />
            ) : (
              <FiMenu size={23} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[var(--color-border)] bg-[var(--color-navbar)] px-5 pb-6 pt-3 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={getNavHref(href)}
                onClick={(event) => handleNavClick(event, href)}
                aria-current={isActive(href) ? 'location' : undefined}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(href)
                    ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary-light)]'
                    : 'text-[var(--color-text-muted)] hover:bg-[var(--color-primary)]/5 hover:text-[var(--color-text)]'
                }`}
              >
                {label}
              </a>
            ))}

            <a
              href="https://github.com/sushamaray"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--color-primary)]/50 px-4 py-3 text-sm font-semibold text-[var(--color-text)] hover:bg-[var(--color-primary)]/10"
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
