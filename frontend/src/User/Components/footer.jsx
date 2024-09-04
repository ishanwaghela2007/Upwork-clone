// src/components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">© 2024 MyApp. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li>
            <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a>
          </li>
          <li>
            <a href="#terms" className="hover:text-gray-400">Terms of Service</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
