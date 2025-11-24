import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg shadow-purple-500/10">
        <div className="flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 text-white group">
            <div className="p-2 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg group-hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] transition-all duration-300">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="font-orbitron font-bold text-xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              MUNEEB
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:text-neon-cyan ${
                    isActive ? 'text-neon-cyan font-bold shadow-[0_0_10px_rgba(0,243,255,0.3)]' : 'text-gray-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-neon-cyan transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 bg-space-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `font-orbitron text-lg text-center py-2 ${
                      isActive ? 'text-neon-cyan' : 'text-gray-300'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;