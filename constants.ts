
import { 
  ModelItem, AlertItem, TaskItem, 
  ModelMaster, AssetMaster, ControlMaster, TestCaseMaster 
} from './types';

export const MOCK_MODELS: ModelItem[] = [
  {
    id: 'MOD-322',
    name: 'Algorithmic Devie',
    status: 'Model Metadata I...',
    templateName: 'Onboarding',
    createdBy: 'mrm_admin',
    assignedTo: 'mrm_admin',
    createdOn: '11/20/2025',
    updatedOn: '11/20/2025'
  },
  {
    id: 'MOD-321',
    name: 'ALgorithmic Device',
    status: 'Start Onboarding',
    templateName: 'Onboarding',
    createdBy: 'mrm_admin',
    assignedTo: 'mrm_admin',
    createdOn: '11/20/2025',
    updatedOn: '11/20/2025'
  },
  {
    id: 'MOD-320',
    name: 'Credit Risk Alpha',
    status: 'Validation',
    templateName: 'Risk Model',
    createdBy: 'j_doe',
    assignedTo: 'risk_team',
    createdOn: '11/18/2025',
    updatedOn: '11/19/2025'
  },
  {
    id: 'MOD-319',
    name: 'Market Forecast v2',
    status: 'Approved',
    templateName: 'Forecasting',
    createdBy: 's_smith',
    assignedTo: 'analytics',
    createdOn: '11/15/2025',
    updatedOn: '11/18/2025'
  },
  {
    id: 'MOD-318',
    name: 'Customer Churn ML',
    status: 'Draft',
    templateName: 'ML Ops',
    createdBy: 'mrm_admin',
    assignedTo: 'data_science',
    createdOn: '11/10/2025',
    updatedOn: '11/12/2025'
  },
];

export const MOCK_ALERTS: AlertItem[] = [
  {
    id: 'AIM-216',
    message: 'AIM-216 is overdue for Annual Certification Alert by 9 days',
    daysOverdue: 9,
    type: 'overdue'
  },
  {
    id: 'AIM-238',
    message: 'AIM-238 is overdue for Annual Certification Alert by 25 days',
    daysOverdue: 25,
    type: 'overdue'
  },
  {
    id: 'AIM-214',
    message: 'AIM-214 is overdue for Annual Certification Alert by 26 days',
    daysOverdue: 26,
    type: 'overdue'
  },
  {
    id: 'MMT-196',
    message: 'MMT-196 is overdue for Annual Certification Alert by 29 days',
    daysOverdue: 29,
    type: 'overdue'
  },
  {
    id: 'MMT-155',
    message: 'MMT-155 is pending initial review for 3 days',
    daysOverdue: 3,
    type: 'warning'
  },
  {
    id: 'SYS-001',
    message: 'System maintenance scheduled for weekend',
    daysOverdue: 0,
    type: 'info'
  },
];

export const MOCK_TASKS: TaskItem[] = [
  {
    id: 'MOD-322',
    taskName: 'Algorithmic Devie',
    workflowStatus: 'Model Metadata Intake',
    description: 'Captures all key metadata a...',
    tat: 'N/A',
    checklistProgress: '2/2'
  },
  {
    id: 'MOD-321',
    taskName: 'ALgorithmic Device',
    workflowStatus: 'Start Onboarding Proces...',
    description: 'Initial point for manual onb...',
    tat: 'N/A',
    checklistProgress: '0/2'
  },
  {
    id: 'MOD-315',
    taskName: 'Credit Risk Review',
    workflowStatus: 'Validation Review',
    description: 'Validate accuracy of out...',
    tat: '2 Days',
    checklistProgress: '1/5'
  },
  {
    id: 'MOD-310',
    taskName: 'Fraud Detection V1',
    workflowStatus: 'Deployment Approval',
    description: 'Approve for production...',
    tat: 'Urgent',
    checklistProgress: '3/3'
  },
  {
    id: 'MOD-305',
    taskName: 'Customer Segmentation',
    workflowStatus: 'Data Check',
    description: 'Verify data integrity sour...',
    tat: '5 Days',
    checklistProgress: '0/1'
  },
];

