import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Clock, FileText } from 'lucide-react';

const features = [
  {
    icon: <Zap className="text-amber-500" size={24} />,
    title: 'Lightning Fast',
    description: 'Get perfectly crafted emails in milliseconds. No more agonizing over phrasing.',
    color: 'bg-amber-500/10 border-amber-500/20'
  },
  {
    icon: <Shield className="text-emerald-500" size={24} />,
    title: 'Professional Tone',
    description: 'Always sound confident and professional, regardless of the situation.',
    color: 'bg-emerald-500/10 border-emerald-500/20'
  },
  {
    icon: <Clock className="text-blue-500" size={24} />,
    title: 'Save Hours',
    description: 'Reclaim 5+ hours a week spent writing and rewriting routine communications.',
    color: 'bg-blue-500/10 border-blue-500/20'
  },
  {
    icon: <FileText className="text-purple-500" size={24} />,
    title: 'Smart Templates',
    description: 'Use our AI-optimized templates for sales, support, and internal comms.',
    color: 'bg-purple-500/10 border-purple-500/20'
  }
];

export const Features = () => {
  return (
    <div className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why choose ASmart?</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Our AI model is specifically trained on millions of high-performing professional emails to ensure you always make the right impression.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`p-6 rounded-3xl border glass-panel hover:scale-105 transition-transform duration-300 ${feature.color}`}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-800 shadow-sm mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
