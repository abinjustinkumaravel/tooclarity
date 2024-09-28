import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-transparent text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a className='logo' href="/">Too CLARITY</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a href="/" className="hover:text-blue-500 transition-all duration-300">
            <FaFacebookF />
          </a>
          <a href="/" className="hover:text-blue-400 transition-all duration-300">
            <FaTwitter />
          </a>
          <a href="/" className="hover:text-pink-500 transition-all duration-300">
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
