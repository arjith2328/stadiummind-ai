'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Utensils, Clock, TrendingDown, Tag, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import dynamic from 'next/dynamic';
import { useDynamicPricing } from '@/hooks/useDynamicPricing';

// Dynamically import Recharts to radically shrink initial JS bundle
const FoodWaitChart = dynamic(() => import('@/components/charts/FoodWaitChart'), { 
  ssr: false, 
  loading: () => <div className="w-full h-full animate-pulse bg-muted/50 rounded-xl"></div> 
});

export default function FoodPage() {
  const { waitData } = useDynamicPricing();

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      
      {/* Header */}
      <div>
        <Badge className="mb-2 bg-orange-500/10 text-orange-500 border-orange-500/20">REVENUE OPTIMIZATION: ACTIVE</Badge>
        <h1 className="text-3xl font-heading font-bold mb-2 flex items-center gap-3">
          <Utensils className="w-8 h-8 text-orange-500" />
          Dynamic F&B Management
        </h1>
        <p className="text-muted-foreground">AI-driven dynamic pricing and pre-ordering to manipulate crowd flow and maximize vendor throughput.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Dynamic Pricing Engine Insight */}
        <Card className="md:col-span-1 bg-gradient-to-br from-orange-500/10 to-transparent border-orange-500/20 shadow-orange-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-500">
              <TrendingDown className="w-5 h-5" /> Dynamic Routing
            </CardTitle>
            <CardDescription>AI incentivizing traffic to empty zones</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-6 bg-card rounded-xl border border-border shadow-sm relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <Badge className="bg-red-500 animate-pulse">-15% OFF</Badge>
              </div>
              <h2 className="text-2xl font-bold font-heading mb-1">Beer Stand A</h2>
              <p className="text-sm text-muted-foreground">Concourse Level 2 - Gate C</p>
              <div className="mt-4 flex gap-2 justify-center">
                 <Badge variant="outline" className="gap-1 bg-background"><Clock className="w-3 h-3" /> 5 min</Badge>
                 <Badge variant="outline" className="gap-1 bg-background"><Tag className="w-3 h-3" /> Flash Sale</Badge>
              </div>
            </div>
            <Button className="w-full gap-2"><Smartphone className="w-4 h-4"/> Express Pre-order via App</Button>
            <p className="text-xs text-muted-foreground text-center">
              Diverting 400 fans here will relieve Taco Bell congestion by 12%.
            </p>
          </CardContent>
        </Card>
        
        {/* Wait Time Chart */}
        <Card className="md:col-span-2 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Live Vendor Demand vs Pricing Modifiers</CardTitle>
            <CardDescription>Predicted queue duration (min) and active discounts</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]" role="region" aria-label="Bar chart showing vendor wait times. Pizza Hut and Beer Stand A have the shortest wait times.">
            <FoodWaitChart data={waitData} />
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
