import React from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { GlassCard } from '../components/ui/glass-card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { BookOpen, Code, Users, Target, TrendingUp, Clock, Star, Download, ExternalLink, ChevronRight, Lightbulb, Zap, Award } from 'lucide-react';

const Resources: React.FC = () => {
  const learningPaths = [
    {
      title: 'Frontend Development',
      description: 'Master HTML, CSS, JavaScript, and modern frameworks like React and Vue.',
      duration: '3-6 months',
      level: 'Beginner to Advanced',
      modules: ['HTML & CSS', 'JavaScript Fundamentals', 'React/Vue', 'State Management', 'Testing'],
      icon: <Code className="h-8 w-8 text-blue-400" />
    },
    {
      title: 'Backend Development',
      description: 'Build robust server-side applications with Node.js, Python, and databases.',
      duration: '4-8 months',
      level: 'Intermediate',
      modules: ['Node.js/Express', 'Python/Django', 'Databases', 'APIs', 'Authentication'],
      icon: <Zap className="h-8 w-8 text-green-400" />
    },
    {
      title: 'Full-Stack Development',
      description: 'Complete guide to becoming a full-stack developer from scratch.',
      duration: '6-12 months',
      level: 'Beginner to Advanced',
      modules: ['Frontend Basics', 'Backend Development', 'Database Design', 'Deployment', 'DevOps'],
      icon: <Target className="h-8 w-8 text-purple-400" />
    },
    {
      title: 'DevOps & Cloud',
      description: 'Learn deployment, scaling, and cloud technologies.',
      duration: '3-5 months',
      level: 'Intermediate to Advanced',
      modules: ['Docker', 'Kubernetes', 'AWS/Azure', 'CI/CD', 'Monitoring'],
      icon: <TrendingUp className="h-8 w-8 text-orange-400" />
    }
  ];

  const careerGuides = [
    {
      title: 'How to Get Your First Developer Job',
      description: 'Step-by-step guide for breaking into tech without a CS degree.',
      readTime: '15 min read',
      category: 'Career',
      featured: true
    },
    {
      title: 'Salary Negotiation for Developers',
      description: 'Tips and strategies to negotiate better compensation packages.',
      readTime: '12 min read',
      category: 'Career'
    },
    {
      title: 'Building a Developer Portfolio',
      description: 'Create a portfolio that showcases your skills and gets you hired.',
      readTime: '18 min read',
      category: 'Career'
    },
    {
      title: 'Remote Work: Pros, Cons, and How to Succeed',
      description: 'Everything you need to know about working remotely as a developer.',
      readTime: '10 min read',
      category: 'Remote Work'
    },
    {
      title: 'Tech Interview Preparation Guide',
      description: 'Comprehensive guide to acing technical interviews.',
      readTime: '25 min read',
      category: 'Interview'
    },
    {
      title: 'Freelancing for Developers',
      description: 'Start and grow your freelance development business.',
      readTime: '20 min read',
      category: 'Freelance'
    }
  ];

  const techExplainers = [
    {
      title: 'Understanding REST APIs',
      description: 'Learn how REST APIs work and how to build them.',
      difficulty: 'Beginner',
      icon: <ExternalLink className="h-6 w-6 text-blue-400" />
    },
    {
      title: 'Git and Version Control',
      description: 'Master Git workflows and collaboration techniques.',
      difficulty: 'Beginner',
      icon: <Code className="h-6 w-6 text-green-400" />
    },
    {
      title: 'Database Design Principles',
      description: 'Learn to design efficient and scalable databases.',
      difficulty: 'Intermediate',
      icon: <BookOpen className="h-6 w-6 text-purple-400" />
    },
    {
      title: 'Microservices Architecture',
      description: 'Understanding distributed systems and microservices.',
      difficulty: 'Advanced',
      icon: <Zap className="h-6 w-6 text-orange-400" />
    },
    {
      title: 'Machine Learning Basics',
      description: 'Introduction to ML concepts and practical applications.',
      difficulty: 'Intermediate',
      icon: <TrendingUp className="h-6 w-6 text-red-400" />
    },
    {
      title: 'Cybersecurity Fundamentals',
      description: 'Essential security practices for developers.',
      difficulty: 'Intermediate',
      icon: <Award className="h-6 w-6 text-yellow-400" />
    }
  ];

  const downloadableResources = [
    {
      title: 'Developer Roadmap 2024',
      description: 'Comprehensive guide to becoming a developer in 2024.',
      type: 'PDF',
      size: '2.5 MB',
      downloads: '1.2k'
    },
    {
      title: 'Coding Interview Cheat Sheet',
      description: 'Essential algorithms and data structures for interviews.',
      type: 'PDF',
      size: '1.8 MB',
      downloads: '3.4k'
    },
    {
      title: 'Git Commands Reference',
      description: 'Complete list of Git commands with examples.',
      type: 'PDF',
      size: '0.8 MB',
      downloads: '5.1k'
    },
    {
      title: 'React Best Practices Guide',
      description: 'Tips and patterns for writing better React code.',
      type: 'PDF',
      size: '1.2 MB',
      downloads: '2.8k'
    }
  ];

  return (
    <Container>
      <Section className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Resources & Guides
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive learning paths, career guides, and technical resources to accelerate your development journey.
          </p>
        </div>

        {/* Learning Paths */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Learning Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningPaths.map((path, index) => (
              <GlassCard key={index} className="p-8 hover:bg-gray-800/50 transition-colors">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    {path.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2">{path.title}</h3>
                    <p className="text-gray-300 mb-4">{path.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {path.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        {path.level}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Modules:</h4>
                  <div className="flex flex-wrap gap-2">
                    {path.modules.map((module, moduleIndex) => (
                      <Badge key={moduleIndex} variant="outline" className="border-gray-600 text-gray-300">
                        {module}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Start Learning Path <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Career Guides */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Career Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerGuides.map((guide, index) => (
              <Card key={index} className={`bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors ${guide.featured ? 'ring-2 ring-blue-500' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Badge className="bg-green-600 text-white mb-2">{guide.category}</Badge>
                    {guide.featured && (
                      <Badge className="bg-blue-600 text-white">Featured</Badge>
                    )}
                  </div>
                  <CardTitle className="text-white">{guide.title}</CardTitle>
                  <CardDescription className="text-gray-300">{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <Clock className="h-4 w-4" />
                      {guide.readTime}
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                      Read Guide <ChevronRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Explainers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Tech Explainers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techExplainers.map((explainer, index) => (
              <GlassCard key={index} className="p-6 hover:bg-gray-800/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    {explainer.icon}
                  </div>
                  <Badge className={`${
                    explainer.difficulty === 'Beginner' ? 'bg-green-600' :
                    explainer.difficulty === 'Intermediate' ? 'bg-yellow-600' : 'bg-red-600'
                  } text-white`}>
                    {explainer.difficulty}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{explainer.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{explainer.description}</p>
                <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0">
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Downloadable Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Downloadable Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloadableResources.map((resource, index) => (
              <GlassCard key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{resource.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{resource.type}</span>
                      <span>{resource.size}</span>
                      <div className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        {resource.downloads}
                      </div>
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <GlassCard className="p-8 text-center">
          <Lightbulb className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">Need Personalized Guidance?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get one-on-one mentorship from experienced developers. Our mentors can help you navigate these resources and create a customized learning plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Find a Mentor
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
              Browse All Resources
            </Button>
          </div>
        </GlassCard>
      </Section>
    </Container>
  );
};

export default Resources;