import React from 'react';
import { ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { MOCK_MODELS } from '../constants';

export const ModelsTable: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col h-full">
      {/* Table Header Title */}
      <div className="px-6 py-4 border-b border-gray-100">
        <h2 className="text-base font-semibold text-gray-800">MRM Models</h2>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              {[
                'ID',
                'NAME',
                'STATUS',
                'TEMPLATE NAME',
                'CREATED BY',
                'ASSIGNED TO',
                'CREATED ON',
                'UPDATED ON'
              ].map((header) => (
                <th key={header} className="px-6 py-3 bg-white text-xs font-bold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50 group whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    {header}
                    <ArrowUpDown className="w-3 h-3 text-gray-300 group-hover:text-gray-500" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {MOCK_MODELS.map((model) => (
              <tr key={model.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-600">{model.id}</td>
                <td className="px-6 py-4 text-sm text-gray-800 font-medium">{model.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{model.status}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{model.templateName}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{model.createdBy}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{model.assignedTo}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{model.createdOn}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{model.updatedOn}</td>
              </tr>
            ))}
            {/* Empty rows to maintain height if needed, or just leave as is */}
            {MOCK_MODELS.length < 5 && (
               <tr>
                  <td colSpan={8} className="px-6 py-12 text-center text-gray-400 text-sm">
                     No more models found.
                  </td>
               </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="px-6 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-end">
        <div className="flex items-center space-x-4 text-xs text-gray-600">
          <div className="flex items-center space-x-2">
             <span>Show:</span>
             <select className="border border-gray-300 rounded px-2 py-1 bg-white focus:outline-none focus:border-indigo-500">
                <option>25 rows</option>
                <option>50 rows</option>
             </select>
          </div>
          
          <span>1-11 of 11</span>

          <div className="flex items-center space-x-1">
             <button className="p-1 rounded hover:bg-gray-200 disabled:opacity-50" disabled>
                <ChevronLeft className="w-4 h-4" />
             </button>
             <button className="w-6 h-6 flex items-center justify-center bg-indigo-900 text-white rounded-full text-xs">
               1
             </button>
             <button className="p-1 rounded hover:bg-gray-200 disabled:opacity-50" disabled>
                <ChevronRight className="w-4 h-4" />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
