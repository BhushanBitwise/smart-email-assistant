import React from 'react';
import { Mail, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 rounded-b-2xl mx-4 mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="bg-primary-500 p-2 rounded-xl text-white shadow-lg shadow-primary-500/30">
              <Mail size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              ASmart
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
            </button>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-xl font-medium transition-colors shadow-lg shadow-primary-600/20">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
