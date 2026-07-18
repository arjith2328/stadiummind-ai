import { ReactNode } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  LayoutDashboard, Bot, Navigation, Users, Car, Utensils, 
  AlertTriangle, Accessibility, Leaf, Settings, Bell, Shield
} from "lucide-react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Bot, label: "AI Assistant", href: "/ai-assistant" },
    { icon: Navigation, label: "Navigation", href: "/navigation" },
    { icon: Users, label: "Crowd Analytics", href: "/crowd-analytics" },
    { icon: Car, label: "Parking", href: "/parking" },
    { icon: Utensils, label: "Food Queue", href: "/food-queue" },
    { icon: AlertTriangle, label: "Emergency", href: "/emergency" },
    { icon: Accessibility, label: "Accessibility", href: "/accessibility" },
    { icon: Leaf, label: "Sustainability", href: "/sustainability" },
    { icon: Settings, label: "Settings", href: "/settings" },
    { icon: Shield, label: "Organizer Dashboard", href: "/admin" },
  ];

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-card/50 backdrop-blur-xl hidden md:flex flex-col">
        <div className="p-6">
          <Link href="/">
            <h2 className="text-xl font-heading font-bold text-primary">StadiumMind AI</h2>
            <p className="text-xs text-muted-foreground mt-1">FIFA World Cup 2026</p>
          </Link>
        </div>
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary/10 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 border-b bg-background/80 backdrop-blur-md flex items-center justify-between px-6 z-10">
          <div className="flex items-center gap-4">
            <h1 className="font-heading font-semibold text-lg md:hidden">StadiumMind AI</h1>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <button className="relative p-2 rounded-full hover:bg-muted/50 transition-colors">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>
            <Avatar className="w-8 h-8 cursor-pointer border border-border">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
          </div>
        </header>
        
        {/* Scrollable Canvas */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 bg-muted/20">
          {children}
        </div>
      </main>
    </div>
  );
}
