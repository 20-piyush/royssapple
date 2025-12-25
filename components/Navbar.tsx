
import React from 'react';
import { motion } from 'framer-motion';
import { PageType } from '../types';

interface NavbarProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 px-8 md:px-16 flex items-center justify-between z-50 backdrop-blur-md bg-black/30">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-bold tracking-tighter text-white select-none hover-target"
        onClick={() => onPageChange('about')}
      >
        royss
      </motion.div>
      
      <div className="flex gap-12">
        <NavItem 
          active={currentPage === 'about'} 
          onClick={() => onPageChange('about')}
          label="About"
        />
        <NavItem 
          active={currentPage === 'contact'} 
          onClick={() => onPageChange('contact')}
          label="Contact"
        />
      </div>
    </nav>
  );
};

const NavItem: React.FC<{ active: boolean; onClick: () => void; label: string }> = ({ active, onClick, label }) => (
  <button 
    onClick={onClick}
    className="relative py-2 text-sm font-medium tracking-widest uppercase overflow-target group"
  >
    <span className={`transition-colors duration-300 ${active ? 'text-white' : 'text-zinc-500 group-hover:text-white'}`}>
      {label}
    </span>
    {active && (
      <motion.div 
        layoutId="underline"
        className="absolute -bottom-1 left-0 w-full h-px bg-white"
      />
    )}
  </button>
);
