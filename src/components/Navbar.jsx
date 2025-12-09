import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href === '#' ? 'body' : href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-4 md:px-12 md:py-5 bg-black/60 opacity-80 backdrop-blur-sm border-b border-white/5">
      <div className="flex items-center gap-2 cursor-pointer flex-shrink-0" onClick={() => scrollToSection('#')}>
        <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-black font-bold text-xl">
            AM
        </div>
        <span className="text-lg md:text-xl font-bold text-white whitespace-nowrap">Ali Muhammad</span>
      </div>
      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href}
            onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
            className="text-gray-300 hover:text-white transition-colors relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>

      <div className="md:hidden text-white z-50 relative flex-shrink-0" onClick={toggleMenu}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium"
      >
       <a href="#contact">Reach Out</a>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-58  inset-0 bg-black  z-40 flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col gap-8 w-full grid place-items-center bg-black text-center">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-2xl text-white font-medium hover:text-teal-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium mt-4 mb-3 "
              >
                <a href="#contact">Reach Out</a>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
