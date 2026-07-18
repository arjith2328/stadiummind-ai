"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Map, ShieldAlert, Sparkles, Utensils } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-chart-2/20 blur-[120px] pointer-events-none" />

      <motion.main 
        className="z-10 flex flex-col items-center max-w-4xl px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          <span>The Official AI Platform of FIFA World Cup 2026</span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Welcome to <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-2">
            StadiumMind AI
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10"
        >
          Experience the most advanced smart stadium platform in the world. 
          Navigate crowds, find your seat, order food, and stay safe with 
          real-time AI assistance.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link href="/dashboard" className="w-full sm:w-auto" aria-label="Enter Fan Experience">
            <Button size="lg" className="w-full h-12 text-base px-8 shadow-lg shadow-primary/25 rounded-xl">
              Enter Fan Experience
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Button>
          </Link>
          <Link href="/admin" className="w-full sm:w-auto" aria-label="Open Organizer Dashboard">
            <Button size="lg" variant="outline" className="w-full h-12 text-base px-8 rounded-xl bg-background/50 backdrop-blur-sm">
              Organizer Dashboard
            </Button>
          </Link>
        </motion.div>

        {/* Feature Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 text-left w-full"
        >
          <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-card border shadow-sm flex flex-col" role="region" aria-labelledby="nav-title">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4" aria-hidden="true">
              <Map className="w-6 h-6" />
            </div>
            <h3 id="nav-title" className="font-heading font-semibold text-lg mb-2">Smart Navigation</h3>
            <p className="text-muted-foreground text-sm">Step-by-step AR routing to your seat, accounting for crowds and accessibility needs.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-card border shadow-sm flex flex-col" role="region" aria-labelledby="food-title">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4" aria-hidden="true">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 id="food-title" className="font-heading font-semibold text-lg mb-2">AI Food Queues</h3>
            <p className="text-muted-foreground text-sm">Predictive wait times for every vendor. Let AI find you the fastest hot dog in the stadium.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-card border shadow-sm flex flex-col">
            <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center text-destructive mb-4">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">Instant Emergency</h3>
            <p className="text-muted-foreground text-sm">One-slide SOS alerts routing the nearest medical volunteer directly to your GPS location.</p>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  );
}
