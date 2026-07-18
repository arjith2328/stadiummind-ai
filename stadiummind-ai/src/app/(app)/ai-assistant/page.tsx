'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Mic, Send, Camera, Clock, Utensils } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AIAssistantPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      
      {/* Header */}
      <div>
        <Badge className="mb-2 bg-purple-500/10 text-purple-500 border-purple-500/20">MULTIMODAL AI: ACTIVE</Badge>
        <h1 className="text-3xl font-heading font-bold mb-2 flex items-center gap-3">
          <Bot className="w-8 h-8 text-purple-500" />
          Multimodal AI Assistant
        </h1>
        <p className="text-muted-foreground">Generative UI chat utilizing Gemini 2.5 Flash for vision, voice, and contextual actions.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 flex flex-col h-[650px] shadow-lg shadow-purple-500/5 bg-card/50 backdrop-blur-sm">
          <CardHeader className="border-b border-border/50 pb-4">
            <CardTitle className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
              Live Chat
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col p-0">
            
            {/* Chat History */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%] text-sm shadow-sm">
                  I&apos;m at Section 102. What&apos;s the fastest food option right now?
                </div>
              </div>
              
              {/* Generative UI Response */}
              <div className="flex justify-start">
                <div className="bg-muted/50 border border-border rounded-2xl rounded-tl-sm p-4 max-w-[90%] shadow-sm space-y-3">
                  <p className="text-sm">Based on live crowd density data, **Pizza Hut at Gate C** is your fastest option right now. Here is a direct link to pre-order to skip the line completely.</p>
                  
                  {/* Embedded Generative Action Card */}
                  <div className="bg-card border border-border rounded-xl p-3 flex justify-between items-center mt-2 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                        <Utensils className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Pizza Hut - Gate C</h4>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="secondary" className="text-[10px] h-4 px-1 gap-1"><Clock className="w-3 h-3"/> 8 mins</Badge>
                          <span className="text-[10px] text-muted-foreground mt-0.5">120m away</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm">Pre-Order</Button>
                  </div>
                </div>
              </div>
              
            </div>

            {/* Multimodal Input Area */}
            <div className="p-4 border-t border-border/50 bg-background/50">
              <form className="flex gap-2" role="search" aria-label="AI Assistant Input">
                <Button type="button" aria-label="Upload Image" size="icon" variant="outline" className="shrink-0 text-muted-foreground focus-visible:ring-2 focus-visible:ring-purple-500"><Camera className="w-4 h-4" aria-hidden="true" /></Button>
                <Button type="button" aria-label="Voice Input" size="icon" variant="outline" className="shrink-0 text-muted-foreground focus-visible:ring-2 focus-visible:ring-purple-500"><Mic className="w-4 h-4" aria-hidden="true" /></Button>
                <Input aria-label="Type your request" placeholder="Type, tap mic to speak, or upload an image..." className="bg-card border-border shadow-sm focus-visible:ring-purple-500" />
                <Button type="submit" aria-label="Send Message" size="icon" className="shrink-0 bg-purple-500 hover:bg-purple-600 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"><Send className="w-4 h-4" aria-hidden="true" /></Button>
              </form>
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
                <CardTitle>System Capabilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex justify-between items-center text-sm p-2 rounded-md bg-muted/50 border border-border/50">
                    <span className="text-muted-foreground flex items-center gap-2"><Mic className="w-4 h-4"/> Voice Parsing:</span>
                    <span className="text-green-500 font-medium text-xs">Active</span>
                </div>
                <div className="flex justify-between items-center text-sm p-2 rounded-md bg-muted/50 border border-border/50">
                    <span className="text-muted-foreground flex items-center gap-2"><Camera className="w-4 h-4"/> Vision Engine:</span>
                    <span className="text-green-500 font-medium text-xs">Active</span>
                </div>
                <div className="flex justify-between items-center text-sm p-2 rounded-md bg-muted/50 border border-border/50">
                    <span className="text-muted-foreground flex items-center gap-2"><Utensils className="w-4 h-4"/> Action Calls:</span>
                    <span className="text-green-500 font-medium text-xs">Active</span>
                </div>
            </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
