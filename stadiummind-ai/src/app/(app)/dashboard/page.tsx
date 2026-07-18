import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldAlert, Zap, TrendingUp, Users, MapPin, Search, Plus } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      
      {/* Operations Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <Badge className="mb-2 bg-blue-500/10 text-blue-500 border-blue-500/20">SYSTEM: NOMINAL</Badge>
          <h1 className="text-3xl font-heading font-bold">Command Center</h1>
          <p className="text-muted-foreground">Unified AI-Operations View for FIFA 2026 Finals.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2"><Search className="w-4 h-4" /> Global Search</Button>
          <Button className="gap-2"><Plus className="w-4 h-4" /> Deploy Staff</Button>
        </div>
      </div>

      {/* AI Anomaly Ticker */}
      <Card className="bg-destructive/5 border-destructive/20 border-l-4 border-l-destructive shadow-sm" aria-live="assertive" role="alert">
        <CardContent className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-destructive animate-pulse" aria-hidden="true" />
            <div>
              <p className="font-semibold text-sm">AI Anomaly Detected</p>
              <p className="text-xs text-muted-foreground">Gate C egress rate is 15% slower than modeled. Potential bottleneck forming.</p>
            </div>
          </div>
          <Button variant="destructive" size="sm">Reroute Traffic</Button>
        </CardContent>
      </Card>

      {/* Quick KPI Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-muted-foreground flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-primary" /> Stadium Fill
            </p>
            <div className="text-3xl font-bold">84%</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" /> +2% vs Baseline
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-muted-foreground flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-yellow-500" /> Grid Load
            </p>
            <div className="text-3xl font-bold">12.4 MW</div>
            <p className="text-xs text-muted-foreground mt-1">AI shedding active (-1.2 MW)</p>
          </CardContent>
        </Card>
        <Card className="md:col-span-2 bg-card/50 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <MapPin className="w-24 h-24" />
          </div>
          <CardContent className="p-6 relative z-10 flex flex-col justify-center h-full">
            <p className="text-sm font-medium text-muted-foreground mb-1">Active Event</p>
            <h3 className="text-xl font-bold font-heading">Argentina vs. France</h3>
            <div className="flex gap-2 mt-3">
              <Badge variant="secondary">Match: Half-time</Badge>
              <Badge variant="secondary">Weather: Clear Roof Open</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Smart Modules Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" role="region" aria-label="Smart Modules Configuration">
        
        {/* Dynamic Map Placeholder */}
        <Card className="lg:col-span-2 shadow-lg shadow-primary/5 h-[400px] flex flex-col">
          <CardHeader className="pb-0">
            <CardTitle>Live Egress Map</CardTitle>
            <CardDescription>Digital Twin Overlay</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 p-6 flex flex-col items-center justify-center border-t border-border mt-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] relative">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
             <div className="z-10 text-center space-y-4">
               <div className="w-16 h-16 rounded-full border-4 border-primary/20 flex items-center justify-center mx-auto relative">
                 <div className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                 <MapPin className="w-6 h-6 text-primary" />
               </div>
               <div>
                 <h3 className="font-semibold">Digital Twin Render Active</h3>
                 <p className="text-sm text-muted-foreground max-w-sm mx-auto">Tracking 72,000 active nodes via WiFi telemetry and IoT edge processing.</p>
               </div>
               <Button variant="secondary" size="sm">Open 3D Map</Button>
             </div>
          </CardContent>
        </Card>

        {/* Operational Tasks */}
        <Card className="flex flex-col h-[400px]">
          <CardHeader>
            <CardTitle>AI Suggested Actions</CardTitle>
            <CardDescription>Generated from real-time metrics</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto space-y-4 pr-2">
            
            <div className="p-4 border border-border rounded-lg bg-card hover:border-primary/50 cursor-pointer transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-sm">Dynamic Pricing Trigger</h4>
                <Badge className="bg-orange-500/10 text-orange-500 border-orange-500/20">Revenue</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-3">Food Zone 4 is empty. Enable 15% push-notification discount to divert traffic.</p>
              <Button size="sm" className="w-full text-xs h-7">Execute Protocol</Button>
            </div>

            <div className="p-4 border border-border rounded-lg bg-card hover:border-primary/50 cursor-pointer transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-sm">Escalator Reversal</h4>
                <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">Flow</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-3">Halftime approaching. Reverse Escalators 2 and 3 to downward flow.</p>
              <Button size="sm" className="w-full text-xs h-7">Approve Override</Button>
            </div>

          </CardContent>
        </Card>

      </div>
    </div>
  );
}
