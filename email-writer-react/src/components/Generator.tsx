import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Copy, Download, RefreshCw, Check, Loader2, FileText, Settings2, BarChart2, Mail } from 'lucide-react';
import toast from 'react-hot-toast';
import { jsPDF } from 'jspdf';
import { generateEmail } from '../api/axios';
import { cn } from '../utils/cn';

const TONES = ['Professional', 'Casual', 'Friendly', 'Urgent', 'Persuasive'];
const LENGTHS = ['Short', 'Medium', 'Long'];

export const Generator = () => {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState(TONES[0]);
  const [length, setLength] = useState(LENGTHS[1]);
  const [generatedEmail, setGeneratedEmail] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!emailContent.trim()) {
      toast.error('Please enter some email content first.');
      return;
    }

    setIsGenerating(true);
    setGeneratedEmail('');
    
    try {
      const response = await generateEmail(emailContent, tone);
      // Simulate typing effect
      let currentText = '';
      const chars = response.split('');
      
      for (let i = 0; i < chars.length; i++) {
        currentText += chars[i];
        setGeneratedEmail(currentText);
        await new Promise(r => setTimeout(r, 10)); // 10ms delay per char for typing effect
      }
      toast.success('Email generated successfully!');
    } catch (error) {
      toast.error('Failed to generate email. Please try again.');
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    if (!generatedEmail) return;
    navigator.clipboard.writeText(generatedEmail);
    setCopied(true);
    toast.success('Copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadTXT = () => {
    if (!generatedEmail) return;
    const element = document.createElement('a');
    const file = new Blob([generatedEmail], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'generated-email.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success('Downloaded as TXT');
  };

  const downloadPDF = () => {
    if (!generatedEmail) return;
    const doc = new jsPDF();
    
    doc.setFont("helvetica");
    doc.setFontSize(12);
    
    const splitText = doc.splitTextToSize(generatedEmail, 180);
    doc.text(splitText, 15, 20);
    
    doc.save('generated-email.pdf');
    toast.success('Downloaded as PDF');
  };

  const wordCount = generatedEmail.trim() ? generatedEmail.trim().split(/\s+/).length : 0;
  const charCount = generatedEmail.length;
  const readingTime = Math.ceil(wordCount / 200) || 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="generator">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Panel - Input */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col h-full shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-xl text-primary-600 dark:text-primary-400">
              <FileText size={20} />
            </div>
            <h2 className="text-2xl font-bold">Draft Content</h2>
          </div>

          <div className="flex-1 flex flex-col min-h-[300px] mb-6">
            <textarea
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              placeholder="What do you want to say in your email? Enter your raw thoughts, bullet points, or a rough draft here..."
              className="flex-1 w-full p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
            />
            <div className="mt-2 text-right text-xs text-slate-500 dark:text-slate-400 font-medium">
              {emailContent.length} characters
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Settings2 size={16} /> Tone
              </label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-primary-500 transition-all appearance-none cursor-pointer"
              >
                {TONES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <BarChart2 size={16} /> Length
              </label>
              <select
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-primary-500 transition-all appearance-none cursor-pointer"
              >
                {LENGTHS.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating || !emailContent.trim()}
            className="w-full py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 dark:disabled:bg-primary-800 text-white rounded-2xl font-semibold text-lg transition-all shadow-xl shadow-primary-600/30 flex items-center justify-center gap-2 disabled:cursor-not-allowed group"
          >
            {isGenerating ? (
              <Loader2 className="animate-spin" size={24} />
            ) : (
              <>
                <Sparkles size={24} className="group-hover:scale-110 transition-transform" />
                Generate Email
              </>
            )}
          </button>
        </motion.div>

        {/* Right Panel - Output */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-panel rounded-3xl flex flex-col h-full shadow-xl overflow-hidden relative"
        >
          {/* Top Actions Bar */}
          <div className="border-b border-slate-200 dark:border-slate-800 p-4 sm:px-8 flex items-center justify-between bg-white/40 dark:bg-slate-900/40">
            <h2 className="font-bold text-lg flex items-center gap-2">
              <Sparkles size={18} className="text-primary-500" />
              Generated Response
            </h2>
            
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                disabled={!generatedEmail || isGenerating}
                className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors disabled:opacity-50"
                title="Copy to clipboard"
              >
                {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
              </button>
              <button
                onClick={downloadTXT}
                disabled={!generatedEmail || isGenerating}
                className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors disabled:opacity-50 text-sm font-medium"
                title="Download TXT"
              >
                TXT
              </button>
              <button
                onClick={downloadPDF}
                disabled={!generatedEmail || isGenerating}
                className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors disabled:opacity-50 text-sm font-medium"
                title="Download PDF"
              >
                PDF
              </button>
              <button
                onClick={handleGenerate}
                disabled={!generatedEmail || isGenerating}
                className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-primary-600 transition-colors disabled:opacity-50"
                title="Regenerate"
              >
                <RefreshCw size={18} className={cn(isGenerating && "animate-spin")} />
              </button>
            </div>
          </div>

          <div className="flex-1 p-6 sm:p-8 bg-slate-50/50 dark:bg-slate-950/50 overflow-y-auto">
            <AnimatePresence mode="wait">
              {isGenerating && !generatedEmail ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full w-3/4 animate-pulse" />
                  <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full w-full animate-pulse" />
                  <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full w-5/6 animate-pulse" />
                  <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full w-1/2 animate-pulse" />
                </motion.div>
              ) : generatedEmail ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="prose dark:prose-invert max-w-none whitespace-pre-wrap font-medium text-slate-700 dark:text-slate-300"
                >
                  {generatedEmail}
                  {isGenerating && <span className="inline-block w-2 h-4 ml-1 bg-primary-500 animate-pulse" />}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-slate-400 dark:text-slate-600"
                >
                  <Mail size={48} className="mb-4 opacity-50" />
                  <p className="text-center font-medium">Your generated email will appear here</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Analytics Footer */}
          <div className="border-t border-slate-200 dark:border-slate-800 p-4 bg-white/40 dark:bg-slate-900/40 grid grid-cols-3 divide-x divide-slate-200 dark:divide-slate-800 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
            <div>
              <span className="block text-lg font-bold text-slate-800 dark:text-slate-200">{wordCount}</span>
              Words
            </div>
            <div>
              <span className="block text-lg font-bold text-slate-800 dark:text-slate-200">{charCount}</span>
              Chars
            </div>
            <div>
              <span className="block text-lg font-bold text-slate-800 dark:text-slate-200">{readingTime}m</span>
              Read Time
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
