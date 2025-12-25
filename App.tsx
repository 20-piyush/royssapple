
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PageType } from './types';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('about');

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <CustomCursor />
      
      <Navbar 
        currentPage={currentPage} 
        onPageChange={(page) => setCurrentPage(page)} 
      />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {currentPage === 'about' ? (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <About />
            </motion.div>
          ) : (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Ambient Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[80vw] h-[80vw] bg-zinc-900/30 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 60, 0],
            opacity: [0.05, 0.1, 0.05] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[60vw] h-[60vw] bg-zinc-800/20 rounded-full blur-[100px]"
        />
      </div>

      <footer className="fixed bottom-8 right-8 text-[10px] text-zinc-700 tracking-[0.4em] uppercase z-50">
        &copy; 2024 royss studio
      </footer>
    </div>
  );
};

export default App;
