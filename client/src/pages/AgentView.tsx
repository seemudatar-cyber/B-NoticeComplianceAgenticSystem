import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Bot, 
  Terminal, 
  Activity, 
  Server, 
  Database, 
  ShieldCheck 
} from "lucide-react";
import { useState, useEffect } from "react";

export default function AgentView() {
  const [logs, setLogs] = useState<string[]>([
    "[10:45:22] Scanning merchant profile M-10423...",
    "[10:45:23] Analysis: W9 date 2019-04-12 (Obsolete > 3 years)",
    "[10:45:23] Risk Level: MEDIUM (Revenue $12.5M)",
    "[10:45:24] Action: Initiating 'Proactive Outreach' sequence",
    "[10:45:25] Generating personalized email template...",
    "[10:45:26] Email dispatched to finance@acme.logistics.com",
    "[10:45:26] State updated: WAITING_FOR_MERCHANT"
  ]);

  useEffect(() => {
    // Simulate live logs
    const interval = setInterval(() => {
      const newLogs = [
        `[${new Date().toLocaleTimeString()}] Monitoring active threads...`,
        `[${new Date().toLocaleTimeString()}] Heartbeat check: HEALTHY`
      ];
      // Keep adding logs occasionally
      if (Math.random() > 0.7) {
        setLogs(prev => [...prev, ...newLogs]);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold text-foreground">Agent Activity</h1>
        <p className="text-muted-foreground mt-1">Live monitoring of the autonomous compliance agent.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* System Status */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="bg-sidebar text-sidebar-foreground border-sidebar-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm opacity-70">Status</span>
                <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30">ONLINE</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm opacity-70">Uptime</span>
                <span className="font-mono text-sm">4d 12h 30m</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm opacity-70">Threads</span>
                <span className="font-mono text-sm">124 Active</span>
              </div>
              <div className="h-px bg-white/10 my-4" />
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Activity className="h-4 w-4 text-primary" />
                  <span>Processing Rate: 45/sec</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Server className="h-4 w-4 text-primary" />
                  <span>Latency: 24ms</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Database className="h-4 w-4 text-primary" />
                  <span>DB Sync: Real-time</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live Terminal */}
        <div className="lg:col-span-3">
          <Card className="bg-black border-slate-800 h-[600px] flex flex-col font-mono text-sm">
            <CardHeader className="bg-slate-900/50 border-b border-slate-800 py-3">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-green-500" />
                <span className="text-slate-400">agent_core_v2.log</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-0">
              <ScrollArea className="h-full p-4">
                <div className="space-y-1">
                  {logs.map((log, i) => (
                    <div key={i} className="text-green-500/80 hover:bg-white/5 p-0.5 rounded">
                      <span className="opacity-50 mr-2">{i + 1}</span>
                      {log}
                    </div>
                  ))}
                  <div className="animate-pulse text-green-500">_</div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
