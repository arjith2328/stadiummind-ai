import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Zap, MapPin } from "lucide-react";

export function QuickKPIOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card>
        <CardContent className="p-6">
          <p className="text-sm font-medium text-muted-foreground flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-primary" /> Stadium Fill
          </p>
          <div className="text-3xl font-bold">84%</div>
          <p className="text-xs text-green-500 flex items-center mt-1">
            <TrendingUp className="w-3 h-3 mr-1" /> +2% vs Baseline
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <p className="text-sm font-medium text-muted-foreground flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-yellow-500" /> Grid Load
          </p>
          <div className="text-3xl font-bold">12.4 MW</div>
          <p className="text-xs text-muted-foreground mt-1">AI shedding active (-1.2 MW)</p>
        </CardContent>
      </Card>
      <Card className="md:col-span-2 bg-card/50 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <MapPin className="w-24 h-24" />
        </div>
        <CardContent className="p-6 relative z-10 flex flex-col justify-center h-full">
          <p className="text-sm font-medium text-muted-foreground mb-1">Active Event</p>
          <h3 className="text-xl font-bold font-heading">Argentina vs. France</h3>
          <div className="flex gap-2 mt-3">
            <Badge variant="secondary">Match: Half-time</Badge>
            <Badge variant="secondary">Weather: Clear Roof Open</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
