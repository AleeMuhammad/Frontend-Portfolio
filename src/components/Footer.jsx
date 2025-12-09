import React from 'react';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-gray-800 relative z-10 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Ali Muhammad. All rights reserved.
        </div>
        
        <div className="flex gap-6 text-gray-400">
          <a href="https://www.instagram.com/alimuhammad_lalani/" target="_blank" rel="noopener noreferrer">
            <Instagram  className="cursor-pointer w-5 hover:text-teal-400 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/alimuhammad-lalani/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="cursor-pointer W-5 hover:text-teal-400 transition-colors" />
          </a>
          <a href="https://github.com/AleeMuhammad" target="_blank" rel="noopener noreferrer">
            <Github className="cursor-pointer w-5 hover:text-teal-400 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
