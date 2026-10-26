import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Layout,
  Server,
  Database,
  Brain,
  Code2,
  Wrench,
  Terminal,
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/projects';
import TechIcon from './TechIcon';
import AnimatedText from './AnimatedText';

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

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
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return Layout;
      case 'Server':
        return Server;
      case 'Database':
        return Database;
      case 'Brain':
        return Brain;
      case 'Code2':
        return Code2;
      case 'Wrench':
        return Wrench;
      default:
        return Layers;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-xs sm:text-sm font-mono uppercase tracking-wider mb-3"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white">
            <AnimatedText text="Technologies I Work With" as="span" />
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Tools, frameworks, and engineering foundations I leverage to build scalable web applications and intelligent machine learning models.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-secondary to-primary mx-auto mt-4 rounded-full origin-center"
          />
        </div>

        {/* Skill Category Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat) => {
            const CatIcon = getCategoryIcon(cat.icon);
            return (
              <motion.div
                key={cat.category}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  borderColor: 'rgba(91, 124, 255, 0.4)',
                  boxShadow: '0 12px 30px -10px rgba(91, 124, 255, 0.15)',
                }}
                className="p-6 rounded-2xl bg-[#0F1117]/85 border border-white/[0.08] backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-200"
                      style={{
                        backgroundColor: `${cat.color}15`,
                        border: `1px solid ${cat.color}35`,
                      }}
                    >
                      <CatIcon className="w-5 h-5" style={{ color: cat.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading text-white group-hover:text-primary transition-colors">
                        {cat.category}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500">
                        {cat.skills.length} core competencies
                      </span>
                    </div>
                  </div>

                  {/* Skills Badges Pill Grid */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.07] hover:border-white/[0.2] transition-colors cursor-default"
                      >
                        <TechIcon
                          name={skill.icon}
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: skill.color }}
                        />
                        <span className="text-xs sm:text-sm font-medium text-slate-200">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Subtle Bottom Accent Indicator */}
                <div className="mt-6 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Stack Tier</span>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: cat.color }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
