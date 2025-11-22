
import React, { useState } from 'react';
import { 
  ShieldAlert, CheckCircle2, TrendingUp, AlertTriangle, 
  Users, Activity, FileCheck, Eye, Lock,
  BarChart3, Globe, Scale, Server, Search, ArrowRight, CheckSquare
} from 'lucide-react';
import { GovernancePersona } from '../types';

// --- Types for Widget Configurations ---

type WidgetType = 
  | 'global_map' 
  | 'risk_heatmap' 
  | 'compliance_radar' 
  | 'reg_tracker' 
  | 'validation_charts' 
  | 'fairness_cockpit' 
  | 'ops_monitor' 
  | 'audit_table';

interface PersonaConfig {
  focus: string;
  actions: string;
  kpis: any[];
  widgets: WidgetType[];
  assetTitle: string; // Title for the bottom list
  assetData: any[];   // Mock data for the bottom list
}

// --- Mock Data for Contextual Assets ---

const ASSETS_BOARD = [
  { name: 'EU AI Act Compliance', type: 'Regulation', status: 'On Track', owner: 'Compliance Team', priority: 'High' },
  { name: 'NIST AI RMF Adoption', type: 'Framework', status: 'In Progress', owner: 'Risk Team', priority: 'Medium' },
  { name: 'GenAI Global Policy', type: 'Policy', status: 'Review', owner: 'Legal', priority: 'High' },
];

const ASSETS_CRO = [
  { name: 'FinGPT-v4', type: 'Model', risk: 'High', issue: 'Financial Advice Error Rate > 1%', action: 'Retire' },
  { name: 'GPT-4o Fine-tuned', type: 'Model', risk: 'High', issue: 'Pending Jailbreak Analysis', action: 'Mitigate' },
  { name: 'Stable Diffusion XL', type: 'Model', risk: 'Medium', issue: 'Copyright Check Failed', action: 'Review' },
];

const ASSETS_OPS = [
  { name: 'Customer Support Assistant', type: 'Deployment', status: 'Degraded', latency: '450ms', blocks: '124' },
  { name: 'Internal Code Companion', type: 'Deployment', status: 'Healthy', latency: '45ms', blocks: '2' },
  { name: 'Email Triage Agent', type: 'Deployment', status: 'Healthy', latency: '120ms', blocks: '15' },
];

const ASSETS_AUDIT = [
  { name: 'Llama-3-70B-Instruct', audit_id: 'AUD-2025-001', evidence: '85%', missing: 'Data Lineage', due: '2 days' },
  { name: 'GPT-4o Fine-tuned', audit_id: 'AUD-2025-004', evidence: '100%', missing: '-', due: 'Complete' },
  { name: 'Mistral-Large', audit_id: 'AUD-2025-009', evidence: '40%', missing: 'Model Card, Bias Test', due: '1 week' },
];

// --- Helper Components (Widgets) ---

const KPICard = ({ title, value, subtext, icon: Icon, colorClass }: any) => (
  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between h-32 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">{title}</h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-2xl font-bold text-gray-900">{value}</span>
        </div>
      </div>
      <div className={`p-2 rounded-full ${colorClass} bg-opacity-10`}>
        <Icon className={`w-5 h-5 ${colorClass.replace('bg-', 'text-')}`} />
      </div>
    </div>
    <div className="mt-2">
      <span className="text-xs text-gray-500 font-medium">{subtext}</span>
    </div>
  </div>
);

