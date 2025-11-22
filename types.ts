
export interface ModelItem {
  id: string;
  name: string;
  status: string;
  templateName: string;
  createdBy: string;
  assignedTo: string;
  createdOn: string;
  updatedOn: string;
}

export interface AlertItem {
  id: string;
  message: string;
  daysOverdue: number;
  type: 'overdue' | 'warning' | 'info';
}

export interface TaskItem {
  id: string;
  taskName: string;
  workflowStatus: string;
  description: string;
  tat: string;
  checklistProgress: string;
}

// New Governance Types

export interface ModelMaster {
  model_id: string;
  model_name: string;
  model_type: 'GenAI' | 'LLM' | 'ML' | 'Rule-based';
  provider: string;
  version: string;
  business_unit: string;
  owner: string;
  risk_rating: 'High' | 'Medium' | 'Low';
  regulatory_category: 'High-risk AI' | 'Non-high-risk AI';
  description: string;
  status: 'Development' | 'Production' | 'Retired' | 'Validation';
  linked_asset_ids: string[];
  created_at: string;
  updated_at: string;
}

export interface AssetMaster {
  asset_id: string;
  asset_name: string; // Formerly Use Case Name
  asset_type: 'Internal' | 'Customer-facing' | 'Decision-support' | 'Product Feature';
  criticality: 'Critical' | 'High' | 'Medium' | 'Low';
  jurisdiction_applicable: Record<string, string>;
  data_categories_used: string[];
  owner: string;
  approval_status: 'Draft' | 'Approved' | 'Rejected' | 'Pending Review';
  linked_model_ids: string[];
  linked_control_ids: string[];
  created_at: string;
  updated_at: string;
}

export interface ControlMaster {
  control_id: string;
  control_name: string;
  owner_team: string; // e.g., Security, Data Gov, Legal
  regulation_reference: string;
  control_category: 'Data Governance' | 'Privacy' | 'Security' | 'Bias' | 'Validation' | 'Explainability';
  control_description: string;
  mandatory: boolean;
  frequency: 'Daily' | 'Weekly' | 'Monthly' | 'Quarterly' | 'On Change';
  linked_asset_ids: string[];
  created_at: string;
  updated_at: string;
}

export interface TestCaseMaster {
  testcase_id: string;
  control_id: string;
  model_id: string; // Specific model being tested against the control
  testcase_name: string;
  testcase_description: string;
  testcase_type: 'Automated' | 'Manual' | 'Agentic';
  input_requirements: string; 
  expected_result: string;
  metric: string;
  threshold: string;
  severity: 'High' | 'Medium' | 'Low' | 'Critical';
  last_run_date: string;
  last_run_status: 'Pass' | 'Fail' | 'Warning' | 'Not Run';
  reviewer: string;
  created_at: string;
  updated_at: string;
}

export type GovernancePersona = 
  | 'Board / CEO'
  | 'Chief Risk Officer (CRO)'
  | 'Chief Compliance Officer (CCO)'
  | 'Head of Model Risk'
  | 'AI Governance Council'
  | 'Engineering / ML Ops'
  | 'Internal Audit';
