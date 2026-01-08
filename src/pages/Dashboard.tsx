import { Container, Section } from "@/components/layout";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientText } from "@/components/ui/gradient-text";
import { NeonButton } from "@/components/ui/neon-button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { NavLink } from "@/components/NavLink";
import { FloatingCodeBlocks } from "@/components/3d/FloatingCodeBlocks";
import {
  Bot,
  HelpCircle,
  MessageSquare,
  Clock,
  ArrowRight,
  Plus,
  User,
  Home,
  Users,
  Settings,
  BarChart3,
  Flame,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { label: "Dashboard", icon: Home, href: "/dashboard" },
  { label: "Request Help", icon: HelpCircle, href: "/request-help" },
  { label: "AI Assistant", icon: Bot, href: "/ai-assistant" },
  { label: "Live Session", icon: MessageSquare, href: "/live-session" },
  { label: "Community", icon: Users, href: "/community" },
  { label: "Profile", icon: User, href: "/profile" },
  { label: "Analytics", icon: BarChart3, href: "/analytics" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

const quickActions = [
  { label: "Request Help", icon: HelpCircle, href: "/request-help", color: "primary" },
  { label: "Ask AI", icon: Bot, href: "/ai-assistant", color: "accent" },
  { label: "Edit Profile", icon: User, href: "/profile", color: "secondary" },
];

const recentConversations = [
  {
    id: 1,
    title: "React useEffect cleanup",
    preview: "How do I properly clean up subscriptions in useEffect?",
    time: "2 hours ago",
    type: "ai",
  },
  {
    id: 2,
    title: "TypeScript generics help",
    preview: "Understanding conditional types and infer keyword",
    time: "Yesterday",
    type: "mentor",
  },
  {
    id: 3,
    title: "Next.js API routes",
    preview: "Best practices for handling authentication in API routes",
    time: "2 days ago",
    type: "ai",
  },
];

const activeRequests = [
  {
    id: 1,
    title: "GraphQL schema design",
    status: "matching",
    tech: ["GraphQL", "TypeScript"],
  },
];

export default function Dashboard() {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader className="border-b border-border/50">
          <div className="flex items-center gap-2 px-2 py-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-sm">Cosmic Canvas</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={item.href === "/dashboard"}>
                    <NavLink to={item.href} className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="bg-layered-black">
        <div className="relative min-h-screen">
          <FloatingCodeBlocks />
          <Section spacing="lg" className="relative z-10">
            <Container>
              {/* Header with Sidebar Trigger */}
              <div className="flex items-center justify-between mb-8">
                <div className="animate-fade-in">
                  <h1 className="text-3xl font-bold mb-2">
                    Welcome back
                  </h1>
                  <Badge variant="secondary" className="text-sm">
                    Idle
                  </Badge>
                </div>
                <SidebarTrigger className="lg:hidden" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Command Card */}
                <GlassCard variant="rainbow" glow="primary" className="md:col-span-2 lg:col-span-3 p-8 animate-fade-in-up shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[200px] flex flex-col justify-center">
                  <h2 className="text-2xl font-semibold mb-6 text-center">What can I do next?</h2>
                  <div className="flex justify-center gap-6">
                    <NeonButton variant="primary" size="lg" className="flex items-center gap-2 px-8 py-4">
                      <HelpCircle className="w-6 h-6" />
                      Request Help
                    </NeonButton>
                    <NeonButton variant="secondary" size="lg" className="flex items-center gap-2 px-8 py-4">
                      <Bot className="w-6 h-6" />
                      Ask AI
                    </NeonButton>
                  </div>
                </GlassCard>

                {/* Status Card */}
                <GlassCard variant="rainbow" className="p-6 animate-fade-in-up delay-100 shadow-lg">
                  <h3 className="text-lg font-semibold mb-4">Status</h3>
                  <div className="flex items-center justify-center">
                    <Badge variant="secondary" className="text-sm px-4 py-2">
                      Idle
                    </Badge>
                  </div>
                </GlassCard>

                {/* Activity Card */}
                <GlassCard variant="rainbow" className="p-6 animate-fade-in-up delay-200 shadow-lg">
                  <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {recentConversations.slice(0, 3).map((convo) => (
                      <div key={convo.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 hover:glow-accent transition-all cursor-pointer">
                        <div className={`w-2 h-2 rounded-full ${convo.type === 'ai' ? 'bg-accent' : 'bg-primary'}`}></div>
                        <span className="text-sm text-muted-foreground hover:text-foreground transition-colors flex-1">
                          {convo.title}
                        </span>
                        <span className="text-xs text-muted-foreground">{convo.time}</span>
                      </div>
                    ))}
                  </div>
                  <NeonButton variant="ghost" size="sm" className="mt-4">
                    View All
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </NeonButton>
                </GlassCard>

                {/* Progress Card */}
                <GlassCard variant="rainbow" className="p-6 animate-fade-in-up delay-300 shadow-lg">
                  <h3 className="text-lg font-semibold mb-4">Progress</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Flame className="w-4 h-4 text-orange-500" />
                          <span className="text-sm font-medium">Learning Streak</span>
                        </div>
                        <span className="text-sm text-muted-foreground">7 days</span>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-blue-500" />
                          <span className="text-sm font-medium">React & TypeScript</span>
                        </div>
                        <span className="text-sm text-muted-foreground">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </div>
                </GlassCard>
              </div>
            </Container>
          </Section>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
