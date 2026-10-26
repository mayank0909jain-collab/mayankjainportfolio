import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Code,
  Brain,
  Sparkles,
  GraduationCap,
  Award,
  Layers,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { personalInfo } from '../data/projects';
import AnimatedText from './AnimatedText';

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  // Information cards strictly matching provided factual details
  const infoCards = [
    {
      id: 'projects',
      title: '4 Featured Projects',
      subtitle: 'Full-Stack, ML & Generative AI',
      icon: Layers,
      color: '#5B7CFF',
      gradient: 'from-blue-500/10 to-indigo-500/10',
      border: 'border-blue-500/30'
    },
    {
      id: 'fullstack',
      title: 'Full Stack Development',
      subtitle: 'MERN Stack & Scalable Web Apps',
      icon: Code,
      color: '#38BDF8',
      gradient: 'from-cyan-500/10 to-blue-500/10',
      border: 'border-cyan-500/30'
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      subtitle: 'Regression, CNN & Deep Learning',
      icon: Brain,
      color: '#A855F7',
      gradient: 'from-purple-500/10 to-violet-500/10',
      border: 'border-purple-500/30'
    },
    {
      id: 'genai',
      title: 'Generative AI',
      subtitle: 'LangChain, RAG Pipelines & LLMs',
      icon: Sparkles,
      color: '#EC4899',
      gradient: 'from-pink-500/10 to-rose-500/10',
      border: 'border-pink-500/30'
    },
    {
      id: 'graduation',
      title: 'Expected Graduation: 2028',
      subtitle: 'B.Tech CSE • BGIEM (RGPV)',
      icon: GraduationCap,
      color: '#10B981',
      gradient: 'from-emerald-500/10 to-teal-500/10',
      border: 'border-emerald-500/30'
    },
    {
      id: 'sih',
      title: 'Smart India Hackathon Participant',
      subtitle: 'National-Level Problem Solving',
      icon: Award,
      color: '#F59E0B',
      gradient: 'from-amber-500/10 to-orange-500/10',
      border: 'border-amber-500/30'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs sm:text-sm font-mono uppercase tracking-wider mb-3"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white">
            <AnimatedText text="A Little About Me" as="span" />
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full origin-center"
          />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Story & Objective */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0F1117]/80 border border-white/[0.08] backdrop-blur-xl shadow-xl space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block" />
                Engineering with Purpose & AI
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {personalInfo.about}
              </p>

              {/* Career Objective Block */}
              <div className="pt-4 border-t border-white/[0.08]">
                <h4 className="text-xs font-mono uppercase tracking-widest text-primary mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Career Objective</span>
                </h4>
                <blockquote className="text-sm sm:text-base text-slate-300 italic bg-white/[0.02] p-4 rounded-xl border-l-2 border-primary">
                  "{personalInfo.careerObjective}"
                </blockquote>
              </div>

              {/* Core Focus Badges */}
              <div className="pt-2">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Current Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Full Stack Web Architecture',
                    'Supervised ML & Regression',
                    'Generative AI & LangChain',
                    'Computer Vision & CNNs',
                    'Data Structures & Algorithms'
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Animated Information Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {infoCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -4, 
                    borderColor: 'rgba(91, 124, 255, 0.4)',
                    boxShadow: '0 10px 30px -10px rgba(91, 124, 255, 0.2)'
                  }}
                  className={`p-5 rounded-2xl bg-gradient-to-br ${card.gradient} bg-[#0E1017]/90 border ${card.border} backdrop-blur-md transition-all duration-300 flex flex-col justify-between`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                      style={{ backgroundColor: `${card.color}18` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: card.color }} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      Verified
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-bold font-heading text-white">
                      {card.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      {card.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
