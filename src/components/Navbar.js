import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/button';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-4 backdrop-blur-md bg-transparent">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-black dark:text-white">
        SKILLPASS
      </Link>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-lg">
        <Link to="/about" className="hover:text-red-500 transition">
          About Us
        </Link>
        <Link to="/courses" className="hover:text-red-500 transition">
          Courses
        </Link>
        <Link to="/events" className="hover:text-red-500 transition">
          Events
        </Link>
        <Link to="/blog" className="hover:text-red-500 transition">
          Blog
        </Link>
        <Link to="/contacts" className="hover:text-red-500 transition">
          Contacts
        </Link>
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg shadow-md">
          Get consultation
        </Button>
        <Link
          to="/login"
          className="flex items-center space-x-2 hover:text-gray-500 transition"
        >
          <FaUser />
          <span>Log in / Register</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
