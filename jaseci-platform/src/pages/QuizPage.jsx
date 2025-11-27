import React, { useState } from 'react';
// import { motion } from 'framer-motion';
import { Cpu, AlertCircle, CheckCircle } from 'lucide-react';

export default function QuizPage() {
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleEvaluate = () => {
    // Simulating a backend evaluate_answer walker call
    setTimeout(() => {
        setShowFeedback(true);
    }, 600);
  };

  return (
    <div className="max-w-3xl mx-auto pt-10">
      
      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2 text-slate-400">
            <span>Question 3 of 10</span>
            <span className="text-orange-400 font-mono">Difficulty: Adaptive (Hard)</span>
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 w-[30%]" />
        </div>
      </div>

      {/* Question Card */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-slate-900 border border-slate-800 rounded-2xl p-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10">
            <Cpu size={100} />
        </div>

        <h3 className="text-xl font-bold mb-6 relative z-10">
            In the context of the OSP graph, what happens when a Walker does not have an `anchor` defined?
        </h3>

        <div className="space-y-3 relative z-10">
            {['It defaults to the root node automatically.', 'It cannot traverse and will throw a runtime error.', 'It creates a temporary floating node.', 'It waits for a spawn trigger.'].map((opt, idx) => (
                <button 
                    key={idx}
                    onClick={() => setSelected(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${selected === idx ? 'border-cyan-500 bg-cyan-500/10 text-cyan-100' : 'border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-slate-300'}`}
                >
                    <span className="font-mono opacity-50 mr-3">{String.fromCharCode(65 + idx)}.</span>
                    {opt}
                </button>
            ))}
        </div>

        <div className="mt-8 flex justify-between items-center">
            <button className="text-purple-400 text-sm hover:underline">Request Hint (Spawn Walker)</button>
            <button 
                onClick={handleEvaluate}
                disabled={selected === null}
                className="bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-cyan-500/20"
            >
                Submit Answer
            </button>
        </div>
      </motion.div>

      {/* AI Feedback Panel (appears after submit) */}
      {showFeedback && (
        <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="mt-6 bg-slate-900 border-l-4 border-green-500 rounded-r-xl p-6"
        >
            <div className="flex items-start gap-4">
                <div className="bg-green-500/20 p-2 rounded-full text-green-400">
                    <CheckCircle size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-green-400 mb-1">Evaluation: Correct</h4>
                    <p className="text-slate-300 text-sm leading-relaxed mb-3">
                        <span className="text-xs font-mono text-slate-500 block mb-1">byLLM Explanation:</span>
                        Correct! Without an anchor, the walker has no entry point into the graph context and cannot execute traversal logic, resulting in a runtime error.
                    </p>
                    <button className="text-xs bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded text-white transition">
                        Next Question
                    </button>
                </div>
            </div>
        </motion.div>
      )}
    </div>
  );
}