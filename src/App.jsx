
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />

      <main
        id="home"
        className="flex min-h-[150vh] items-start justify-center px-5 pt-24 text-center"
      >
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#A78BFA]">
            Portfolio Setup
          </p>

          <h1 className="font-['Space_Grotesk'] text-3xl font-bold text-[#F5F3FF] sm:text-4xl">
            Navbar is ready
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#A1A1B5]">
            This is temporary test content. We will replace it with the actual
            portfolio sections in the upcoming steps.
          </p>
        </div>
      </main>
    </>
  )
}

export default App
