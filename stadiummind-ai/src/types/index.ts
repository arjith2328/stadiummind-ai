/**
 * Global TypeScript Definitions
 * 
 * Centralized interface and type definitions for the StadiumMind AI platform.
 * Ensures strictly DRY architectures and eliminates loose 'any' assertions.
 */

export interface EnergyData {
  time: string;
  grid: number;
  solar: number;
  loadShifted: number;
}

export interface WasteData {
  name: string;
  value: number;
  color: string;
}

export interface WaitData {
  vendor: string;
  wait: number;
  color: string;
  discount: number;
}

export interface DensityData {
  time: string;
  density: number;
  predicted: number;
}

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}
