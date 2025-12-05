import { useParams, Link } from "wouter";
import { mockMerchants } from "@/lib/mockData";
import { 
  ArrowLeft, 
  ShieldAlert, 
  CheckCircle, 
  Clock, 
  Mail, 
  FileText, 
  Bot,
  MoreVertical,
  AlertTriangle,
  Download,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { useState } from "react";

export default function MerchantDetail() {
  const { id } = useParams();
  const [emailOpen, setEmailOpen] = useState(false);
  const merchant = mockMerchants.find(m => m.id === id);

  if (!merchant) {
    return <div>Merchant not found</div>;
  }

  const timeline = [
    {
      id: 1,
      type: 'resolution',
      title: "W9 Verified & Accepted",
      description: "Automated validation complete. Tax profile updated.",
      date: "Today, 10:42 AM",
      status: "success"
    },
    {
      id: 2,
      type: 'action',
      title: "Merchant Submitted Form",
      description: "New W9 data received via secure portal.",
      date: "Today, 10:41 AM",
      status: "neutral"
    },
    {
      id: 3,
      type: 'email',
      title: "Reminder Email Sent",
      description: "Agent detected no activity for 2 days. Sent follow-up.",
      date: "Yesterday, 9:00 AM",
      status: "warning",
      canView: true
    },
    {
      id: 4,
      type: 'email',
      title: "Initial Outreach",
      description: "Agent sent 'Action Required: Update W9' email.",
      date: "3 days ago",
      status: "neutral",
      canView: true
    },
    {
      id: 5,
      type: 'alert',
      title: "Risk Detected",
      description: "W9 form flagged as obsolete (dated > 3 years).",
      date: "3 days ago",
      status: "destructive"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/merchants">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-heading font-bold">{merchant.name}</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>ID: {merchant.id}</span>
            <span>•</span>
            <span>Tax ID: {merchant.taxId}</span>
          </div>
        </div>
        <div className="ml-auto flex gap-3">
          <Button variant="outline">
            <MoreVertical className="h-4 w-4" />
          </Button>
          <Button>Contact Merchant</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Profile & Stats */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center py-4">
                <div className={`h-24 w-24 rounded-full flex items-center justify-center mb-4 ${
                  merchant.status === 'Non-Compliant' ? 'bg-destructive/10 text-destructive' : 
                  merchant.status === 'At Risk' ? 'bg-amber-500/10 text-amber-600' : 'bg-emerald-500/10 text-emerald-600'
                }`}>
                  {merchant.status === 'Non-Compliant' ? <ShieldAlert className="h-10 w-10" /> :
                   merchant.status === 'At Risk' ? <AlertTriangle className="h-10 w-10" /> :
                   <CheckCircle className="h-10 w-10" />}
                </div>
                <h3 className="text-xl font-bold">{merchant.status}</h3>
                <p className="text-sm text-muted-foreground text-center mt-1">
                  {merchant.status === 'Compliant' 
                    ? "All tax documents are up to date." 
                    : "Immediate action required to avoid B-Notice."}
                </p>
              </div>
              <Separator className="my-4" />
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Risk Score</span>
                  <span className="font-bold">{merchant.riskScore}/100</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Last W9 Date</span>
                  <span className="font-medium">{merchant.lastW9Date}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Revenue Impact</span>
                  <span className="font-medium">${(merchant.revenue / 1000000).toFixed(1)}M</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded-md border bg-secondary/20">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Form W-9 (2019)</p>
                    <p className="text-xs text-muted-foreground">PDF • 1.2 MB</p>
                  </div>
                </div>
                <Button size="icon" variant="ghost">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Agent Timeline */}
        <div className="lg:col-span-2">
          <Card className="h-full flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Agent Timeline</CardTitle>
                <CardDescription>Automated actions and merchant interactions</CardDescription>
              </div>
              <Badge variant="outline" className="flex items-center gap-1">
                <Bot className="h-3 w-3" />
                Agent Active
              </Badge>
            </CardHeader>
            <CardContent className="flex-1">
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-8 relative pl-6 border-l border-border/50 ml-4">
                  {timeline.map((item) => (
                    <div key={item.id} className="relative">
                      {/* Timeline Dot */}
                      <div className={`absolute -left-[31px] top-0 h-6 w-6 rounded-full border-2 bg-background flex items-center justify-center ${
                        item.status === 'success' ? 'border-green-500 text-green-500' :
                        item.status === 'destructive' ? 'border-destructive text-destructive' :
                        item.status === 'warning' ? 'border-amber-500 text-amber-500' :
                        'border-muted-foreground text-muted-foreground'
                      }`}>
                        {item.type === 'email' ? <Mail className="h-3 w-3" /> :
                         item.type === 'alert' ? <AlertTriangle className="h-3 w-3" /> :
                         item.type === 'resolution' ? <CheckCircle className="h-3 w-3" /> :
                         <Bot className="h-3 w-3" />}
                      </div>

                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-semibold">{item.title}</h4>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {item.date}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground bg-secondary/30 p-3 rounded-md mt-1 border border-border/50">
                          {item.description}
                        </p>
                        
                        {item.canView && (
                          <div className="mt-2">
                            <Button 
                              variant="link" 
                              size="sm" 
                              className="h-auto p-0 text-primary"
                              onClick={() => setEmailOpen(true)}
                            >
                              View Email Content
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Email Preview Dialog */}
      <Dialog open={emailOpen} onOpenChange={setEmailOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Sent Email: Action Required</DialogTitle>
            <DialogDescription>
              Sent to {merchant.email} on Dec 2, 2025
            </DialogDescription>
          </DialogHeader>
          <div className="bg-secondary/20 p-6 rounded-md border space-y-4 text-sm">
            <p><strong>Subject:</strong> Urgent: Update your W-9 Form to avoid backup withholding</p>
            <Separator />
            <p>Dear {merchant.name},</p>
            <p>
              Our records indicate that the W-9 form on file for your account is dated more than 3 years ago. 
              To ensure compliance with IRS regulations and avoid potential backup withholding on your payments, 
              we require an updated W-9 form.
            </p>
            <p>
              We have made this process easy for you. Please click the secure link below to verify your information 
              and sign your new W-9 electronically. It takes less than 2 minutes.
            </p>
            <div className="py-2">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link href="/portal/w9-update" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Update W-9 Now (Secure Portal)
                </Link>
              </Button>
            </div>
            <p>
              If you do not update this information by Dec 15, 2025, we may be required to withhold 24% of your future payouts.
            </p>
            <p>Sincerely,<br/>JP Morgan Payments Tax Compliance Team</p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEmailOpen(false)}>Close Preview</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
