import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Sparkles, Filter } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import AnimatedText from './AnimatedText';

const CATEGORIES = ['All', 'Full Stack Web', 'Machine Learning', 'Generative AI', 'Computer Vision & Deep Learning'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs sm:text-sm font-mono uppercase tracking-wider mb-3"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Works</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white">
            <AnimatedText text="Projects That Bring Ideas to Life" as="span" />
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Practical applications built from scratch, combining modern full-stack web architectures with machine learning models and Generative AI pipelines.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full origin-center"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => {
            const isSelected = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                  isSelected
                    ? 'text-white bg-primary shadow-[0_0_15px_rgba(91,124,255,0.4)]'
                    : 'text-slate-400 bg-white/[0.03] hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} index={idx} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub Collaboration Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-center max-w-2xl mx-auto backdrop-blur-sm"
        >
          <p className="text-sm text-slate-300">
            More academic repositories, notebook experiments, and algorithmic challenges are documented on GitHub.
          </p>
          <a
            href="https://github.com/mayank0909jain-collab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-primary hover:text-white transition-colors"
          >
            <span>Explore full GitHub profile</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