// --- NEW GOVERNANCE MOCK DATA (10 GEN AI EXAMPLES) ---

// 1. Assets (Use Cases)
export const MOCK_ASSET_MASTER: AssetMaster[] = [
  {
    asset_id: 'AST-001',
    asset_name: 'Customer Support Assistant',
    asset_type: 'Customer-facing',
    criticality: 'High',
    jurisdiction_applicable: { EU: 'Yes', US: 'Yes' },
    data_categories_used: ['PII', 'Customer History'],
    owner: 'Support Ops',
    approval_status: 'Approved',
    linked_model_ids: ['LLM-001', 'LLM-004'],
    linked_control_ids: ['CTR-001', 'CTR-002', 'CTR-006'],
    created_at: '2024-10-01',
    updated_at: '2025-02-15'
  },
  {
    asset_id: 'AST-002',
    asset_name: 'Internal Code Companion',
    asset_type: 'Internal',
    criticality: 'Medium',
    jurisdiction_applicable: { US: 'Yes' },
    data_categories_used: ['Proprietary Code'],
    owner: 'Engineering',
    approval_status: 'Approved',
    linked_model_ids: ['LLM-002'],
    linked_control_ids: ['CTR-003', 'CTR-005'],
    created_at: '2024-11-12',
    updated_at: '2025-01-20'
  },
  {
    asset_id: 'AST-003',
    asset_name: 'Marketing Content Gen',
    asset_type: 'Internal',
    criticality: 'Medium',
    jurisdiction_applicable: { EU: 'Yes' },
    data_categories_used: ['Marketing Data'],
    owner: 'CMO Office',
    approval_status: 'Pending Review',
    linked_model_ids: ['GEN-003'],
    linked_control_ids: ['CTR-004', 'CTR-005'],
    created_at: '2025-01-05',
    updated_at: '2025-02-10'
  },
  {
    asset_id: 'AST-004',
    asset_name: 'Legal Contract Summarizer',
    asset_type: 'Decision-support',
    criticality: 'Critical',
    jurisdiction_applicable: { EU: 'Yes', US: 'Yes', UK: 'Yes' },
    data_categories_used: ['Confidential', 'Legal'],
    owner: 'Legal Dept',
    approval_status: 'Approved',
    linked_model_ids: ['LLM-001', 'LLM-005'],
    linked_control_ids: ['CTR-001', 'CTR-007'],
    created_at: '2024-09-01',
    updated_at: '2024-12-15'
  },
  {
    asset_id: 'AST-005',
    asset_name: 'Personalized Finance Advisor',
    asset_type: 'Customer-facing',
    criticality: 'Critical',
    jurisdiction_applicable: { EU: 'Yes', US: 'Yes' },
    data_categories_used: ['Financial', 'PII'],
    owner: 'Retail Banking',
    approval_status: 'Rejected',
    linked_model_ids: ['LLM-006'],
    linked_control_ids: ['CTR-001', 'CTR-002', 'CTR-007'],
    created_at: '2025-02-01',
    updated_at: '2025-02-18'
  },
  {
    asset_id: 'AST-006',
    asset_name: 'Fraud Pattern Detector',
    asset_type: 'Product Feature',
    criticality: 'High',
    jurisdiction_applicable: { Global: 'Yes' },
    data_categories_used: ['Transaction Logs'],
    owner: 'Risk Team',
    approval_status: 'Approved',
    linked_model_ids: ['ML-007'],
    linked_control_ids: ['CTR-008', 'CTR-010'],
    created_at: '2023-05-12',
    updated_at: '2025-01-30'
  },
  {
    asset_id: 'AST-007',
    asset_name: 'HR Policy Q&A',
    asset_type: 'Internal',
    criticality: 'Low',
    jurisdiction_applicable: { US: 'Yes' },
    data_categories_used: ['Internal Policy'],
    owner: 'HR',
    approval_status: 'Approved',
    linked_model_ids: ['LLM-008'],
    linked_control_ids: ['CTR-003'],
    created_at: '2024-06-20',
    updated_at: '2024-08-15'
  },
  {
    asset_id: 'AST-008',
    asset_name: 'Creative Image Studio',
    asset_type: 'Product Feature',
    criticality: 'Medium',
    jurisdiction_applicable: { EU: 'Yes' },
    data_categories_used: ['Public Images'],
    owner: 'Design Team',
    approval_status: 'Draft',
    linked_model_ids: ['GEN-009'],
    linked_control_ids: ['CTR-004', 'CTR-006'],
    created_at: '2025-02-10',
    updated_at: '2025-02-10'
  },
  {
    asset_id: 'AST-009',
    asset_name: 'Email Triage Agent',
    asset_type: 'Internal',
    criticality: 'Low',
    jurisdiction_applicable: { US: 'Yes' },
    data_categories_used: ['Email Metadata'],
    owner: 'IT Ops',
    approval_status: 'Approved',
    linked_model_ids: ['LLM-002'],
    linked_control_ids: ['CTR-001'],
    created_at: '2024-12-01',
    updated_at: '2025-01-10'
  },
  {
    asset_id: 'AST-010',
    asset_name: 'Call Center Sentiment Analysis',
    asset_type: 'Decision-support',
    criticality: 'Medium',
    jurisdiction_applicable: { Global: 'Yes' },
    data_categories_used: ['Voice Recordings'],
    owner: 'Customer Experience',
    approval_status: 'Pending Review',
    linked_model_ids: ['LLM-010'],
    linked_control_ids: ['CTR-002'],
    created_at: '2025-01-15',
    updated_at: '2025-02-20'
  }
];

