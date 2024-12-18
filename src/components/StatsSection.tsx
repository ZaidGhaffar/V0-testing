export function StatsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
        Problem
        <span className="text-purple-500">→</span>
      </h2>
      <div className="mb-8">
        <p className="text-gray-600 text-lg max-w-3xl">
          Indosian lacks a specialised Web3 Accelerator to help scale protocols, networks and communities.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-4xl font-bold mb-2">~65</h3>
          <p className="text-gray-600">
            Only a handful of Web3 Accelerators exist worldwide
          </p>
        </div>
        <div>
          <h3 className="text-4xl font-bold mb-2">5,000+</h3>
          <p className="text-gray-600">
            There is an shortage of Founders across Web3 who are exploring Web3 patterns or are looking to make a move from Web2 to Web3
          </p>
        </div>
        <div>
          <h3 className="text-4xl font-bold mb-2">10</h3>
          <p className="text-gray-600">
            Indonesia has an extremely limited number of specialised Web3 Accelerators
          </p>
        </div>
      </div>
    </section>
  )
}

