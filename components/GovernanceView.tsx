
import React, { useState } from 'react';
import { ArrowUpDown, ChevronLeft, ChevronRight, LayoutGrid, Activity, Box, Layers, ShieldCheck, ClipboardCheck } from 'lucide-react';
import { 
  MOCK_MODEL_MASTER, 
  MOCK_ASSET_MASTER, 
  MOCK_CONTROL_MASTER, 
  MOCK_TEST_CASE_MASTER 
} from '../constants';
import { ModelHealthView } from './ModelHealthView';

interface TableProps {
  title: string;
  headers: string[];
  children: React.ReactNode;
  paginationInfo: string;
  icon: React.ElementType;
}

const GovernanceTable: React.FC<TableProps> = ({ title, headers, children, paginationInfo, icon: Icon }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col mb-8">
      {/* Table Header Title */}
      <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
        <div className="p-1.5 bg-indigo-100 text-indigo-700 rounded">
          <Icon className="w-5 h-5" />
        </div>
        <h2 className="text-base font-bold text-gray-800">{title}</h2>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-white">
              {headers.map((header) => (
                <th key={header} className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50 group whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    {header}
                    <ArrowUpDown className="w-3 h-3 text-gray-300 group-hover:text-gray-500" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {children}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="px-6 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-end">
        <div className="flex items-center space-x-4 text-xs text-gray-600">
          <div className="flex items-center space-x-2">
             <span>Show:</span>
             <select className="border border-gray-300 rounded px-2 py-1 bg-white focus:outline-none focus:border-indigo-500">
                <option>10 rows</option>
                <option>25 rows</option>
             </select>
          </div>
          
          <span>{paginationInfo}</span>

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

const RegistryView: React.FC = () => {
  return (
    <div className="space-y-8 pb-10 animate-in fade-in duration-300">
      
      {/* 1. Asset Registry (Moved to Top) */}
      <GovernanceTable 
        title="1. Asset Registry (Use Cases)" 
        headers={[
          'Asset ID', 'Asset Name', 'Type', 'Criticality', 
          'Linked Models', 'Linked Controls', 'Owner', 'Status'
        ]}
        paginationInfo={`1-${MOCK_ASSET_MASTER.length} of ${MOCK_ASSET_MASTER.length}`}
        icon={Layers}
      >
        {MOCK_ASSET_MASTER.map((row) => (
          <tr key={row.asset_id} className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.asset_id}</td>
            <td className="px-6 py-4 text-sm text-gray-800 font-medium">{row.asset_name}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{row.asset_type}</td>
            <td className="px-6 py-4 text-sm text-gray-600">
              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                row.criticality === 'Critical' ? 'bg-red-100 text-red-800' : 
                row.criticality === 'High' ? 'bg-orange-100 text-orange-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {row.criticality}
              </span>
            </td>
            {/* Many-to-Many Links */}
            <td className="px-6 py-4 text-sm text-indigo-600">
               <div className="flex flex-wrap gap-1">
                  {row.linked_model_ids.map(id => (
                    <span key={id} className="px-1.5 py-0.5 bg-indigo-50 border border-indigo-100 rounded text-xs hover:bg-indigo-100 cursor-pointer" title="View Model">
                      {id}
                    </span>
                  ))}
               </div>
            </td>
            <td className="px-6 py-4 text-sm text-indigo-600">
               <div className="flex items-center gap-1">
                  <span className="font-bold text-gray-700">{row.linked_control_ids.length}</span>
                  <span className="text-xs text-gray-400">Controls</span>
               </div>
            </td>
            <td className="px-6 py-4 text-sm text-gray-600">{row.owner}</td>
            <td className="px-6 py-4 text-sm text-gray-600">
              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                row.approval_status === 'Approved' ? 'bg-green-100 text-green-800' : 
                row.approval_status === 'Draft' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
              }`}>
                {row.approval_status}
              </span>
            </td>
          </tr>
        ))}
      </GovernanceTable>

      {/* 2. Model Registry (Second) */}
      <GovernanceTable 
        title="2. Model Registry" 
        headers={[
          'Model ID', 'Name', 'Provider', 'Type', 'Linked Assets', 'Risk Rating', 'Status', 'Updated'
        ]}
        paginationInfo={`1-${MOCK_MODEL_MASTER.length} of ${MOCK_MODEL_MASTER.length}`}
        icon={Box}
      >
        {MOCK_MODEL_MASTER.map((row) => (
          <tr key={row.model_id} className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.model_id}</td>
            <td className="px-6 py-4 text-sm text-gray-800">{row.model_name}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{row.provider}</td>
            <td className="px-6 py-4 text-sm text-gray-600">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                {row.model_type}
              </span>
            </td>
            <td className="px-6 py-4 text-sm text-gray-600">
              <div className="flex flex-wrap gap-1">
                 {row.linked_asset_ids.map(id => (
                   <span key={id} className="text-xs text-gray-500 bg-gray-100 px-1 rounded">{id}</span>
                 ))}
              </div>
            </td>
            <td className="px-6 py-4 text-sm text-gray-600">
              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                row.risk_rating === 'High' ? 'bg-red-100 text-red-800' : 
                row.risk_rating === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
              }`}>
                {row.risk_rating}
              </span>
            </td>
            <td className="px-6 py-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <span className={`w-2 h-2 rounded-full ${
                  row.status === 'Production' ? 'bg-green-500' : 
                  row.status === 'Development' ? 'bg-blue-500' : 'bg-gray-400'
                }`}></span>
                {row.status}
              </span>
            </td>
            <td className="px-6 py-4 text-sm text-gray-500">{row.updated_at}</td>
          </tr>
        ))}
      </GovernanceTable>

      {/* 3. Control Library Table */}
      <GovernanceTable 
        title="3. Control Library" 
        headers={[
          'Control ID', 'Name', 'Owner Team', 'Category', 
          'Mandatory', 'Linked Assets', 'Updated'
        ]}
        paginationInfo={`1-${MOCK_CONTROL_MASTER.length} of ${MOCK_CONTROL_MASTER.length}`}
        icon={ShieldCheck}
      >
        {MOCK_CONTROL_MASTER.map((row) => (
          <tr key={row.control_id} className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.control_id}</td>
            <td className="px-6 py-4 text-sm text-gray-800 font-medium">{row.control_name}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{row.owner_team}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{row.control_category}</td>
            <td className="px-6 py-4 text-sm text-gray-600">
              {row.mandatory ? (
                <span className="text-red-600 font-semibold text-xs uppercase">Yes</span>
              ) : (
                <span className="text-gray-400 text-xs uppercase">No</span>
              )}
            </td>
            <td className="px-6 py-4 text-xs text-gray-500 font-mono">
              {row.linked_asset_ids.length > 0 ? (
                <span className="text-indigo-600 font-bold">{row.linked_asset_ids.length} Assets</span>
              ) : '-'}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500">{row.updated_at}</td>
          </tr>
        ))}
      </GovernanceTable>

      {/* 4. Test Case Configuration Table */}
      <GovernanceTable 
        title="4. Test Case Configuration" 
        headers={[
          'Test ID', 'Control ID', 'Model Target', 'Test Name', 'Type', 
          'Metric', 'Threshold', 'Result', 'Run Status'
        ]}
        paginationInfo={`1-${MOCK_TEST_CASE_MASTER.length} of ${MOCK_TEST_CASE_MASTER.length}`}
        icon={ClipboardCheck}
      >
        {MOCK_TEST_CASE_MASTER.map((row) => (
          <tr key={row.testcase_id} className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.testcase_id}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{row.control_id}</td>
            <td className="px-6 py-4 text-sm text-indigo-600 font-medium">{row.model_id}</td>
            <td className="px-6 py-4 text-sm text-gray-800">{row.testcase_name}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{row.testcase_type}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{row.metric}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{row.threshold}</td>
            <td className="px-6 py-4 text-sm text-gray-600 italic">{row.expected_result}</td>
            <td className="px-6 py-4 text-sm text-gray-600">
              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${
                row.last_run_status === 'Pass' ? 'bg-green-100 text-green-800' : 
                row.last_run_status === 'Fail' ? 'bg-red-100 text-red-800' : 
                row.last_run_status === 'Warning' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-600'
              }`}>
                {row.last_run_status}
              </span>
            </td>
          </tr>
        ))}
      </GovernanceTable>
    </div>
  );
};

export const GovernanceView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'Registry' | 'ModelHealth'>('Registry');

  return (
    <div className="flex flex-col">
      {/* Sub-navigation for Governance */}
      <div className="flex items-center space-x-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
        <button 
          onClick={() => setActiveSubTab('Registry')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeSubTab === 'Registry' 
              ? 'bg-white text-indigo-900 shadow-sm' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
          <span>Registry</span>
        </button>
        
        <button 
          onClick={() => setActiveSubTab('ModelHealth')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeSubTab === 'ModelHealth' 
              ? 'bg-white text-indigo-900 shadow-sm' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>Governance Dashboard</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1">
        {activeSubTab === 'Registry' ? <RegistryView /> : <ModelHealthView />}
      </div>
    </div>
  );
};
