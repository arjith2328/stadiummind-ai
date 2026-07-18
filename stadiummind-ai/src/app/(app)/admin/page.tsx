'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DollarSign, Users, AlertTriangle, Leaf, Bot, Car, ArrowUpRight, CloudRain, Activity, HeartPulse } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const crowdData = [
  { time: '18:00', density: 30 },
  { time: '18:30', density: 45 },
  { time: '19:00', density: 75 },
  { time: '19:30', density: 92 },
  { time: '20:00', density: 98 },
  { time: '20:30', density: 95 },
];

const revenueData = [
  { zone: 'Gate A', sales: 4000 },
  { zone: 'Gate B', sales: 3000 },
  { zone: 'Gate C', sales: 2000 },
  { zone: 'VIP Lounge', sales: 8000 },
];

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      
      {/* Header & Live Match */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Organizer Module / Command Center</p>
          <h1 className="text-3xl font-heading font-bold flex items-center gap-3">
            Organizer Command Center
          </h1>
          <p className="text-muted-foreground mt-1">Live executive overview and stadium operations.</p>
        </div>
        
        {/* Live Match Widget */}
        <div className="flex items-center gap-4 bg-card/50 backdrop-blur-sm border border-border/50 p-3 rounded-xl shadow-sm">
          <div className="text-right">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Live Match</p>
            <p className="font-bold text-lg">USA vs MEX</p>
          </div>
          <div className="px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-lg font-bold font-heading text-xl animate-pulse">
            75:23
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest text-center">Score</p>
            <p className="font-bold text-lg tracking-widest">2 - 1</p>
          </div>
        </div>
      </div>

      {/* Row 1: Executive KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
        <Card className="bg-gradient-to-br from-green-500/10 to-transparent border-green-500/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-green-500" /> Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1.24M</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <ArrowUpRight className="w-3 h-3 mr-1" /> +12% from last hour
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-500" /> Volunteers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground mt-1">98% Deployment rate</p>
          </CardContent>
        </Card>

        <Card className="border-destructive/20 bg-destructive/5">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-destructive" /> Emergency
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">NOMINAL</div>
            <p className="text-xs text-muted-foreground mt-1">Zero active incidents</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Leaf className="w-4 h-4 text-green-500" /> Carbon Net
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">-12 Tons</div>
            <p className="text-xs text-muted-foreground mt-1">Positive offset active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <CloudRain className="w-4 h-4 text-blue-400" /> Weather
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68°F</div>
            <p className="text-xs text-muted-foreground mt-1">Light rain approaching</p>
          </CardContent>
        </Card>
      </div>

      {/* Row 2: Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Crowd Density Line Chart */}
        <Card className="bg-card/50 backdrop-blur-sm shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Activity className="w-5 h-5 text-blue-500"/> Crowd Density Over Time</CardTitle>
            <CardDescription>Live YOLOv8 aggregate data</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={crowdData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="density" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} activeDot={{r:8}} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" opacity={0.2} vertical={false} />
                <XAxis dataKey="time" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Revenue Bar Chart */}
        <Card className="bg-card/50 backdrop-blur-sm shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-green-500"/> Revenue by Zone</CardTitle>
            <CardDescription>Food and Merchandise sales</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} vertical={false} />
                <XAxis dataKey="zone" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value/1000}k`} />
                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }} />
                <Bar dataKey="sales" fill="#22c55e" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Row 3: Operations & Logistics */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* AI Insights & Medical */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="shadow-lg shadow-primary/5 border-primary/20 bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-primary" />
                AI Insights
              </CardTitle>
              <CardDescription>Gemini Recommendations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm font-medium mb-1 text-foreground">Open Gate B Overflow</p>
                <p className="text-xs text-muted-foreground">Crowd density at Gate A is approaching 95%. Opening Gate B will reduce wait times by an estimated 12 minutes.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-red-500" />
                Medical Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mt-2">
                <div className="flex justify-between items-center text-sm">
                  <span>Unit 1 (North)</span>
                  <Badge variant="outline" className="text-green-500 bg-green-500/10">Standby</Badge>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Unit 2 (East)</span>
                  <Badge variant="outline" className="text-yellow-500 bg-yellow-500/10">Dispatched</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Volunteer Management & Security */}
        <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Volunteer Table */}
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Volunteer Management</CardTitle>
              <CardDescription>Active field deployments</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[250px] w-full pr-4">
                <div className="space-y-1">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="flex justify-between items-center p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold">V{i}</div>
                        <div>
                          <p className="text-sm font-medium">John Doe {i}</p>
                          <p className="text-xs text-muted-foreground">Gate {['A', 'B', 'C', 'VIP', 'A', 'B'][i-1]} Assistance</p>
                        </div>
                      </div>
                      <Badge variant="outline" className={i === 3 ? "text-yellow-500 bg-yellow-500/10" : "text-green-500 bg-green-500/10"}>
                        {i === 3 ? "On Break" : "Active"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Notifications & Parking Overview */}
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Security & System Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[100px] w-full pr-4 mt-2">
                  <div className="space-y-4">
                    <div className="flex gap-3 items-start border-b border-border/50 pb-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-1 shrink-0"></div>
                      <div>
                        <p className="text-sm font-medium">Unauthorized access at Gate D</p>
                        <p className="text-[10px] text-muted-foreground">Security • 2m ago</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-1 shrink-0"></div>
                      <div>
                        <p className="text-sm font-medium">Weather warning: Light rain</p>
                        <p className="text-[10px] text-muted-foreground">System • 15m ago</p>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Car className="w-4 h-4 text-blue-500" />
                  Parking Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mt-2">
                  <div className="flex justify-between items-center text-sm">
                    <span>Zone A (VIP)</span>
                    <div className="flex items-center gap-2"><div className="w-16 h-1.5 bg-red-500 rounded-full"></div> 100%</div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Zone B (General)</span>
                    <div className="flex items-center gap-2"><div className="w-12 h-1.5 bg-yellow-500 rounded-full"></div> 85%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
