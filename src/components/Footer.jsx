import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Heart, Terminal, Mail } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/projects';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#06070A] py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Branding & Tagline */}
          <div className="text-center md:text-left space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-6 h-6 rounded-md bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white text-xs">
                <Terminal className="w-3.5 h-3.5" />
              </span>
              <span className="font-heading font-bold text-white text-base">
                Mayank<span className="text-primary font-mono">.dev</span>
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Designed & Built by <span className="text-slate-200 font-medium">{personalInfo.name}</span>
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-3">
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:border-primary/40 hover:bg-white/[0.08] transition-colors"
            >
              <SiGithub className="w-4 h-4" />
            </motion.a>

            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:border-[#0A66C2]/50 hover:bg-white/[0.08] transition-colors"
            >
              <FaLinkedin className="w-4 h-4 text-[#0A66C2]" />
            </motion.a>

            <motion.a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send direct email"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:border-emerald-500/50 hover:bg-white/[0.08] transition-colors"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
            </motion.a>
          </div>

          {/* Right: Copyright & Back-to-Top Button */}
          <div className="flex items-center gap-4">
            <p className="text-xs font-mono text-slate-500">
              &copy; {currentYear} Mayank Jain. All rights reserved.
            </p>

            <motion.button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>

        </div>
      </div>
    </footer>
  );
}
