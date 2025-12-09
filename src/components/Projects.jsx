import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Adminpanel from "../assets/Adminpanel.png"
import task from "../assets/task.png"
import ecom from "../assets/ecom.png"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Admin Panel',
      description: 'Built a React.js Admin Panel with REST APIs, analytics dashboards, and real-time order alerts via FCM.',
      tech: ['React Js', 'Firebase', 'Tailwind','Motion'],
      image: Adminpanel,
      demoLink: 'https://zgs-admin-panel.netlify.app/',
      codeLink: 'https://github.com/AleeMuhammad/ZGS_Admin_Panel',
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'Built a React Task Management site with user authentication, local-storage task tracking, and an admin panel for assigning and managing tasks.',
      tech: ['React Js', 'Tailwind', 'TypeScript'],
      image: task,
      demoLink: 'https://symphonious-swan-ca9a05.netlify.app/',
      codeLink: 'https://github.com/AleeMuhammad/Taska',
    },
    {
      id: 3,
      title: 'E-Commerce Website',
      description: 'Built a responsive React.js e-commerce site with Tailwind CSS, featuring user login and local-storage-based cart persistence',
      tech: ['React', 'Tailwind', 'Motion'],
      image: ecom, 
      demoLink: 'https://ecommercee-shopp.netlify.app/',
      codeLink: 'https://github.com/AleeMuhammad/E-commerce',
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 relative z-10 bg-black/50" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-teal-400">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one presented unique challenges and learning opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 group hover:border-teal-500/50 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center gap-4">
                  <a href={project.demoLink} target='_blank' className="p-2 bg-white rounded-full text-black hover:bg-teal-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.codeLink} className="p-2 bg-white rounded-full text-black hover:bg-teal-400 transition-colors">
                    <Github target='_blank' size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-800 text-teal-400 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex md:hidden gap-4">
                  <a href={project.demoLink} target='_blank' className="flex items-center gap-2 text-sm text-white hover:text-teal-400 transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.codeLink} target='_blank' className="flex items-center gap-2 text-sm text-white hover:text-teal-400 transition-colors">
                    <Github size={16} /> View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
