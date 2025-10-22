import React from 'react'
// import './header.css'

const Header = () => {
  return (
    <div  className="bg-white shadow-sm">
      <div id='header' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          SkillSync.<span className="text-blue-500">ai</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-700 font-medium">Log In</button>
          <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-50">
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header