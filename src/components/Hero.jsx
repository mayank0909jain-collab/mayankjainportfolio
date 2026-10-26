import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  ArrowRight,
  FileDown,
  Sparkles,
  ChevronDown,
  Code2,
  Terminal,
  Cpu,
  Brain,
  Database,
  ExternalLink
} from 'lucide-react';
import { SiGithub, SiReact, SiPython, SiMongodb, SiTensorflow } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/projects';
import AnimatedText from './AnimatedText';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [titleIndex, setTitleIndex] = useState(0);

  // Rotating professional titles
  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Floating technology badge config
  const floatingBadges = [
    {
      name: 'React.js',
      icon: SiReact,
      color: '#61DAFB',
      bgColor: 'rgba(97, 218, 251, 0.1)',
      borderColor: 'rgba(97, 218, 251, 0.3)',
      className: 'top-2 -left-6 sm:-left-8',
      delay: 0,
    },
    {
      name: 'Python & ML',
      icon: SiPython,
      color: '#3776AB',
      bgColor: 'rgba(55, 118, 171, 0.1)',
      borderColor: 'rgba(55, 118, 171, 0.3)',
      className: 'bottom-8 -left-4 sm:-left-10',
      delay: 0.5,
    },
    {
      name: 'TensorFlow',
      icon: SiTensorflow,
      color: '#FF6F00',
      bgColor: 'rgba(255, 111, 0, 0.1)',
      borderColor: 'rgba(255, 111, 0, 0.3)',
      className: 'top-10 -right-4 sm:-right-8',
      delay: 1,
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
      color: '#47A248',
      bgColor: 'rgba(71, 162, 72, 0.1)',
      borderColor: 'rgba(71, 162, 72, 0.3)',
      className: 'bottom-4 -right-2 sm:-right-6',
      delay: 1.5,
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero CTA */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8 z-10">
            
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_10px_#10B981]" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-300">
                Open to Internship Opportunities
              </span>
            </motion.div>

            {/* Main Greeting Heading */}
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-primary font-mono text-base sm:text-lg tracking-wider"
              >
                // Hello, World!
              </motion.p>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight font-heading leading-tight text-white">
                <AnimatedText
                  text="Hi, I'm Mayank Jain."
                  className="text-white"
                  delay={0.15}
                />
              </h1>
            </div>

            {/* Rotating Professional Titles with AnimatePresence */}
            <div className="h-10 sm:h-12 flex items-center overflow-hidden">
              <span className="text-slate-400 text-lg sm:text-2xl font-light mr-2">I build as a</span>
              <div className="relative inline-block min-w-[240px] sm:min-w-[340px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={titleIndex}
                    initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                    transition={{ duration: 0.45, ease: 'easeInOut' }}
                    className="text-lg sm:text-2xl font-semibold font-heading text-gradient-accent drop-shadow-[0_0_15px_rgba(91,124,255,0.4)]"
                  >
                    {personalInfo.titles[titleIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl font-normal leading-relaxed"
            >
              Building intelligent applications and scalable digital experiences with code, data, and AI.
            </motion.p>

            {/* Call To Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(91, 124, 255, 0.45)' }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm sm:text-base shadow-[0_0_20px_rgba(91,124,255,0.3)] transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>

              <motion.a
                href="/assets/Mayank_Jain_Resume.pdf"
                download="Mayank_Jain_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, borderColor: 'rgba(91, 124, 255, 0.7)' }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.08] text-slate-100 font-semibold text-sm sm:text-base border border-white/[0.12] backdrop-blur-sm transition-all duration-200 shadow-sm"
              >
                <FileDown className="w-4 h-4 text-primary" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Links & Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-6 pt-4 border-t border-white/[0.08]"
            >
              <div className="flex items-center gap-3">
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mayank Jain GitHub Profile"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-slate-300 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
                >
                  <SiGithub className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mayank Jain LinkedIn Profile"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-slate-300 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
                >
                  <FaLinkedin className="w-5 h-5 text-[#0A66C2]" />
                </motion.a>
              </div>

              <div className="h-5 w-[1px] bg-white/[0.1]" />

              <div className="text-xs sm:text-sm text-slate-400 font-mono">
                B.Tech CSE <span className="text-primary font-semibold">2024–2028</span> • RGPV MP
              </div>
            </motion.div>
          </div>

          {/* Right Column: Futuristic AI / Code Visual & Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6">
            
            {/* Center Glowing Card / Terminal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-md rounded-2xl p-6 bg-[#0E1017]/90 border border-white/[0.1] shadow-[0_0_50px_rgba(91,124,255,0.18)] backdrop-blur-xl"
            >
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-primary" />
                  <span>mayank-core.py</span>
                </div>
                <div className="w-10" />
              </div>

              {/* Code Snippet Display */}
              <div className="pt-4 font-mono text-xs sm:text-sm leading-relaxed space-y-2 text-slate-300">
                <p>
                  <span className="text-violet-400">class</span>{' '}
                  <span className="text-amber-300 font-semibold">MayankJain</span>(Developer):
                </p>
                <p className="pl-4">
                  <span className="text-primary">role</span> = [
                  <span className="text-emerald-400">'FullStack'</span>,{' '}
                  <span className="text-emerald-400">'ML_Engineer'</span>,{' '}
                  <span className="text-emerald-400">'GenAI'</span>]
                </p>
                <p className="pl-4">
                  <span className="text-primary">stack</span> = {`{`}
                  <br />
                  <span className="pl-8 text-sky-400">'frontend'</span>:{' '}
                  <span className="text-slate-300">'React, Tailwind'</span>,
                  <br />
                  <span className="pl-8 text-sky-400">'backend'</span>:{' '}
                  <span className="text-slate-300">'Node, Express, Mongo'</span>,
                  <br />
                  <span className="pl-8 text-sky-400">'intelligence'</span>:{' '}
                  <span className="text-slate-300">'LangChain, RAG, CNN'</span>
                  <br />
                  <span className="pl-4">{`}`}</span>
                </p>
                <p className="pl-4">
                  <span className="text-violet-400">def</span>{' '}
                  <span className="text-sky-300">solve_problem</span>(
                  <span className="text-slate-400">challenge</span>):
                </p>
                <p className="pl-8 text-slate-400">
                  return <span className="text-emerald-400">"Build scalable & AI-first solutions"</span>
                </p>
              </div>

              {/* Interactive Status Footer */}
              <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Models Trained: 99.4%
                </span>
                <span className="text-slate-500">BGIEM CSE '28</span>
              </div>
            </motion.div>

            {/* Floating Tech Badges with Motion */}
            {floatingBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1, scale: 1 }
                      : {
                          opacity: 1,
                          scale: 1,
                          y: [0, -8, 0],
                        }
                  }
                  transition={
                    shouldReduceMotion
                      ? { duration: 0.4, delay: badge.delay }
                      : {
                          opacity: { duration: 0.5, delay: badge.delay },
                          scale: { duration: 0.5, delay: badge.delay },
                          y: {
                            duration: 4 + idx,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: badge.delay,
                          },
                        }
                  }
                  style={{
                    backgroundColor: badge.bgColor,
                    borderColor: badge.borderColor,
                  }}
                  className={`absolute ${badge.className} z-20 flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-md shadow-lg pointer-events-none sm:pointer-events-auto cursor-default transition-transform hover:scale-110`}
                >
                  <Icon className="w-4 h-4" style={{ color: badge.color }} />
                  <span className="text-xs font-semibold text-slate-200">
                    {badge.name}
                  </span>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, 6, 0],
                  }
            }
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ChevronDown className="w-4 h-4 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
