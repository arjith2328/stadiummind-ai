import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Mic, Send, MapPin, Users, CloudRain, Car, AlertCircle, Leaf, Navigation, Utensils } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-heading font-bold mb-2">Welcome Arjith 👋</h1>
        <p className="text-muted-foreground">Here is the live status for today's match.</p>
      </div>

      {/* Row 1: KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Today's Match
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">ARG vs FRA</div>
            <p className="text-xs text-muted-foreground mt-1">Final • 20:00 Local Time</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-500" /> Crowd Density
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">92%</div>
            <p className="text-xs text-muted-foreground mt-1">High traffic at Gate C</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Car className="w-4 h-4 text-green-500" /> Parking Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-500">Zone B Full</div>
            <p className="text-xs text-muted-foreground mt-1">Rerouting to Zone D</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <CloudRain className="w-4 h-4 text-cyan-500" /> Weather
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">22°C Clear</div>
            <p className="text-xs text-muted-foreground mt-1">Roof open • Perfect conditions</p>
          </CardContent>
        </Card>
      </div>

      {/* Row 2: AI & Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* AI Assistant */}
        <Card className="flex flex-col h-[400px] shadow-lg shadow-primary/5 border-primary/20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              AI Stadium Assistant
            </CardTitle>
            <CardDescription>Powered by Gemini 2.5 Flash</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-end">
            <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-4">
               <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                 <Mic className="w-8 h-8 text-primary" />
               </div>
               <h3 className="text-lg font-medium">"How can I help you today?"</h3>
               <p className="text-sm text-muted-foreground">Ask about food, directions, or emergencies.</p>
            </div>
            <div className="flex gap-2 mt-auto">
              <Input placeholder="Type your request..." className="bg-muted/50 border-0 focus-visible:ring-1" />
              <Button size="icon" className="shrink-0"><Send className="w-4 h-4" /></Button>
              <Button size="icon" variant="secondary" className="shrink-0 rounded-full"><Mic className="w-4 h-4" /></Button>
            </div>
          </CardContent>
        </Card>

        {/* Live Heatmap Mock */}
        <Card className="h-[400px] flex flex-col relative overflow-hidden border-border bg-card/50 backdrop-blur-sm">
          <CardHeader className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-background/90 to-transparent pb-8">
            <CardTitle>Live Crowd Heatmap</CardTitle>
            <CardDescription>Real-time Stadium Map</CardDescription>
          </CardHeader>
          <CardContent className="p-0 flex-1 relative">
            {/* Mock Map Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            {/* Heatmap Blobs */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/20 blur-3xl rounded-full"></div>
            <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-yellow-500/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-green-500/20 blur-3xl rounded-full"></div>
            
            {/* Mock Nodes */}
            <div className="absolute top-1/3 left-1/3 flex items-center justify-center flex-col z-20">
               <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse"></div>
               <span className="text-[10px] mt-1 font-mono text-foreground bg-background/80 px-1 rounded">Gate C</span>
            </div>
            <div className="absolute bottom-1/3 right-1/3 flex items-center justify-center flex-col z-20">
               <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
               <span className="text-[10px] mt-1 font-mono text-foreground bg-background/80 px-1 rounded">Gate A</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Row 3: Queues & Secondary Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Queue Predictions */}
        <Card className="lg:col-span-1 h-full bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Queue Prediction</CardTitle>
            <CardDescription>Live YOLOv8 feed analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <span className="font-medium flex items-center gap-2"><Utensils className="w-4 h-4 text-muted-foreground"/> Food Vendor A</span>
              <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">3 min</Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <span className="font-medium flex items-center gap-2"><Utensils className="w-4 h-4 text-muted-foreground"/> Food Vendor B</span>
              <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">15 min</Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <span className="font-medium flex items-center gap-2"><Utensils className="w-4 h-4 text-muted-foreground"/> Merchandise C</span>
              <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">6 min</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Status Grid */}
        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
          <Card className="flex flex-col items-center justify-center p-6 text-center hover:bg-muted/50 transition-colors cursor-pointer border-destructive/20 bg-destructive/5">
            <AlertCircle className="w-8 h-8 text-destructive mb-3" />
            <h3 className="font-medium text-sm">Emergency Alerts</h3>
            <p className="text-xs text-muted-foreground mt-1">0 Active</p>
          </Card>
          <Card className="flex flex-col items-center justify-center p-6 text-center hover:bg-muted/50 transition-colors cursor-pointer bg-card/50">
            <Car className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="font-medium text-sm">Transport</h3>
            <p className="text-xs text-muted-foreground mt-1">All lines nominal</p>
          </Card>
          <Card className="flex flex-col items-center justify-center p-6 text-center hover:bg-muted/50 transition-colors cursor-pointer bg-card/50">
            <Leaf className="w-8 h-8 text-green-500 mb-3" />
            <h3 className="font-medium text-sm">Carbon Score</h3>
            <p className="text-xs text-muted-foreground mt-1">A+ Rating</p>
          </Card>
          <Card className="flex flex-col items-center justify-center p-6 text-center hover:bg-muted/50 transition-colors cursor-pointer bg-card/50">
            <Users className="w-8 h-8 text-purple-500 mb-3" />
            <h3 className="font-medium text-sm">Volunteer Status</h3>
            <p className="text-xs text-muted-foreground mt-1">124 Deployed</p>
          </Card>
          <Card className="flex flex-col items-center justify-center p-6 text-center hover:bg-muted/50 transition-colors cursor-pointer bg-card/50">
            <Navigation className="w-8 h-8 text-orange-500 mb-3" />
            <h3 className="font-medium text-sm">Accessibility</h3>
            <p className="text-xs text-muted-foreground mt-1">Elevator B Down</p>
          </Card>
        </div>
      </div>

      {/* Row 4: Notifications */}
      <Card className="bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[200px] w-full pr-4">
            <div className="space-y-4">
              <div className="flex gap-4 items-start pb-4 border-b border-border/50">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                <div>
                  <p className="font-medium text-sm">Gate B Opening early to alleviate crowd pressure.</p>
                  <p className="text-xs text-muted-foreground">System • 10 mins ago</p>
                </div>
              </div>
              <div className="flex gap-4 items-start pb-4 border-b border-border/50">
                <div className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5 shrink-0"></div>
                <div>
                  <p className="font-medium text-sm">Parking Zone A nearing maximum capacity. Redirecting incoming traffic to Zone D.</p>
                  <p className="text-xs text-muted-foreground">Sensors • 45 mins ago</p>
                </div>
              </div>
              <div className="flex gap-4 items-start pb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shrink-0"></div>
                <div>
                  <p className="font-medium text-sm">Match kickoff successful. Security deployment verified.</p>
                  <p className="text-xs text-muted-foreground">Admin • 1 hour ago</p>
                </div>
              </div>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

    </div>
  );
}
