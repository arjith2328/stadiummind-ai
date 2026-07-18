import { useMemo } from 'react';
import { WaitData } from '@/types';

/**
 * Custom hook to encapsulate Food Vendor Wait Times and Dynamic Pricing.
 * 
 * Isolates the logic for determining vendor queues and discounts,
 * ensuring the React UI remains purely presentational.
 * 
 * @returns {object} Memoized array of vendor statistics.
 */
export function useDynamicPricing(): { waitData: WaitData[] } {
  const waitData = useMemo(() => [
    { vendor: 'Burger King', wait: 15, color: '#f59e0b', discount: 0 },
    { vendor: 'Pizza Hut', wait: 8, color: '#22c55e', discount: 5 },
    { vendor: 'Taco Bell', wait: 22, color: '#ef4444', discount: 0 },
    { vendor: 'Beer Stand A', wait: 5, color: '#22c55e', discount: 15 },
    { vendor: 'Beer Stand B', wait: 12, color: '#f59e0b', discount: 0 },
  ], []);

  return { waitData };
}
