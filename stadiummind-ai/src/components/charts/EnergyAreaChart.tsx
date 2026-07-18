'use client';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import React from 'react';
import { EnergyData } from '@/types';

/**
 * Props for the EnergyAreaChart component.
 */
export interface EnergyAreaChartProps {
  /** The energy metrics array for the chart. */
  data: EnergyData[];
}

/**
 * Renders an area chart illustrating stadium energy grid usage vs AI load shedding.
 */
export default function EnergyAreaChart({ data }: EnergyAreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.1} vertical={false} />
        <XAxis dataKey="time" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))', fontSize: '12px' }} />
        
        <Area type="monotone" dataKey="grid" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.2} name="Grid Import" />
        <Area type="monotone" dataKey="solar" stackId="1" stroke="#eab308" fill="#eab308" fillOpacity={0.5} name="Solar Output" />
        <Area type="monotone" dataKey="loadShifted" stackId="1" stroke="#22c55e" fill="#22c55e" fillOpacity={0.8} name="AI Load Shedding" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
