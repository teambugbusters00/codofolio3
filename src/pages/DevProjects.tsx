import React from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { GlassCard } from '../components/ui/glass-card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Code, Users, Trophy, Star, GitBranch, MessageSquare, Target, Zap, BookOpen, Award, TrendingUp, CheckCircle } from 'lucide-react';

const DevProjects: React.FC = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      difficulty: 'Intermediate',
      category: 'Full Stack',
      participants: 1247,
      rating: 4.8,
      description: 'Build a complete e-commerce platform with React, Node.js, and MongoDB.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      duration: '4-6 weeks'
    },
    {
      title: 'Task Management App',
      difficulty: 'Beginner',
      category: 'Frontend',
      participants: 2156,
      rating: 4.6,
      description: 'Create a collaborative task management application with real-time updates.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      duration: '2-3 weeks'
    },
    {
      title: 'Weather Dashboard',
      difficulty: 'Beginner',
      category: 'API Integration',
      participants: 3421,
      rating: 4.7,
      description: 'Build a weather dashboard that displays forecasts from multiple APIs.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
      duration: '1-2 weeks'
    },
    {
      title: 'Social Media Analytics',
      difficulty: 'Advanced',
      category: 'Data Science',
      participants: 892,
      rating: 4.9,
      description: 'Develop a social media analytics tool with data visualization.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Flask'],
      duration: '6-8 weeks'
    },
    {
      title: 'Portfolio Website',
      difficulty: 'Beginner',
      category: 'Frontend',
      participants: 4567,
      rating: 4.5,
      description: 'Create a responsive portfolio website to showcase your projects.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      duration: '1 week'
    },
    {
      title: 'Chat Application',
      difficulty: 'Intermediate',
      category: 'Real-time',
      participants: 1876,
      rating: 4.8,
      description: 'Build a real-time chat application with WebSocket integration.',
      technologies: ['React', 'Socket.io', 'Node.js', 'Express'],
      duration: '3-4 weeks'
    }
  ];

  const features = [
    {
      icon: Code,
      title: 'Real Projects',
      description: 'Work on projects that mirror real-world development scenarios.'
    },
    {
      icon: Users,
      title: 'Community Feedback',
      description: 'Get constructive feedback from experienced developers and peers.'
    },
    {
      icon: Trophy,
      title: 'Skill Validation',
      description: 'Earn badges and certificates to showcase your coding abilities.'
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Learn Git best practices through hands-on project management.'
    },
    {
      icon: MessageSquare,
      title: 'Mentor Support',
      description: 'Access to mentors for guidance when you get stuck.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Clear objectives and milestones to track your progress.'
    }
  ];

  const benefits = [
    'Build a portfolio of real projects',
    'Learn industry-standard development practices',
    'Connect with like-minded developers',
    'Get feedback on your code quality',
    'Improve problem-solving skills',
    'Stay motivated through gamification',
    'Learn new technologies and frameworks',
    'Prepare for technical interviews'
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-600';
      case 'Intermediate': return 'bg-yellow-600';
      case 'Advanced': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <Container>
      <Section className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            DevProjects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build real projects, get feedback, and prove your skills. Join our community of developers working on meaningful projects together.
          </p>
        </div>

        {/* Hero CTA */}
        <GlassCard className="p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Start Building Today</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Choose from hundreds of projects designed to help you learn, build, and grow as a developer.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            Browse Projects
          </Button>
        </GlassCard>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why DevProjects?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <GlassCard key={index} className="p-6 text-center">
                <div className="bg-blue-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <GlassCard key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={`${getDifficultyColor(project.difficulty)} text-white`}>
                        {project.difficulty}
                      </Badge>
                      <Badge variant="outline" className="border-gray-600 text-gray-300">
                        {project.category}
                      </Badge>
                      <span className="text-gray-400 text-sm">{project.duration}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-400 text-sm">{project.participants} participants</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="text-gray-400 text-sm">{project.rating}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-gray-700 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Start Project
                </Button>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <GlassCard className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* How It Works */}
        <GlassCard className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">1. Choose a Project</h3>
              <p className="text-gray-300 text-sm">Browse our curated collection of projects and select one that matches your skill level and interests.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Code className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">2. Build & Learn</h3>
              <p className="text-gray-300 text-sm">Follow step-by-step instructions, implement features, and learn new technologies along the way.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">3. Get Feedback</h3>
              <p className="text-gray-300 text-sm">Submit your solution, get feedback from the community, and earn badges for your achievements.</p>
            </div>
          </div>
        </GlassCard>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Join the Community</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your journey today and become part of a thriving community of developers building amazing projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 px-8 py-3">
              View All Projects
            </Button>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default DevProjects;