'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Leaf, Award, Recycle } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const wasteData = [
  { name: 'Recycled', value: 65, color: '#22c55e' },
  { name: 'Compost', value: 25, color: '#eab308' },
  { name: 'Landfill', value: 10, color: '#ef4444' },
];

const energyData = [
  { time: '16:00', usage: 120 },
  { time: '17:00', usage: 150 },
  { time: '18:00', usage: 180 },
  { time: '19:00', usage: 220 },
  { time: '20:00', usage: 200 },
];

export default function SustainabilityPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* Breadcrumb & Header */}
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Dashboard / Sustainability</p>
        <h1 className="text-3xl font-heading font-bold mb-2 flex items-center gap-3">
          <Leaf className="w-8 h-8 text-green-500" />
          Sustainability
        </h1>
        <p className="text-muted-foreground">Carbon footprint tracking and gamified public transit incentives.</p>
      </div>

      {/* Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Fan Gamification */}
        <Card className="md:col-span-1 bg-gradient-to-br from-green-500/10 to-transparent border-green-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-500">
              <Award className="w-5 h-5 fill-green-500" /> Your Impact
            </CardTitle>
            <CardDescription>Fan Rewards Program</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-center">
            <div className="text-5xl font-bold font-heading">
              1,250 <span className="text-xl text-green-500 font-normal">pts</span>
            </div>
            <p className="text-sm text-muted-foreground">You earned 500 points today for scanning your Metro transit pass!</p>
            
            <div className="p-4 bg-card rounded-xl border border-border mt-4">
               <h4 className="font-medium text-sm mb-1">Available Rewards</h4>
               <p className="text-xs text-muted-foreground mb-3">Redeem points for food and merch.</p>
               <div className="w-full bg-muted rounded-full h-2 mb-1">
                 <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
               </div>
               <p className="text-xs text-right text-muted-foreground">250 pts to Free Hot Dog</p>
            </div>
          </CardContent>
        </Card>
        
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Waste Pie Chart */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Recycle className="w-4 h-4 text-green-500" /> Waste Analytics
              </CardTitle>
              <CardDescription>Stadium diversion rate</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={wasteData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                    {wasteData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 text-xs mt-2">
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Recycled</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-yellow-500 rounded-full"></div> Compost</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-red-500 rounded-full"></div> Landfill</div>
              </div>
            </CardContent>
          </Card>

          {/* Energy Bar Chart */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Energy Usage</CardTitle>
              <CardDescription>Solar grid consumption (kW)</CardDescription>
            </CardHeader>
            <CardContent className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={energyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} vertical={false} />
                  <XAxis dataKey="time" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip cursor={{fill: 'var(--muted)'}} contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }} />
                  <Bar dataKey="usage" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
