
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen pt-32 pb-20 px-8 md:px-16 text-white max-w-7xl mx-auto flex flex-col justify-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <motion.div variants={itemVariants} className="space-y-12">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
            Let's build <br /> <span className="text-zinc-600">the future.</span>
          </h2>
          
          <div className="space-y-8">
            <div className="group">
              <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">Email Us</h4>
              <a href="mailto:hello@royss.studio" className="text-2xl font-light hover:text-zinc-400 transition-colors duration-300 block">
                hello@royss.studio
              </a>
            </div>
            
            <div className="group">
              <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">Follow Us</h4>
              <div className="flex gap-8 text-2xl font-light">
                <a href="#" className="hover:text-zinc-400 transition-colors">Instagram</a>
                <a href="#" className="hover:text-zinc-400 transition-colors">Twitter</a>
                <a href="#" className="hover:text-zinc-400 transition-colors">LinkedIn</a>
              </div>
            </div>

            <div className="group">
              <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">Office</h4>
              <p className="text-2xl font-light text-zinc-300">
                Avenue des Champs-Élysées, Paris <br />
                Silicon Valley, California
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="bg-zinc-900/40 p-12 backdrop-blur-xl border border-zinc-800 rounded-2xl"
        >
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-white transition-colors duration-500 text-lg placeholder:text-zinc-600"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-white transition-colors duration-500 text-lg placeholder:text-zinc-600"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="relative group">
              <textarea 
                rows={4}
                placeholder="Your Message"
                className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-white transition-colors duration-500 text-lg placeholder:text-zinc-600 resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-white text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-colors mt-8"
            >
              Send Inquiry
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};
