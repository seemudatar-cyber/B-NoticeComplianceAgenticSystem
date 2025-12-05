import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { 
  ShieldCheck, 
  ShieldAlert, 
  AlertTriangle, 
  ArrowUpRight, 
  Users, 
  Bot 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockMerchants } from "@/lib/mockData";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";

const COLORS = ['#3b82f6', '#ef4444', '#f59e0b', '#10b981'];

const activityData = [
  { name: 'Mon', resolved: 4, detected: 6 },
  { name: 'Tue', resolved: 7, detected: 5 },
  { name: 'Wed', resolved: 12, detected: 8 },
  { name: 'Thu', resolved: 15, detected: 10 },
  { name: 'Fri', resolved: 9, detected: 7 },
];

export default function Dashboard() {
  const { toast } = useToast();
  const atRiskCount = mockMerchants.filter(m => m.status === 'At Risk').length;
  const nonCompliantCount = mockMerchants.filter(m => m.status === 'Non-Compliant').length;
  const activeAgents = 3;

  const handleManualScan = () => {
    toast({
      title: "Manual Scan Initiated",
      description: "Agent is now scanning 12,405 merchant profiles for compliance risks.",
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">Tax Compliance Overview</h1>
          <p className="text-muted-foreground mt-1">Real-time monitoring of W9 status and agent activities.</p>
        </div>
        <div className="flex gap-3">
          <Button 
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={handleManualScan}
          >
            <Bot className="mr-2 h-4 w-4" />
            Run Manual Scan
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Merchants Monitored
            </CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,405</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center">
              <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
              +124 this month
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-amber-500 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              At Risk (Pre-Notice)
            </CardTitle>
            <ShieldAlert className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{atRiskCount * 142}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Identified by Agent
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-destructive shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              B-Notice Imminent
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{nonCompliantCount * 12}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Requires immediate action
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-emerald-500 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Auto-Resolved (YTD)
            </CardTitle>
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,892</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center">
              <Bot className="h-3 w-3 text-emerald-500 mr-1" />
              94% success rate
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 shadow-sm">
          <CardHeader>
            <CardTitle>Risk Distribution</CardTitle>
            <CardDescription>Current portfolio health</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: 'Compliant', value: 75 },
                    { name: 'At Risk', value: 15 },
                    { name: 'Non-Compliant', value: 5 },
                    { name: 'Unknown', value: 5 },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {activityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute text-center">
              <div className="text-3xl font-bold">94%</div>
              <div className="text-xs text-muted-foreground">Compliant</div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Alerts Table */}
        <Card className="shadow-sm col-span-1 lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Priority Alerts</CardTitle>
              <CardDescription>High-value merchants requiring attention</CardDescription>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/merchants">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockMerchants.filter(m => m.status !== 'Compliant').map((merchant) => (
                <div key={merchant.id} className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      merchant.status === 'Non-Compliant' ? 'bg-destructive/10 text-destructive' : 'bg-amber-500/10 text-amber-600'
                    }`}>
                      <ShieldAlert className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{merchant.name}</h4>
                      <p className="text-sm text-muted-foreground">Tax ID: {merchant.taxId}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-sm font-medium">Risk Score</div>
                      <div className={`text-sm font-bold ${
                        merchant.riskScore > 80 ? 'text-destructive' : 'text-amber-600'
                      }`}>{merchant.riskScore}/100</div>
                    </div>
                    
                    <div className="text-right hidden md:block">
                      <div className="text-sm font-medium">Agent Status</div>
                      <div className="text-sm text-primary">{merchant.agentStatus}</div>
                    </div>

                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/merchants/${merchant.id}`}>View Agent</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
