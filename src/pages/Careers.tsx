import React from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { GlassCard } from '../components/ui/glass-card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { MapPin, Clock, DollarSign, Users, Target, Heart, Code, Zap, TrendingUp, Star, CheckCircle, ArrowRight, Briefcase, Coffee, Globe, Award } from 'lucide-react';

const Careers: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$120K - $160K',
      description: 'Build amazing user experiences with React, TypeScript, and modern web technologies.',
      requirements: ['5+ years React experience', 'TypeScript expertise', 'UI/UX knowledge']
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$130K - $170K',
      description: 'Scale our infrastructure and ensure reliable deployments across global systems.',
      requirements: ['AWS/Azure experience', 'Kubernetes', 'CI/CD pipelines']
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      salary: '$110K - $140K',
      description: 'Drive product strategy and work closely with engineering to deliver value.',
      requirements: ['3+ years PM experience', 'Technical background', 'Data-driven']
    },
    {
      title: 'Community Manager',
      department: 'Community',
      location: 'Remote',
      type: 'Full-time',
      salary: '$70K - $90K',
      description: 'Build and nurture our developer community across platforms.',
      requirements: ['Community management', 'Social media', 'Developer relations']
    },
    {
      title: 'Data Analyst',
      department: 'Analytics',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80K - $110K',
      description: 'Analyze user behavior and provide insights to drive product decisions.',
      requirements: ['SQL expertise', 'Python/R', 'Data visualization']
    },
    {
      title: 'Technical Writer',
      department: 'Content',
      location: 'Remote',
      type: 'Full-time',
      salary: '$65K - $85K',
      description: 'Create clear, comprehensive documentation and learning content.',
      requirements: ['Technical writing', 'Developer tools', 'Markdown/LaTeX']
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6 text-green-400" />,
      title: 'Competitive Salary',
      description: 'Market-leading compensation with equity packages'
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-400" />,
      title: 'Remote First',
      description: 'Work from anywhere with flexible hours'
    },
    {
      icon: <Heart className="h-6 w-6 text-red-400" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: <Coffee className="h-6 w-6 text-yellow-400" />,
      title: 'Work-Life Balance',
      description: 'Unlimited PTO and mental health support'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-purple-400" />,
      title: 'Learning Budget',
      description: '$2,000 annual budget for courses and conferences'
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-400" />,
      title: 'Team Building',
      description: 'Regular virtual and in-person team events'
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-400" />,
      title: 'Mission Driven',
      description: 'We work towards a bigger purpose: democratizing access to tech education.'
    },
    {
      icon: <Code className="h-8 w-8 text-green-400" />,
      title: 'Technical Excellence',
      description: 'We maintain high standards and continuously improve our craft.'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-400" />,
      title: 'Empathy & Respect',
      description: 'We treat everyone with kindness and value diverse perspectives.'
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: 'Innovation',
      description: 'We embrace new ideas and technologies to solve complex problems.'
    }
  ];

  return (
    <Container>
      <Section className="py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Mission
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Help us empower developers worldwide. We're looking for passionate people who want to make
            a difference in the tech community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              View Open Positions
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
              Learn About Us
            </Button>
          </div>
        </div>

        {/* Why Join Us */}
        <GlassCard className="p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Join Codementor?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-700/50 rounded-lg p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
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

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-white text-xl">{position.title}</CardTitle>
                    <Badge variant="secondary" className="bg-blue-600 text-white">
                      {position.type}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {position.department}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {position.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {position.salary}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Culture */}
        <GlassCard className="p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Culture</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-gray-700/50 rounded-lg p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Collaborative</h3>
                <p className="text-gray-300 text-sm">We work together across time zones and cultures</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-700/50 rounded-lg p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-300 text-sm">We strive for the highest quality in everything we do</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-700/50 rounded-lg p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Inclusive</h3>
                <p className="text-gray-300 text-sm">We welcome diverse backgrounds and perspectives</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg text-center">
              At Codementor, we believe that great companies are built by great teams. We hire for potential,
              invest in growth, and create an environment where everyone can thrive.
            </p>
          </div>
        </GlassCard>

        {/* Call to Action */}
        <GlassCard className="p-8 text-center">
          <Briefcase className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Join Us?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            If you don't see a position that matches your skills but you're passionate about our mission,
            we'd still love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              View All Positions <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
              Send Us a Message
            </Button>
          </div>
        </GlassCard>
      </Section>
    </Container>
  );
};

export default Careers;