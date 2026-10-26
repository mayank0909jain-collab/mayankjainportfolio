import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
  ExternalLink,
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/projects';
import AnimatedText from './AnimatedText';

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isCopied, setIsCopied] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // null | 'launched'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a brief message (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Build genuine mailto URL
    const subjectLine = formData.subject.trim()
      ? `[Portfolio Contact] ${formData.subject.trim()}`
      : `Portfolio Inquiry from ${formData.name.trim()}`;
    
    const bodyContent = `Name: ${formData.name.trim()}
Email: ${formData.email.trim()}

Message:
${formData.message.trim()}

---
Sent via Mayank Jain Developer Portfolio`;

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(bodyContent)}`;

    // Launch mail client
    window.location.href = mailtoUrl;

    // Show transparent status notification explaining mailto workflow
    setSubmissionStatus('launched');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs sm:text-sm font-mono uppercase tracking-wider mb-3"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white">
            <AnimatedText text="Let's Build Something Great" as="span" />
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            I'm interested in internship opportunities, collaborative projects, and building practical solutions with software development and AI.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full origin-center"
          />
        </div>

        {/* Two-Column Grid: Left Contact Info, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Email Card with Copy Button */}
            <div className="p-6 rounded-2xl bg-[#0F1118]/85 border border-white/[0.08] backdrop-blur-xl shadow-lg hover:border-primary/40 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono uppercase text-slate-400">Direct Email</h3>
                    <p className="text-sm sm:text-base font-semibold text-white break-all">
                      {personalInfo.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-slate-400">Preferred for fast response</span>
                <motion.button
                  type="button"
                  onClick={handleCopyEmail}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-medium text-slate-200 border border-white/[0.1] transition-colors"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-[#0F1118]/85 border border-white/[0.08] backdrop-blur-xl shadow-lg hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase text-slate-400">Phone / WhatsApp</h3>
                  <a
                    href="tel:+919685363384"
                    className="text-sm sm:text-base font-semibold text-white hover:text-emerald-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="p-6 rounded-2xl bg-[#0F1118]/85 border border-white/[0.08] backdrop-blur-xl shadow-lg space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Professional Networks
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, borderColor: 'rgba(91, 124, 255, 0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-200 hover:text-white transition-all text-xs font-semibold"
                >
                  <SiGithub className="w-4 h-4 text-white" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 ml-auto" />
                </motion.a>

                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, borderColor: 'rgba(10, 102, 194, 0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-200 hover:text-white transition-all text-xs font-semibold"
                >
                  <FaLinkedin className="w-4 h-4 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 ml-auto" />
                </motion.a>
              </div>
            </div>

            {/* Quick Availability Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent border border-primary/20 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-primary text-xs font-mono font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Immediate Availability</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Currently open for Machine Learning, MERN Stack, and Generative AI internship roles starting Summer/Winter semesters.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-8 rounded-3xl bg-[#0F1118]/90 border border-white/[0.08] backdrop-blur-xl shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill in your project or role details. Clicking submit will automatically prepare your email client with your message pre-loaded.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    placeholder="e.g. Alex Rivera"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                      errors.name ? 'border-rose-500/70 focus:ring-rose-500' : 'border-white/[0.1] focus:border-primary focus:ring-primary'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-all`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Your Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    placeholder="e.g. alex@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                      errors.email ? 'border-rose-500/70 focus:ring-rose-500' : 'border-white/[0.1] focus:border-primary focus:ring-primary'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-all`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Subject / Opportunity
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Machine Learning Internship Discussion"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.1] focus:border-primary focus:ring-primary text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-all"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    placeholder="Tell me about the role, project goals, or how we can collaborate..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border ${
                      errors.message ? 'border-rose-500/70 focus:ring-rose-500' : 'border-white/[0.1] focus:border-primary focus:ring-primary'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-all resize-y`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(91, 124, 255, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm sm:text-base shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Launch Mail Client with Pre-filled Message</span>
                </motion.button>
              </form>

              {/* Mailto explanation banner required by specifications */}
              <AnimatePresence>
                {submissionStatus === 'launched' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs sm:text-sm space-y-1.5"
                  >
                    <p className="font-semibold flex items-center gap-2 text-emerald-300">
                      <Check className="w-4 h-4 text-emerald-400" />
                      Email Client Opened!
                    </p>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      Your default mail application has been triggered with your message formatted for{' '}
                      <span className="font-mono text-emerald-300 font-bold">{personalInfo.email}</span>. Simply click "Send" in your email app. If your client didn't open automatically, you can also write directly to{' '}
                      <a href={`mailto:${personalInfo.email}`} className="underline text-emerald-300 font-mono">
                        {personalInfo.email}
                      </a>.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Informative Note */}
              <div className="pt-2 border-t border-white/[0.06] flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <HelpCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span>Direct client-side mailto dispatch ensures zero data collection or third-party storage.</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
