import React from 'react'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-sm">
      <div id="header" className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          SkillSync.<span className="text-blue-500">ai</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate("/upload")}
            className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-50">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
