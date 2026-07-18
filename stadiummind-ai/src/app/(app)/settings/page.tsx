'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Settings, User, Shield, Bell, Languages } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* Breadcrumb & Header */}
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Dashboard / Settings</p>
        <h1 className="text-3xl font-heading font-bold mb-2 flex items-center gap-3">
          <Settings className="w-8 h-8 text-primary" />
          Settings
        </h1>
        <p className="text-muted-foreground">Manage your account preferences and security.</p>
      </div>

      {/* Tabs Layout */}
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-muted/50 p-1 mb-8">
          <TabsTrigger value="account" className="flex gap-2"><User className="w-4 h-4"/> Account</TabsTrigger>
          <TabsTrigger value="notifications" className="flex gap-2"><Bell className="w-4 h-4"/> Alerts</TabsTrigger>
          <TabsTrigger value="security" className="flex gap-2"><Shield className="w-4 h-4"/> Security</TabsTrigger>
          <TabsTrigger value="language" className="flex gap-2"><Languages className="w-4 h-4"/> Language</TabsTrigger>
        </TabsList>
        
        {/* Account Tab */}
        <TabsContent value="account">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Profile Details</CardTitle>
              <CardDescription>Update your personal information associated with your ticket.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input defaultValue="Arjith" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input defaultValue="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <Input defaultValue="arjith@example.com" disabled className="bg-muted/50" />
                <p className="text-xs text-muted-foreground">Email is tied to your FIFA Ticket ID and cannot be changed.</p>
              </div>
              <Button className="mt-4">Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Control what alerts you receive during the match.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Emergency Broadcasts</h3>
                  <p className="text-xs text-muted-foreground">Critical safety alerts</p>
                </div>
                <div className="w-12 h-6 rounded-full bg-primary relative cursor-not-allowed opacity-75">
                  <div className="absolute top-1 left-7 w-4 h-4 rounded-full bg-white"></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Food & Beverage Promos</h3>
                  <p className="text-xs text-muted-foreground">Wait time drops and discounts</p>
                </div>
                <button className="w-12 h-6 rounded-full bg-muted-foreground/30 relative">
                  <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform"></div>
                </button>
              </div>

            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Security & Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10">
                Log Out of All Devices
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Language Tab */}
        <TabsContent value="language">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Localization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                 <Button variant="outline" className="border-primary bg-primary/10">English (US)</Button>
                 <Button variant="outline">Español (ES)</Button>
                 <Button variant="outline">Français (FR)</Button>
                 <Button variant="outline">Deutsch (DE)</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  );
}
