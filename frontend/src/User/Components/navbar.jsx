

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">MyApp</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/login" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Home</Link>
          </li>
          <li>
            <a href="#about" className="text-white hover:bg-gray-700 px-3 py-2 rounded">About</a>
          </li>
          <li>
            <a href="#services" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Services</a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
