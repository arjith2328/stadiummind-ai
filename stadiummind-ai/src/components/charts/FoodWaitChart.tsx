'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import React from 'react';
import { WaitData } from '@/types';

/**
 * Props for the FoodWaitChart component.
 */
export interface FoodWaitChartProps {
  /** The vendor wait times data to display. */
  data: WaitData[];
}

/**
 * Renders a vertical bar chart displaying current food vendor wait times.
 */
export default function FoodWaitChart({ data }: FoodWaitChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 10, right: 30, left: -20, bottom: 0 }} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" opacity={0.2} horizontal={false} />
        <XAxis type="number" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis dataKey="vendor" type="category" stroke="#888" fontSize={12} tickLine={false} axisLine={false} width={100} />
        <Tooltip cursor={{fill: 'var(--muted)'}} contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }} />
        <Bar dataKey="wait" radius={[0, 4, 4, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