// 2. Models
export const MOCK_MODEL_MASTER: ModelMaster[] = [
  { model_id: 'LLM-001', model_name: 'GPT-4o Fine-tuned', model_type: 'LLM', provider: 'OpenAI', version: '2.0', business_unit: 'Enterprise', owner: 'S. Jenkins', risk_rating: 'High', regulatory_category: 'High-risk AI', description: 'Fine-tuned on internal legal & support docs.', status: 'Production', linked_asset_ids: ['AST-001', 'AST-004'], created_at: '2024-01-10', updated_at: '2025-02-01' },
  { model_id: 'LLM-002', model_name: 'Llama-3-70B-Instruct', model_type: 'LLM', provider: 'Meta (Self-hosted)', version: '1.1', business_unit: 'Engineering', owner: 'D. Chen', risk_rating: 'Medium', regulatory_category: 'Non-high-risk AI', description: 'Code generation and internal Q&A.', status: 'Production', linked_asset_ids: ['AST-002', 'AST-009'], created_at: '2024-05-15', updated_at: '2025-01-12' },
  { model_id: 'GEN-003', model_name: 'Mistral-Large', model_type: 'GenAI', provider: 'Mistral AI', version: '3.0', business_unit: 'Marketing', owner: 'M. Ross', risk_rating: 'Medium', regulatory_category: 'Non-high-risk AI', description: 'Marketing copy generation.', status: 'Development', linked_asset_ids: ['AST-003'], created_at: '2024-11-20', updated_at: '2025-02-18' },
  { model_id: 'LLM-004', model_name: 'Claude-3.5-Sonnet', model_type: 'LLM', provider: 'Anthropic', version: '1.0', business_unit: 'Customer Support', owner: 'S. Jenkins', risk_rating: 'High', regulatory_category: 'High-risk AI', description: 'Fallback model for complex support queries.', status: 'Production', linked_asset_ids: ['AST-001'], created_at: '2024-08-05', updated_at: '2025-01-05' },
  { model_id: 'LLM-005', model_name: 'Cohere Command R+', model_type: 'LLM', provider: 'Cohere', version: 'R+', business_unit: 'Legal', owner: 'L. Specter', risk_rating: 'High', regulatory_category: 'High-risk AI', description: 'RAG based legal analysis.', status: 'Validation', linked_asset_ids: ['AST-004'], created_at: '2024-10-12', updated_at: '2025-01-25' },
  { model_id: 'LLM-006', model_name: 'FinGPT-v4', model_type: 'LLM', provider: 'Internal', version: '4.2', business_unit: 'Finance', owner: 'R. Geller', risk_rating: 'High', regulatory_category: 'High-risk AI', description: 'Specialized financial advice model.', status: 'Retired', linked_asset_ids: ['AST-005'], created_at: '2023-09-01', updated_at: '2024-12-01' },
  { model_id: 'ML-007', model_name: 'XGBoost Fraud v9', model_type: 'ML', provider: 'Internal', version: '9.0', business_unit: 'Risk', owner: 'C. Bing', risk_rating: 'High', regulatory_category: 'High-risk AI', description: 'Traditional ML for transaction fraud.', status: 'Production', linked_asset_ids: ['AST-006'], created_at: '2022-03-15', updated_at: '2025-02-01' },
  { model_id: 'LLM-008', model_name: 'GPT-3.5-Turbo', model_type: 'LLM', provider: 'OpenAI', version: 'Legacy', business_unit: 'HR', owner: 'T. Flenderson', risk_rating: 'Low', regulatory_category: 'Non-high-risk AI', description: 'Basic Q&A for policies.', status: 'Production', linked_asset_ids: ['AST-007'], created_at: '2023-11-01', updated_at: '2024-06-01' },
  { model_id: 'GEN-009', model_name: 'Stable Diffusion XL', model_type: 'GenAI', provider: 'Stability AI', version: 'XL 1.0', business_unit: 'Design', owner: 'P. Beesly', risk_rating: 'Medium', regulatory_category: 'Non-high-risk AI', description: 'Image generation for mockups.', status: 'Development', linked_asset_ids: ['AST-008'], created_at: '2025-01-10', updated_at: '2025-01-10' },
  { model_id: 'LLM-010', model_name: 'Whisper-v3', model_type: 'ML', provider: 'OpenAI', version: '3.0', business_unit: 'CX', owner: 'K. Kapoor', risk_rating: 'Low', regulatory_category: 'Non-high-risk AI', description: 'Speech to text transcription.', status: 'Production', linked_asset_ids: ['AST-010'], created_at: '2024-07-20', updated_at: '2024-12-20' },
];

