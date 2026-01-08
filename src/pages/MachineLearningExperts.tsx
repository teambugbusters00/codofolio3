import React from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { GlassCard } from '../components/ui/glass-card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Star, Clock, MessageCircle, Video } from 'lucide-react';

const MachineLearningExperts: React.FC = () => {
  const experts = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'ML Research Scientist',
      rating: 4.9,
      reviews: 178,
      price: 45,
      skills: ['TensorFlow', 'PyTorch', 'Deep Learning', 'NLP'],
      experience: '10 years',
      availability: 'Available now',
      avatar: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Alex Kumar',
      title: 'Senior ML Engineer',
      rating: 4.8,
      reviews: 134,
      price: 42,
      skills: ['Scikit-learn', 'Computer Vision', 'MLOps', 'Python'],
      experience: '7 years',
      availability: 'In 15 min',
      avatar: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Maria Gonzalez',
      title: 'AI/ML Consultant',
      rating: 5.0,
      reviews: 245,
      price: 48,
      skills: ['Machine Learning', 'Data Science', 'AWS SageMaker', 'AutoML'],
      experience: '12 years',
      availability: 'Available now',
      avatar: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'David Park',
      title: 'ML Solutions Architect',
      rating: 4.7,
      reviews: 156,
      price: 46,
      skills: ['Neural Networks', 'Reinforcement Learning', 'Big Data', 'Spark'],
      experience: '9 years',
      availability: 'Tomorrow',
      avatar: '/placeholder.svg'
    }
  ];

  const topics = [
    'Deep Learning & Neural Networks',
    'Natural Language Processing',
    'Computer Vision',
    'Reinforcement Learning',
    'Model Deployment & MLOps',
    'Data Preprocessing',
    'Model Optimization',
    'AI Ethics & Bias'
  ];

  return (
    <Container>
      <Section className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Machine Learning Experts
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get expert help with machine learning projects, from model development to deployment and optimization.
          </p>
        </div>

        {/* Popular Topics */}
        <GlassCard className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Popular ML Topics</h2>
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
          <h2 className="text-2xl font-bold text-white mb-8">Available ML Experts</h2>
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
                      expert.availability.includes('min') ? 'bg-yellow-400' : 'bg-gray-400'
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

        {/* Why Choose ML Experts */}
        <GlassCard className="p-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Why Choose Our ML Experts?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cutting-Edge ML Knowledge</h3>
              <p className="text-gray-300">Stay ahead with the latest ML techniques, frameworks, and best practices.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Rapid Model Development</h3>
              <p className="text-gray-300">Quick solutions for model training, optimization, and deployment challenges.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Comprehensive ML Support</h3>
              <p className="text-gray-300">From research to production, get help with every aspect of ML development.</p>
            </div>
          </div>
        </GlassCard>
      </Section>
    </Container>
  );
};

export default MachineLearningExperts;