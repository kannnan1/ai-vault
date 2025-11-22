import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend
} from 'recharts';

// Mock Data for Charts
const RISK_TREND_DATA = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 35 },
  { name: 'Mar', value: 45 },
  { name: 'Apr', value: 42 },
  { name: 'May', value: 55 },
  { name: 'Jun', value: 48 },
  { name: 'Jul', value: 60 },
];

const COMPLIANCE_DISTRIBUTION = [
  { name: 'Compliant', value: 65 },
  { name: 'Review Pending', value: 25 },
  { name: 'Non-Compliant', value: 10 },
];

const DEPARTMENT_RISK = [
  { name: 'Finance', value: 85, value2: 40 },
  { name: 'HR', value: 45, value2: 20 },
  { name: 'Marketing', value: 60, value2: 30 },
  { name: 'Ops', value: 30, value2: 10 },
  { name: 'Legal', value: 20, value2: 80 },
];

const COLORS = ['#10b981', '#f59e0b', '#ef4444'];
const BAR_COLORS = ['#3b82f6', '#6366f1'];

export const RiskTrendChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={RISK_TREND_DATA}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
        <XAxis dataKey="name" stroke="#64748b" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
        <YAxis stroke="#64748b" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
        <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
        />
        <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#0ea5e9" 
            strokeWidth={3} 
            dot={{ r: 4, strokeWidth: 2 }} 
            activeDot={{ r: 6 }} 
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const CompliancePieChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={COMPLIANCE_DISTRIBUTION}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {COMPLIANCE_DISTRIBUTION.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} iconType="circle" />
      </PieChart>
    </ResponsiveContainer>
  );
};

export const DepartmentRiskBarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={DEPARTMENT_RISK}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
        <XAxis dataKey="name" stroke="#64748b" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
        <YAxis stroke="#64748b" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
        <Tooltip cursor={{fill: '#f1f5f9'}} />
        <Legend />
        <Bar name="Risk Score" dataKey="value" fill={BAR_COLORS[0]} radius={[4, 4, 0, 0]} barSize={30} />
        <Bar name="Models Deployed" dataKey="value2" fill={BAR_COLORS[1]} radius={[4, 4, 0, 0]} barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  );
};