
import { MainLayout, Container, Section } from "@/components/layout";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientText } from "@/components/ui/gradient-text";
import { NeonButton } from "@/components/ui/neon-button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Code2,
  Briefcase,
  MoreHorizontal,
  Calendar,
  DollarSign,
  Target,
  BookOpen,
  Building,
  FileText,
  Info,
  Phone
} from "lucide-react";

const Index = () => {
  return (
    <MainLayout>
      <div className="relative z-10">
        {/* Hero Section */}
        <Section spacing="xl" className="min-h-[80vh] flex items-center">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                  Get <GradientText>Expert Help</GradientText> from Top Developers
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up delay-200 max-w-3xl mx-auto">
                  Connect with experienced developers for instant help, mentorship, and project work.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
                  <Link to="/find-experts">
                    <NeonButton variant="primary" size="lg" className="px-8 py-4 text-lg">
                      <Users className="w-5 h-5 mr-2" />
                      Find an Expert
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </NeonButton>
                  </Link>
                  <Link to="/become-freelancer">
                    <NeonButton variant="secondary" size="lg" className="px-8 py-4 text-lg">
                      <Briefcase className="w-5 h-5 mr-2" />
                      Become an Expert
                    </NeonButton>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Main Services - Four Column Layout */}
        <Section spacing="lg" className="bg-muted/5">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
              {/* Mentorship */}
              <div className="text-center">
                <GlassCard className="p-6 md:p-8 h-full">
                  <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Mentorship</h2>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Get long-term guidance from experienced developers. Monthly subscriptions for career advice, code reviews, and personalized learning plans.
                  </p>
                  <div className="space-y-3">
                    <Link to="/find-mentor">
                      <NeonButton variant="primary" size="md" className="w-full">
                        Find a Mentor
                      </NeonButton>
                    </Link>
                    <Link to="/how-mentorship-works">
                      <NeonButton variant="outline" size="sm" className="w-full">
                        How It Works
                      </NeonButton>
                    </Link>
                  </div>
                </GlassCard>
              </div>

              {/* Expert Help */}
              <div className="text-center">
                <GlassCard className="p-6 md:p-8 h-full">
                  <div className="w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center mx-auto mb-6">
                    <Code2 className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Expert Help</h2>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Get instant help from our expert directory. Filter by tech stack, start sessions instantly or schedule for later. Pay per 15-minute increment.
                  </p>
                  <div className="space-y-3">
                    <Link to="/find-experts">
                      <NeonButton variant="primary" size="md" className="w-full">
                        Find Experts
                      </NeonButton>
                    </Link>
                    <Link to="/how-expert-help-works">
                      <NeonButton variant="outline" size="sm" className="w-full">
                        How It Works
                      </NeonButton>
                    </Link>
                  </div>
                </GlassCard>
              </div>

              {/* Freelancing */}
              <div className="text-center">
                <GlassCard className="p-6 md:p-8 h-full">
                  <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                    <Briefcase className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Freelancing</h2>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Hire developers for longer-term projects. Post requirements, chat with freelancers, agree on scope, and manage projects with milestones.
                  </p>
                  <div className="space-y-3">
                    <Link to="/find-freelancers">
                      <NeonButton variant="primary" size="md" className="w-full">
                        Find Freelancers
                      </NeonButton>
                    </Link>
                    <Link to="/how-freelancing-works">
                      <NeonButton variant="outline" size="sm" className="w-full">
                        How It Works
                      </NeonButton>
                    </Link>
                  </div>
                </GlassCard>
              </div>

              {/* More */}
              <div className="text-center">
                <GlassCard className="p-6 md:p-8 h-full">
                  <div className="w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center mx-auto mb-6">
                    <MoreHorizontal className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">More</h2>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Teams, DevProjects, Blog, Resources, and company information to support your development journey.
                  </p>
                  <div className="space-y-3">
                    <Link to="/teams">
                      <NeonButton variant="primary" size="md" className="w-full">
                        Teams
                      </NeonButton>
                    </Link>
                    <Link to="/devprojects">
                      <NeonButton variant="outline" size="sm" className="w-full">
                        DevProjects
                      </NeonButton>
                    </Link>
                  </div>
                </GlassCard>
              </div>
            </div>
          </Container>
        </Section>

        {/* How It Works */}
        <Section spacing="lg">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">Simple steps to get the help you need</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <GlassCard className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary-foreground">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Choose Your Service</h3>
                  <p className="text-muted-foreground">
                    Select mentorship for long-term guidance, expert help for instant assistance, or freelancing for project work.
                  </p>
                </GlassCard>
              </div>

              <div className="text-center">
                <GlassCard className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Connect with Experts</h3>
                  <p className="text-muted-foreground">
                    Browse profiles, check reviews, and connect with developers who match your needs and budget.
                  </p>
                </GlassCard>
              </div>

              <div className="text-center">
                <GlassCard className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Get Help & Grow</h3>
                  <p className="text-muted-foreground">
                    Start your sessions, work on projects, and accelerate your development career with expert guidance.
                  </p>
                </GlassCard>
              </div>
            </div>
          </Container>
        </Section>

        {/* Social Proof */}
        <Section spacing="lg" className="bg-muted/10">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Developers Worldwide</h2>
              <p className="text-lg text-muted-foreground">Join thousands of satisfied developers</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <GlassCard className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold mr-4">
                    SJ
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Frontend Developer</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Codementor helped me level up my React skills in just a few sessions. The experts are incredibly knowledgeable and patient."
                </p>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center text-primary-foreground font-bold mr-4">
                    MK
                  </div>
                  <div>
                    <h4 className="font-semibold">Mike Chen</h4>
                    <p className="text-sm text-muted-foreground">Startup Founder</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Found an amazing developer for our MVP. The process was smooth and the quality of work exceeded our expectations."
                </p>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold mr-4">
                    AR
                  </div>
                  <div>
                    <h4 className="font-semibold">Anna Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Career Switcher</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "My mentor helped me transition from marketing to tech. The personalized guidance made all the difference."
                </p>
              </GlassCard>
            </div>
          </Container>
        </Section>

        {/* Stats */}
        <Section spacing="lg">
          <Container>
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500K+</div>
                <p className="text-muted-foreground">Developers Helped</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">50K+</div>
                <p className="text-muted-foreground">Active Experts</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                <p className="text-muted-foreground">Sessions Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">150+</div>
                <p className="text-muted-foreground">Countries Served</p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Final CTA */}
        <Section spacing="xl" className="bg-muted/10">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <GradientText>Accelerate</GradientText> Your Development Career?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join the Codementor community and get the expert help you need to succeed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/find-experts">
                  <NeonButton variant="primary" size="lg" className="px-8 py-4 text-lg">
                    <Users className="w-5 h-5 mr-2" />
                    Get Expert Help
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </NeonButton>
                </Link>
                <Link to="/find-mentor">
                  <NeonButton variant="secondary" size="lg" className="px-8 py-4 text-lg">
                    <Calendar className="w-5 h-5 mr-2" />
                    Find a Mentor
                  </NeonButton>
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </div>
    </MainLayout>
  );
};

export default Index;
