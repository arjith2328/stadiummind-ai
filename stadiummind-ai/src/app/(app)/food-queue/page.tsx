'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Utensils, Clock, TrendingDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const waitData = [
  { vendor: 'Burger King', wait: 15, color: '#f59e0b' },
  { vendor: 'Pizza Hut', wait: 8, color: '#22c55e' },
  { vendor: 'Taco Bell', wait: 22, color: '#ef4444' },
  { vendor: 'Beer Stand A', wait: 5, color: '#22c55e' },
  { vendor: 'Beer Stand B', wait: 12, color: '#f59e0b' },
];

export default function FoodPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* Breadcrumb & Header */}
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Dashboard / Food Queue</p>
        <h1 className="text-3xl font-heading font-bold mb-2 flex items-center gap-3">
          <Utensils className="w-8 h-8 text-orange-500" />
          Food Queue Prediction
        </h1>
        <p className="text-muted-foreground">Machine Learning models predicting vendor wait times to maximize fan experience.</p>
      </div>

      {/* Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* AI Insight */}
        <Card className="md:col-span-1 bg-gradient-to-br from-orange-500/10 to-transparent border-orange-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-500">
              <TrendingDown className="w-5 h-5" /> Smart Recommendation
            </CardTitle>
            <CardDescription>Lowest wait time near your seat</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-6 bg-card rounded-xl border border-border shadow-sm">
              <h2 className="text-2xl font-bold font-heading mb-1">Pizza Hut</h2>
              <p className="text-sm text-muted-foreground">Concourse Level 2 - Gate C</p>
              <Badge className="mt-3 bg-green-500 text-white flex mx-auto gap-1 w-fit">
                <Clock className="w-3 h-3" /> 8 mins wait
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Going now saves you 14 minutes compared to waiting for Halftime.
            </p>
          </CardContent>
        </Card>
        
        {/* Wait Time Chart */}
        <Card className="md:col-span-2 bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Live Vendor Wait Times</CardTitle>
            <CardDescription>Predicted queue duration in minutes</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={waitData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} horizontal={false} />
                <XAxis type="number" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis dataKey="vendor" type="category" stroke="#888" fontSize={12} tickLine={false} axisLine={false} width={100} />
                <Tooltip cursor={{fill: 'var(--muted)'}} contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }} />
                <Bar dataKey="wait" radius={[0, 4, 4, 0]}>
                  {waitData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Live Vendor Cards */}
        <Card className="md:col-span-3 bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Nearest Options</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="p-4 rounded-xl bg-card border border-border shadow-sm flex flex-col justify-between h-32 hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">Beer Stand A</h3>
                    <p className="text-xs text-muted-foreground">50m away</p>
                  </div>
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20">5 min</Badge>
                </div>
                <p className="text-xs font-medium text-green-500">Fastest Option</p>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border shadow-sm flex flex-col justify-between h-32 hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">Pizza Hut</h3>
                    <p className="text-xs text-muted-foreground">120m away</p>
                  </div>
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20">8 min</Badge>
                </div>
                <p className="text-xs text-muted-foreground">Moderate wait</p>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border shadow-sm flex flex-col justify-between h-32 hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">Burger King</h3>
                    <p className="text-xs text-muted-foreground">200m away</p>
                  </div>
                  <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">15 min</Badge>
                </div>
                <p className="text-xs text-muted-foreground">Queue building</p>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border shadow-sm flex flex-col justify-between h-32 opacity-75">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">Taco Bell</h3>
                    <p className="text-xs text-muted-foreground">250m away</p>
                  </div>
                  <Badge className="bg-red-500/10 text-red-500 border-red-500/20">22 min</Badge>
                </div>
                <p className="text-xs text-red-500 font-medium">Avoid</p>
              </div>

            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
