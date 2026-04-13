import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function CursorGlow() {
  const location = useLocation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // useSpring provides a sleek, laggy follow physics
  const springX = useSpring(mouseX, { stiffness: 150, damping: 25, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 25, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Offset by half of blur width to center it on cursor
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Disable on video analysis path to prevent distraction during forensic work
  if (location.pathname.startsWith('/analysis/results')) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full pointer-events-none z-50 mix-blend-screen"
      style={{ x: springX, y: springY }}
    />
  );
}
