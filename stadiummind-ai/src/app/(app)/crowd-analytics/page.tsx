'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, TrendingUp, AlertCircle } from "lucide-react";
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';

const densityData = [
  { time: '16:00', density: 12, predicted: 15 },
  { time: '17:00', density: 35, predicted: 40 },
  { time: '18:00', density: 78, predicted: 80 },
  { time: '19:00', density: 92, predicted: 95 },
  { time: '20:00', density: 85, predicted: 90 },
  { time: '21:00', density: 98, predicted: 100 }, // Peak
  { time: '22:00', density: 45, predicted: 50 },
];

export default function CrowdPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* Breadcrumb & Header */}
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Dashboard / Crowd Analytics</p>
        <h1 className="text-3xl font-heading font-bold mb-2 flex items-center gap-3">
          <Users className="w-8 h-8 text-blue-500" />
          Crowd Analytics
        </h1>
        <p className="text-muted-foreground">Real-time crowd density monitoring via YOLOv8 feeds and FAISS predictions.</p>
      </div>

      {/* Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* KPI Cards */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Global Density</CardTitle>
            <CardDescription>Live stadium capacity</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="text-4xl font-bold text-red-500">92%</div>
             <p className="text-sm text-muted-foreground mt-2">75,432 / 82,000 Fans Present</p>
             <div className="w-full bg-muted rounded-full h-2 mt-4">
               <div className="bg-red-500 h-2 rounded-full" style={{ width: '92%' }}></div>
             </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Peak Prediction</CardTitle>
            <CardDescription>Estimated max capacity</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="text-4xl font-bold text-orange-500 flex items-center gap-2">
               21:00 <TrendingUp className="w-6 h-6" />
             </div>
             <p className="text-sm text-muted-foreground mt-2">AI predicts 98% density during halftime.</p>
          </CardContent>
        </Card>

        <Card className="bg-blue-500/10 border-blue-500/20">
          <CardHeader>
            <CardTitle className="text-blue-500">AI Insight</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
             <div className="flex items-start gap-2">
               <AlertCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
               <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">South Concourse bottleneck detected.</p>
             </div>
             <p className="text-xs text-muted-foreground">Redirecting fan traffic via navigation app to East Concourse to balance load.</p>
          </CardContent>
        </Card>
        
        {/* Main Chart */}
        <Card className="lg:col-span-3 bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Density Timeline vs AI Prediction</CardTitle>
            <CardDescription>Historical data vs FAISS generated forecasts</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={densityData} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                <CartesianGrid stroke="#ccc" strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="time" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }} />
                
                {/* AI Prediction Area */}
                <Area type="monotone" dataKey="predicted" fill="#3b82f6" fillOpacity={0.1} stroke="none" />
                
                {/* Actual Density Line */}
                <Line type="monotone" dataKey="density" stroke="#3b82f6" strokeWidth={4} dot={{ r: 4 }} activeDot={{ r: 8 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
