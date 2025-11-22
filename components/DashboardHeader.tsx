import React from 'react';
import { ChevronDown } from 'lucide-react';

interface DashboardHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    'Overview',
    'Filters',
    'Reports',
    'Landscape',
    'Resource Planning',
    'Tasks',
    'Regulatory Mapper',
    'AI Governance'
  ];

  return (
    <div className="space-y-4">
      {/* Title Row */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Home</h1>
      </div>

      {/* Tabs Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200">
        {/* Tab List */}
        <div className="flex overflow-x-auto no-scrollbar space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`pb-3 text-sm font-medium whitespace-nowrap transition-colors relative ${
                activeTab === tab
                  ? 'text-indigo-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-900 rounded-t-full" />
              )}
            </button>
          ))}
        </div>

        {/* Context Dropdown */}
        <div className="mt-2 md:mt-0 md:ml-4 mb-2">
          <button className="flex items-center justify-between w-48 px-3 py-1.5 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
            <span>MRM Admin Group</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};
