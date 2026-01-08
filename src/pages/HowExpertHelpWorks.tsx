import React from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { GlassCard } from '../components/ui/glass-card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ArrowRight, Search, UserCheck, Play, CreditCard } from 'lucide-react';

const HowExpertHelpWorks: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Describe Your Problem',
      description: 'Tell us what you need help with. Whether it\'s debugging, learning a new concept, or getting code review.',
      details: [
        'Be specific about your tech stack',
        'Include error messages or code snippets',
        'Mention your experience level',
        'Describe what you\'ve already tried'
      ]
    },
    {
      icon: UserCheck,
      title: 'Pick Your Expert',
      description: 'Browse our directory of verified experts. Filter by skills, rating, and availability.',
      details: [
        'See expert profiles and portfolios',
        'Check reviews and ratings',
        'Compare prices per 15 minutes',
        'Choose instant or scheduled sessions'
      ]
    },
    {
      icon: Play,
      title: 'Start Your Session',
      description: 'Connect instantly via video call or screen sharing. Get help in real-time.',
      details: [
        'Use our built-in code editor',
        'Share your screen for pair programming',
        'Record sessions for later reference',
        'Communicate via chat and voice'
      ]
    },
    {
      icon: CreditCard,
      title: 'Pay by Time',
      description: 'You only pay for the time you use. Sessions are billed in 15-minute increments.',
      details: [
        'Transparent pricing',
        'No hidden fees',
        'Pay only for actual help time',
        'Flexible session lengths'
      ]
    }
  ];

  const sessionTypes = [
    {
      title: 'Debugging',
      description: 'Fix bugs and errors in your code',
      icon: '🐛',
      examples: ['Runtime errors', 'Logic issues', 'Performance problems']
    },
    {
      title: 'Pair Programming',
      description: 'Code together in real-time',
      icon: '👥',
      examples: ['Build features', 'Refactor code', 'Learn best practices']
    },
    {
      title: 'Concept Explanation',
      description: 'Understand complex programming concepts',
      icon: '💡',
      examples: ['Algorithms', 'Design patterns', 'Framework internals']
    },
    {
      title: 'Code Review',
      description: 'Get feedback on your code quality',
      icon: '🔍',
      examples: ['Code structure', 'Best practices', 'Security issues']
    }
  ];

  return (
    <Container>
      <Section className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            How Expert Help Works
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get instant, personalized help from experienced developers. Our expert network is here to solve your coding challenges.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">The Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <GlassCard key={index} className="p-6 text-center relative">
                {index < steps.length - 1 && (
                  <ArrowRight className="absolute top-1/2 -right-3 transform -translate-y-1/2 text-gray-600 h-6 w-6 hidden lg:block" />
                )}
                <div className="bg-blue-600/20 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 mb-4">{step.description}</p>
                <ul className="text-left text-sm text-gray-400 space-y-1">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Session Types */}
        <GlassCard className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">What Can Experts Help You With?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sessionTypes.map((type, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-lg bg-gray-800/30">
                <div className="text-4xl">{type.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">{type.title}</h3>
                  <p className="text-gray-300 mb-3">{type.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example, exampleIndex) => (
                      <Badge key={exampleIndex} variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Pricing Info */}
        <GlassCard className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Transparent Pricing</h2>
          <div className="text-center mb-6">
            <p className="text-gray-300 text-lg">
              Experts set their own rates, typically ranging from $20-$50 per 15 minutes.
            </p>
            <p className="text-gray-400 mt-2">
              You only pay for the time you actually use. No subscriptions, no minimums.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-lg bg-gray-800/30">
              <div className="text-2xl font-bold text-blue-400 mb-2">$20-35</div>
              <div className="text-gray-300">Junior to Mid-level</div>
              <div className="text-sm text-gray-400 mt-1">Great for learning basics</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-800/30">
              <div className="text-2xl font-bold text-blue-400 mb-2">$35-50</div>
              <div className="text-gray-300">Senior Developers</div>
              <div className="text-sm text-gray-400 mt-1">Complex problems & architecture</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-800/30">
              <div className="text-2xl font-bold text-blue-400 mb-2">$50+</div>
              <div className="text-gray-300">Experts & Specialists</div>
              <div className="text-sm text-gray-400 mt-1">Niche technologies & consulting</div>
            </div>
          </div>
        </GlassCard>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Help?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Browse our expert directory and find the perfect developer to help you solve your coding challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
              Find Experts Now
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 px-8 py-3">
              View Topic-Specific Experts
            </Button>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default HowExpertHelpWorks;