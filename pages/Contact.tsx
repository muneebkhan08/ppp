import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! This is a demo form.");
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        
        {/* Info Section */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <h2 className="font-orbitron text-4xl font-bold text-white mb-4">
              Let's <span className="text-neon-purple">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Whether you have a project in mind or just want to say hi, I'm always open to new opportunities in tech and media.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-neon-cyan/10 flex items-center justify-center text-neon-cyan">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white font-medium">{CONTACT_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center text-neon-purple">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-medium">{CONTACT_INFO.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-neon-pink/10 flex items-center justify-center text-neon-pink">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-medium">{CONTACT_INFO.location}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-space-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-neon-purple/20 blur-[80px] -z-10" />
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Name</label>
                  <input type="text" className="w-full bg-space-950/50 border border-white/10 rounded-lg p-3 text-white focus:border-neon-cyan focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Email</label>
                  <input type="email" className="w-full bg-space-950/50 border border-white/10 rounded-lg p-3 text-white focus:border-neon-cyan focus:outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Subject</label>
                <input type="text" className="w-full bg-space-950/50 border border-white/10 rounded-lg p-3 text-white focus:border-neon-cyan focus:outline-none transition-colors" placeholder="Project Inquiry" />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Message</label>
                <textarea rows={4} className="w-full bg-space-950/50 border border-white/10 rounded-lg p-3 text-white focus:border-neon-cyan focus:outline-none transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg text-white font-bold tracking-wide hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all duration-300 flex justify-center items-center gap-2">
                Send Message <Send size={18} />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;