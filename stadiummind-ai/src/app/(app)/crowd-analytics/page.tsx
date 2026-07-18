'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingUp, AlertTriangle, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import dynamic from 'next/dynamic';
import { useCrowdAnalytics } from '@/hooks/useCrowdAnalytics';

const CrowdChart = dynamic(() => import('@/components/charts/CrowdChart'), { 
  ssr: false, 
  loading: () => <div className="w-full h-full animate-pulse bg-muted/50 rounded-xl"></div> 
});

export default function CrowdPage() {
  const { densityData } = useCrowdAnalytics();

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      
      {/* Header */}
      <div>
        <Badge className="mb-2 bg-blue-500/10 text-blue-500 border-blue-500/20">PREDICTIVE EGRESS MODELING: ACTIVE</Badge>
        <h1 className="text-3xl font-heading font-bold mb-2 flex items-center gap-3">
          <Layers className="w-8 h-8 text-blue-500" />
          Crowd Analytics & Digital Twin
        </h1>
        <p className="text-muted-foreground">Digital-twin simulations of mass egress routing for critical safety and flow optimization.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="lg:col-span-1 border-destructive/20 bg-destructive/5 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2 text-destructive">
              <AlertTriangle className="w-4 h-4" /> High Risk Zone
            </CardTitle>
          </CardHeader>
          <CardContent>
             <div className="text-2xl font-bold">South Concourse</div>
             <p className="text-xs text-muted-foreground mt-1 mb-3">Model predicts crush conditions in 14 mins if current flow holds.</p>
             <Button variant="destructive" size="sm" className="w-full text-xs h-7">Open Overflow Gates</Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-1 bg-card/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Peak Prediction</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="text-3xl font-bold text-orange-500 flex items-center gap-2">
               21:00 <TrendingUp className="w-5 h-5" />
             </div>
             <p className="text-xs text-muted-foreground mt-1">Full capacity at Halftime.</p>
          </CardContent>
        </Card>

        {/* Global Density Timeline */}
        <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Live Egress Flow vs Predictive Model</CardTitle>
          </CardHeader>
          <CardContent className="h-[120px] p-0 px-4" role="region" aria-label="Line and area chart displaying actual crowd density versus predicted egress modeling. Current peak predicted at 21:00.">
            <CrowdChart data={densityData} />
          </CardContent>
        </Card>
      </div>

      {/* Segmented Concourse Analysis */}
      <Card className="bg-card/50">
        <CardHeader>
          <CardTitle>Concourse Egress Modeling</CardTitle>
          <CardDescription>Zone-by-zone breakdown of predicted vs actual load capacity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="font-semibold text-sm">North Concourse (Gate A & B)</span>
                <span className="text-xs font-mono">Actual: 42% | Predicted: 45%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="font-semibold text-sm">East Concourse (Gate C)</span>
                <span className="text-xs font-mono text-orange-500">Actual: 78% | Predicted: 70%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="font-semibold text-sm">South Concourse (Gate D & E)</span>
                <span className="text-xs font-mono text-destructive font-bold">Actual: 95% | Predicted: 85%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-destructive h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

    </div>
  );
}
