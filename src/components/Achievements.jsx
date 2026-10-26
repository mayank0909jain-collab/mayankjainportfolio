import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Trophy, Lightbulb, Users, Target, Sparkles, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/projects';
import AnimatedText from './AnimatedText';

export default function Achievements() {
  const shouldReduceMotion = useReducedMotion();

  const achievements = [
    {
      id: 'cricket',
      title: 'Under-17 Division Level Cricketer',
      badge: 'Athletics & Sportsmanship',
      tagline: 'Divisional Tournament Representative',
      description: 'Represented the division in competitive cricket tournaments.',
      details: [
        'Honed exceptional mental resilience, discipline, and endurance',
        'Fostered high-pressure tactical communication and collaborative teamwork',
        'Demonstrated leadership and rigorous preparation on competitive stages'
      ],
      icon: Trophy,
      color: '#F59E0B',
      gradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
      borderColor: 'border-amber-500/30'
    },
    {
      id: 'sih',
      title: 'Smart India Hackathon Participant',
      badge: 'National Level Hackathon',
      tagline: 'Team Innovation & Prototype Engineering',
      description: 'Collaborated with a team to develop an innovative solution to a real-world problem during the national-level hackathon.',
      details: [
        'Collaborated intensively in high-velocity sprint ideation and prototyping',
        'Engineered solution architecture under tight hackathon evaluation windows',
        'Bridged practical software engineering with real-world problem solving'
      ],
      icon: Lightbulb,
      color: '#5B7CFF',
      gradient: 'from-blue-500/10 via-indigo-500/5 to-transparent',
      borderColor: 'border-blue-500/30'
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-mono uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honors & Extracurriculars</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white">
            <AnimatedText text="Beyond the Code" as="span" />
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Discipline, leadership, and collaborative team endeavors that shape my character on and off the terminal.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-amber-500 to-primary mx-auto mt-4 rounded-full origin-center"
          />
        </div>

        {/* Two Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: shouldReduceMotion ? 0 : idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -5,
                  boxShadow: `0 15px 35px -10px ${item.color}25`,
                }}
                className={`p-7 sm:p-8 rounded-3xl bg-[#0F1118]/90 bg-gradient-to-b ${item.gradient} border ${item.borderColor} backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 duration-200"
                      style={{
                        backgroundColor: `${item.color}18`,
                        border: `1px solid ${item.color}35`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>

                    <span
                      className="px-3 py-1 rounded-full text-xs font-mono font-semibold"
                      style={{
                        backgroundColor: `${item.color}15`,
                        color: item.color,
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1 mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-slate-400">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Verbatim Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    "{item.description}"
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 pt-4 border-t border-white/[0.08]">
                    {item.details.map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <ShieldCheck
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color: item.color }}
                        />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Verified Profile Entry</span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Target className="w-3 h-3 text-primary" /> Goal-Driven
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
