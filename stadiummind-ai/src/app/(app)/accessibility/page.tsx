'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accessibility, Eye, Volume2, Search, Navigation } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AccessibilityPage() {
  const [highContrast, setHighContrast] = useState(false);
  const [voiceGuidance, setVoiceGuidance] = useState(true);
  const [wheelchair, setWheelchair] = useState(true);

  return (
    <div className={`max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 ${highContrast ? 'grayscale contrast-125' : ''}`}>
      
      {/* Breadcrumb & Header */}
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Dashboard / Accessibility</p>
        <h1 className="text-3xl font-heading font-bold mb-2 flex items-center gap-3">
          <Accessibility className="w-8 h-8 text-primary" />
          Accessibility Center
        </h1>
        <p className="text-muted-foreground">Screen-reader optimized, aria-labeled, high-contrast UI for all fans.</p>
      </div>

      {/* Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Core Controls */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>System Preferences</CardTitle>
            <CardDescription>Customize your digital experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <div className="p-2 bg-muted rounded-md"><Eye className="w-5 h-5" /></div>
                <div>
                  <h3 className="font-medium">High Contrast Mode</h3>
                  <p className="text-xs text-muted-foreground">Enhance visual readability</p>
                </div>
              </div>
              <button 
                onClick={() => setHighContrast(!highContrast)}
                aria-label="Toggle high contrast mode"
                className={`w-12 h-6 rounded-full transition-colors relative ${highContrast ? 'bg-primary' : 'bg-muted-foreground/30'}`}
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${highContrast ? 'left-7' : 'left-1'}`}></div>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <div className="p-2 bg-muted rounded-md"><Volume2 className="w-5 h-5" /></div>
                <div>
                  <h3 className="font-medium">Voice Guidance</h3>
                  <p className="text-xs text-muted-foreground">Audio turn-by-turn navigation</p>
                </div>
              </div>
              <button 
                onClick={() => setVoiceGuidance(!voiceGuidance)}
                aria-label="Toggle voice guidance"
                className={`w-12 h-6 rounded-full transition-colors relative ${voiceGuidance ? 'bg-primary' : 'bg-muted-foreground/30'}`}
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${voiceGuidance ? 'left-7' : 'left-1'}`}></div>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <div className="p-2 bg-muted rounded-md"><Accessibility className="w-5 h-5" /></div>
                <div>
                  <h3 className="font-medium">Wheelchair Routing</h3>
                  <p className="text-xs text-muted-foreground">Avoid stairs and escalators</p>
                </div>
              </div>
              <button 
                onClick={() => setWheelchair(!wheelchair)}
                aria-label="Toggle wheelchair routing"
                className={`w-12 h-6 rounded-full transition-colors relative ${wheelchair ? 'bg-primary' : 'bg-muted-foreground/30'}`}
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${wheelchair ? 'left-7' : 'left-1'}`}></div>
              </button>
            </div>

          </CardContent>
        </Card>
        
        {/* Route Assistant */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Accessible Route Assistant</CardTitle>
            <CardDescription>Find elevators and ramps instantly</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-24 flex flex-col gap-2">
                <Search className="w-6 h-6 text-primary" />
                <span>Find Nearest Elevator</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col gap-2">
                <Search className="w-6 h-6 text-primary" />
                <span>Find Restroom</span>
              </Button>
            </div>

            {wheelchair && (
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 mt-4">
                <h4 className="font-medium text-green-500 flex items-center gap-2 mb-2">
                  <Navigation className="w-4 h-4" /> Active Route Override
                </h4>
                <p className="text-sm text-muted-foreground">All navigation paths are currently prioritizing Elevator 4 and Ramp C to your seat.</p>
              </div>
            )}
            
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
