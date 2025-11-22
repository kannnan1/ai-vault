import React from 'react';
import { Bell, FileText, User, ChevronDown, Search, Menu } from 'lucide-react';

export const TopNavigation: React.FC = () => {
  const navItems = [
    'Home',
    'Inventory',
    'Documents',
    'Reports',
    'Bulk Actions',
    'Configuration',
    'Administrative Options'
  ];

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-2.5 shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Left: Logo and Nav Links */}
        <div className="flex items-center space-x-8">
          {/* Logo Area */}
          <div className="flex items-center text-indigo-900 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-indigo-900 rounded-full flex items-center justify-center mr-2 text-white">
               <span className="font-serif italic">Ai</span>
            </div>
            <span className="hidden md:block">AI Vault</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item} className="group relative cursor-pointer">
                <div className="flex items-center text-sm font-medium text-gray-600 hover:text-indigo-700 transition-colors">
                  {item}
                  <ChevronDown className="w-3 h-3 ml-1 opacity-50" />
                </div>
              </div>
            ))}
          </nav>
        </div>

        {/* Right: Icons and Profile */}
        <div className="flex items-center space-x-4">
           {/* Clipboard Icon */}
           <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
            <FileText className="w-5 h-5" />
           </button>

           {/* Notifications */}
           <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
              99+
            </span>
           </button>

           {/* Profile Avatar */}
           <button className="w-8 h-8 rounded-full bg-indigo-900 text-white flex items-center justify-center text-sm font-medium hover:bg-indigo-800 transition-colors">
             M
           </button>
        </div>
      </div>
    </header>
  );
};
