export enum RiskLevel {
    LOW = 'Low',
    MEDIUM = 'Medium',
    HIGH = 'High',
    CRITICAL = 'Critical'
  }
  
  export interface ModelMetric {
    id: string;
    name: string;
    department: string;
    riskScore: number; // 0-100
    complianceStatus: 'Compliant' | 'Non-Compliant' | 'Review Pending';
    lastAuditDate: string;
    usageRequests: number;
  }
  
  export interface ComplianceStandard {
    name: string;
    region: string;
    status: 'Met' | 'Partial' | 'Failed';
    score: number;
  }
  
  export interface DashboardData {
    totalModels: number;
    highRiskModels: number;
    avgComplianceScore: number;
    activeIncidents: number;
    recentModels: ModelMetric[];
    complianceStandards: ComplianceStandard[];
  }
  
  export interface ChartDataPoint {
    name: string;
    value: number;
    value2?: number;
  }