"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  iconClassName?: string;
  itemVariants: Variants;
  id?: string;
}

export function FeatureCard({ title, description, icon, iconClassName, itemVariants, id }: FeatureCardProps) {
  return (
    <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-card border shadow-sm flex flex-col" role={id ? "region" : undefined} aria-labelledby={id}>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${iconClassName || 'bg-primary/10 text-primary'}`} aria-hidden="true">
        {icon}
      </div>
      <h3 id={id} className="font-heading font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </motion.div>
  );
}
