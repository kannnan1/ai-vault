import React from 'react';
import { ChevronRight, AlertTriangle, Info, Sparkles } from 'lucide-react';
import { MOCK_ALERTS } from '../constants';
import { AlertItem } from '../types';

interface AlertsPanelProps {
  onAnalyze: (alert: AlertItem) => void;
}

export const AlertsPanel: React.FC<AlertsPanelProps> = ({ onAnalyze }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col h-full">
      <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-base font-semibold text-gray-800">Alerts</h2>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
        <ul className="space-y-1">
          {MOCK_ALERTS.map((alert) => (
            <li 
              key={alert.id} 
              className="group flex items-start space-x-3 p-3 hover:bg-indigo-50 rounded-md transition-colors cursor-pointer"
            >
              <div className="mt-0.5 text-indigo-900 shrink-0">
                 <ChevronRight className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 leading-snug">
                  {alert.message}
                </p>
              </div>
              
              {/* Gemini Action Button - Visible on Hover */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onAnalyze(alert);
                }}
                title="Analyze with Gemini"
                className="opacity-0 group-hover:opacity-100 p-1.5 bg-white border border-indigo-100 shadow-sm rounded-full text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 transition-all transform hover:scale-105"
              >
                <Sparkles className="w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-2">
         {/* Scrollbar track filler if needed, mainly handled by CSS in index.html */}
      </div>
    </div>
  );
};
