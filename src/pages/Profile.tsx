import { MainLayout, Container, Section } from "@/components/layout";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientText } from "@/components/ui/gradient-text";
import { NeonButton } from "@/components/ui/neon-button";
import { FloatingCodeBlocks } from "@/components/3d/FloatingCodeBlocks";
import {
  User,
  Mail,
  MapPin,
  Calendar,
  Github,
  Linkedin,
  Globe,
  Star,
  Code2,
  Award,
  TrendingUp,
  Edit,
  FileText,
  MessageSquare,
  Clock,
  CheckCircle,
  Target,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "React", level: 90, color: "neon-cyan" },
  { name: "TypeScript", level: 85, color: "neon-blue" },
  { name: "Node.js", level: 80, color: "neon-purple" },
  { name: "Python", level: 70, color: "neon-pink" },
  { name: "PostgreSQL", level: 75, color: "neon-cyan" },
  { name: "GraphQL", level: 65, color: "neon-blue" },
];

const githubActivity = [
  { day: "Mon", commits: 5 },
  { day: "Tue", commits: 8 },
  { day: "Wed", commits: 3 },
  { day: "Thu", commits: 12 },
  { day: "Fri", commits: 7 },
  { day: "Sat", commits: 2 },
  { day: "Sun", commits: 0 },
];

const aiInsights = [
  {
    title: "Resume Strength",
    value: "React & Frontend",
    description: "Your resume demonstrates extensive experience in React development",
    icon: Code2,
  },
  {
    title: "Career Level",
    value: "Senior Developer",
    description: "Based on your experience, you're positioned for senior roles",
    icon: Award,
  },
  {
    title: "Growth Opportunity",
    value: "System Design",
    description: "Consider adding more system design experience to advance your career",
    icon: TrendingUp,
  },
];
const isMentor = false;

const sessionHistory = [
  {
    id: 1,
    title: "React Performance Optimization",
    mentor: "Sarah K.",
    date: "Jan 6, 2025",
    rating: 5,
    duration: "45 min",
  },
  {
    id: 2,
    title: "TypeScript Advanced Types",
    mentor: "Marcus J.",
    date: "Jan 4, 2025",
    rating: 5,
    duration: "30 min",
  },
  {
    id: 3,
    title: "GraphQL Schema Design",
    mentor: "Alex W.",
    date: "Jan 2, 2025",
    rating: 4,
    duration: "60 min",
  },
];

export default function Profile() {
  return (
    <MainLayout>
      <Section spacing="lg">
        <FloatingCodeBlocks />
        <Container>
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Profile Info */}
            <div className="space-y-6">
              {/* Profile Card */}
              <GlassCard className="text-center animate-fade-in">
                <div className="relative inline-block mb-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center mx-auto">
                    <span className="text-3xl font-bold text-primary-foreground">JD</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-background" />
                </div>
                <h1 className="text-xl font-bold mb-1">John Developer</h1>
                <p className="text-muted-foreground mb-4">Full-Stack Developer</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skills.slice(0, 4).map((skill) => (
                    <span key={skill.name} className="px-3 py-1 text-xs bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full border border-primary/20">
                      {skill.name}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    San Francisco
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Joined Dec 2024
                  </span>
                </div>

                <div className="flex justify-center gap-3 mb-6">
                  <a href="#" className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                    <Globe className="w-5 h-5" />
                  </a>
                </div>

                <NeonButton variant="outline" className="w-full">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </NeonButton>
              </GlassCard>

              {/* Stats */}
              <GlassCard className="animate-fade-in-up delay-100">
                <h3 className="font-semibold mb-4">{isMentor ? 'Mentoring Impact' : 'Your Progress'}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {!isMentor ? (
                    <>
                      <div className="text-center p-3 rounded-lg bg-muted/30">
                        <div className="text-2xl font-bold text-gradient-primary">23</div>
                        <div className="text-xs text-muted-foreground">Sessions</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-muted/30">
                        <div className="text-2xl font-bold text-gradient-accent">4.9</div>
                        <div className="text-xs text-muted-foreground">Avg Rating</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-muted/30">
                        <div className="text-2xl font-bold text-gradient-primary">156</div>
                        <div className="text-xs text-muted-foreground">AI Chats</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-muted/30">
                        <div className="text-2xl font-bold text-gradient-accent">42h</div>
                        <div className="text-xs text-muted-foreground">Saved</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-center p-3 rounded-lg bg-muted/30">
                        <div className="text-2xl font-bold text-gradient-primary">45</div>
                        <div className="text-xs text-muted-foreground">Sessions Mentored</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-muted/30">
                        <div className="text-2xl font-bold text-gradient-accent">4.8</div>
                        <div className="text-xs text-muted-foreground">Avg Rating</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-muted/30">
                        <div className="text-2xl font-bold text-gradient-primary">23</div>
                        <div className="text-xs text-muted-foreground">Active Mentees</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-muted/30">
                        <div className="text-2xl font-bold text-gradient-accent">120h</div>
                        <div className="text-xs text-muted-foreground">Mentoring Time</div>
                      </div>
                    </>
                  )}
                </div>
              </GlassCard>

              {/* Resume */}
              <GlassCard className="animate-fade-in-up delay-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Resume</h3>
                  <NeonButton variant="ghost" size="sm">
                    <FileText className="w-4 h-4 mr-1" />
                    Upload
                  </NeonButton>
                </div>
                <div className="p-4 rounded-lg border-2 border-dashed border-border text-center">
                  <FileText className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Upload your resume for AI-powered career insights
                  </p>
                </div>
              </GlassCard>
            </div>

            {/* Center Column - Skills & Activity */}
            <div className="space-y-6">
              {/* Skills */}
              <GlassCard className="animate-fade-in-up delay-100">
                <h3 className="font-semibold mb-4">Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all duration-500",
                            skill.color === "neon-cyan" && "bg-gradient-to-r from-neon-cyan to-neon-blue",
                            skill.color === "neon-blue" && "bg-gradient-to-r from-neon-blue to-neon-purple",
                            skill.color === "neon-purple" && "bg-gradient-to-r from-neon-purple to-neon-pink",
                            skill.color === "neon-pink" && "bg-gradient-to-r from-neon-pink to-neon-cyan"
                          )}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* GitHub Activity */}
              <GlassCard className="animate-fade-in-up delay-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">GitHub Activity</h3>
                  <span className="text-sm text-muted-foreground">This week</span>
                </div>
                <div className="flex items-end justify-between gap-2 h-24">
                  {githubActivity.map((day) => (
                    <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                      <div
                        className="w-full rounded-t bg-gradient-primary transition-all"
                        style={{ height: `${(day.commits / 12) * 80}px` }}
                      />
                      <span className="text-xs text-muted-foreground">{day.day}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center text-sm text-muted-foreground">
                  <span className="text-foreground font-semibold">37</span> commits this week
                </div>
              </GlassCard>

              {/* AI Insights */}
              <GlassCard glow="accent" className="animate-fade-in-up delay-300">
                <h3 className="font-semibold mb-4">
                  <GradientText variant="accent">Resume AI Insights</GradientText>
                </h3>
                <div className="space-y-4">
                  {aiInsights.map((insight) => {
                    const Icon = insight.icon;
                    return (
                      <div key={insight.title} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{insight.title}</p>
                          <p className="font-medium">{insight.value}</p>
                          <p className="text-xs text-muted-foreground">{insight.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </GlassCard>
              {/* Career Growth */}
              <GlassCard className="animate-fade-in-up delay-400">
                <h3 className="font-semibold mb-4">
                  <GradientText variant="primary">Career Growth</GradientText>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Next Milestone</p>
                      <p className="text-sm text-muted-foreground">Senior Developer in 6 months</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium">Skill Focus</p>
                      <p className="text-sm text-muted-foreground">System Design & Leadership</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Right Column - Session History */}
            <div className="space-y-6">
              {!isMentor ? (
                <GlassCard className="animate-fade-in-up delay-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Session History</h3>
                    <NeonButton variant="ghost" size="sm">View All</NeonButton>
                  </div>
                  <div className="space-y-4">
                    {sessionHistory.map((session) => (
                      <div
                        key={session.id}
                        className="p-4 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium">{session.title}</h4>
                          <div className="flex items-center gap-1 text-yellow-500">
                            <Star className="w-3 h-3 fill-current" />
                            <span className="text-xs">{session.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {session.mentor}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {session.duration}
                          </span>
                          <span>{session.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              ) : (
                <GlassCard className="animate-fade-in-up delay-200">
                  <h3 className="font-semibold mb-4">Availability</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Available for mentoring</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Next available: Tomorrow, 2 PM
                    </div>
                    <NeonButton variant="outline" size="sm">Update Availability</NeonButton>
                  </div>
                </GlassCard>
              )}

              {/* Ratings Received */}
              <GlassCard className="animate-fade-in-up delay-300">
                <h3 className="font-semibold mb-4">{isMentor ? 'Mentee Feedback' : 'Mentor Feedback'}</h3>
                <div className="space-y-4">
                  {!isMentor ? (
                    <>
                      <div className="p-4 rounded-lg bg-muted/30 border-l-2 border-primary">
                        <p className="text-sm italic mb-2">
                          "Great questions, very prepared for the session. Quick learner!"
                        </p>
                        <p className="text-xs text-muted-foreground">— Sarah K., Jan 6</p>
                      </div>
                      <div className="p-4 rounded-lg bg-muted/30 border-l-2 border-accent">
                        <p className="text-sm italic mb-2">
                          "Excellent understanding of fundamentals. Ready for advanced topics."
                        </p>
                        <p className="text-xs text-muted-foreground">— Marcus J., Jan 4</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="p-4 rounded-lg bg-muted/30 border-l-2 border-primary">
                        <p className="text-sm italic mb-2">
                          "Incredibly helpful, explained complex concepts clearly. Highly recommend!"
                        </p>
                        <p className="text-xs text-muted-foreground">— Alex M., Jan 5</p>
                      </div>
                      <div className="p-4 rounded-lg bg-muted/30 border-l-2 border-accent">
                        <p className="text-sm italic mb-2">
                          "Patient and knowledgeable. Helped me land my first dev job."
                        </p>
                        <p className="text-xs text-muted-foreground">— Jamie L., Jan 3</p>
                      </div>
                    </>
                  )}
                </div>
              </GlassCard>
            </div>
          </div>
        </Container>
      </Section>
    </MainLayout>
  );
}
