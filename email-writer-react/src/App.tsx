import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Generator } from './components/Generator';

function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary-500/30">
      <Toaster 
        position="top-center"
        toastOptions={{
          className: 'dark:bg-slate-800 dark:text-white',
          style: {
            borderRadius: '1rem',
            background: 'var(--surface)',
            color: 'var(--foreground)',
          },
        }} 
      />
      
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <Generator />
        <Features />
      </main>

      <Footer />
    </div>
  );
}

export default App;
