import React from 'react'

const Newsapp = () => {
  return (
    <>
    
    <nav className="bg-gray-700 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-3xl font-bold text-white">
              NewsHub.
            </a>
          </div>

          {/* Links (Desktop Only) */}
          <div className="flex space-x-8">
            <a href="#" className="text-white hover:text-red-600 px-3 py-2 rounded-md text-xl font-medium">
              Home
            </a>
            <a href="#" className="text-white hover:text-red-600  px-3 py-2 rounded-md text-xl font-medium">
              World
            </a>
            <a href="#" className="text-white hover:text-red-600  px-3 py-2 rounded-md text-xl font-medium">
              Politics
            </a>
            <a href="#" className="text-white hover:text-red-600 px-3 py-2 rounded-md text-xl font-medium">
              Technology
            </a>
            <a href="#" className="text-white hover:text-red-600  px-3 py-2 rounded-md text-xl font-medium">
              Sports
            </a>
          </div>

          {/* Search Bar */}
          <div className="flex items-center relative">
            <input
              type="text"
              className="border border-gray-300 rounded-3xl pl-8 pr-4 py-2 text-sm"
              placeholder="Search news..."
            />
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.9 14.32a7.53 7.53 0 111.42 1.42l5.58 5.58a1 1 0 01-1.42 1.42l-5.58-5.58a7.53 7.53 0 01-7.9-7.9zM10 14a4 4 0 100-8 4 4 0 000 8z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </nav>
  
    </>
  )
}

export default Newsapp
