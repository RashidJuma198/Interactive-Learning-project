import React, { useState } from 'react';
import { Play, ChevronRight, Check, Bot } from 'lucide-react';

export default function LessonPage() {
  const [output, setOutput] = useState("> Console ready...");
  const [isSpawning, setIsSpawning] = useState(false);

  const runCode = () => {
    setIsSpawning(true);
    setOutput("> Spawning walker 'init'...");
    setTimeout(() => {
        setOutput("> Walker spawned.\n> Visiting node 'root'.\n> Result: Hello Jaseci World!\n> Walker finished.");
        setIsSpawning(false);
    }, 1500);
  };

  return (
    <div className="h-[calc(100vh-100px)] flex flex-col md:flex-row gap-6">
      
      {/* Left: Content */}
      <div className="w-full md:w-1/3 bg-slate-900 border border-slate-800 rounded-2xl p-6 overflow-y-auto">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-500 mb-4">
            <span className="bg-cyan-900/30 px-2 py-1 rounded">LESSON 2.1</span>
            <span>WALKER FUNDAMENTALS</span>
        </div>
        <h1 className="text-2xl font-bold mb-4">The Walker Mechanism</h1>
        <p className="text-slate-400 mb-4 leading-relaxed">
            In Jaseci, a <strong>Walker</strong> is an autonomous agent that traverses the graph. Think of it as a function that can move between data nodes.
        </p>
        <div className="bg-slate-800 p-4 rounded-lg mb-6 border-l-4 border-purple-500">
            <h4 className="font-bold text-white mb-1">Key Concept</h4>
            <p className="text-sm text-slate-300">Walkers carry context and state as they travel. Use the `anchor` keyword to attach to a node.</p>
        </div>
        
        <div className="flex gap-3 mt-8">
            <button className="flex-1 bg-green-600 hover:bg-green-500 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2">
                <Check size={16} /> Mark Complete
            </button>
            <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2">
                Next <ChevronRight size={16} />
            </button>
        </div>
      </div>

      {/* Right: Editor */}
      <div className="w-full md:w-2/3 flex flex-col gap-4">
        {/* Editor Toolbar */}
        <div className="bg-slate-900 border border-slate-800 rounded-t-2xl p-3 flex items-center justify-between">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"/>
                <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                <div className="w-3 h-3 rounded-full bg-green-500"/>
            </div>
            <span className="text-xs text-slate-500 font-mono">main.jac</span>
            <button 
                onClick={runCode}
                className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-1.5 rounded text-sm font-medium flex items-center gap-2 transition-all">
                <Play size={14} fill="currentColor" /> Run Code
            </button>
        </div>

        {/* Code Input Area (Mock Monaco) */}
        <div className="flex-1 bg-slate-950 font-mono text-sm p-4 text-slate-300 border-x border-slate-800 relative">
            <textarea 
                className="w-full h-full bg-transparent resize-none focus:outline-none"
                defaultValue={`walker init {
    has anchor node;
    
    root {
        take --> node;
    }
    
    node {
        report "Hello Jaseci World!";
    }
}`}
            />
        </div>

        {/* Console / Assistant */}
        <div className="h-48 bg-slate-900 border border-slate-800 rounded-b-2xl p-4 font-mono text-sm flex flex-col">
            <div className="flex justify-between items-center mb-2 border-b border-slate-800 pb-2">
                <span className="text-slate-500">Console Output</span>
                <button className="text-xs flex items-center gap-1 text-purple-400 hover:text-purple-300">
                    <Bot size={12} /> Ask byLLM
                </button>
            </div>
            <div className="flex-1 text-green-400 overflow-y-auto whitespace-pre-wrap">
                {isSpawning ? (
                    <span className="animate-pulse text-cyan-400">Spawn() initiated... connection established...</span>
                ) : output}
            </div>
        </div>
      </div>
    </div>
  );
}