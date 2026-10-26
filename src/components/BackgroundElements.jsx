import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

export default function BackgroundElements() {
  const shouldReduceMotion = useReducedMotion();
  
  // Mouse position values for the subtle interactive glow
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Smooth springs for cursor follow
  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, shouldReduceMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Subtle tech background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Top ambient hero radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-hero-gradient pointer-events-none" />

      {/* Primary Electric Blue Glowing Orb (Top-Right) */}
      <motion.div
        className="absolute top-[-10%] right-[-5%] w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] rounded-full opacity-20 filter blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #5B7CFF 0%, rgba(91, 124, 255, 0) 70%)',
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 30, -20, 0],
                y: [0, -40, 20, 0],
                scale: [1, 1.08, 0.95, 1],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary Violet Glowing Orb (Center-Left) */}
      <motion.div
        className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] rounded-full opacity-20 filter blur-[110px]"
        style={{
          background: 'radial-gradient(circle, #A855F7 0%, rgba(168, 85, 247, 0) 70%)',
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, -30, 25, 0],
                y: [0, 35, -25, 0],
                scale: [1, 0.92, 1.05, 1],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Bottom Subtle Cyan/Blue Orb */}
      <motion.div
        className="absolute bottom-[-10%] right-[15%] w-[500px] h-[500px] rounded-full opacity-15 filter blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #3B82F6 0%, rgba(59, 130, 246, 0) 70%)',
        }}
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.1, 0.98, 1],
              }
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Soft Interactive Desktop Mouse Follower Glow */}
      {!shouldReduceMotion && (
        <motion.div
          className="hidden lg:block absolute w-[400px] h-[400px] rounded-full pointer-events-none opacity-20 filter blur-[80px]"
          style={{
            background: 'radial-gradient(circle, rgba(91, 124, 255, 0.5) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 70%)',
            x: smoothX,
            y: smoothY,
            translateX: '-50%',
            translateY: '-50%',
          }}
        />
      )}
    </div>
  );
}
