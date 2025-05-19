import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          className="text-xl font-bold text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Sai Teja Varma
        </motion.div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-800 hover:text-secondary transition">
            About
          </Link>
          <Link to="/skills" className="text-gray-800 hover:text-secondary transition">
            Skills
          </Link>
          <Link to="/experience" className="text-gray-800 hover:text-secondary transition">
            Experience
          </Link>
          <Link to="/projects" className="text-gray-800 hover:text-secondary transition">
            Projects
          </Link>
          <a
            href="/resume.pdf"
            download
            className="ml-4 px-3 py-2 bg-secondary text-white rounded hover:bg-primary transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
