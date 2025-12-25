
import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen pt-32 pb-20 px-8 md:px-16 text-white max-w-7xl mx-auto"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-6xl md:text-9xl font-extrabold tracking-tight leading-none mb-12"
      >
        Precision.<br />
        <span className="text-zinc-600">Elegance.</span><br />
        Innovation.
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-24">
        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
            Royss is a digital craft studio born from a obsession with minimalism. We believe that the best designs are those that feel inevitable—simple, functional, and undeniably premium.
          </p>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
            Inspired by the architectural purity of high-end aesthetics, we build digital experiences that move people. Not through noise, but through the perfect balance of space and light.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col justify-end space-y-12">
          <div className="border-l border-zinc-800 pl-8">
            <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Our Vision</h3>
            <p className="text-lg font-medium text-zinc-200">Setting the standard for minimalist digital excellence globally.</p>
          </div>
          <div className="border-l border-zinc-800 pl-8">
            <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Our Method</h3>
            <p className="text-lg font-medium text-zinc-200">Iterative refinement until only the essential remains.</p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        variants={itemVariants}
        className="mt-32 w-full h-[60vh] bg-zinc-900 overflow-hidden relative"
      >
        <motion.img 
          src="https://picsum.photos/seed/royss1/1920/1080?grayscale" 
          alt="Minimalist Architecture" 
          className="w-full h-full object-cover opacity-50"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute bottom-12 left-12">
          <p className="text-4xl font-light tracking-tighter">EST. 2024</p>
        </div>
      </motion.div>
    </motion.div>
  );
};
