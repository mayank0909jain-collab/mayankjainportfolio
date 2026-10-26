import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ExternalLink, Info, CheckCircle, Sparkles } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import ProjectVisual from './ProjectVisual';

export default function ProjectCard({ project, index }) {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 35 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{
        y: -6,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
      className="flex flex-col justify-between rounded-2xl bg-[#0F1118]/90 border border-white/[0.08] hover:border-white/[0.2] backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-300 group hover:shadow-[0_15px_35px_-10px_rgba(91,124,255,0.18)]"
    >
      <div>
        {/* Interactive Visual Showcase Header */}
        <div className="p-4 sm:p-5 pb-0">
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-xl"
          >
            <ProjectVisual
              visualType={project.visualType}
              accentColor={project.accentColor}
            />
          </motion.div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7 space-y-4">
          {/* Category & Highlight Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span
              className="px-2.5 py-1 rounded-full text-xs font-semibold font-mono uppercase tracking-wider"
              style={{
                backgroundColor: `${project.accentColor}18`,
                color: project.accentColor,
                border: `1px solid ${project.accentColor}35`,
              }}
            >
              {project.category}
            </span>

            <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-primary" />
              {project.highlight}
            </span>
          </div>

          {/* Title & Tagline */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Medical Disclaimer if Present (Required for Project 3) */}
          {project.disclaimer && (
            <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-start gap-2.5 text-xs text-pink-200 leading-snug">
              <Info className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
              <p>
                <span className="font-semibold text-pink-300">Disclaimer: </span>
                {project.disclaimer}
              </p>
            </div>
          )}

          {/* Key Features Bullet List */}
          <div className="space-y-1.5 pt-2">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Key Implementations:
            </p>
            <ul className="space-y-1">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Badges */}
          <div className="pt-2 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 sm:p-7 pt-0 border-t border-white/[0.06] mt-4 flex items-center justify-between gap-3">
        {project.githubUrl ? (
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 hover:text-white border border-white/[0.1] text-xs sm:text-sm font-semibold transition-all shadow-sm"
          >
            <SiGithub className="w-4 h-4" />
            <span>View Repository</span>
          </motion.a>
        ) : (
          <span className="text-xs font-mono text-slate-500">
            Code Repository: Private / Academic
          </span>
        )}

        {project.demoUrl ? (
          <motion.a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white text-xs sm:text-sm font-semibold shadow-[0_0_15px_rgba(91,124,255,0.4)] hover:bg-primary-hover transition-all"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        ) : (
          <span className="text-[11px] font-mono text-slate-500">
            Demo: Local / Streamlit
          </span>
        )}
      </div>
    </motion.div>
  );
}
