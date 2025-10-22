import React from 'react'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';


const Footer = () => {
  return (
    <div>
        {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">
                SkillSync<span className="text-blue-500">.ai</span>
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Your AI Powered Resume Analyzer.
              </p>
              <p className="text-gray-600 text-sm">@SkillSync</p>
            </div>

            {/* About Links */}
            <div>
              <h4 className="font-bold mb-4">About us</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 text-sm hover:text-blue-500">Features</a></li>
                <li><a href="https://sarthak-digital-resume.streamlit.app/" className="text-gray-600 text-sm hover:text-blue-500">Portfolio</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-blue-500">Careers</a></li>
                <li><a href="#" className="text-gray-600 text-sm hover:text-blue-500">Contact us</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Contact us</h4>
              <p className="text-gray-600 text-sm mb-4">
                Made with ❤️ by Sarthak Jain
              </p>
              <p className="text-gray-600 text-sm mb-6">+91 8307824496</p>
              
              {/* Social Icons */}
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/_sarthakjain10/" className="text-gray-600 hover:text-blue-500">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/sarthak-jain-sahab/" className="text-gray-600 hover:text-blue-500">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">Copyright © 2025 All rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer