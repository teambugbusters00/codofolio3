import { useState } from "react";
import { MainLayout, Container, Section } from "@/components/layout";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientText } from "@/components/ui/gradient-text";
import { NeonButton } from "@/components/ui/neon-button";
import { Input } from "@/components/ui/input";
import {
  Users,
  Folder,
  Trophy,
  Search,
  Filter,
  Star,
  MapPin,
  Clock,
  ArrowRight,
  Plus,
  Code2,
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FloatingCodeBlocks } from "@/components/3d/FloatingCodeBlocks";

const teams = [
  {
    id: 1,
    name: "AI Startup Builders",
    description: "Building the next generation of AI-powered developer tools",
    members: 4,
    maxMembers: 6,
    skills: ["Python", "LLM", "React"],
    looking: ["Frontend Dev", "DevOps"],
    type: "Startup",
  },
  {
    id: 2,
    name: "Open Source Contributors",
    description: "Contributing to major open source projects together",
    members: 8,
    maxMembers: 12,
    skills: ["TypeScript", "Rust", "Go"],
    looking: ["Any skill level"],
    type: "Open Source",
  },
  {
    id: 3,
    name: "Hackathon Squad",
    description: "Preparing for upcoming hackathons and building MVPs",
    members: 3,
    maxMembers: 5,
    skills: ["React", "Node.js", "AWS"],
    looking: ["Backend Dev", "Designer"],
    type: "Hackathon",
  },
];

const projects = [
  {
    id: 1,
    title: "Developer Portfolio Generator",
    description: "AI-powered tool to generate beautiful portfolios from GitHub",
    author: "Sarah K.",
    stars: 128,
    tech: ["Next.js", "OpenAI", "Tailwind"],
    lookingFor: "Contributors welcome",
  },
  {
    id: 2,
    title: "Code Review Bot",
    description: "Automated PR reviews with AI-powered suggestions",
    author: "Marcus J.",
    stars: 89,
    tech: ["Python", "GitHub API", "GPT-4"],
    lookingFor: "Looking for maintainers",
  },
  {
    id: 3,
    title: "Learning Path Tracker",
    description: "Track and visualize your coding learning journey",
    author: "Alex W.",
    stars: 56,
    tech: ["React", "D3.js", "Supabase"],
    lookingFor: "Open to collaboration",
  },
];

const leaderboard = [
  { rank: 1, name: "Sarah K.", points: 2850, avatar: "SK", badge: "🏆" },
  { rank: 2, name: "Marcus J.", points: 2720, avatar: "MJ", badge: "🥈" },
  { rank: 3, name: "Alex W.", points: 2580, avatar: "AW", badge: "🥉" },
  { rank: 4, name: "Priya P.", points: 2340, avatar: "PP", badge: "" },
  { rank: 5, name: "John D.", points: 2210, avatar: "JD", badge: "" },
  { rank: 6, name: "Emma S.", points: 2050, avatar: "ES", badge: "" },
  { rank: 7, name: "Mike R.", points: 1920, avatar: "MR", badge: "" },
  { rank: 8, name: "Lisa T.", points: 1850, avatar: "LT", badge: "" },
];

const filters = ["All", "Startup", "Open Source", "Hackathon", "Learning"];

export default function Community() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <MainLayout>
      <Section spacing="lg" className="relative">
        <FloatingCodeBlocks />
        <Container>
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl font-bold mb-3">
              <GradientText>Community</GradientText> Hub
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Find teams, discover projects, and connect with developers worldwide.
            </p>
          </div>

          <Tabs defaultValue="teams" className="space-y-6">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 glass">
              <TabsTrigger value="teams" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Find Team
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center gap-2">
                <Folder className="w-4 h-4" />
                Projects
              </TabsTrigger>
              <TabsTrigger value="leaderboard" className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Leaderboard
              </TabsTrigger>
            </TabsList>

            {/* Find Team Tab */}
            <TabsContent value="teams" className="space-y-6 animate-fade-in">
              {/* Search & Filter */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search teams..." 
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all",
                        activeFilter === filter
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      )}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Teams Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teams.map((team, index) => (
                  <GlassCard 
                    key={team.id} 
                    hover 
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                          {team.type}
                        </span>
                        <h3 className="text-lg font-semibold mt-2">{team.name}</h3>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-muted-foreground">
                          {team.members}/{team.maxMembers}
                        </span>
                        <Users className="w-4 h-4 text-muted-foreground inline ml-1" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{team.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {team.skills.map((skill) => (
                        <span key={skill} className="text-xs px-2 py-1 rounded bg-muted">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-xs text-muted-foreground mb-2">Looking for:</p>
                      <p className="text-sm">{team.looking.join(", ")}</p>
                    </div>
                    <NeonButton variant="outline" size="sm" className="w-full mt-4">
                      Request to Join
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </NeonButton>
                  </GlassCard>
                ))}

                {/* Create Team Card */}
                <GlassCard className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-border hover:border-primary/50 transition-colors cursor-pointer animate-fade-in-up delay-300">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Plus className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">Create a Team</h3>
                  <p className="text-sm text-muted-foreground">
                    Start your own project or hackathon team
                  </p>
                </GlassCard>
              </div>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects" className="space-y-6 animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <GlassCard 
                    key={project.id} 
                    hover 
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <Code2 className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        {project.stars}
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 rounded bg-accent/20 text-accent">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">by {project.author}</span>
                      <span className="text-xs text-primary">{project.lookingFor}</span>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </TabsContent>

            {/* Leaderboard Tab */}
            <TabsContent value="leaderboard" className="animate-fade-in">
              <div className="max-w-2xl mx-auto">
                <GlassCard>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Top Contributors</h3>
                    <span className="text-sm text-muted-foreground">This month</span>
                  </div>
                  <div className="space-y-3">
                    {leaderboard.map((user, index) => (
                      <div
                        key={user.rank}
                        className={cn(
                          "flex items-center gap-4 p-4 rounded-lg transition-colors",
                          index < 3 ? "bg-gradient-to-r from-primary/10 to-transparent" : "hover:bg-muted/50"
                        )}
                      >
                        <span className={cn(
                          "w-8 text-center font-bold",
                          index === 0 && "text-yellow-500",
                          index === 1 && "text-gray-400",
                          index === 2 && "text-amber-600"
                        )}>
                          {user.badge || `#${user.rank}`}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                          <span className="text-sm font-semibold text-primary-foreground">
                            {user.avatar}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{user.name}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gradient-primary">{user.points.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">points</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-border/50 text-center">
                    <p className="text-sm text-muted-foreground">
                      Your rank: <span className="font-semibold text-foreground">#5</span> with{" "}
                      <span className="font-semibold text-gradient-primary">2,210 points</span>
                    </p>
                  </div>
                </GlassCard>
              </div>
            </TabsContent>
          </Tabs>
        </Container>
      </Section>
    </MainLayout>
  );
}
