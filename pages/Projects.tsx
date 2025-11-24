import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-neon-pink">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my latest work in full stack development and media.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-space-800 border border-white/10 hover:border-neon-cyan/50 transition-all duration-500"
            >
              {/* Image Section */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-space-900 to-transparent z-10 opacity-60" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 bg-black/60 backdrop-blur-sm">
                  <button className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-neon-cyan hover:text-black transition-all">
                    <Github size={20} />
                  </button>
                  <button className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-neon-purple hover:text-white transition-all">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 relative z-20 bg-space-900/50 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-white mb-2 font-orbitron group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;