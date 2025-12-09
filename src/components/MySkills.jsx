import React from 'react';
import { motion } from 'framer-motion';

// Import skill images
import htmlImg from '../assets/html.png';
import cssImg from '../assets/css.png';
import jsImg from '../assets/javascript.png';
import reactImg from '../assets/react.png';
import nextImg from '../assets/next.png';
import tailwindImg from '../assets/tailwind.png';
import tsImg from '../assets/typescript.png';
import motionImg from '../assets/motion.png';

const MySkills = () => {
  const skills = [
    { name: 'HTML', img: htmlImg },
    { name: 'CSS', img: cssImg },
    { name: 'JavaScript', img: jsImg },
    { name: 'React', img: reactImg },
    { name: 'Next.js', img: nextImg },
    { name: 'Tailwind CSS', img: tailwindImg },
    { name: 'TypeScript', img: tsImg },
    { name: 'Framer Motion', img: motionImg },
  ];

  // Duplicate the skills array for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className="py-20 px-6 md:px-12 relative z-10 overflow-hidden" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-teal-400">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern web applications
          </p>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r  z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l  z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8 md:gap-12 mt-2"
              animate={{
                x: [0, -50 + '%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-teal-500/50 transition-all duration-300 flex items-center justify-center p-4 group-hover:scale-110 group-hover:bg-gray-800/50">
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                  <p className="text-center text-sm md:text-base text-gray-400 mt-3 group-hover:text-teal-400 transition-colors">
                    {skill.name}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
