import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, GraduationCap } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      id: 1,
      role: 'Web Developer (Part-Time)',
      company: 'Andev Matrix',
      period: 'June 2025 - Present',
      description: 'Built the complete company website and contributed to projects such as e-commerce systems and food delivery websites using Next.js, React, and Tailwind CSS. Managed multiple tasks independently, consistently delivering high-quality features within deadlines and improving overall development proficiency.',
      icon: <Briefcase size={20} />,
    },
    {
      id: 2,
      role: 'Web Developer Intern',
      company: 'ZetSol Technologies',
      period: 'Jan 2025 - March 2025',
      description: 'Contributed to BC Appa, an app for fund organization, by fixing UI issues, developing reusable components, and adding new features. Building scalable and reusable UI components using React.js and Next.js. Enhancing web performance and SEO through SSR and static site generation.',
      icon: <Code size={20} />,
    },
    {
      id: 3,
      role: 'BE in Software Engineering',
      company: 'Mehran University Of Engineering & Technology',
      period: '2021 - 2025',
      description: 'Relevant coursework in Web Development and Software Design.',
      icon: <GraduationCap size={20} />,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 relative z-10" id="about">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-teal-400">Me</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experienced React.js Developer with a strong background in building dynamic and responsive web
applications. Skilled in collaborating with UX and design teams to transform functional specifications into
seamless user experiences. Proficient in React.js, Next.js, and Responsive Web Design (RWD) for creating
high-performance, multi-platform websites.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-teal-500/50 transition-colors flex gap-4"
            >
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400">
                  {exp.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <p className="text-teal-400 text-sm mb-2">{exp.company} | {exp.period}</p>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
