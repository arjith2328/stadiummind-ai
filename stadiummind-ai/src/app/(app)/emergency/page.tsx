'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle, PhoneCall, ShieldAlert, HeartPulse, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function EmergencyPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* Breadcrumb & Header */}
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Dashboard / Emergency</p>
        <h1 className="text-3xl font-heading font-bold mb-2 flex items-center gap-3 text-destructive">
          <AlertTriangle className="w-8 h-8" />
          Emergency Decision Support
        </h1>
        <p className="text-muted-foreground">Instant communication and AI protocol overrides for critical safety.</p>
      </div>

      {/* Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* SOS Action Panel */}
        <Card className="md:col-span-1 bg-destructive/5 border-destructive/30 backdrop-blur-sm flex flex-col justify-center items-center text-center p-8">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20"></div>
            <Button size="icon" className="w-32 h-32 rounded-full bg-red-500 hover:bg-red-600 shadow-xl shadow-red-500/20 relative z-10 flex flex-col gap-2">
              <PhoneCall className="w-10 h-10 text-white" />
              <span className="text-xl font-bold font-heading">SOS</span>
            </Button>
          </div>
          <h2 className="text-lg font-bold text-destructive">Emergency Request</h2>
          <p className="text-sm text-muted-foreground mt-2">Hold for 3 seconds to dispatch immediate medical or security assistance to your exact seat location.</p>
        </Card>
        
        {/* Status & Protocols */}
        <div className="md:col-span-2 space-y-6">
          
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Live Incident Feed</CardTitle>
              <CardDescription>Global stadium status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                <ShieldCheck className="w-8 h-8 text-green-500" />
                <div>
                  <h3 className="font-bold text-green-500">NOMINAL STATUS</h3>
                  <p className="text-sm text-muted-foreground">No active emergencies detected in the stadium.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Medical & Security Teams</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <ShieldAlert className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Security Team Alpha</h4>
                      <p className="text-xs text-muted-foreground">Patrolling Zone A</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-green-500 border-green-500/20 bg-green-500/10">Active</Badge>
                </div>

                <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                      <HeartPulse className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Medical Unit 1</h4>
                      <p className="text-xs text-muted-foreground">Stationed at Gate B</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-green-500 border-green-500/20 bg-green-500/10">Standby</Badge>
                </div>

              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
