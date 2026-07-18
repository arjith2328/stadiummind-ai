import { useMemo } from 'react';
import { EnergyData, WasteData } from '@/types';

/**
 * Custom hook for Sustainability and Grid Optimization data metrics.
 * 
 * Manages the data layer for energy load shifting and waste diversion rates.
 * 
 * @returns {object} Memoized energy and waste data arrays.
 */
export function useGridOptimization(): { wasteData: WasteData[]; energyData: EnergyData[] } {
  const wasteData = useMemo(() => [
    { name: 'Recycled', value: 65, color: '#22c55e' },
    { name: 'Compost', value: 25, color: '#eab308' },
    { name: 'Landfill', value: 10, color: '#ef4444' },
  ], []);

  const energyData = useMemo(() => [
    { time: '16:00', grid: 120, solar: 20, loadShifted: 10 },
    { time: '17:00', grid: 150, solar: 40, loadShifted: 25 },
    { time: '18:00', grid: 180, solar: 50, loadShifted: 40 },
    { time: '19:00', grid: 220, solar: 10, loadShifted: 80 },
    { time: '20:00', grid: 200, solar: 0, loadShifted: 95 },
  ], []);

  return { wasteData, energyData };
}
