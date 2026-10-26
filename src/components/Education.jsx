import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  GraduationCap,
  Calendar,
  Building2,
  Award,
  BookOpen,
  MapPin,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/projects';
import AnimatedText from './AnimatedText';

export default function Education() {
  const shouldReduceMotion = useReducedMotion();
  const { education } = personalInfo;

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-mono uppercase tracking-wider mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white">
            <AnimatedText text="My Education" as="span" />
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Solid foundations in computer science theory, software design, and mathematical intuition.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-primary mx-auto mt-4 rounded-full origin-center"
          />
        </div>

        {/* Education Timeline / Showcase Card */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Animated Vertical Line for Timeline */}
          <div className="hidden sm:block absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary via-emerald-500 to-secondary/30" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative sm:pl-20"
          >
            {/* Timeline Icon Node */}
            <div className="hidden sm:flex absolute left-4 top-8 -translate-x-1/2 w-9 h-9 rounded-full bg-[#08090D] border-2 border-primary items-center justify-center text-primary shadow-[0_0_15px_rgba(91,124,255,0.5)]">
              <GraduationCap className="w-4 h-4" />
            </div>

            {/* Premium Education Card */}
            <div className="p-7 sm:p-9 rounded-3xl bg-[#0F1118]/85 border border-white/[0.08] hover:border-primary/40 backdrop-blur-xl shadow-2xl transition-all duration-300 group">
              
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-semibold font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {education.duration}
                </span>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs sm:text-sm font-mono font-bold">
                  <Award className="w-4 h-4" />
                  <span>CGPA: {education.cgpa}</span>
                </div>
              </div>

              {/* Degree & Institution */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white group-hover:text-primary transition-colors">
                  {education.degree}
                </h3>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-300 text-sm sm:text-base font-medium">
                  <span className="flex items-center gap-2 text-slate-200">
                    <Building2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {education.institution}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400 text-xs sm:text-sm">
                    <MapPin className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                    Madhya Pradesh, India
                  </span>
                </div>
              </div>

              {/* Core Coursework Highlights */}
              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-primary" />
                  <span>Curriculum & Technical Coursework Focus:</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures & Algorithms',
                    'Object-Oriented Programming (Java/Python)',
                    'Database Management Systems',
                    'Machine Learning Fundamentals',
                    'Discrete Mathematics & Linear Algebra',
                    'Operating Systems & Computer Networks'
                  ].map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 rounded-xl text-xs bg-white/[0.03] text-slate-300 border border-white/[0.06] hover:border-white/[0.15] transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
