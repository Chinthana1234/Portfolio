import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const MouseGlow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the movement
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Dark mode glow */}
      <div className="hidden dark:block">
        <div 
          className="h-[600px] w-[600px] rounded-full opacity-15 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, var(--color-accent-500) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Light mode glow - even more subtle */}
      <div className="block dark:hidden">
        <div 
          className="h-[600px] w-[600px] rounded-full opacity-5 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, var(--color-accent-500) 0%, transparent 70%)',
          }}
        />
      </div>
    </motion.div>
  );
};

export default MouseGlow;
