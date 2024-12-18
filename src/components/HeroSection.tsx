export function HeroSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-4xl">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          A Start-Up Accelerator for{' '}
          <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Globally Impactful Ideas.
          </span>
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl">
          We are in the process of creating a studio office with space to accommodate our team and a cohort of 3 startups to ideate, test & delivery with us fall time.
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-black text-white rounded-full px-6 py-3">
            Let's Join Now
          </button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

