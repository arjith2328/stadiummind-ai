import { useMemo } from 'react';

/**
 * Custom hook to encapsulate Crowd Analytics data fetching and state management.
 * 
 * Extracts business logic from the UI components to maintain strict 
 * separation of concerns and facilitate easier unit testing.
 * 
 * @returns {object} The memoized crowd density timeseries data.
 */
export function useCrowdAnalytics() {
  const densityData = useMemo(() => [
    { time: '16:00', density: 12, predicted: 15 },
    { time: '17:00', density: 35, predicted: 40 },
    { time: '18:00', density: 78, predicted: 80 },
    { time: '19:00', density: 92, predicted: 95 },
    { time: '20:00', density: 85, predicted: 90 },
    { time: '21:00', density: 98, predicted: 100 }, // Peak
    { time: '22:00', density: 45, predicted: 50 },
  ], []);

  return { densityData };
}
