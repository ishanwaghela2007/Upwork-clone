
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Navbarland = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-lg text-gray-500">Freelance India</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/#" className="py-4 px-2 font-semibold text-gray-500 hover:text-green-500 transition duration-300">Home</Link>
            <Link to="/#" className="py-4 px-2 font-semibold text-gray-500 hover:text-green-500 transition duration-300">About</Link>
            <Link to="/#" className="py-4 px-2 font-semibold text-gray-500 hover:text-green-500 transition duration-300">Services</Link>
            <Link to="/Contact" className="py-4 px-2 font-semibold text-gray-500 hover:text-green-500 transition duration-300">Contact</Link>
            <Link to="/home" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Home</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbarland
