import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Layout from "@/components/layout/Layout";
import Dashboard from "@/pages/Dashboard";
import MerchantList from "@/pages/MerchantList";
import MerchantDetail from "@/pages/MerchantDetail";
import AgentView from "@/pages/AgentView";
import W9Wizard from "@/pages/W9Wizard";

function Router() {
  return (
    <Switch>
      {/* Public facing portal - No Layout */}
      <Route path="/portal/w9-update" component={W9Wizard} />
      
      {/* Admin Dashboard Routes */}
      <Route path="/">
        <Layout>
          <Dashboard />
        </Layout>
      </Route>
      <Route path="/merchants">
        <Layout>
          <MerchantList />
        </Layout>
      </Route>
      <Route path="/merchants/:id">
        <Layout>
          <MerchantDetail />
        </Layout>
      </Route>
      <Route path="/agent">
        <Layout>
          <AgentView />
        </Layout>
      </Route>
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
