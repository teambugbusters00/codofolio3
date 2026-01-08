import React from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { GlassCard } from '../components/ui/glass-card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Star, Clock, MessageCircle, Video } from 'lucide-react';

const WebDevelopmentExperts: React.FC = () => {
  const experts = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Full-Stack Developer',
      rating: 4.9,
      reviews: 312,
      price: 45,
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
      experience: '7 years',
      availability: 'Available now',
      avatar: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Mike Chen',
      title: 'Frontend Architect',
      rating: 4.8,
      reviews: 289,
      price: 48,
      skills: ['Vue.js', 'Angular', 'CSS', 'JavaScript'],
      experience: '9 years',
      availability: 'In 15 min',
      avatar: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      title: 'Backend Developer',
      rating: 5.0,
      reviews: 198,
      price: 46,
      skills: ['Python', 'Django', 'PostgreSQL', 'AWS'],
      experience: '8 years',
      availability: 'Available now',
      avatar: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'David Kim',
      title: 'DevOps Engineer',
      rating: 4.7,
      reviews: 176,
      price: 50,
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'Cloud Platforms'],
      experience: '10 years',
      availability: 'Tomorrow',
      avatar: '/placeholder.svg'
    }
  ];

  const technologies = [
    'Frontend: React, Vue.js, Angular, Svelte',
    'Backend: Node.js, Python, Ruby, PHP, Java',
    'Databases: MongoDB, PostgreSQL, MySQL, Redis',
    'Cloud: AWS, Azure, GCP, Vercel, Netlify',
    'DevOps: Docker, Kubernetes, CI/CD, Terraform',
    'Mobile: React Native, Flutter, Ionic',
    'CMS: WordPress, Strapi, Contentful',
    'E-commerce: Shopify, WooCommerce, Magento'
  ];

  return (
    <Container>
      <Section className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Web Development Experts
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build modern, scalable web applications with expert guidance across the full stack. From frontend frameworks to backend APIs and cloud deployment.
          </p>
        </div>

        {/* Web Technologies */}
        <GlassCard className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Web Development Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-700/30 transition-colors cursor-pointer">
                <h3 className="text-white font-medium">{tech}</h3>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Experts Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">Available Web Development Experts</h2>
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

        {/* Web Development Services */}
        <GlassCard className="p-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Web Development Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Frontend Development</h3>
              <p className="text-gray-300">Modern, responsive user interfaces with the latest frameworks and best practices.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Backend Development</h3>
              <p className="text-gray-300">Scalable APIs, databases, and server-side logic for robust web applications.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Full-Stack Solutions</h3>
              <p className="text-gray-300">End-to-end development from concept to deployment with modern DevOps practices.</p>
            </div>
          </div>
        </GlassCard>
      </Section>
    </Container>
  );
};

export default WebDevelopmentExperts;