// 1. Global Governance Index (Board)
const GlobalMapWidget = () => (
  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm h-full relative overflow-hidden">
    <div className="mb-6 flex justify-between items-center relative z-10">
      <div>
        <h3 className="text-lg font-bold text-indigo-900">Global Compliance Index</h3>
        <p className="text-sm text-gray-500">Regulatory adherence by jurisdiction</p>
      </div>
      <Globe className="text-gray-300 w-6 h-6" />
    </div>
    
    {/* Stylized World Map Background */}
    <div className="absolute inset-0 opacity-10 z-0 flex items-center justify-center pointer-events-none">
       <svg viewBox="0 0 1000 500" className="w-full h-full fill-indigo-900">
          <path d="M 50,150 Q 100,100 200,120 T 350,150 T 500,200 T 700,150 T 900,180" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M 100,100 L 120,80 L 150,90 L 130,120 Z" /> {/* Simple Shapes representing continents */}
          <path d="M 300,150 L 350,130 L 400,160 L 380,200 Z" />
          <path d="M 600,100 L 650,80 L 700,120 L 620,150 Z" />
          <circle cx="200" cy="150" r="40" fill="currentColor" />
          <circle cx="700" cy="150" r="30" fill="currentColor" />
          <circle cx="500" cy="300" r="50" fill="currentColor" />
       </svg>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10 mt-8">
      {[
        { region: 'EU (AI Act)', score: 98, status: 'Compliant', color: 'bg-emerald-500', text: 'text-emerald-700', bg: 'bg-emerald-50' },
        { region: 'North America (NIST)', score: 92, status: 'Minor Gaps', color: 'bg-blue-500', text: 'text-blue-700', bg: 'bg-blue-50' },
        { region: 'APAC (Multiple)', score: 85, status: 'Review Needed', color: 'bg-yellow-500', text: 'text-yellow-700', bg: 'bg-yellow-50' },
      ].map((item) => (
        <div key={item.region} className={`border rounded-lg p-4 flex flex-col items-center text-center relative overflow-hidden ${item.bg} border-white shadow-sm`}>
           <h4 className="font-semibold text-gray-800 mb-2 text-sm">{item.region}</h4>
           <div className="text-4xl font-extrabold text-gray-900 mb-1">{item.score}<span className="text-base text-gray-500">%</span></div>
           <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white font-bold ${item.text}`}>
             {item.status}
           </span>
        </div>
      ))}
    </div>
  </div>
);

// 2. Risk Heatmap (CRO) - Accurate Data
const RiskHeatmapWidget = () => (
  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm h-full flex flex-col">
    <div className="mb-4 flex justify-between">
      <div>
         <h3 className="text-lg font-bold text-indigo-900">Residual Risk Heatmap</h3>
         <p className="text-sm text-gray-500">GenAI Risk Distribution (Impact vs. Likelihood)</p>
      </div>
    </div>
    
    <div className="flex-1 flex relative">
       {/* Y Axis Label */}
       <div className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-bold text-gray-400 tracking-widest">SEVERITY</div>
       
       <div className="w-full h-64 grid grid-cols-5 grid-rows-5 gap-1 ml-4 mb-4">
         {/* Row 5 (High Impact) */}
         <div className="bg-yellow-200/50 rounded flex items-center justify-center text-xs text-yellow-800 font-bold hover:bg-yellow-300 transition-colors" title="2 Models: Data Leakage Risks">2</div>
         <div className="bg-orange-200/50 rounded hover:bg-orange-300 transition-colors"></div>
         <div className="bg-orange-300 rounded flex items-center justify-center text-xs text-orange-900 font-bold shadow-sm border border-orange-400 hover:scale-105 transition-transform cursor-pointer" title="5 Models: Hallucination Risks">5</div>
         <div className="bg-red-300/50 rounded hover:bg-red-400 transition-colors"></div>
         <div className="bg-red-500 rounded flex flex-col items-center justify-center text-xs text-white font-bold shadow-sm border border-red-600 hover:scale-105 transition-transform cursor-pointer" title="1 Critical: Jailbreak Vulnerability">
            <span>1</span>
            <span className="text-[8px]">CRIT</span>
         </div>
         
         {/* Row 4 */}
         <div className="bg-yellow-100 rounded hover:bg-yellow-200"></div>
         <div className="bg-yellow-200 rounded hover:bg-yellow-300"></div>
         <div className="bg-orange-200 rounded flex items-center justify-center text-xs text-orange-800 font-bold hover:bg-orange-300" title="1 Model: Copyright Risk">1</div>
         <div className="bg-orange-300/50 rounded hover:bg-orange-400"></div>
         <div className="bg-red-300 rounded flex items-center justify-center text-xs text-red-900 font-bold hover:bg-red-400" title="3 Models: Bias Detected">3</div>

         {/* Row 3 */}
         <div className="bg-green-100 rounded"></div>
         <div className="bg-yellow-100 rounded"></div>
         <div className="bg-yellow-200 rounded"></div>
         <div className="bg-orange-200/50 rounded"></div>
         <div className="bg-orange-300/50 rounded"></div>

         {/* Row 2 */}
         <div className="bg-green-50 rounded"></div>
         <div className="bg-green-100 rounded"></div>
         <div className="bg-yellow-100 rounded"></div>
         <div className="bg-yellow-200/50 rounded"></div>
         <div className="bg-orange-200/50 rounded"></div>

         {/* Row 1 (Low Impact) */}
         <div className="bg-green-50 rounded"></div>
         <div className="bg-green-50 rounded"></div>
         <div className="bg-green-100 rounded"></div>
         <div className="bg-yellow-100 rounded"></div>
         <div className="bg-yellow-200/50 rounded"></div>
       </div>
    </div>
    <div className="text-center text-[10px] font-bold text-gray-400 tracking-widest ml-4">LIKELIHOOD</div>
  </div>
);

// 3. Compliance Radar (CRO/CCO)
const RadarChartWidget = () => (
  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm h-full">
    <div className="mb-2">
      <h3 className="text-lg font-bold text-indigo-900">Governance Radar</h3>
      <p className="text-sm text-gray-500">Score across key pillars</p>
    </div>
    <div className="flex items-center justify-center h-64">
       {/* SVG Radar Chart Simulation */}
       <svg viewBox="0 0 200 200" className="w-full h-full max-h-64">
          <polygon points="100,20 180,100 100,180 20,100" fill="none" stroke="#e5e7eb" strokeWidth="1" />
          <polygon points="100,40 160,100 100,160 40,100" fill="none" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="#e5e7eb" strokeWidth="1" />
          
          {/* Data Shape */}
          <polygon points="100,30 170,100 100,150 50,100" fill="rgba(99, 102, 241, 0.2)" stroke="#4f46e5" strokeWidth="2" />
          
          {/* Labels */}
          <text x="100" y="15" textAnchor="middle" className="text-[10px] fill-gray-500 font-bold">SAFETY</text>
          <text x="190" y="105" textAnchor="middle" className="text-[10px] fill-gray-500 font-bold">PRIVACY</text>
          <text x="100" y="195" textAnchor="middle" className="text-[10px] fill-gray-500 font-bold">FAIRNESS</text>
          <text x="10" y="105" textAnchor="middle" className="text-[10px] fill-gray-500 font-bold">ROBUSTNESS</text>
       </svg>
    </div>
  </div>
);

// 4. Ops Monitor (Engineering)
const OpsMonitorWidget = () => (
  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-sm h-full text-gray-300">
    <div className="mb-4 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-bold text-white">Live Guardrail Monitor</h3>
        <p className="text-xs text-gray-400">Real-time PII & Injection Blocks</p>
      </div>
      <div className="flex items-center gap-2">
         <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
         <span className="text-xs font-mono">LIVE</span>
      </div>
    </div>
    
    <div className="space-y-4 font-mono text-xs">
       <div className="flex justify-between items-center border-b border-gray-800 pb-2">
         <span className="text-red-400">BLOCK [Injection]</span>
         <span className="text-gray-500">10:42:05 AM</span>
         <span>Model: GPT-4o</span>
       </div>
       <div className="flex justify-between items-center border-b border-gray-800 pb-2">
         <span className="text-green-400">ALLOW</span>
         <span className="text-gray-500">10:42:01 AM</span>
         <span>Model: Llama-3-70B</span>
       </div>
       <div className="flex justify-between items-center border-b border-gray-800 pb-2">
         <span className="text-red-400">BLOCK [PII]</span>
         <span className="text-gray-500">10:41:55 AM</span>
         <span>Model: CustomerChat</span>
       </div>
       
       {/* Mini Chart */}
       <div className="h-24 mt-4 flex items-end gap-1">
          {[40, 25, 60, 30, 80, 45, 20, 50, 35, 65, 85, 55].map((h, i) => (
            <div key={i} style={{ height: `${h}%`}} className="flex-1 bg-indigo-600 hover:bg-indigo-500 rounded-t-sm transition-all"></div>
          ))}
       </div>
       <div className="text-center text-[10px] text-gray-500">Last 60 Seconds Request Volume</div>
    </div>
  </div>
);

// 5. Validation Charts (Model Risk)
const ValidationChartsWidget = () => {
  // Mock data: 30 days represented by 13 points for the line chart
  const data = [
    { day: '1', val1: 20, val2: 10 },
    { day: '3', val1: 22, val2: 12 },
    { day: '5', val1: 18, val2: 11 },
    { day: '8', val1: 25, val2: 8 },
    { day: '10', val1: 30, val2: 9 },
    { day: '12', val1: 28, val2: 14 },
    { day: '15', val1: 35, val2: 12 },
    { day: '18', val1: 42, val2: 10 }, // Spike in Hallucination
    { day: '20', val1: 38, val2: 11 },
    { day: '22', val1: 30, val2: 8 },
    { day: '25', val1: 25, val2: 7 },
    { day: '28', val1: 22, val2: 6 },
    { day: '30', val1: 20, val2: 5 },
  ];

  // Generate points for SVG polyline
  const points1 = data.map((d, i) => `${(i / (data.length - 1)) * 100},${50 - d.val1}`).join(' ');
  const points2 = data.map((d, i) => `${(i / (data.length - 1)) * 100},${50 - d.val2}`).join(' ');

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm h-full flex flex-col">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-indigo-900">Model Trend Analysis</h3>
        <p className="text-sm text-gray-500">Gen AI Metrics over last 30 days</p>
      </div>
      
      <div className="flex-1 relative w-full min-h-[150px]">
         <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible" preserveAspectRatio="none">
            {/* Grid Lines */}
            <line x1="0" y1="0" x2="100" y2="0" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="0" y1="12.5" x2="100" y2="12.5" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="0" y1="25" x2="100" y2="25" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="0" y1="37.5" x2="100" y2="37.5" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="#9ca3af" strokeWidth="0.5" />

            {/* Line 1: Hallucination (Blue) */}
            <polyline 
               points={points1} 
               fill="none" 
               stroke="#3b82f6" 
               strokeWidth="1.5" 
               vectorEffect="non-scaling-stroke"
               strokeLinecap="round"
               strokeLinejoin="round"
            />

            {/* Line 2: Toxicity (Purple) */}
            <polyline 
               points={points2} 
               fill="none" 
               stroke="#a855f7" 
               strokeWidth="1.5" 
               vectorEffect="non-scaling-stroke"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
            
            {/* Hover Indicator (Static: Today) */}
            <circle cx="100" cy={50 - data[data.length-1].val1} r="1.5" fill="#3b82f6" />
            <circle cx="100" cy={50 - data[data.length-1].val2} r="1.5" fill="#a855f7" />
         </svg>

         {/* Y-Axis Labels */}
         <div className="absolute top-0 -left-6 h-full flex flex-col justify-between text-[9px] text-gray-400 font-medium">
            <span>High</span>
            <span>Med</span>
            <span>Low</span>
         </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-4 text-xs font-medium">
        <div className="flex items-center gap-2">
           <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
           <span className="text-gray-600">Hallucination Rate</span>
        </div>
        <div className="flex items-center gap-2">
           <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
           <span className="text-gray-600">Toxicity Score</span>
        </div>
      </div>
    </div>
  );
};

// 6. Ethical Cockpit (Ethics)
const EthicalCockpitWidget = () => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm h-full">
        <div className="mb-4">
            <h3 className="text-lg font-bold text-indigo-900">Fairness Assessment</h3>
            <p className="text-sm text-gray-500">Disparate Impact Analysis</p>
        </div>
        <div className="space-y-4">
            <div>
                <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-700">Gender Parity</span>
                    <span className="text-green-600 font-bold">0.98</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '98%' }}></div>
                </div>
            </div>
            <div>
                <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-700">Racial Equity</span>
                    <span className="text-yellow-600 font-bold">0.85</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
            </div>
            <div>
                <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-700">Age Neutrality</span>
                    <span className="text-blue-600 font-bold">0.92</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                </div>
            </div>
        </div>
    </div>
);

// 7. Audit Table (Internal Audit)
const AuditTableWidget = () => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm h-full overflow-auto">
        <div className="mb-4">
            <h3 className="text-lg font-bold text-indigo-900">Audit Evidence Bundle</h3>
            <p className="text-sm text-gray-500">Completion status by model</p>
        </div>
        <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                <tr>
                    <th className="px-2 py-2">Model</th>
                    <th className="px-2 py-2">Progress</th>
                    <th className="px-2 py-2">Status</th>
                </tr>
            </thead>
            <tbody>
                {[
                    { m: 'Credit Risk LLM', p: 100, s: 'Ready' },
                    { m: 'Marketing Gen', p: 45, s: 'Incomplete' },
                    { m: 'Fraud Detect', p: 80, s: 'Review' },
                    { m: 'HR Screener', p: 10, s: 'Started' },
                ].map((row, i) => (
                    <tr key={i} className="border-b">
                        <td className="px-2 py-3 font-medium text-gray-900">{row.m}</td>
                        <td className="px-2 py-3">
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div className={`h-1.5 rounded-full ${row.p === 100 ? 'bg-green-500' : 'bg-indigo-500'}`} style={{ width: `${row.p}%` }}></div>
                            </div>
                        </td>
                        <td className="px-2 py-3 text-xs">{row.s}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

// --- Configuration Object ---

const PERSONA_CONFIG: Record<GovernancePersona, PersonaConfig> = {
  'Board / CEO': {
    focus: 'Strategic compliance posture',
    actions: 'Approve AI policy, review quarterly governance reports',
    kpis: [
      { title: 'AI Governance Index', value: '92/100', subtext: '+2% from last quarter', icon: TrendingUp, colorClass: 'bg-emerald-500' },
      { title: '% Compliant Models', value: '95%', subtext: 'Target: 98%', icon: CheckCircle2, colorClass: 'bg-blue-500' },
      { title: 'High-risk Incidents', value: '0', subtext: 'Last 30 days', icon: ShieldAlert, colorClass: 'bg-red-500' },
      { title: 'Active AI Policies', value: '12', subtext: 'Across 3 jurisdictions', icon: FileCheck, colorClass: 'bg-indigo-500' },
    ],
    widgets: ['global_map', 'risk_heatmap'],
    assetTitle: 'Strategic Initiatives & Policy Gaps',
    assetData: ASSETS_BOARD
  },
  'Chief Risk Officer (CRO)': {
    focus: 'Risk exposure & regulatory compliance',
    actions: 'Direct mitigation, escalate policy exceptions',
    kpis: [
      { title: 'Residual Risk Score', value: '7.7', subtext: 'AVG across portfolio', icon: Activity, colorClass: 'bg-orange-500' },
      { title: 'Non-compliant Models', value: '3', subtext: 'Requiring immediate attention', icon: AlertTriangle, colorClass: 'bg-red-500' },
      { title: 'Total Risk Number', value: '31', subtext: '14 High, 12 Med, 5 Low', icon: BarChart3, colorClass: 'bg-gray-700' },
      { title: 'Fairness Delta', value: '1.2%', subtext: 'Variance in protected groups', icon: Scale, colorClass: 'bg-purple-500' },
    ],
    widgets: ['risk_heatmap', 'compliance_radar'],
    assetTitle: 'Priority Risk Mitigation Queue',
    assetData: ASSETS_CRO
  },
  'Chief Compliance Officer (CCO)': {
    focus: 'Policy alignment & regulatory readiness',
    actions: 'Prepare regulator reporting and attestations',
    kpis: [
      { title: 'Regulator Reporting', value: 'Ready', subtext: 'EU AI Act & RBI MRM', icon: FileCheck, colorClass: 'bg-green-600' },
      { title: 'Audit Completeness', value: '88%', subtext: 'Evidence bundles collected', icon: CheckCircle2, colorClass: 'bg-blue-500' },
      { title: 'MTT Detect', value: '4 hrs', subtext: 'Mean time to detect violation', icon: Eye, colorClass: 'bg-indigo-500' },
      { title: 'Policy Drift', value: 'Low', subtext: '2 minor deviations', icon: TrendingUp, colorClass: 'bg-yellow-500' },
    ],
    widgets: ['audit_table', 'compliance_radar'],
    assetTitle: 'Pending Regulatory Attestations',
    assetData: ASSETS_BOARD
  },
  'Head of Model Risk': {
    focus: 'Technical validation performance',
    actions: 'Manage re-validation cycles, tune test suites',
    kpis: [
      { title: 'Validation Pass Rate', value: '91%', subtext: 'Last cycle', icon: CheckCircle2, colorClass: 'bg-emerald-500' },
      { title: 'Drift Score Trend', value: '+0.5', subtext: 'Slight increase in drift', icon: Activity, colorClass: 'bg-orange-500' },
      { title: 'Bias Score Variance', value: '0.04', subtext: 'Within acceptable range', icon: Scale, colorClass: 'bg-purple-500' },
      { title: 'Test Coverage', value: '96%', subtext: 'Of critical controls', icon: ShieldAlert, colorClass: 'bg-blue-500' },
    ],
    widgets: ['validation_charts', 'risk_heatmap'],
    assetTitle: 'Models Failing Validation',
    assetData: ASSETS_CRO
  },
  'AI Governance Council': {
    focus: 'Fairness, ethics, human oversight',
    actions: 'Approve model release or escalate for review',
    kpis: [
      { title: 'Ethical Violation Index', value: '0.2', subtext: 'Very Low Risk', icon: Scale, colorClass: 'bg-green-500' },
      { title: 'Transparency Score', value: '94%', subtext: 'Model cards available', icon: Eye, colorClass: 'bg-blue-500' },
      { title: 'Human Override Ratio', value: '2.1%', subtext: 'Interventions / Decisions', icon: Users, colorClass: 'bg-orange-500' },
      { title: 'Bias Incidents', value: '1', subtext: 'Under investigation', icon: AlertTriangle, colorClass: 'bg-red-500' },
    ],
    widgets: ['fairness_cockpit', 'validation_charts'],
    assetTitle: 'Models Pending Ethics Review',
    assetData: ASSETS_CRO
  },
  'Engineering / ML Ops': {
    focus: 'Runtime control enforcement',
    actions: 'Fix pipelines, redeploy safe versions',
    kpis: [
      { title: 'Guardrail Triggers', value: '1,204', subtext: 'Last 24h blocked requests', icon: ShieldAlert, colorClass: 'bg-red-500' },
      { title: 'Policy Sync Health', value: '100%', subtext: 'OPA Policies active', icon: Activity, colorClass: 'bg-emerald-500' },
      { title: 'Latency Impact', value: '12ms', subtext: 'Avg governance overhead', icon: Activity, colorClass: 'bg-blue-500' },
      { title: 'Shadow Models', value: '0', subtext: 'Unauthorized deployments', icon: Lock, colorClass: 'bg-gray-800' },
    ],
    widgets: ['ops_monitor', 'risk_heatmap'],
    assetTitle: 'Deployments with Governance Alerts',
    assetData: ASSETS_OPS
  },
  'Internal Audit': {
    focus: 'Evidence traceability',
    actions: 'Certify compliance, issue audit opinion',
    kpis: [
      { title: 'Evidence Bundles', value: '100%', subtext: 'For production models', icon: FileCheck, colorClass: 'bg-emerald-500' },
      { title: 'Audit Trail Gaps', value: '0', subtext: 'Logs continuous', icon: CheckCircle2, colorClass: 'bg-blue-500' },
      { title: 'Repeat Findings', value: '1', subtext: 'Down from 4 last year', icon: TrendingUp, colorClass: 'bg-orange-500' },
      { title: 'Control Effectiveness', value: 'High', subtext: 'Testing verified', icon: ShieldAlert, colorClass: 'bg-indigo-500' },
    ],
    widgets: ['audit_table', 'compliance_radar'],
    assetTitle: 'Open Audit Findings',
    assetData: ASSETS_AUDIT
  }
};

export const ModelHealthView: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<GovernancePersona>('Chief Risk Officer (CRO)');
  
  const config = PERSONA_CONFIG[selectedRole];

  // Helper to render correct widgets based on config
  const renderWidget = (type: WidgetType) => {
    switch (type) {
      case 'global_map': return <GlobalMapWidget />;
      case 'risk_heatmap': return <RiskHeatmapWidget />;
      case 'compliance_radar': return <RadarChartWidget />;
      case 'ops_monitor': return <OpsMonitorWidget />;
      case 'validation_charts': return <ValidationChartsWidget />;
      case 'fairness_cockpit': return <EthicalCockpitWidget />;
      case 'audit_table': return <AuditTableWidget />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      
      {/* Role Selector */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-50 text-indigo-700 rounded-lg">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Viewing Dashboard As</label>
            <select 
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value as GovernancePersona)}
              className="mt-1 block w-full md:w-72 pl-0 pr-8 py-1 border-0 border-b-2 border-indigo-100 bg-transparent text-indigo-900 font-bold focus:ring-0 focus:border-indigo-500 sm:text-lg cursor-pointer"
            >
              {Object.keys(PERSONA_CONFIG).map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col md:items-end text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <span className="font-semibold">Focus:</span>
            <span>{config.focus}</span>
          </div>
          <div className="flex items-center gap-2 text-indigo-600 mt-1">
             <span className="font-semibold">Key Action:</span>
             <span className="italic">{config.actions}</span>
          </div>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {config.kpis.map((kpi, idx) => (
          <KPICard key={idx} {...kpi} />
        ))}
      </div>

      {/* Main Visualization Row - Dynamic Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[350px]">
         {config.widgets.map((widgetType, idx) => (
           <div key={idx} className="h-full">
             {renderWidget(widgetType)}
           </div>
         ))}
      </div>

      {/* Contextual Asset List - Bottom Section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
           <h3 className="font-bold text-indigo-900 flex items-center gap-2">
             <CheckSquare className="w-5 h-5 text-indigo-500" />
             {config.assetTitle}
           </h3>
           <button className="text-xs font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
             View All <ArrowRight className="w-3 h-3" />
           </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white border-b border-gray-100">
              <tr>
                {Object.keys(config.assetData[0]).map(key => (
                  <th key={key} className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">{key.replace('_', ' ')}</th>
                ))}
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {config.assetData.map((row: any, idx: number) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                   {Object.values(row).map((val: any, i) => (
                     <td key={i} className="px-6 py-3 text-gray-700 font-medium">
                        {val}
                     </td>
                   ))}
                   <td className="px-6 py-3">
                      <button className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-bold hover:bg-indigo-100 border border-indigo-200">
                        Open
                      </button>
                   </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
