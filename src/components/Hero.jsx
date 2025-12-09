import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import img from "../assets/avator.png"
import cv from "../assets/Ali Muhammad CV.pdf"

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center mt-6 justify-between px-6 md:px-12 py-12 md:py-20 relative z-10">
      <div className="w-full md:w-1/2 text-white space-y-6 mt-6 md:mt-0">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-medium text-teal-400 h-8"
        >
          <Typewriter
            options={{
              strings: ['React Js Developer', 'Front-end Developer'],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </motion.div>
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Hello, I'm <br />
          <span className="text-white">Ali Muhammad</span>
        </motion.h1>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 max-w-lg text-lg"
        >
I turn ideas into clean, responsive, and user-friendly front-end websites and applications.        </motion.p>
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4 pt-4"
        >
          <a href='#projects' className="bg-linear-to-r  from-teal-400 to-blue-500 text-black font-bold px-8 py-3 rounded-full shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-shadow">
            View Projects
          </a>
          <a href={cv} download="Ali_Muhammad_Resume.pdf" className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors">
            My Resume
          </a>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-6 pt-8 text-white"
        >
          <a href="https://www.instagram.com/alimuhammad_lalani/" target="_blank" rel="noopener noreferrer">
            <Instagram  className="cursor-pointer hover:text-teal-400 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/alimuhammad-lalani/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="cursor-pointer hover:text-teal-400 transition-colors" />
          </a>
          <a href="https://github.com/AleeMuhammad" target="_blank" rel="noopener noreferrer">
            <Github className="cursor-pointer hover:text-teal-400 transition-colors" />
          </a>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-teal-500/20 blur-[100px] rounded-full pointer-events-none"></div>
        
        <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
        >
            <div className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] bg-linear-to-b  rounded-3xl flex items-center justify-center ">
            <img src={img} alt="" />
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
