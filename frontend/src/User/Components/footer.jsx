// src/components/Footer.js
import React from 'react';
import { FaInstagram, FaTwitter} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold">Freelance India</h2>
            <p className="text-sm">Connect. Create. Succeed.</p>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="https://www.instagram.com/cyb3r.ishanwaghela/?__pwa=1" target="_blank" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://x.com/IshanWaghe8400" target="_blank" className="hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
          </div>
          <div className="text-center mt-4 text-sm">
            © 2024 Freelance India. All rights reserved.
          </div>
        </div>
      </footer>
  );
};

export default Footer;

