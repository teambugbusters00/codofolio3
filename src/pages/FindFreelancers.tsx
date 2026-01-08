import React from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { GlassCard } from '../components/ui/glass-card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Star, Clock, MessageCircle, DollarSign, CheckCircle } from 'lucide-react';

const FindFreelancers: React.FC = () => {
  const freelancers = [
    
  ];

  const projectTypes = [
    'Web Application Development',
    'Mobile App Development',
    'API Development',
    'Database Design',
    'UI/UX Implementation',
    'E-commerce Platforms',
    'CMS Development',
    'DevOps & Deployment'
  ];

  return (
    <Container>
      <Section className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Find Freelancers
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hire experienced developers for your projects. From MVP development to feature implementation, find the right talent for your needs.
          </p>
        </div>

        {/* Project Types */}
        <GlassCard className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Project Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projectTypes.map((type, index) => (
              <div key={index} className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-700/30 transition-colors cursor-pointer border border-gray-700">
                <h3 className="text-white font-medium text-center">{type}</h3>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Freelancers Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">Available Freelancers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {freelancers.map((freelancer) => (
              <GlassCard key={freelancer.id} className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={freelancer.avatar} alt={freelancer.name} />
                    <AvatarFallback>{freelancer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{freelancer.name}</h3>
                    <p className="text-gray-300">{freelancer.title}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{freelancer.rating}</span>
                        <span className="text-gray-400">({freelancer.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-gray-400">{freelancer.completedProjects} projects</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">${freelancer.hourlyRate}</div>
                    <div className="text-sm text-gray-400">per hour</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {freelancer.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      freelancer.availability.includes('Available') ? 'bg-green-400' : 'bg-yellow-400'
                    }`}></div>
                    <span className="text-sm text-gray-300">{freelancer.availability}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <DollarSign className="h-4 w-4 mr-2" />
                      Hire Now
                    </Button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <GlassCard className="p-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">How Freelancing Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Post Your Project</h3>
              <p className="text-gray-300">Describe your requirements, budget, and timeline clearly.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-400">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Review Proposals</h3>
              <p className="text-gray-300">Chat with developers and review their portfolios and proposals.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Agree on Scope</h3>
              <p className="text-gray-300">Define milestones, deliverables, and payment terms.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-orange-400">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Start Development</h3>
              <p className="text-gray-300">Work together with regular updates and milestone payments.</p>
            </div>
          </div>
        </GlassCard>
      </Section>
    </Container>
  );
};

export default FindFreelancers;