import React from 'react';
import { ArrowUpDown, ChevronLeft, ChevronRight, Box } from 'lucide-react';
import { MOCK_TASKS } from '../constants';

export const TasksTable: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col h-full">
      <div className="px-6 py-4 border-b border-gray-100">
        <h2 className="text-base font-semibold text-gray-800">My Tasks</h2>
      </div>

      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              {[
                'ID',
                'TASK NAME',
                'CURRENT WORKFLOW STAT',
                'TASK DESCRIPTION',
                'TAT',
                'CHECKLIST'
              ].map((header) => (
                <th key={header} className="px-4 py-3 bg-white text-xs font-bold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50 group whitespace-nowrap">
                   <div className="flex items-center gap-1">
                    {header}
                    <ArrowUpDown className="w-3 h-3 text-gray-300 group-hover:text-gray-500" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {MOCK_TASKS.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-600">{task.id}</td>
                <td className="px-4 py-3 text-sm text-gray-800 font-medium flex items-center gap-2">
                   <Box className="w-4 h-4 text-red-800" />
                   {task.taskName}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 truncate max-w-[150px]" title={task.workflowStatus}>{task.workflowStatus}</td>
                <td className="px-4 py-3 text-sm text-gray-600 truncate max-w-[200px]" title={task.description}>{task.description}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{task.tat}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{task.checklistProgress}</td>
              </tr>
            ))}
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
          
          <span>1-25 of 57</span>

          <div className="flex items-center space-x-1">
             <button className="p-1 rounded hover:bg-gray-200 disabled:opacity-50" disabled>
                <ChevronLeft className="w-4 h-4" />
             </button>
             <button className="w-6 h-6 flex items-center justify-center bg-indigo-900 text-white rounded-full text-xs">
               1
             </button>
              <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded-full text-xs">
               2
             </button>
              <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded-full text-xs">
               3
             </button>
             <button className="p-1 rounded hover:bg-gray-200">
                <ChevronRight className="w-4 h-4" />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
