import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bot, Mic, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "AI Assistant | StadiumMind AI",
  description: "Enterprise RAG AI Assistant powered by Gemini 2.5 Flash",
};

export default function AIAssistantPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* Breadcrumb & Header */}
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Dashboard / AI Assistant</p>
        <h1 className="text-3xl font-heading font-bold mb-2 flex items-center gap-3">
          <Bot className="w-8 h-8 text-primary" />
          AI Assistant
        </h1>
        <p className="text-muted-foreground">Enterprise RAG Chat interface powered by Gemini 2.5 Flash.</p>
      </div>

      {/* Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 flex flex-col h-[600px] shadow-lg shadow-primary/5 border-primary/20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              Live Chat
            </CardTitle>
            <CardDescription>Vector search indexed against stadium manuals.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-end">
            <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-4">
               <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                 <Mic className="w-8 h-8 text-primary" />
               </div>
               <h3 className="text-lg font-medium">"How can I help you today?"</h3>
               <p className="text-sm text-muted-foreground">Ask about food, directions, or emergencies.</p>
            </div>
            <div className="flex gap-2 mt-auto">
              <Input placeholder="Type your request..." className="bg-muted/50 border-0 focus-visible:ring-1" />
              <Button size="icon" className="shrink-0"><Send className="w-4 h-4" /></Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
                <CardTitle>System Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">LLM Status:</span>
                    <span className="text-green-500 font-medium">Online</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">FAISS Index:</span>
                    <span className="text-green-500 font-medium">Loaded</span>
                </div>
            </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
