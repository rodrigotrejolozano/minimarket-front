import React from 'react'

const Navbar:React.FC = () => {

  return (
    <>
      <nav className="fixed z-20 top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-md ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold text-blue-800">MiniMarket</span>
            <div className="flex space-x-4">

            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar