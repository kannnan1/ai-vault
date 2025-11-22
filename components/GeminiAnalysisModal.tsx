import React, { useEffect, useState } from 'react';
import { X, Sparkles, Bot } from 'lucide-react';
import { AlertItem } from '../types';
import { analyzeAlert } from '../services/geminiService';

interface GeminiAnalysisModalProps {
  alert: AlertItem;
  onClose: () => void;
}

export const GeminiAnalysisModal: React.FC<GeminiAnalysisModalProps> = ({ alert, onClose }) => {
  const [analysis, setAnalysis] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    const fetchAnalysis = async () => {
      setLoading(true);
      const result = await analyzeAlert(alert.message);
      if (isMounted) {
        setAnalysis(result);
        setLoading(false);
      }
    };

    fetchAnalysis();

    return () => {
      isMounted = false;
    };
  }, [alert]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="bg-indigo-900 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-white">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <h3 className="font-semibold text-lg">AI Governance Insight</h3>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="mb-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Alert Detected</p>
            <div className="bg-gray-50 border-l-4 border-red-500 p-3 text-gray-800 text-sm rounded-r">
              {alert.message}
            </div>
          </div>

          <div className="space-y-3">
             <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Gemini Analysis</p>
             
             {loading ? (
               <div className="flex items-center gap-3 text-gray-500 italic animate-pulse">
                 <Bot className="w-5 h-5" />
                 <span>Analyzing compliance implications...</span>
               </div>
             ) : (
               <div className="prose prose-sm text-gray-700 bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                 {analysis}
               </div>
             )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-3 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-100 text-sm font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
