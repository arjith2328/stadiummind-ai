'use client';
import { ComposedChart, Line, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';
import React from 'react';
import { DensityData } from '@/types';

export default function CrowdChart({ data }: { data: DensityData[] }) {
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