// 3. Controls
export const MOCK_CONTROL_MASTER: ControlMaster[] = [
  { control_id: 'CTR-001', control_name: 'PII Redaction & Masking', owner_team: 'Security', regulation_reference: 'GDPR Art 32', control_category: 'Privacy', control_description: 'Ensure all PII is masked before LLM inference.', mandatory: true, frequency: 'Daily', linked_asset_ids: ['AST-001', 'AST-004', 'AST-005', 'AST-009'], created_at: '2024-01-01', updated_at: '2024-06-01' },
  { control_id: 'CTR-002', control_name: 'Bias & Fairness Eval', owner_team: 'Ethics Comm', regulation_reference: 'NYC LL 144', control_category: 'Bias', control_description: 'Test for disparate impact in output across protected groups.', mandatory: true, frequency: 'Quarterly', linked_asset_ids: ['AST-001', 'AST-005', 'AST-010'], created_at: '2024-02-15', updated_at: '2024-06-01' },
  { control_id: 'CTR-003', control_name: 'Prompt Injection Defense', owner_team: 'Security', regulation_reference: 'NIST AI RMF', control_category: 'Security', control_description: 'Validate inputs against known injection patterns.', mandatory: true, frequency: 'Daily', linked_asset_ids: ['AST-002', 'AST-007'], created_at: '2024-03-10', updated_at: '2024-03-10' },
  { control_id: 'CTR-004', control_name: 'Copyright Infringement Check', owner_team: 'Legal', regulation_reference: 'EU AI Act', control_category: 'Data Governance', control_description: 'Ensure generated content does not violate copyright.', mandatory: true, frequency: 'On Change', linked_asset_ids: ['AST-003', 'AST-008'], created_at: '2024-08-01', updated_at: '2024-08-01' },
  { control_id: 'CTR-005', control_name: 'Code Security Scan', owner_team: 'IT Security', regulation_reference: 'Internal SecPol', control_category: 'Security', control_description: 'Scan generated code for vulnerabilities (CVEs).', mandatory: true, frequency: 'Weekly', linked_asset_ids: ['AST-002', 'AST-003'], created_at: '2024-05-05', updated_at: '2024-05-05' },
  { control_id: 'CTR-006', control_name: 'Toxicity & Safety Filter', owner_team: 'Trust & Safety', regulation_reference: 'Online Safety Bill', control_category: 'Validation', control_description: 'Filter hate speech and NSFW content.', mandatory: true, frequency: 'Daily', linked_asset_ids: ['AST-001', 'AST-008'], created_at: '2024-01-20', updated_at: '2024-01-20' },
  { control_id: 'CTR-007', control_name: 'RAG Hallucination Check', owner_team: 'Model Risk', regulation_reference: 'Guidance 2024', control_category: 'Validation', control_description: 'Verify citations against source documents.', mandatory: true, frequency: 'On Change', linked_asset_ids: ['AST-004', 'AST-005'], created_at: '2024-09-15', updated_at: '2024-09-15' },
  { control_id: 'CTR-008', control_name: 'Model Drift Monitoring', owner_team: 'ML Ops', regulation_reference: 'SR 11-7', control_category: 'Validation', control_description: 'Monitor PSI and KS statistics.', mandatory: true, frequency: 'Weekly', linked_asset_ids: ['AST-006'], created_at: '2023-06-01', updated_at: '2024-01-01' },
  { control_id: 'CTR-009', control_name: 'Data Lineage Tracking', owner_team: 'Data Gov', regulation_reference: 'BCBS 239', control_category: 'Data Governance', control_description: 'Maintain full lineage of training data.', mandatory: true, frequency: 'Monthly', linked_asset_ids: ['AST-001', 'AST-006'], created_at: '2023-01-01', updated_at: '2024-01-01' },
  { control_id: 'CTR-010', control_name: 'Explainability (SHAP)', owner_team: 'Model Risk', regulation_reference: 'GDPR', control_category: 'Explainability', control_description: 'Provide feature importance for decisions.', mandatory: true, frequency: 'On Change', linked_asset_ids: ['AST-006'], created_at: '2023-04-01', updated_at: '2023-04-01' },
];

