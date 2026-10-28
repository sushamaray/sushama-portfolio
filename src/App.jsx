import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import Contact from './components/Contact'


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
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-[#0B0B12] px-6 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#A78BFA]">
        404 Error
      </p>

      <h1 className="mb-4 text-4xl font-bold text-[#F5F3FF]">
        Page Not Found
      </h1>

      <p className="mb-8 max-w-md leading-7 text-[#A1A1B5]">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="rounded-lg bg-[#8B5CF6] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#6D28D9]"
      >
        Back to Home
      </Link>
    </section>
  )
}

function App() {
  const location = useLocation()

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
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
