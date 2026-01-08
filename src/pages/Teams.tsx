import React from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { GlassCard } from '../components/ui/glass-card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Users, Shield, BarChart3, MessageSquare, Clock, Target, CheckCircle, Building, TrendingUp } from 'lucide-react';

const Teams: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Team Mentorship',
      description: 'Dedicated mentorship programs tailored for engineering teams and managers.',
      details: ['Group sessions', 'Team skill assessments', 'Leadership development', 'Knowledge sharing']
    },
    {
      icon: MessageSquare,
      title: 'Pair Programming',
      description: 'Collaborative coding sessions with expert developers to solve complex problems.',
      details: ['Real-time collaboration', 'Code review sessions', 'Architecture guidance', 'Best practices training']
    },
    {
      icon: BarChart3,
      title: 'Spending Control',
      description: 'Comprehensive dashboard to monitor and control team development spending.',
      details: ['Budget tracking', 'Usage analytics', 'Cost optimization', 'Financial reporting']
    },
    {
      icon: Shield,
      title: 'NDA Support',
      description: 'Secure collaboration with full NDA protection for sensitive projects.',
      details: ['Legal compliance', 'Data protection', 'Confidential sessions', 'Secure communication']
    },
    {
      icon: Target,
      title: 'Custom Reporting',
      description: 'Detailed reports on team progress, skill development, and project outcomes.',
      details: ['Progress tracking', 'Skill gap analysis', 'Performance metrics', 'ROI measurement']
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Schedule sessions that fit your team\'s availability and timezone.',
      details: ['24/7 availability', 'Flexible booking', 'Group sessions', 'On-demand support']
    }
  ];

  const benefits = [
    'Accelerate team skill development',
    'Reduce time-to-market for projects',
    'Improve code quality and standards',
    'Enhance team collaboration',
    'Access to industry experts',
    'Cost-effective training solutions',
    'Scalable development support',
    'Knowledge transfer and retention'
  ];

  const useCases = [
    {
      title: 'New Team Onboarding',
      description: 'Quickly bring new developers up to speed with your codebase and processes.',
      icon: Users
    },
    {
      title: 'Technology Migration',
      description: 'Expert guidance for migrating to new frameworks or architectures.',
      icon: TrendingUp
    },
    {
      title: 'Code Review & Quality',
      description: 'Professional code reviews to maintain high standards across your team.',
      icon: CheckCircle
    },
    {
      title: 'Leadership Development',
      description: 'Mentorship programs for engineering managers and team leads.',
      icon: Building
    }
  ];

  return (
    <Container>
      <Section className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Teams
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empower your engineering team with expert mentorship, pair programming, and development support. Scale your team's skills and accelerate project delivery.
          </p>
        </div>

        {/* Hero CTA */}
        <GlassCard className="p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Level Up Your Team?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get started with a free consultation to understand how our team solutions can benefit your organization.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            Schedule Free Consultation
          </Button>
        </GlassCard>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Team Solutions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <GlassCard key={index} className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-600/20 rounded-full p-3 flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-1">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <GlassCard className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Common Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-green-600/20 rounded-full p-3 flex-shrink-0">
                  <useCase.icon className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Benefits */}
        <GlassCard className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Benefits for Your Organization</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Target Audience */}
        <GlassCard className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Who It's For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Building className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Engineering Managers</h3>
              <p className="text-gray-300 text-sm">Lead your team with confidence using expert guidance and best practices.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Development Teams</h3>
              <p className="text-gray-300 text-sm">Accelerate learning and improve collaboration across your entire team.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Growing Companies</h3>
              <p className="text-gray-300 text-sm">Scale your engineering capabilities without hiring full-time staff.</p>
            </div>
          </div>
        </GlassCard>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Transform Your Team Today</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading companies that trust our platform for their team development needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 px-8 py-3">
              View Pricing
            </Button>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default Teams;