import React from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { GlassCard } from '../components/ui/glass-card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { CheckCircle, MessageSquare, FileText, Play, Users, Building, Target } from 'lucide-react';

const HowFreelancingWorks: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: 'Post Your Requirements',
      description: 'Create a detailed project brief including your goals, timeline, budget, and technical requirements.',
      icon: FileText,
      details: [
        'Define project scope and deliverables',
        'Set your budget and timeline',
        'Specify required technologies and skills',
        'Include any existing code or documentation'
      ]
    },
    {
      step: 2,
      title: 'Chat with Developers',
      description: 'Review proposals from qualified developers and discuss your project in detail.',
      icon: MessageSquare,
      details: [
        'Browse developer profiles and portfolios',
        'Review past projects and client feedback',
        'Discuss technical approach and timeline',
        'Ask questions about their experience'
      ]
    },
    {
      step: 3,
      title: 'Agree on Scope',
      description: 'Work together to define milestones, deliverables, and payment terms.',
      icon: CheckCircle,
      details: [
        'Break project into manageable milestones',
        'Set clear deliverables for each phase',
        'Agree on payment schedule and terms',
        'Establish communication and reporting cadence'
      ]
    },
    {
      step: 4,
      title: 'Start Development',
      description: 'Begin working together with regular updates and milestone-based payments.',
      icon: Play,
      details: [
        'Receive regular progress updates',
        'Review work at each milestone',
        'Make payments upon milestone completion',
        'Provide feedback and request changes'
      ]
    }
  ];

  const targetUsers = [
    {
      icon: Building,
      title: 'Startups',
      description: 'Build MVPs, add features, or scale your technical team without full-time hires.'
    },
    {
      icon: Users,
      title: 'Founders',
      description: 'Turn your ideas into reality with experienced developers who understand startup needs.'
    },
    {
      icon: Target,
      title: 'Teams',
      description: 'Supplement your existing team for specific projects or peak periods.'
    }
  ];

  const benefits = [
    'Project-based pricing instead of hourly rates',
    'Milestone-based payments for better cash flow',
    'Access to specialized skills on-demand',
    'Flexible engagement terms',
    'Quality work with clear deliverables',
    'Direct communication with developers'
  ];

  return (
    <Container>
      <Section className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            How Freelancing Works
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with experienced developers for your projects. From MVP development to feature implementation, find the right talent for your needs.
          </p>
        </div>

        {/* Steps */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <GlassCard key={index} className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-600/20 rounded-full p-3 flex-shrink-0">
                    <step.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded">
                        Step {step.step}
                      </span>
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
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

        {/* Target Users */}
        <GlassCard className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Who Uses Freelancing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {targetUsers.map((user, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <user.icon className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{user.title}</h3>
                <p className="text-gray-300">{user.description}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Benefits */}
        <GlassCard className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Benefits of Freelancing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Difference from Expert Help */}
        <GlassCard className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Freelancing vs Expert Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="bg-red-600 text-white text-sm px-2 py-1 rounded">Expert Help</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-300">Minute-based billing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-300">Live help and debugging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-300">Immediate assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-300">Quick problem solving</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="bg-green-600 text-white text-sm px-2 py-1 rounded">Freelancing</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-300">Project-based pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-300">Async development + milestones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-300">Longer-term projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-300">Complete feature development</span>
                </li>
              </ul>
            </div>
          </div>
        </GlassCard>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Post your project requirements and connect with experienced developers who can bring your ideas to life.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            Post a Project
          </Button>
        </div>
      </Section>
    </Container>
  );
};

export default HowFreelancingWorks;