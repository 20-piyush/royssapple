
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isText, setIsText] = useState(false);

  const springConfig = { damping: 25, stiffness: 250 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('button, a, .hover-target'));
      setIsText(!!target.closest('p, h1, h2, h3, span'));
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference"
        animate={{
          width: isHovering ? 64 : isText ? 40 : 32,
          height: isHovering ? 64 : isText ? 40 : 32,
          opacity: isHovering ? 0.8 : 0.5,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};
