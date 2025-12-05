import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MoreHorizontal, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Bot, 
  Mail 
} from "lucide-react";
import { mockMerchants } from "@/lib/mockData";
import { Link } from "wouter";

export default function MerchantList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMerchants = mockMerchants.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.taxId.includes(searchTerm)
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Compliant":
        return <Badge className="bg-emerald-500/15 text-emerald-700 hover:bg-emerald-500/25 border-0">Compliant</Badge>;
      case "At Risk":
        return <Badge className="bg-amber-500/15 text-amber-700 hover:bg-amber-500/25 border-0">At Risk</Badge>;
      case "Non-Compliant":
        return <Badge className="bg-destructive/15 text-destructive hover:bg-destructive/25 border-0">Non-Compliant</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">Merchants</h1>
          <p className="text-muted-foreground mt-1">Manage merchant tax profiles and agent assignments.</p>
        </div>
        <div className="flex gap-3">
          <Button>
            <Bot className="mr-2 h-4 w-4" />
            Assign Agent
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-card p-4 rounded-lg border shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search by name or Tax ID..." 
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" className="cursor-not-allowed opacity-50">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>>
      </div>

      <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              <TableHead>Merchant Name</TableHead>
              <TableHead>Tax ID</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Agent Status</TableHead>
              <TableHead>Risk Score</TableHead>
              <TableHead>Last W9 Update</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMerchants.map((merchant) => (
              <TableRow key={merchant.id} className="hover:bg-muted/5">
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <span>{merchant.name}</span>
                    <span className="text-xs text-muted-foreground">{merchant.email}</span>
                  </div>
                </TableCell>
                <TableCell className="font-mono text-xs">{merchant.taxId}</TableCell>
                <TableCell>{getStatusBadge(merchant.status)}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 text-sm">
                    {merchant.agentStatus === 'Monitoring' ? (
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    ) : (
                      <Bot className="h-4 w-4 text-primary" />
                    )}
                    {merchant.agentStatus}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-16 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          merchant.riskScore > 80 ? 'bg-destructive' : 
                          merchant.riskScore > 50 ? 'bg-amber-500' : 'bg-emerald-500'
                        }`}
                        style={{ width: `${merchant.riskScore}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium">{merchant.riskScore}</span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{merchant.lastW9Date}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/merchants/${merchant.id}`}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Bot className="mr-2 h-4 w-4" />
                        Trigger Agent
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" />
                        Send Manual Email
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
