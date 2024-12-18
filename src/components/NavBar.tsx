export function NavBar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="/" className="text-xl font-bold">
            StartBrite
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#position" className="text-gray-600 hover:text-gray-900">
              Position
            </a>
            <a href="#solution" className="text-gray-600 hover:text-gray-900">
              Solution
            </a>
            <a href="#program" className="text-gray-600 hover:text-gray-900">
              Program
            </a>
          </div>
          <button className="bg-black text-white rounded-full px-4 py-2">
            Let's Join Now
          </button>
        </div>
      </div>
    </nav>
  )
}

