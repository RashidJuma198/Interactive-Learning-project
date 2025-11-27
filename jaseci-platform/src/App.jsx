import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Terminal, CheckCircle, Menu, Moon, Sun, Cpu } from 'lucide-react';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import LessonPage from './pages/LessonPage';
import QuizPage from './pages/QuizPage';

const SidebarItem = ({ icon: Icon, label, to, active }) => (
  <Link to={to} className={`flex items-center gap-3 p-3 rounded-xl transition-all ${active ? 'bg-cyan-500/20 text-cyan-400 border-r-2 border-cyan-400' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}>
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </Link>
);

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  if (location.pathname === '/') return children; // Landing page has no sidebar

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-gray-50 text-slate-900'} font-sans flex transition-colors duration-300`}>
      {/* Sidebar */}
      <aside className="w-64 hidden md:flex flex-col border-r border-slate-800 p-6 bg-slate-950/50 backdrop-blur-xl fixed h-full z-10">
        <div className="flex items-center gap-2 mb-10 text-cyan-400 font-bold text-xl tracking-wider">
          <Cpu /> JASECI LEARN
        </div>
        <nav className="flex-1 space-y-2">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" to="/dashboard" active={location.pathname === '/dashboard'} />
          <SidebarItem icon={BookOpen} label="Lessons" to="/lesson" active={location.pathname === '/lesson'} />
          <SidebarItem icon={Terminal} label="Playground" to="/playground" active={location.pathname === '/playground'} />
          <SidebarItem icon={CheckCircle} label="Quizzes" to="/quiz" active={location.pathname === '/quiz'} />
        </nav>
        
        {/* User Profile Snippet */}
        <div className="pt-6 border-t border-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500" />
          <div>
            <p className="text-sm font-bold">DevWalker</p>
            <p className="text-xs text-cyan-400">Level 4 Architype</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8 relative overflow-hidden">
        <button onClick={() => setDarkMode(!darkMode)} className="absolute top-6 right-8 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        {children}
      </main>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lesson" element={<LessonPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}