import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WebTranslator from './languagechanger';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<div className="h-30 bg-white text-black">
  {/* Transparent Navbar */}
  <nav className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white/75 backdrop-blur-md' : 'bg-transparent'}`}>
    <div className="container mx-auto px-4 py-2 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        Freelance India
      </Link>
      <ul className="flex space-x-4">
        <li><Link to="/Home" className="hover:text-gray-500 transition-colors">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-500 transition-colors">About</Link></li>
        <li><Link to="/services" className="hover:text-gray-500 transition-colors">Services</Link></li>
        <li><Link to="/contact" className="hover:text-gray-500 transition-colors">Contact</Link></li>
      </ul>
      <div className='ml-4'>
       <WebTranslator/>
      </div>
    </div>
  </nav>
</div>
  );
};

export default Navbar;
