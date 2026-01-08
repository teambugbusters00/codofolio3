import React from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { GlassCard } from '../components/ui/glass-card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Star, Clock, MessageCircle, Video } from 'lucide-react';

const ReactExperts: React.FC = () => {
  const experts = [
    {
      id: 1,
      name: 'Alex Johnson',
      title: 'Senior React Developer',
      rating: 4.9,
      reviews: 145,
      price: 38,
      skills: ['React', 'TypeScript', 'Next.js', 'Redux'],
      experience: '7 years',
      availability: 'Available now',
      avatar: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      title: 'React Native Specialist',
      rating: 4.8,
      reviews: 98,
      price: 42,
      skills: ['React Native', 'Expo', 'Firebase', 'iOS/Android'],
      experience: '6 years',
      availability: 'In 1 hour',
      avatar: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'David Kim',
      title: 'Full-Stack React Developer',
      rating: 5.0,
      reviews: 187,
      price: 45,
      skills: ['React', 'Node.js', 'GraphQL', 'AWS'],
      experience: '9 years',
      availability: 'Available now',
      avatar: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'Sophie Chen',
      title: 'React Performance Expert',
      rating: 4.7,
      reviews: 134,
      price: 40,
      skills: ['React', 'Performance', 'Testing', 'Webpack'],
      experience: '8 years',
      availability: 'Tomorrow',
      avatar: '/placeholder.svg'
    }
  ];

  const topics = [
    'Component Architecture',
    'State Management (Redux/Zustand)',
    'React Hooks & Custom Hooks',
    'Performance Optimization',
    'Testing (Jest/React Testing Library)',
    'React Native Development',
    'Next.js & SSR',
    'UI/UX Best Practices'
  ];

  return (
    <Container>
      <Section className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            React Experts
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get expert help with React, React Native, and modern frontend development. From component design to performance optimization.
          </p>
        </div>

        {/* Popular Topics */}
        <GlassCard className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Popular React Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {topics.map((topic, index) => (
              <div key={index} className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-700/30 transition-colors cursor-pointer">
                <h3 className="text-white font-medium text-center">{topic}</h3>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Experts Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">Available React Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experts.map((expert) => (
              <GlassCard key={expert.id} className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={expert.avatar} alt={expert.name} />
                    <AvatarFallback>{expert.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{expert.name}</h3>
                    <p className="text-gray-300">{expert.title}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{expert.rating}</span>
                        <span className="text-gray-400">({expert.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-400">{expert.experience}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-400">${expert.price}</div>
                    <div className="text-sm text-gray-400">per 15 min</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {expert.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      expert.availability === 'Available now' ? 'bg-green-400' :
                      expert.availability.includes('hour') ? 'bg-yellow-400' : 'bg-gray-400'
                    }`}></div>
                    <span className="text-sm text-gray-300">{expert.availability}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Video className="h-4 w-4 mr-2" />
                      Start Session
                    </Button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Why Choose React Experts */}
        <GlassCard className="p-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Why Choose Our React Experts?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Modern React Expertise</h3>
              <p className="text-gray-300">Stay up-to-date with the latest React features, hooks, and best practices.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quick Problem Solving</h3>
              <p className="text-gray-300">Get immediate help with bugs, architecture decisions, or implementation challenges.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Comprehensive Support</h3>
              <p className="text-gray-300">From React web apps to React Native mobile development, we cover it all.</p>
            </div>
          </div>
        </GlassCard>
      </Section>
    </Container>
  );
};

export default ReactExperts;