'use client';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import React from 'react';
import { WasteData } from '@/types';

/**
 * Props for the WastePieChart component.
 */
export interface WastePieChartProps {
  /** The waste diversion metrics. */
  data: WasteData[];
}

/**
 * Renders a pie chart demonstrating the stadium's waste diversion rates.
 */
export default function WastePieChart({ data }: WastePieChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" innerRadius={70} outerRadius={90} paddingAngle={2} dataKey="value" stroke="none">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }} />
      </PieChart>
    </ResponsiveContainer>
  );
}
