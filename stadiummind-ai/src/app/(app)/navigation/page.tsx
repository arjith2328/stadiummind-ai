'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Navigation, MapPin, Map, Clock, ArrowRight, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NavigationPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* Breadcrumb & Header */}
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Dashboard / Navigation</p>
        <h1 className="text-3xl font-heading font-bold mb-2 flex items-center gap-3">
          <Navigation className="w-8 h-8 text-primary" />
          Smart Navigation
        </h1>
        <p className="text-muted-foreground">Step-by-step augmented reality stadium routing and ETA calculation.</p>
      </div>

      {/* Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Route Planner sidebar */}
        <div className="space-y-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" /> Route Planner
              </CardTitle>
              <CardDescription>Find your seat or amenities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground">Current Location</label>
                <div className="flex gap-2">
                  <Input defaultValue="Gate B Entrance" disabled className="bg-muted/50" />
                  <Button variant="outline" size="icon"><Map className="w-4 h-4" /></Button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground">Destination</label>
                <div className="flex gap-2">
                  <Input placeholder="e.g. Block 204, Row J" defaultValue="Block 204, Row J, Seat 12" />
                  <Button variant="default" size="icon"><ArrowRight className="w-4 h-4" /></Button>
                </div>
              </div>
              <div className="pt-4 border-t border-border/50">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Estimated Time</span>
                  <Badge variant="outline" className="text-green-500 border-green-500/20 bg-green-500/10 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 8 mins
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">Distance: 450 meters. Minimal crowd density on route.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Turn-by-turn Directions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 relative border-l border-primary/20 ml-3 pl-4 mt-2">
                <li className="relative">
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background"></div>
                  <p className="text-sm font-medium">Walk straight 50m</p>
                  <p className="text-xs text-muted-foreground">Towards Concourse Level 2</p>
                </li>
                <li className="relative">
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-primary/40 ring-4 ring-background"></div>
                  <p className="text-sm font-medium text-muted-foreground">Turn right at Vendor A</p>
                </li>
                <li className="relative">
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-primary/40 ring-4 ring-background"></div>
                  <p className="text-sm font-medium text-muted-foreground">Take escalator up to Block 204</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        {/* Interactive Map Area */}
        <Card className="md:col-span-2 bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden flex flex-col">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Interactive Stadium Map</span>
              <div className="flex gap-2">
                <Badge variant="secondary">Level 2</Badge>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">AR Mode</Badge>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-0 relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            {/* Map Mockup container */}
            <div className="relative w-full h-[500px] flex items-center justify-center p-8">
              <div className="relative w-full max-w-md aspect-square border-4 border-muted rounded-[3rem] bg-muted/10 shadow-2xl flex items-center justify-center">
                {/* Field */}
                <div className="w-1/2 h-3/4 bg-green-500/10 border-2 border-green-500/20 rounded-md"></div>
                
                {/* User Pin */}
                <div className="absolute bottom-12 left-1/4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 animate-pulse">
                  <User className="w-4 h-4 text-white" />
                </div>
                
                {/* Route Path (CSS mock) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                  <path d="M 120 350 L 120 150 L 300 150" fill="none" stroke="hsl(var(--primary))" strokeWidth="4" strokeDasharray="8 8" className="animate-[dash_20s_linear_infinite]" />
                </svg>
                
                {/* Destination Pin */}
                <div className="absolute top-32 right-[20%] w-6 h-6 bg-red-500 rounded-full shadow-lg shadow-red-500/20 flex items-center justify-center text-[10px] text-white font-bold">
                  204
                </div>
              </div>
            </div>
            <style jsx>{`
              @keyframes dash {
                to { stroke-dashoffset: -1000; }
              }
            `}</style>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
