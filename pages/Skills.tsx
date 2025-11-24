import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES, EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

const Skills: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">
            Expertise & <span className="text-neon-cyan">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A blend of technical prowess and creative media management.
          </p>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-20">
           <h3 className="font-orbitron text-2xl text-white mb-8 flex items-center gap-3">
             <Briefcase className="text-neon-purple" /> Professional Journey
           </h3>
           <div className="grid md:grid-cols-2 gap-6">
             {EXPERIENCES.map((exp, idx) => (
               <motion.div
                 key={exp.id}
                 initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.2 * idx }}
                 className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-purple/50 transition-colors duration-300 backdrop-blur-sm group"
               >
                 <div className="flex justify-between items-start mb-4">
                   <div>
                     <h4 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">{exp.role}</h4>
                     <p className="text-neon-purple font-medium">{exp.company}</p>
                   </div>
                   <span className="text-xs font-mono text-gray-500 border border-gray-700 rounded px-2 py-1">{exp.period}</span>
                 </div>
                 <p className="text-gray-400 text-sm leading-relaxed">
                   {exp.description}
                 </p>
               </motion.div>
             ))}
           </div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.name}
              variants={item}
              className="bg-gradient-to-b from-white/10 to-transparent p-[1px] rounded-2xl"
            >
              <div className="bg-space-900 h-full rounded-2xl p-6 hover:bg-space-800 transition-colors duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-neon-cyan/5 rounded-bl-full -mr-10 -mt-10 group-hover:bg-neon-cyan/10 transition-colors" />
                
                <category.icon className="w-10 h-10 text-neon-cyan mb-6" />
                
                <h3 className="text-xl font-bold text-white mb-4 font-orbitron">{category.name}</h3>
                
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-400 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-purple" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;