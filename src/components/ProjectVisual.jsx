import React from 'react';
import { motion } from 'motion/react';
import {
  ShoppingCart,
  BookOpen,
  TrendingUp,
  Activity,
  FileText,
  Search,
  Scan,
  CheckCircle2,
  AlertCircle,
  Database,
  Cpu
} from 'lucide-react';

export default function ProjectVisual({ visualType, accentColor = '#5B7CFF' }) {
  switch (visualType) {
    case 'ecommerce':
      return (
        <div className="relative w-full h-52 sm:h-56 bg-gradient-to-br from-[#0F111A] to-[#161928] rounded-xl overflow-hidden p-4 border border-white/[0.08] flex flex-col justify-between group">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono font-medium text-slate-300">BookStore App</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              JWT Auth Active
            </div>
          </div>

          {/* Book Catalog Cards Preview */}
          <div className="grid grid-cols-3 gap-2.5 my-auto">
            {[
              { title: 'Clean Architecture', author: 'R. Martin', tag: 'Architecture', price: '$29.99' },
              { title: 'Designing Data Apps', author: 'M. Kleppmann', tag: 'Distributed', price: '$34.50' },
              { title: 'Deep Learning with Py', author: 'F. Chollet', tag: 'AI / ML', price: '$39.00' },
            ].map((book, i) => (
              <div
                key={book.title}
                className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex flex-col justify-between group-hover:border-primary/40 transition-colors"
              >
                <div>
                  <div className="w-full h-8 rounded bg-gradient-to-r from-primary/20 to-secondary/20 mb-1.5 flex items-center justify-center">
                    <span className="text-[9px] font-mono text-primary font-semibold">{book.tag}</span>
                  </div>
                  <p className="text-[10px] font-bold text-white line-clamp-1">{book.title}</p>
                  <p className="text-[9px] text-slate-400 line-clamp-1">{book.author}</p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">{book.price}</span>
                  <div className="p-1 rounded bg-primary/20 text-primary">
                    <ShoppingCart className="w-2.5 h-2.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Cart Status Banner */}
          <div className="flex items-center justify-between pt-2 border-t border-white/[0.08] text-[10px] font-mono text-slate-400">
            <span>REST API: Express + MongoDB</span>
            <span className="text-primary font-semibold">Cart: 3 Items • Sync OK</span>
          </div>
        </div>
      );

    case 'automotive':
      return (
        <div className="relative w-full h-52 sm:h-56 bg-gradient-to-br from-[#120E1C] to-[#1C132B] rounded-xl overflow-hidden p-4 border border-white/[0.08] flex flex-col justify-between group">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-secondary" />
              <span className="text-xs font-mono font-medium text-slate-300">Regression Price Engine</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-secondary">
              <span>Scikit-learn Regressor</span>
            </div>
          </div>

          {/* Data Visualization / Metrics */}
          <div className="grid grid-cols-2 gap-3 my-auto items-center">
            {/* Chart SVG */}
            <div className="relative h-24 bg-white/[0.02] rounded-lg p-2 border border-white/[0.06] flex flex-col justify-between">
              <span className="text-[9px] font-mono text-slate-400">Actual vs Predicted Trend</span>
              <svg className="w-full h-14 overflow-visible" viewBox="0 0 140 50">
                {/* Scatter points */}
                {[
                  [15, 42], [30, 36], [45, 28], [60, 32], [75, 20], [90, 16], [110, 12], [125, 8]
                ].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="2.5" fill="#A855F7" opacity="0.75" />
                ))}
                {/* Regression Best Fit Line */}
                <line x1="10" y1="45" x2="135" y2="6" stroke="#5B7CFF" strokeWidth="2.5" strokeDasharray="3 3" />
              </svg>
              <div className="flex justify-between text-[8px] font-mono text-slate-500">
                <span>0k mi</span>
                <span>Mileage vs Price</span>
                <span>120k mi</span>
              </div>
            </div>

            {/* Evaluation Chips */}
            <div className="space-y-2">
              <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/25">
                <div className="text-[10px] font-mono text-slate-400">R² Determination Score</div>
                <div className="text-base font-bold font-mono text-secondary">0.892 <span className="text-[10px] text-emerald-400 font-normal">High Fit</span></div>
              </div>
              <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <div className="text-[10px] font-mono text-slate-400">RMSE Evaluation Metric</div>
                <div className="text-sm font-bold font-mono text-slate-200">1,240.50 <span className="text-[10px] text-slate-400 font-normal">USD</span></div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-white/[0.08] text-[10px] font-mono text-slate-400">
            <span>Features: Year, Mileage, Engine</span>
            <span className="text-secondary font-medium">Cross-Validated 5-Fold</span>
          </div>
        </div>
      );

    case 'medical-ai':
      return (
        <div className="relative w-full h-52 sm:h-56 bg-gradient-to-br from-[#190F1E] to-[#25102A] rounded-xl overflow-hidden p-4 border border-white/[0.08] flex flex-col justify-between group">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-pink-400" />
              <span className="text-xs font-mono font-medium text-slate-300">LangChain RAG Pipeline</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/25 text-[10px] font-mono">
              Streamlit UI
            </span>
          </div>

          {/* Pipeline Diagram */}
          <div className="my-auto space-y-2">
            <div className="grid grid-cols-4 gap-1.5 text-center">
              {[
                { label: 'Blood Report', sub: 'PDF / Text', icon: FileText },
                { label: 'Embeddings', sub: 'Vector DB', icon: Database },
                { label: 'LangChain', sub: 'RAG Retrieval', icon: Cpu },
                { label: 'LLM Insight', sub: 'Synthesized', icon: Activity },
              ].map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <div
                    key={step.label}
                    className="p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex flex-col items-center justify-center relative"
                  >
                    <StepIcon className="w-3.5 h-3.5 text-pink-400 mb-1" />
                    <span className="text-[9px] font-bold text-slate-200">{step.label}</span>
                    <span className="text-[8px] text-slate-400 font-mono">{step.sub}</span>
                  </div>
                );
              })}
            </div>

            {/* Extracted Biomarker Preview */}
            <div className="p-2 rounded-lg bg-pink-500/5 border border-pink-500/20 flex items-center justify-between text-[10px] font-mono">
              <span className="text-slate-300">Biomarker: Hemoglobin 14.2 g/dL</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Normal Range
              </span>
            </div>
          </div>

          {/* Footer Note */}
          <div className="flex items-center justify-between pt-2 border-t border-white/[0.08] text-[9.5px] font-mono text-slate-400">
            <span className="text-pink-400/90 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 flex-shrink-0" />
              Information Interpretation Support
            </span>
            <span className="text-slate-500">Semantic Search</span>
          </div>
        </div>
      );

    case 'leaf-cv':
      return (
        <div className="relative w-full h-52 sm:h-56 bg-gradient-to-br from-[#0B1A14] to-[#122B1E] rounded-xl overflow-hidden p-4 border border-white/[0.08] flex flex-col justify-between group">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <Scan className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono font-medium text-slate-300">CNN Leaf Classifier</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono">
              TensorFlow + OpenCV
            </span>
          </div>

          {/* Visual Leaf Model Scan */}
          <div className="grid grid-cols-12 gap-3 my-auto items-center">
            {/* Simulated Bounding Box Leaf Graphic */}
            <div className="col-span-5 relative h-24 rounded-lg bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center overflow-hidden">
              <svg className="w-16 h-16 text-emerald-500/40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
              </svg>
              {/* Bounding Box Overlay */}
              <div className="absolute inset-2 border border-dashed border-emerald-400/80 rounded flex items-start justify-between p-1">
                <span className="text-[7.5px] font-mono bg-emerald-500 text-black px-1 font-bold rounded">
                  Leaf: 98.4%
                </span>
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
              </div>
            </div>

            {/* Neural Conv Layers */}
            <div className="col-span-7 space-y-1.5">
              <div className="p-1.5 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono">
                <div className="flex justify-between text-slate-300">
                  <span>Early Blight</span>
                  <span className="text-amber-400 font-bold">12.2%</span>
                </div>
                <div className="w-full bg-white/10 h-1 rounded mt-1 overflow-hidden">
                  <div className="bg-amber-400 h-full w-[12%]" />
                </div>
              </div>

              <div className="p-1.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono">
                <div className="flex justify-between text-emerald-300">
                  <span className="font-bold">Healthy Leaf</span>
                  <span className="text-emerald-400 font-bold">86.7%</span>
                </div>
                <div className="w-full bg-white/10 h-1 rounded mt-1 overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[87%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-white/[0.08] text-[10px] font-mono text-slate-400">
            <span>Convolution: 4 Layers + MaxPool</span>
            <span className="text-emerald-400">Data Augmentation Enabled</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
