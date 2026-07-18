'use client';
import { ComposedChart, Line, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';
import React from 'react';
import { DensityData } from '@/types';

/**
 * Props for the CrowdChart component.
 */
export interface CrowdChartProps {
  /** The density timeseries data to render. */
  data: DensityData[];
}

/**
 * Renders a composed area/line chart predicting and tracking crowd density.
 */
export default function CrowdChart({ data }: CrowdChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data}>
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" opacity={0.1} vertical={false} />
        <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))', fontSize: '12px' }} />
        <Area type="monotone" dataKey="predicted" fill="#3b82f6" fillOpacity={0.1} stroke="none" />
        <Line type="monotone" dataKey="density" stroke="#3b82f6" strokeWidth={3} dot={false} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
