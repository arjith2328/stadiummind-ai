import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";

export function AIAnomalyTicker() {
  return (
    <Card className="bg-destructive/5 border-destructive/20 border-l-4 border-l-destructive shadow-sm" aria-live="assertive" role="alert">
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-destructive animate-pulse" aria-hidden="true" />
          <div>
            <p className="font-semibold text-sm">AI Anomaly Detected</p>
            <p className="text-xs text-muted-foreground">Gate C egress rate is 15% slower than modeled. Potential bottleneck forming.</p>
          </div>
        </div>
        <Button variant="destructive" size="sm">Reroute Traffic</Button>
      </CardContent>
    </Card>
  );
}
