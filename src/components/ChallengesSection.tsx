export function ChallengesSection() {
  const challenges = [
    {
      title: "Limited Resources",
      description: "Web3 startups often struggle to find the necessary resources and support to scale their projects effectively."
    },
    {
      title: "Lack of Expertise",
      description: "Many founders lack the specialized knowledge required to navigate the complex Web3 landscape."
    },
    {
      title: "Regulatory Challenges",
      description: "The evolving regulatory environment poses significant challenges for Web3 startups, especially in emerging markets."
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {challenges.map((challenge) => (
          <div key={challenge.title} className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{challenge.title}</h3>
            <p className="text-gray-600">{challenge.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

