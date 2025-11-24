import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import StarryBackground from './components/StarryBackground';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Wrapper to handle page transitions
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Skills /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="relative min-h-screen bg-space-950 text-white selection:bg-neon-cyan selection:text-space-950 font-sans">
        <StarryBackground />
        <Navbar />
        <main className="relative z-10">
          <AnimatedRoutes />
        </main>
      </div>
    </HashRouter>
  );
};

export default App;