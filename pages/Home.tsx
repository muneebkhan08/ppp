import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-[0.2em] text-neon-cyan border border-neon-cyan/30 rounded-full uppercase bg-neon-cyan/10 backdrop-blur-sm">
              Portfolio 2024
            </span>
            <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-4">
              Muhammad <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-purple-500 to-neon-pink">
                Muneeb Khan
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400 mb-6 font-light">
              Full Stack Developer & Media Expert
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg leading-relaxed">
              Merging creative media strategies with robust full-stack engineering to build immersive digital experiences. Currently pursuing BS Computer Science.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white font-bold tracking-wide hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 flex items-center gap-2 group">
                  View Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-3 border border-white/20 bg-white/5 backdrop-blur-md rounded-full text-white font-bold tracking-wide hover:bg-white/10 hover:border-neon-purple transition-all duration-300">
                  Contact Me
                </button>
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6 text-gray-400">
              <a href="#" className="hover:text-white hover:scale-110 transition-all"><Github size={24} /></a>
              <a href="#" className="hover:text-blue-400 hover:scale-110 transition-all"><Linkedin size={24} /></a>
              <a href="mailto:muneebkhan@gmail.com" className="hover:text-red-400 hover:scale-110 transition-all"><Mail size={24} /></a>
            </div>
          </motion.div>
        </div>

        {/* Visual Abstraction */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 flex justify-center items-center"
        >
          {/* Orbital Rings */}
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
             {/* Center Planet */}
            <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute inset-0 m-auto w-40 h-40 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-indigo-600 to-purple-900 shadow-[0_0_50px_rgba(79,70,229,0.6)] flex items-center justify-center z-20"
            >
                <div className="w-full h-full rounded-full bg-[url('https://picsum.photos/400/400?grayscale&blur=2')] opacity-30 mix-blend-overlay absolute"></div>
                <span className="font-orbitron text-6xl font-bold text-white/20">MK</span>
            </motion.div>

            {/* Ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-white/10 rounded-full skew-x-12 skew-y-12"
            >
               <div className="absolute top-0 left-1/2 w-4 h-4 bg-neon-cyan rounded-full shadow-[0_0_10px_#00f3ff]"></div>
            </motion.div>

            {/* Ring 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-12 border border-dashed border-white/20 rounded-full skew-x-[-12deg] skew-y-[-12deg]"
            >
                <div className="absolute bottom-0 right-1/2 w-3 h-3 bg-neon-purple rounded-full shadow-[0_0_10px_#bc13fe]"></div>
            </motion.div>

            {/* Floating Elements Cards */}
            <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 top-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg hidden md:block"
            >
                <span className="text-neon-cyan font-mono font-bold">React.js Expert</span>
            </motion.div>

            <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-4 bottom-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg hidden md:block"
            >
                <span className="text-neon-purple font-mono font-bold">Media Strategy</span>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;