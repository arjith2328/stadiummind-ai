'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Leaf, Recycle, Zap, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import dynamic from 'next/dynamic';
import { useGridOptimization } from '@/hooks/useGridOptimization';

const EnergyAreaChart = dynamic(() => import('@/components/charts/EnergyAreaChart'), { ssr: false, loading: () => <div className="w-full h-full animate-pulse bg-muted/50 rounded-xl"></div> });
const WastePieChart = dynamic(() => import('@/components/charts/WastePieChart'), { ssr: false, loading: () => <div className="w-full h-full animate-pulse bg-muted/50 rounded-full"></div> });

export default function SustainabilityPage() {
  const { wasteData, energyData } = useGridOptimization();

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      
      {/* Header */}
      <div>
        <Badge className="mb-2 bg-green-500/10 text-green-500 border-green-500/20">AI GRID SHIFTING: ACTIVE</Badge>
        <h1 className="text-3xl font-heading font-bold mb-2 flex items-center gap-3">
          <Leaf className="w-8 h-8 text-green-500" />
          Sustainability & Grid Optimization
        </h1>
        <p className="text-muted-foreground">Autonomous AI energy management reducing peak loads to hit FIFA net-zero targets.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Fan Gamification & AI Actions */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-gradient-to-br from-green-500/10 to-transparent border-green-500/20 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-green-500">
                <ShieldCheck className="w-5 h-5 fill-green-500" /> AI Microgrid Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center mt-4">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto relative mb-2">
                 <div className="absolute inset-0 rounded-full border-4 border-green-500 border-l-transparent animate-spin" />
                 <Zap className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-bold text-lg">Load Shedding Active</h3>
              <p className="text-xs text-muted-foreground">
                AI has autonomously dimmed non-essential concourse lighting by 15% due to low crowd density.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Fan Transit Gamification</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold font-heading text-primary">
                1,250 <span className="text-sm text-muted-foreground font-normal">pts</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2 mb-4">You earned 500 points today for taking the Metro!</p>
              <div className="w-full bg-muted rounded-full h-1.5 mb-1">
                 <div className="bg-primary h-1.5 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <p className="text-[10px] text-right text-muted-foreground">250 pts to Free Hot Dog</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Energy Area Chart */}
          <Card className="md:col-span-2 bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Autonomous Energy Load Shifting</CardTitle>
              <CardDescription>Grid consumption vs Solar output vs AI Load Shedding (MW)</CardDescription>
            </CardHeader>
            <CardContent className="h-[350px]" role="region" aria-label="Area chart showing autonomous energy load shifting. Visualizes grid import, solar output, and AI load shedding across time.">
              <EnergyAreaChart data={energyData} />
            </CardContent>
          </Card>

          {/* Waste Pie Chart */}
          <Card className="md:col-span-1 bg-card/50 backdrop-blur-sm border-border/50 flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <Recycle className="w-4 h-4 text-green-500" /> Waste Diversion
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 h-[250px] relative" role="region" aria-label="Pie chart showing 90% total waste diverted. Breakdown: 65% Recycled, 25% Compost, 10% Landfill.">
              <div className="absolute inset-0 flex items-center justify-center flex-col mt-4" aria-hidden="true">
                 <span className="text-3xl font-bold text-green-500">90%</span>
                 <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Diverted</span>
              </div>
              <WastePieChart data={wasteData} />
              <div className="flex justify-center gap-3 text-[10px] mt-4">
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-green-500 rounded-sm"></div> Recycled</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-yellow-500 rounded-sm"></div> Compost</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-red-500 rounded-sm"></div> Landfill</div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
