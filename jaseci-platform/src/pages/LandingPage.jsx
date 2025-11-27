import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Abstract Network Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 Q 50 0 100 100" stroke="cyan" fill="none" strokeWidth="0.5" />
          <path d="M0 0 Q 50 100 100 0" stroke="purple" fill="none" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" stroke="cyan" strokeWidth="0.2" fill="none" />
        </svg>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 text-center max-w-2xl px-6"
      >
        <div className="mb-6 flex justify-center">
            <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-4 py-1 rounded-full text-sm font-mono">v2.0 Beta Live</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Master Jaseci & Jac
        </h1>
        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
          An interactive, self-paced learning platform powered by Walkers and byLLM. 
          Build graph-based AI agents while you learn.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link to="/dashboard" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20">
            Start Learning <ArrowRight size={18} />
          </Link>
          <button className="px-8 py-3 rounded-lg font-bold text-slate-300 border border-slate-700 hover:bg-slate-800 transition-all">
            Read Docs
          </button>
        </div>
      </motion.div>
    </div>
  );
}