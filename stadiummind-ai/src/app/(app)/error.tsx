'use client';

import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { AlertCircle } from 'lucide-react';

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-[60vh] space-y-4 animate-in fade-in">
      <AlertCircle className="w-12 h-12 text-destructive" />
      <h2 className="text-2xl font-bold font-heading">Something went wrong!</h2>
      <p className="text-muted-foreground max-w-md text-center">
        An unexpected error occurred while loading this module. Our engineers have been notified.
      </p>
      <Button onClick={() => reset()} variant="outline">
        Try again
      </Button>
    </div>
  );
}
