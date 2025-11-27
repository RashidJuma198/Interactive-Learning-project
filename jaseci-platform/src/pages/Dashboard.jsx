import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Code, Brain } from 'lucide-react';

const SkillNode = ({ x, y, label, color, status }) => (
  <motion.div 
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 0.2 }}
    className={`absolute flex flex-col items-center justify-center w-24 h-24 rounded-full border-2 ${status === 'mastered' ? 'border-green-500 bg-green-500/10' : status === 'learning' ? 'border-yellow-500 bg-yellow-500/10' : 'border-slate-700 bg-slate-800'} backdrop-blur-sm cursor-pointer hover:scale-110 transition-transform`}
    style={{ left: x, top: y }}
  >
    <div className={`w-3 h-3 rounded-full mb-2 ${status === 'mastered' ? 'bg-green-500' : status === 'learning' ? 'bg-yellow-500' : 'bg-slate-600'}`} />
    <span className="text-xs font-mono text-center text-slate-300">{label}</span>
  </motion.div>
);

const ConnectionLine = ({ x1, y1, x2, y2 }) => (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#334155" strokeWidth="2" strokeDasharray="5,5" />
    </svg>
);

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <header>
        <h2 className="text-3xl font-bold mb-2">My Progress</h2>
        <p className="text-slate-400">Current Focus: <span className="text-cyan-400">Graph Architecture & Walkers</span></p>
      </header>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Walkers Spawned', val: '142', icon: Activity, color: 'text-purple-400' },
          { label: 'Lines of Jac', val: '1,024', icon: Code, color: 'text-cyan-400' },
          { label: 'Concepts Mastered', val: '8/20', icon: Brain, color: 'text-green-400' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium mb-1">{stat.label}</p>
              <h3 className="text-3xl font-bold">{stat.val}</h3>
            </div>
            <stat.icon size={32} className={stat.color} />
          </div>
        ))}
      </div>

      {/* Skill Map Visualization */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-[400px] relative overflow-hidden">
        <h3 className="text-slate-400 font-mono text-sm uppercase tracking-widest mb-4">OSP Proficiency Graph</h3>
        
        {/* Simple mock graph implementation */}
        <div className="relative w-full h-full">
            <ConnectionLine x1="15%" y1="50%" x2="40%" y2="30%" />
            <ConnectionLine x1="15%" y1="50%" x2="40%" y2="70%" />
            <ConnectionLine x1="40%" y1="30%" x2="70%" y2="50%" />
            <ConnectionLine x1="40%" y1="70%" x2="70%" y2="50%" />

            <SkillNode x="10%" y="40%" label="Basics" status="mastered" />
            <SkillNode x="35%" y="20%" label="Walkers" status="mastered" />
            <SkillNode x="35%" y="60%" label="Graph" status="learning" />
            <SkillNode x="65%" y="40%" label="byLLM" status="locked" />
        </div>
      </div>
    </div>
  );
}