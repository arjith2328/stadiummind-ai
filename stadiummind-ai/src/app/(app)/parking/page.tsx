'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Car, Zap, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const occupancyData = [
  { time: '14:00', occupancy: 10 },
  { time: '15:00', occupancy: 25 },
  { time: '16:00', occupancy: 40 },
  { time: '17:00', occupancy: 60 },
  { time: '18:00', occupancy: 85 },
  { time: '19:00', occupancy: 95 },
  { time: '20:00', occupancy: 98 },
];

export default function ParkingPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* Breadcrumb & Header */}
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Dashboard / Parking</p>
        <h1 className="text-3xl font-heading font-bold mb-2 flex items-center gap-3">
          <Car className="w-8 h-8 text-green-500" />
          Smart Parking
        </h1>
        <p className="text-muted-foreground">Live parking availability, intelligent routing, and fast exits.</p>
      </div>

      {/* Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Recommendation Panel */}
        <Card className="md:col-span-1 bg-gradient-to-br from-green-500/10 to-transparent border-green-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-500">
              <Zap className="w-5 h-5 fill-green-500" /> AI Recommendation
            </CardTitle>
            <CardDescription>Fastest assigned spot based on arrival time</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-6 bg-card rounded-xl border border-border shadow-sm">
              <h2 className="text-5xl font-bold font-heading mb-2">B4</h2>
              <p className="text-sm font-medium">Zone B - VIP Access</p>
              <Badge className="mt-3 bg-green-500 hover:bg-green-600">Reserved for You</Badge>
            </div>
            
            <div className="space-y-3 pt-4 border-t border-border/50">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground flex items-center gap-1"><MapPin className="w-3 h-3"/> Walking to Gate:</span>
                <span className="font-medium">4 mins</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground flex items-center gap-1"><Car className="w-3 h-3"/> Projected Exit Time:</span>
                <span className="font-medium">12 mins</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Occupancy Chart */}
        <Card className="md:col-span-2 bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Global Occupancy Rate</CardTitle>
            <CardDescription>Overall stadium parking capacity</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={occupancyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorOcc" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} vertical={false} />
                <XAxis dataKey="time" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }} />
                <Area type="monotone" dataKey="occupancy" stroke="#22c55e" strokeWidth={3} fillOpacity={1} fill="url(#colorOcc)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Live Zone Status Grid */}
        <Card className="md:col-span-3 bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Live Zone Availability</CardTitle>
            <CardDescription>Real-time slot tracking across all quadrants</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="p-4 rounded-xl bg-muted/30 border border-border">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Zone A (North)</h3>
                  <Badge variant="outline" className="text-red-500 bg-red-500/10">Full</Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <p className="text-xs text-right text-muted-foreground">0 / 500 spots</p>
              </div>

              <div className="p-4 rounded-xl bg-muted/30 border border-border">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Zone B (East)</h3>
                  <Badge variant="outline" className="text-yellow-500 bg-yellow-500/10">85%</Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-xs text-right text-muted-foreground">75 / 500 spots</p>
              </div>

              <div className="p-4 rounded-xl bg-muted/30 border border-border">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Zone C (South)</h3>
                  <Badge variant="outline" className="text-green-500 bg-green-500/10">40%</Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
                <p className="text-xs text-right text-muted-foreground">300 / 500 spots</p>
              </div>

              <div className="p-4 rounded-xl bg-muted/30 border border-border">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Zone D (VIP)</h3>
                  <Badge variant="outline" className="text-blue-500 bg-blue-500/10">Pass Only</Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <p className="text-xs text-right text-muted-foreground">40 / 100 spots</p>
              </div>

            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
