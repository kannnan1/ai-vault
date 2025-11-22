import React, { useState, useEffect } from 'react';
import { Card, StatCard, Badge, Button } from '../components/UIComponents';
import { RiskTrendChart, CompliancePieChart, DepartmentRiskBarChart } from '../components/Charts';
import { DashboardData, RiskLevel } from '../types';
import { generateGovernanceInsight, generateRiskMitigationPlan } from '../services/geminiService';
import { 
  ShieldCheck, 
  AlertTriangle, 
  Activity, 
  FileText, 
  Sparkles, 
  RefreshCw,
  MoreHorizontal
} from 'lucide-react';

const MOCK_DATA: DashboardData = {
  totalModels: 124,
  highRiskModels: 14,
  avgComplianceScore: 87,
  activeIncidents: 3,
  recentModels: [
    { id: '1', name: 'CreditScoring_v2', department: 'Finance', riskScore: 78, complianceStatus: 'Review Pending', lastAuditDate: '2024-05-12', usageRequests: 1200 },
    { id: '2', name: 'CustSupportBot_Gen3', department: 'Ops', riskScore: 25, complianceStatus: 'Compliant', lastAuditDate: '2024-06-01', usageRequests: 8500 },
    { id: '3', name: 'FraudDetection_Beta', department: 'Security', riskScore: 92, complianceStatus: 'Non-Compliant', lastAuditDate: '2024-06-10', usageRequests: 340 },
    { id: '4', name: 'MarketingCopy_Gen', department: 'Marketing', riskScore: 45, complianceStatus: 'Compliant', lastAuditDate: '2024-05-28', usageRequests: 450 },
    { id: '5', name: 'HRCandidateScreen', department: 'HR', riskScore: 65, complianceStatus: 'Review Pending', lastAuditDate: '2024-06-05', usageRequests: 89 }
  ],
  complianceStandards: [
    { name: 'EU AI Act', region: 'EU', status: 'Partial', score: 72 },
    { name: 'NIST AI RMF', region: 'US', status: 'Met', score: 94 },
    { name: 'GDPR', region: 'EU', status: 'Met', score: 98 },
  ]
};

