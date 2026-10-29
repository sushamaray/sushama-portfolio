import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import Contact from './components/Contact'
import Footer from './components/Footer'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}

function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-[var(--color-background)] px-6 text-center transition-colors duration-300">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-primary-light)]">
        404 Error
      </p>

      <h1 className="mb-4 font-['Space_Grotesk'] text-4xl font-bold text-[var(--color-text)]">
        Page Not Found
      </h1>

      <p className="mb-8 max-w-md leading-7 text-[var(--color-text-muted)]">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="rounded-lg bg-[var(--color-primary)] px-5 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
      >
        Back to Home
      </Link>
    </section>
  )
}

function App() {
  const location = useLocation()

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    return savedTheme === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark',
    )
  }

  useEffect(() => {
    const targetSection = sessionStorage.getItem(
      'portfolio-target-section',
    )

    if (location.pathname === '/' && targetSection) {
      sessionStorage.removeItem('portfolio-target-section')

      const sectionId = targetSection.slice(1)

      requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      })
    }
  }, [location.pathname, location.hash])

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
