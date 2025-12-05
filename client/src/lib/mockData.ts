export interface Merchant {
  id: string;
  name: string;
  taxId: string;
  status: 'Compliant' | 'At Risk' | 'Non-Compliant';
  lastW9Date: string;
  revenue: number;
  agentStatus: 'Monitoring' | 'Analyzing' | 'Contacted' | 'Resolved' | 'Escalated';
  riskScore: number; // 0-100
  email: string;
  nextActionDue: string;
}

export const mockMerchants: Merchant[] = [
  {
    id: "M-10423",
    name: "Acme Global Logistics",
    taxId: "**-***4521",
    status: "At Risk",
    lastW9Date: "2019-04-12",
    revenue: 12500000,
    agentStatus: "Contacted",
    riskScore: 85,
    email: "finance@acme.logistics.com",
    nextActionDue: "2 days"
  },
  {
    id: "M-10424",
    name: "TechFlow Systems",
    taxId: "**-***9923",
    status: "Non-Compliant",
    lastW9Date: "2015-11-30",
    revenue: 4200000,
    agentStatus: "Escalated",
    riskScore: 95,
    email: "accounts@techflow.io",
    nextActionDue: "Overdue"
  },
  {
    id: "M-10425",
    name: "Horizon Retail Group",
    taxId: "**-***1234",
    status: "Compliant",
    lastW9Date: "2023-01-15",
    revenue: 8900000,
    agentStatus: "Monitoring",
    riskScore: 12,
    email: "tax@horizonretail.com",
    nextActionDue: "N/A"
  },
  {
    id: "M-10426",
    name: "BlueSky Ventures",
    taxId: "**-***8877",
    status: "At Risk",
    lastW9Date: "2020-02-20",
    revenue: 2100000,
    agentStatus: "Analyzing",
    riskScore: 65,
    email: "ops@bluesky.com",
    nextActionDue: "Today"
  },
  {
    id: "M-10427",
    name: "Quantum Dynamics",
    taxId: "**-***5544",
    status: "Compliant",
    lastW9Date: "2024-06-10",
    revenue: 15000000,
    agentStatus: "Resolved",
    riskScore: 5,
    email: "legal@quantum.com",
    nextActionDue: "N/A"
  },
  {
    id: "M-10428",
    name: "Starlight Entertainment",
    taxId: "**-***3322",
    status: "At Risk",
    lastW9Date: "2018-08-05",
    revenue: 6700000,
    agentStatus: "Contacted",
    riskScore: 78,
    email: "payments@starlight.ent",
    nextActionDue: "1 day"
  }
];