const Dashboard: React.FC = () => {
  const [insight, setInsight] = useState<string>('');
  const [loadingInsight, setLoadingInsight] = useState<boolean>(false);
  const [selectedModelForPlan, setSelectedModelForPlan] = useState<string | null>(null);
  const [mitigationPlan, setMitigationPlan] = useState<string>('');
  const [loadingPlan, setLoadingPlan] = useState<boolean>(false);

  const handleGenerateInsight = async () => {
    setLoadingInsight(true);
    const result = await generateGovernanceInsight(MOCK_DATA, "Quarterly Risk Review");
    setInsight(result);
    setLoadingInsight(false);
  };

  const handleGenerateMitigation = async (modelName: string, score: number) => {
    setSelectedModelForPlan(modelName);
    setLoadingPlan(true);
    setMitigationPlan(''); // Clear previous
    const result = await generateRiskMitigationPlan(modelName, score);
    setMitigationPlan(result);
    setLoadingPlan(false);
  };

  // Initial load
  useEffect(() => {
    // Optionally auto-generate insight on load? 
    // Let's wait for user interaction to save tokens/make it feel interactive.
  }, []);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Governance Overview</h1>
          <p className="text-slate-500 mt-1">Real-time monitoring of AI assets across the enterprise.</p>
        </div>
        <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
                <FileText size={16} /> Export PDF
            </Button>
            <Button onClick={handleGenerateInsight} disabled={loadingInsight} className="gap-2 bg-gradient-to-r from-solytics-800 to-solytics-500">
                {loadingInsight ? <RefreshCw className="animate-spin" size={16}/> : <Sparkles size={16} />}
                {insight ? 'Regenerate Analysis' : 'Generate AI Analysis'}
            </Button>
        </div>
      </div>

      {/* AI Insight Section (Conditional) */}
      {(insight || loadingInsight) && (
        <div className="bg-gradient-to-r from-solytics-900 to-solytics-800 rounded-xl p-6 text-white shadow-lg border border-solytics-500/30">
            <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Sparkles className="text-accent-500" size={20} />
                </div>
                <h3 className="font-semibold text-lg tracking-wide">Solytics AI Executive Summary</h3>
            </div>
            
            {loadingInsight ? (
                <div className="space-y-3 animate-pulse">
                    <div className="h-4 bg-white/10 rounded w-3/4"></div>
                    <div className="h-4 bg-white/10 rounded w-full"></div>
                    <div className="h-4 bg-white/10 rounded w-5/6"></div>
                </div>
            ) : (
                <div className="prose prose-invert max-w-none text-slate-100 leading-relaxed text-sm md:text-base">
                    {insight}
                </div>
            )}
        </div>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
            title="Total AI Models" 
            value={MOCK_DATA.totalModels} 
            trend="12%" 
            trendUp={true} 
            icon={<Activity size={24} />} 
        />
        <StatCard 
            title="High Risk Models" 
            value={MOCK_DATA.highRiskModels} 
            trend="4%" 
            trendUp={false} // Red arrow because more risk is bad
            icon={<AlertTriangle size={24} />} 
        />
        <StatCard 
            title="Avg. Compliance Score" 
            value={`${MOCK_DATA.avgComplianceScore}%`} 
            trend="2.5%" 
            trendUp={true} 
            icon={<ShieldCheck size={24} />} 
        />
        <StatCard 
            title="Active Incidents" 
            value={MOCK_DATA.activeIncidents} 
            trend="0%" 
            trendUp={true} 
            icon={<Activity size={24} />} 
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card title="Risk Exposure Trend" className="lg:col-span-2">
            <RiskTrendChart />
        </Card>
        <Card title="Compliance Distribution">
            <CompliancePieChart />
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card title="Risk by Department">
             <DepartmentRiskBarChart />
          </Card>
          
          <Card title="Regulatory Standards Status" className="lg:col-span-2">
            <div className="space-y-4">
                {MOCK_DATA.complianceStandards.map((std, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-slate-300 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className={`w-2 h-10 rounded-full ${std.status === 'Met' ? 'bg-emerald-500' : std.status === 'Partial' ? 'bg-amber-500' : 'bg-rose-500'}`}></div>
                            <div>
                                <h4 className="font-semibold text-slate-800">{std.name}</h4>
                                <p className="text-xs text-slate-500">Region: {std.region}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="text-right">
                                <span className="block text-xl font-bold text-slate-700">{std.score}%</span>
                                <span className="text-xs text-slate-400">Alignment</span>
                            </div>
                            <Badge type={std.status === 'Met' ? 'success' : std.status === 'Partial' ? 'warning' : 'danger'}>
                                {std.status}
                            </Badge>
                        </div>
                    </div>
                ))}
            </div>
          </Card>
      </div>

      {/* Model Inventory Table */}
      <Card title="Recent Model Activity">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-600">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50/50">
              <tr>
                <th className="px-6 py-3">Model Name</th>
                <th className="px-6 py-3">Department</th>
                <th className="px-6 py-3">Risk Score</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Last Audit</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_DATA.recentModels.map((model) => (
                <tr key={model.id} className="bg-white border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">{model.name}</td>
                  <td className="px-6 py-4">{model.department}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div 
                                className={`h-full rounded-full ${model.riskScore > 80 ? 'bg-rose-500' : model.riskScore > 50 ? 'bg-amber-500' : 'bg-emerald-500'}`} 
                                style={{ width: `${model.riskScore}%`}}
                            ></div>
                        </div>
                        <span className="text-xs font-semibold">{model.riskScore}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge type={
                        model.complianceStatus === 'Compliant' ? 'success' : 
                        model.complianceStatus === 'Non-Compliant' ? 'danger' : 'warning'
                    }>
                        {model.complianceStatus}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">{model.lastAuditDate}</td>
                  <td className="px-6 py-4 text-right">
                    <button 
                        onClick={() => handleGenerateMitigation(model.name, model.riskScore)}
                        className="text-solytics-500 hover:text-solytics-800 font-medium text-xs flex items-center justify-end gap-1 ml-auto"
                    >
                        Mitigate <MoreHorizontal size={14}/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      
      {/* Mitigation Plan Modal/Overlay - Simplified as an inline reveal for this demo */}
      {selectedModelForPlan && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                    <h3 className="font-semibold text-slate-800">Risk Mitigation Strategy</h3>
                    <button onClick={() => setSelectedModelForPlan(null)} className="text-slate-400 hover:text-slate-600">✕</button>
                </div>
                <div className="p-6">
                    <h4 className="text-sm text-slate-500 mb-2">Target: <span className="text-slate-900 font-bold">{selectedModelForPlan}</span></h4>
                    
                    {loadingPlan ? (
                         <div className="flex items-center justify-center py-12 text-solytics-500 gap-2">
                            <RefreshCw className="animate-spin" />
                            <span>Generating Strategy...</span>
                         </div>
                    ) : (
                        <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-amber-900 text-sm whitespace-pre-line">
                            {mitigationPlan}
                        </div>
                    )}
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
                    <Button variant="secondary" onClick={() => setSelectedModelForPlan(null)}>Close</Button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;