// 4. Test Cases
export const MOCK_TEST_CASE_MASTER: TestCaseMaster[] = [
  { testcase_id: 'TC-001', control_id: 'CTR-001', model_id: 'LLM-001', testcase_name: 'PII Injection Attack', testcase_description: 'Attempt to extract SSNs via prompt engineering.', testcase_type: 'Agentic', input_requirements: 'Red Teaming Dataset v2', expected_result: 'Refusal / Redaction', metric: 'Leakage Rate', threshold: '0%', severity: 'High', last_run_date: '2025-02-18', last_run_status: 'Pass', reviewer: 'Auto-Bot', created_at: '2025-01-01', updated_at: '2025-02-18' },
  { testcase_id: 'TC-002', control_id: 'CTR-002', model_id: 'LLM-001', testcase_name: 'Gender Bias in Sentiment', testcase_description: 'Check sentiment scores for male vs female names.', testcase_type: 'Automated', input_requirements: 'Equity Eval Set', expected_result: 'Equal Score', metric: 'Demographic Parity', threshold: '< 0.05', severity: 'High', last_run_date: '2025-02-18', last_run_status: 'Pass', reviewer: 'Ethics AI', created_at: '2025-01-10', updated_at: '2025-02-18' },
  { testcase_id: 'TC-003', control_id: 'CTR-003', model_id: 'LLM-002', testcase_name: 'DAN Jailbreak Test', testcase_description: 'Use "Do Anything Now" prompts.', testcase_type: 'Agentic', input_requirements: 'Jailbreak Prompts DB', expected_result: 'Refusal', metric: 'Success Rate', threshold: '0%', severity: 'Critical', last_run_date: '2025-02-15', last_run_status: 'Warning', reviewer: 'Sec Team', created_at: '2025-01-12', updated_at: '2025-02-15' },
  { testcase_id: 'TC-004', control_id: 'CTR-004', model_id: 'GEN-003', testcase_name: 'Copyright Text Match', testcase_description: 'Check output against books database.', testcase_type: 'Automated', input_requirements: 'Protected Corpus', expected_result: 'No verbatim copies', metric: 'N-gram Overlap', threshold: '< 10%', severity: 'High', last_run_date: '2025-02-10', last_run_status: 'Fail', reviewer: 'Legal Bot', created_at: '2025-01-20', updated_at: '2025-02-10' },
  { testcase_id: 'TC-005', control_id: 'CTR-005', model_id: 'LLM-002', testcase_name: 'Insecure Code Gen', testcase_description: 'Prompt for SQL connection code.', testcase_type: 'Automated', input_requirements: 'Vulnerability Prompts', expected_result: 'Secure Pattern', metric: 'Vulnerable Patterns', threshold: '0', severity: 'High', last_run_date: '2025-01-25', last_run_status: 'Pass', reviewer: 'SonarQube', created_at: '2025-01-25', updated_at: '2025-01-25' },
  { testcase_id: 'TC-006', control_id: 'CTR-006', model_id: 'GEN-009', testcase_name: 'NSFW Image Check', testcase_description: 'Generate images for risky keywords.', testcase_type: 'Automated', input_requirements: 'Safety Prompts', expected_result: 'Blurred / Refused', metric: 'NSFW Class Prob', threshold: '< 0.01', severity: 'High', last_run_date: '2025-02-12', last_run_status: 'Pass', reviewer: 'Safety Classifier', created_at: '2025-02-01', updated_at: '2025-02-12' },
  { testcase_id: 'TC-007', control_id: 'CTR-007', model_id: 'LLM-005', testcase_name: 'Legal Citation Accuracy', testcase_description: 'Verify case law references exist.', testcase_type: 'Manual', input_requirements: 'Legal Queries 50', expected_result: '100% Accuracy', metric: 'Hallucination Rate', threshold: '0%', severity: 'Critical', last_run_date: '2025-02-01', last_run_status: 'Warning', reviewer: 'L. Specter', created_at: '2025-01-15', updated_at: '2025-02-01' },
  { testcase_id: 'TC-008', control_id: 'CTR-008', model_id: 'ML-007', testcase_name: 'Feature Drift Check', testcase_description: 'Compare training vs serving distribution.', testcase_type: 'Automated', input_requirements: 'Serving Logs', expected_result: 'Stable', metric: 'PSI', threshold: '< 0.1', severity: 'Medium', last_run_date: '2025-02-19', last_run_status: 'Pass', reviewer: 'EvidentlyAI', created_at: '2023-06-01', updated_at: '2025-02-19' },
  { testcase_id: 'TC-009', control_id: 'CTR-007', model_id: 'LLM-006', testcase_name: 'Financial Advice Accuracy', testcase_description: 'Test against regulated advice standards.', testcase_type: 'Agentic', input_requirements: 'FinQA Dataset', expected_result: 'Compliant', metric: 'Error Rate', threshold: '< 1%', severity: 'Critical', last_run_date: '2024-11-30', last_run_status: 'Fail', reviewer: 'Risk Agent', created_at: '2024-10-01', updated_at: '2024-11-30' },
  { testcase_id: 'TC-010', control_id: 'CTR-001', model_id: 'LLM-004', testcase_name: 'Cross-Prompt Memory Leak', testcase_description: 'Ensure data does not persist between sessions.', testcase_type: 'Automated', input_requirements: 'Multi-turn dialogue', expected_result: 'No Leakage', metric: 'Leak Count', threshold: '0', severity: 'Critical', last_run_date: '2025-01-05', last_run_status: 'Pass', reviewer: 'Security Tool', created_at: '2024-12-01', updated_at: '2025-01-05' },
];
