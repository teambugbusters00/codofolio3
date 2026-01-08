import React from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { GlassCard } from '../components/ui/glass-card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Users, Target, Award, Globe, Heart, Code, Zap, TrendingUp, Star, CheckCircle, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '500K+', label: 'Developers Helped', icon: <Users className="h-6 w-6 text-blue-400" /> },
    { number: '50K+', label: 'Mentors & Experts', icon: <Award className="h-6 w-6 text-green-400" /> },
    { number: '190+', label: 'Countries Served', icon: <Globe className="h-6 w-6 text-purple-400" /> },
    { number: '4.9/5', label: 'Average Rating', icon: <Star className="h-6 w-6 text-yellow-400" /> }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-400" />,
      title: 'Community First',
      description: 'We believe in the power of developer communities to drive innovation and growth.'
    },
    {
      icon: <Code className="h-8 w-8 text-blue-400" />,
      title: 'Quality Code',
      description: 'We maintain the highest standards for code quality and technical excellence.'
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: 'Fast Learning',
      description: 'Accelerate your learning journey with personalized guidance and expert help.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-400" />,
      title: 'Career Growth',
      description: 'Build successful careers in tech with our comprehensive learning resources.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former Google engineer with 10+ years in tech leadership.',
      image: '/placeholder.svg'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Full-stack developer and open-source contributor.',
      image: '/placeholder.svg'
    },
    {
      name: 'Emily Watson',
      role: 'Head of Community',
      bio: 'Passionate about creating inclusive developer communities.',
      image: '/placeholder.svg'
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      bio: 'Expert in scalable systems and team leadership.',
      image: '/placeholder.svg'
    }
  ];

  const milestones = [
    { year: '2015', event: 'Codementor founded with focus on mentorship' },
    { year: '2017', event: 'Launched Expert Help platform' },
    { year: '2019', event: 'Expanded to 100+ countries' },
    { year: '2021', event: 'Introduced Teams and DevProjects' },
    { year: '2023', event: 'Reached 500K+ developers helped' },
    { year: '2024', event: 'Launched AI-powered learning tools' }
  ];

  return (
    <Container>
      <Section className="py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Empowering Developers Worldwide
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're on a mission to democratize access to high-quality programming education and mentorship,
            helping developers of all levels build successful careers in tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Join Our Community
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
              Learn More
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <GlassCard key={index} className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-700/50 rounded-lg p-3">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </GlassCard>
          ))}
        </div>

        {/* Our Story */}
        <GlassCard className="p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 text-lg mb-6">
              Founded in 2015, Codementor began as a simple idea: connecting developers who need help with
              experienced mentors who want to give back to the community. What started as a mentorship platform
              has evolved into a comprehensive ecosystem for developer growth.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              Today, we serve developers in over 190 countries, offering mentorship, expert help, freelancing
              opportunities, and comprehensive learning resources. Our platform has helped over 500,000 developers
              advance their careers and build amazing products.
            </p>
            <p className="text-gray-300 text-lg">
              We're committed to maintaining the highest standards of quality while making expert help accessible
              to developers at every stage of their journey.
            </p>
          </div>
        </GlassCard>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <GlassCard key={index} className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                </div>
                <p className="text-gray-300">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold min-w-[80px] text-center">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <p className="text-gray-300">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                  <CardTitle className="text-white">{member.name}</CardTitle>
                  <CardDescription className="text-blue-400">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm text-center">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <GlassCard className="p-8 text-center">
          <Target className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
            To create the world's most trusted platform for developer growth, where anyone can connect with
            expert mentors, get instant help from specialists, and access the resources they need to build
            successful careers in technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </GlassCard>
      </Section>
    </Container>
  );
};

export default About;